from rest_framework.response import Response
from courses.models import Section, Category, Sector, Course, Event
from users.models import Student
from .serializers import (CategoryDisplaySerializer,
                          CourseDisplaySerializer, 
                          SectionUnpaidSerializer,
                          CourseUnpaidSerializer,
                          CourseListSerializer,
                          CommentSerializer,
                          CartItemSerializer,
                          CoursePaidSerializer,
                          SectorDisplaySerializer,
                          PackageCoursesSerializer,
                          PackageDisplaySerializer,
                          EventSerializer)

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from django.http import  HttpResponseBadRequest, HttpResponseNotAllowed
from django.db.models import Q

import json
from decimal import Decimal
from .cruds import *

# Vista del Home de los Cursos
class CoursesHomeView(APIView):
    def get(self, request, *args, **kwargs):
        sections = Section.objects.order_by('?')

        section_response = []
        for section in sections:
            section_categories=section.related_category.order_by('?')
            sections_Serializer=CategoryDisplaySerializer(section_categories,many=True)

            section_obj={
                'section_uuid': section.section_uuid,
                'section_name': section.name_section,
                'featured_categories': sections_Serializer.data
            }

            section_response.append(section_obj)
        return Response(data=section_response, status=status.HTTP_200_OK)
# Vista para mostrar todos los cursos
class AllCoursesHomeView(APIView):
    def get(self, request, *args, **kwargs):
        courses=Course.objects.order_by('?')
        courses_Serializer=CourseDisplaySerializer(courses,many=True)
        
        return Response(data=courses_Serializer.data,status=status.HTTP_200_OK)

# Vista para mostrar todos los cursos
class AllCoursesFilterView(APIView):
    def get(self, request, category, *args, **kwargs):
        category_match=Category.objects.filter(name=category)
        try:
            category_data=CategoryDisplaySerializer(category_match, many=True).data[0]['related_sector']
        except:
            return Response(data="No coincidences", status=status.HTTP_404_NOT_FOUND)
        courses = []
        for sector in category_data:
            for item in sector['content']:
                if sector['division_exist']:
                    for course in item['related_course']:
                        courses.append(course)
                else:
                    courses.append(item)
        
        return Response(data=courses,status=status.HTTP_200_OK)

# Vista de los detalles de la secci??n
class SectionDetail(APIView):
    def get(self, request, section_uuid, *args, **kwargs):
        section=Section.objects.filter(section_uuid=section_uuid)

        if not section:
            return HttpResponseBadRequest('section does not exist')

        serializer=SectionUnpaidSerializer(section[0])

        return Response(data=serializer.data, status=status.HTTP_200_OK)

# Vista de los detalles de la secci??n
class SectorDetail(APIView):
    def get(self, request, sector_uuid, *args, **kwargs):
        sector=Sector.objects.filter(sector_uuid=sector_uuid)

        if not sector:
            return HttpResponseBadRequest('sector does not exist')

        serializer=SectorDisplaySerializer(sector[0])

        return Response(data=serializer.data, status=status.HTTP_200_OK)

# Vista de los detalles del curso
class CourseDetail(APIView):
    def get(self, request, course_uuid, *args, **kwargs):
        course=Course.objects.filter(course_uuid=course_uuid)

        if not course:
            return HttpResponseBadRequest('course does not exist')

        serializer=CourseUnpaidSerializer(course[0])

        return Response(data=serializer.data, status=status.HTTP_200_OK)

# Vista del Sector
class SectorCourse(APIView):
    def get(self, request, sector_uuid, *args, **kwargs):
        sector=Sector.objects.filter(sector_uuid=sector_uuid)

        if not sector:
            return HttpResponseBadRequest('Sector does not exist')
        
        sector_courses=sector[0].related_course.all()

        serializer=CourseListSerializer(sector_courses,many=True)
        total_students=0
        for course in sector_courses:
            total_students += course.get_enrolled_student()
        
        return Response({
            'data': serializer.data,
            'sector_name':sector[0].name,
            'total_students':total_students,
        }, status=status.HTTP_200_OK)

