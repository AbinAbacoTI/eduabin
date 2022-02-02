from rest_framework.serializers import ModelSerializer
from .models import Teacher, Student, User
from rest_framework import serializers

class TeacherSerializer(ModelSerializer):
    class Meta:
        model = Teacher
        fields = [
            'first_name',
        ]

class StudentSerializer(ModelSerializer):
    class Meta:
        model = Student
        fields = [
            'first_name',
        ]
        
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            'name',
        ]

class UserLoginSerializer(ModelSerializer):
    class Meta:
        model=User
        fields='__all__'

class UserAuthSerializer(ModelSerializer):
    #student=Student.objects.get(user_id=1)
    #courses=serializers.ListField(source="get_all_courses")
    #user=UserLoginSerializer()
    class Meta:
        model=User
        fields='__all__'