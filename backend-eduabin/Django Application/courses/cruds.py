from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from django.urls import resolve
from courses.models import Section, Category, Sector, Division, Course, Packages
from .serializers import (SectionSerializer,
                          CourseSerializer,
                          SectorSerializer,
                          CategorySerializer,
                          SectionSerializer,
                          DivisionSerializer,
                          PackageSerializer)

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from django.http import  HttpResponseBadRequest

import json


# Vistas CRUD Seccion
class ListSectionAPIView(ListAPIView):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
class section(APIView):
    permission_classes=[IsAuthenticated]
    def not_authorized(self):
        response = {
            'success': False,
            'status_code': status.HTTP_403_FORBIDDEN,
            'message': 'You are not authorized to perform this action'
        }
        return Response(response, status.HTTP_403_FORBIDDEN)

    def post(self, request):
        url_name = resolve(request.path).url_name
        if url_name != 'section_add': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)
        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
        
        try:
            #content=json.loads(request.body)                      #JSON Entry
            content=request.data.dict()                            #FormData Entry
        except:
            return Response("Please a Form Data body", status=status.HTTP_400_BAD_REQUEST)
        
        serializer=SectionSerializer(data=content)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, section_uuid):
        url_name = resolve(request.path).url_name
        if url_name != 'section_update': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)

        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
            
        try:
            section = Section.objects.get(section_uuid = section_uuid)
        except Section.DoesNotExist:
            return HttpResponseBadRequest('section does not exist')
        serializer = SectionSerializer(section, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    def delete(self, request, section_uuid):
        url_name = resolve(request.path).url_name
        if url_name != 'section_delete': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)

        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
        try:            
            section = Section.objects.get(section_uuid = section_uuid)
        except Section.DoesNotExist:
            return HttpResponseBadRequest('section does not exist')
        section.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Vistas CRUD Categoria
class ListCategoryAPIView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
class category(APIView):
    permission_classes=[IsAuthenticated]
    '''
    def get(self, request, *args, **kwargs):
        categories=Category.objects.order_by('?')[:6]

        category_response = []

        for category in categories:
            category_sectors=category.related_sector.order_by('?')
            categories_Serializer=SectorDisplaySerializer(category_sectors,many=True)
        
            category_obj={
                'category_uuid': category.category_uuid,
                'category_name': category.name,
                'category_image': category.get_image_absolute_url()
            }

            category_response.append(category_obj)
        
        return Response(data=category_response,status=status.HTTP_200_OK)
    '''
    def not_authorized(self):
        response = {
            'success': False,
            'status_code': status.HTTP_403_FORBIDDEN,
            'message': 'You are not authorized to perform this action'
        }
        return Response(response, status.HTTP_403_FORBIDDEN)

    def post(self, request):
        url_name = resolve(request.path).url_name
        if url_name != 'category_add': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)
        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
        
        try:
            #content=json.loads(request.body)                      #JSON Entry
            content=request.data.dict()                            #FormData Entry
        except json.decoder.JSONDecodeError:
            return Response("Please a JSON body", status=status.HTTP_400_BAD_REQUEST)
        
        serializer=CategorySerializer(data=content)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, category_uuid):
        url_name = resolve(request.path).url_name
        if url_name != 'category_update': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)

        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
            
        category = Category.objects.get(category_uuid = category_uuid)
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    def delete(self, request, category_uuid):
        url_name = resolve(request.path).url_name
        if url_name != 'category_delete': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)

        role = request.user.user_type
        if role != 3:
            return self.not_authorized()

        category = Category.objects.get(category_uuid = category_uuid)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
# Vistas CRUD Sector
class ListSectorAPIView(ListAPIView):
    queryset = Sector.objects.all()
    serializer_class = SectorSerializer
class sector(APIView):
    permission_classes=[IsAuthenticated]
    def not_authorized(self):
        response = {
            'success': False,
            'status_code': status.HTTP_403_FORBIDDEN,
            'message': 'You are not authorized to perform this action'
        }
        return Response(response, status.HTTP_403_FORBIDDEN)

    def post(self, request):
        url_name = resolve(request.path).url_name
        if url_name != 'sector_add': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)
        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
        
        try:
            #content=json.loads(request.body)                      #JSON Entry
            content=request.data.dict()                            #FormData Entry
        except:
            return Response("Please a Form Data body", status=status.HTTP_400_BAD_REQUEST)
        
        serializer=SectorSerializer(data=content)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, sector_uuid):
        url_name = resolve(request.path).url_name
        if url_name != 'sector_update': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)

        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
            
        try:
            sector = Sector.objects.get(sector_uuid = sector_uuid)
        except Sector.DoesNotExist:
            return HttpResponseBadRequest('sector does not exist')
        serializer = SectorSerializer(sector, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    def delete(self, request, sector_uuid):
        url_name = resolve(request.path).url_name
        if url_name != 'sector_delete': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)

        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
        try:            
            sector = Sector.objects.get(sector_uuid = sector_uuid)
        except Sector.DoesNotExist:
            return HttpResponseBadRequest('sector does not exist')
        sector.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Vistas CRUD Division
