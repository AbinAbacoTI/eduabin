from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from django.http import  HttpResponseBadRequest, HttpResponseNotAllowed
from .models import User, Student
from courses.models import Course
from .serializers import StudentSerializer, AddFavoriteSerializer
import json

# Vista para CRUD de estudiante
class StudentCRUD(APIView):
    permission_classes=[IsAuthenticated]
    #Obtener el estudiante según su id
    def get_object(self, user_id):
        user = User.objects.get(pk=user_id)
        student = Student.objects.get(pk=user)
        return student

    def get(self, request, user_id):
        try:
            student = self.get_object(user_id)
        except Student.DoesNotExist:
            return HttpResponseBadRequest('Student does not exist')
        except User.DoesNotExist:
            return HttpResponseBadRequest('User does not exist')
        serializer = StudentSerializer(student)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request, user_id):
        try:
            student = self.get_object(user_id)
        except Student.DoesNotExist:
            return HttpResponseBadRequest('Student does not exist')
        except User.DoesNotExist:
            return HttpResponseBadRequest('User does not exist')

        try:
            content=json.loads(request.body)                      #JSON Entry
            #content=request.data.dict()                            #FormData Entry
        except json.decoder.JSONDecodeError:
            return Response("Please a JSON body", status=status.HTTP_400_BAD_REQUEST)
        serializer = StudentSerializer(student, data=content)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class favorite_courses(APIView):
    permission_classes=[IsAuthenticated]

    def put(self, request):
        try:
            body=json.loads(request.body)
        except json.decoder.JSONDecodeError:
            return HttpResponseBadRequest()
        
        if type(body.get('favorite_courses')) != list:
            return HttpResponseBadRequest()
        
        if len(body.get('favorite_courses')) == 0:
            return Response([])
        
        courses_ids=[]
        for uuid in body.get('favorite_courses'):
            item = Course.objects.filter(course_uuid=uuid)
            if not item:
                return HttpResponseBadRequest()
            courses_ids.append(item[0].id)

        try:
            student = Student.objects.get(user = request.user)
        except Student.DoesNotExist:
            return HttpResponseBadRequest('student does not exist')
        
        ids_obj={
                'favorite_courses': courses_ids
            }

        serializer = AddFavoriteSerializer(student, data=ids_obj)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 