# Vista del buscador de Cursos
class SearchCourse(APIView):
    def get(self, question, search_term):
        print(search_term)
        matches=Course.objects.filter(Q(course_name__icontains=search_term)| Q(description__icontains=search_term))
        print(matches)
        serializer=CourseListSerializer(matches, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

# Vista de Comentarios
class AddComment(APIView):
    permission_classes=[IsAuthenticated]
    def post(self, request, course_uuid):
        try:
            course=Course.objects.get(course_uuid=course_uuid)
        except Course.DoesNotExist:
            return HttpResponseBadRequest('course does not exist')
        
        try:
            content=json.loads(request.body)
        except json.decoder.JSONDecodeError:
            return Response("Please a JSON body", status=status.HTTP_400_BAD_REQUEST)

        if not content.get('message'):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        serializer=CommentSerializer(data=content)

        if serializer.is_valid():
            comment=serializer.save(user=request.user)
            course.comments.add(comment)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Vista de adiciones al carrito
class GetCartDetail(APIView):
    def post(self, request):
        try:
            body=json.loads(request.body)
        except json.decoder.JSONDecodeError:
            return HttpResponseBadRequest()
        
        if type(body.get('cart')) != list:
            return HttpResponseBadRequest()
        
        if len(body.get('cart')) == 0:
            return Response([])
        
        courses=[]
        for uuid in body.get('cart'):
            item = Course.objects.filter(course_uuid=uuid)

            if not item:
                return HttpResponseBadRequest()
            
            courses.append(item[0])
        
        serializer=CartItemSerializer(courses, many=True)

        cart_total=Decimal(0.00)
        total_discount=Decimal(0.00)
        # Obtener el precio total y el total de descuento
        for item in serializer.data:
            cart_total+=Decimal(item.get('price'))
            if item.get('discount_price') == None: 
                total_discount+=Decimal(0)
            else:
                total_discount+=Decimal(item.get('price'))-Decimal(item.get('discount_price'))
        
        return Response(data={
            'cart_detail': serializer.data,
            'cart_total': cart_total-total_discount
        }, status=status.HTTP_200_OK)
        
# Vista de cursos Comprados
class CourseStudy(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request, course_uuid):
        role = request.user.user_type
        if role != 1:
            response = {
                'success': False,
                'status_code': status.HTTP_403_FORBIDDEN,
                'message': 'You are not authorized to perform this action'
            }
            return Response(response, status.HTTP_403_FORBIDDEN)
        try:
            course=Course.objects.get(course_uuid=course_uuid)
        except Course.DoesNotExist:
            return HttpResponseBadRequest('course does not exist')
        request.user=Student.objects.get(user=request.user)
        user_course=request.user.paid_courses.filter(course_uuid=course_uuid)

        if not user_course:
            return HttpResponseNotAllowed('user does not own this course')
        
        serializer=CoursePaidSerializer(course)

        return Response(serializer.data, status=status.HTTP_200_OK)
        
# Vistas mostrar los Paquetes 
class ShowPackages(APIView):
    def get(self, request):
        packages = Packages.objects.order_by('?')
        serializer = PackageDisplaySerializer(packages, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Vista mostrar lo eventos
class ShowEvents(APIView):
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
            event=Event.objects.all()
        except Event.DoesNotExist:
            return HttpResponseBadRequest('Event does not exist')
        event_Serializer=EventSerializer(event,many=True)

        return Response(data=event_Serializer.data,status=status.HTTP_200_OK)

# Vistas cursos agregados a paquetes  
class AddCourseToPackage(APIView):
    permission_classes=[IsAuthenticated]

    def not_authorized(self):
        response = {
            'success': False,
            'status_code': status.HTTP_403_FORBIDDEN,
            'message': 'You are not authorized to perform this action'
        }
        return Response(response, status.HTTP_403_FORBIDDEN)

    def put(self, request, package_uuid):
        role = request.user.user_type
        if role != 3:
            return self.not_authorized()

        try:
            body=json.loads(request.body)
        except json.decoder.JSONDecodeError:
            return HttpResponseBadRequest()
        
        if type(body.get('courses')) != list:
            return HttpResponseBadRequest()
        
        if len(body.get('courses')) == 0:
            return Response([])
        
        courses_ids=[]
        for uuid in body.get('courses'):
            item = Course.objects.filter(course_uuid=uuid)
            if not item:
                return HttpResponseBadRequest()
            courses_ids.append(item[0].id)

        try:
            package = Packages.objects.get(package_uuid = package_uuid)
        except Packages.DoesNotExist:
            return HttpResponseBadRequest('package does not exist')
        ids_obj={
                'courses': courses_ids
            }

        serializer = PackageCoursesSerializer(package, data=ids_obj)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 