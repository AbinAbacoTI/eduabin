from django.shortcuts import render
from decouple import config
import stripe
import json

from decimal import Decimal
from users.models import Student, User
from .models import Payment, PaymentIntent
from rest_framework.views import APIView
from courses.models import Course
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .serializers import PaymentsSerializer
from django.http import  HttpResponseBadRequest, HttpResponseNotAllowed
from rest_framework.generics import ListAPIView


stripe_api_key=config("STRIPE_APIKEY")
endpoint_secret="whsec_59aa4d3bf0f83a2aedfe97e70422bcd61eda8f95b88992d2550ab1897441cbb1"
stripe.api_key=stripe_api_key

# Vista de Manejo de Pagos
# Almacena los cursos que se estan comprando, crea el intento de pago y el total a pagar
class PaymentHandler(APIView):
    permission_classes=[IsAuthenticated]
    def post(self, request):
        role = request.user.user_type
        if role != 1:
            response = {
                'success': False,
                'status_code': status.HTTP_403_FORBIDDEN,
                'message': 'You are not authorized to perform this action'
            }
            return Response(response, status.HTTP_403_FORBIDDEN)

        if request.body:
            body=json.loads(request.body)
            if body and len(body):
                course_line_items=[]
                cart_course=[]
                total_remuneration=0
                for item in body:
                    try:
                        course=Course.objects.get(course_uuid=item)
                        if not course.discount: amount=course.price*100
                        else:
                            amount=course.get_discount_price()*100
                            total_remuneration+=course.price-course.get_discount_price()
                        line_item={
                            "price_data":{
                                "currency": "usd",
                                "unit_amount": int(amount),
                                "product_data":{
                                    "name": course.course_name,
                                }
                            },
                            "quantity":1
                        }

                        course_line_items.append(line_item)
                        cart_course.append(course)

                    except Course.DoesNotExist:
                        return Response(status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        checkout_session=stripe.checkout.Session.create(
            payment_method_types=["card"],
            line_items=course_line_items,
            mode="payment",
            success_url="http://localhost:3000/",
            cancel_url="http://localhost:3000/",
        )

        intent=PaymentIntent.objects.create(
            payment_intent_id=checkout_session.payment_intent,
            checkout_id=checkout_session.id,
            user=User.objects.get(id=request.user.id),
            remuneration=total_remuneration
        )

        intent.course.add(*cart_course)

        return Response({"url":checkout_session.url})

# Vista de WebHook
# Verificar que el pago se realizado con exito en la pasarela y luego crear el pago pra que el usuario tenga acceso a los cursos que a comprado
class WebHook(APIView):
    def post(self, request):
        payload=request.body
        sig_header=request.META["HTTP_STRIPE_SIGNATURE"]

        event=None

        try:
            event=stripe.Webhook.construct_event(
                payload=payload, sig_header=sig_header, secret=endpoint_secret
            )

        except:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        if event["type"]=="checkout.session.completed":
            session=event["data"]["object"]

            try:
                intent=PaymentIntent.objects.get(checkout_id=session.id, payment_intent_id=session.payment_intent)

            except PaymentIntent.DoesNotExist:
                return Response(status=status.HTTP_400_BAD_REQUEST)

            Payment.objects.create(
                payment_intent=intent,
                total_amount=Decimal(session.amount_total/100)
            )

            intent.user.student.paid_courses.add(*intent.course.all())
            intent.user.student.add_remuneration(intent.remuneration)

            return Response(status=200)

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST) 

# Vistas CRUD Package
class ListPaymentsAPIView(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request, *args, **kwargs):
        role = request.user.user_type
        if role != 3:
            response = {
                'success': False,
                'status_code': status.HTTP_403_FORBIDDEN,
                'message': 'You are not authorized to perform this action'
            }
            return Response(response, status.HTTP_403_FORBIDDEN)
        try:
            payment=Payment.objects.all()
        except Payment.DoesNotExist:
            return HttpResponseBadRequest('payment does not exist')
        payment_Serializer=PaymentsSerializer(payment,many=True)

        return Response(data=payment_Serializer.data,status=status.HTTP_200_OK)