class ListDivisionAPIView(ListAPIView):
    queryset = Division.objects.all()
    serializer_class = DivisionSerializer
class division(APIView):
    permission_classes=[IsAuthenticated]
    def not_authorized(self):
        response = {
            'success': False,
            'status_code': status.HTTP_403_FORBIDDEN,
            'message': 'You are not authorized to perform this action'
        }
        return Response(response, status.HTTP_403_FORBIDDEN)

    def post(self, request):
        url_name = resolve(request.path).url_name
        if url_name != 'division_add': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)
        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
        
        try:
            #content=json.loads(request.body)                      #JSON Entry
            content=request.data.dict()                            #FormData Entry
        except:
            return Response("Please a Form Data body", status=status.HTTP_400_BAD_REQUEST)
        
        serializer=DivisionSerializer(data=content)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, division_uuid):
        url_name = resolve(request.path).url_name
        if url_name != 'division_update': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)

        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
            
        try:
            sector = Division.objects.get(division_uuid = division_uuid)
        except Division.DoesNotExist:
            return HttpResponseBadRequest('division does not exist')
        serializer = DivisionSerializer(sector, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    def delete(self, request, division_uuid):
        url_name = resolve(request.path).url_name
        if url_name != 'division_delete': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)

        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
        try:            
            division = Division.objects.get(division_uuid = division_uuid)
        except Division.DoesNotExist:
            return HttpResponseBadRequest('division does not exist')
        division.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Vistas CRUD Curso
class ListCourseAPIView(ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
class course(APIView):
    permission_classes=[IsAuthenticated]
    def not_authorized(self):
        response = {
            'success': False,
            'status_code': status.HTTP_403_FORBIDDEN,
            'message': 'You are not authorized to perform this action'
        }
        return Response(response, status.HTTP_403_FORBIDDEN)

    def post(self, request):
        url_name = resolve(request.path).url_name
        if url_name != 'course_add': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)
        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
        
        try:
            #content=json.loads(request.body)                      #JSON Entry
            content=request.data.dict()                            #FormData Entry
        except:
            return Response("Please a Form Data body", status=status.HTTP_400_BAD_REQUEST)
        
        serializer=CourseSerializer(data=content)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, course_uuid):
        url_name = resolve(request.path).url_name
        if url_name != 'course_update': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)

        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
            
        try:
            course = course.objects.get(course_uuid = course_uuid)
        except Course.DoesNotExist:
            return HttpResponseBadRequest('course does not exist')
        serializer = CourseSerializer(course, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    def delete(self, request, course_uuid):
        url_name = resolve(request.path).url_name
        if url_name != 'course_delete': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)

        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
        try:            
            course = Course.objects.get(course_uuid = course_uuid)
        except Course.DoesNotExist:
            return HttpResponseBadRequest('course does not exist')
        course.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Vistas CRUD Package
class ListPackageAPIView(ListAPIView):
    queryset = Packages.objects.all()
    serializer_class = PackageSerializer    
class package(APIView):
    permission_classes=[IsAuthenticated]
    
    def not_authorized(self):
        response = {
            'success': False,
            'status_code': status.HTTP_403_FORBIDDEN,
            'message': 'You are not authorized to perform this action'
        }
        return Response(response, status.HTTP_403_FORBIDDEN)

    def post(self, request):
        url_name = resolve(request.path).url_name
        if url_name != 'package_add': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)
        role = request.user.user_type
        if role != 3:
            return self.not_authorized()

        try:
            #content=json.loads(request.body)                      #JSON Entry
            content=request.data.dict()                            #FormData Entry
        except:
            return Response("Please a Form Data body", status=status.HTTP_400_BAD_REQUEST)

        serializer=PackageSerializer(data=content)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id):
        url_name = resolve(request.path).url_name
        if url_name != 'package_update': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)

        role = request.user.user_type
        if role != 3:
            return self.not_authorized()

        try:
            package = Packages.objects.get(id = id)
        except Packages.DoesNotExist:
            return HttpResponseBadRequest('package does not exist')
        serializer = PackageSerializer(package, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    def delete(self, request, id):
        url_name = resolve(request.path).url_name
        if url_name != 'package_delete': return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)

        role = request.user.user_type
        if role != 3:
            return self.not_authorized()
        try:            
            package = Packages.objects.get(id = id)
        except Course.DoesNotExist:
            return HttpResponseBadRequest('course does not exist')
        package.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)