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
    paid_courses=serializers.SerializerMethodField('get_paid_courses')

    def get_paid_courses(self, User):
        return Student.objects.get(user=User.id).get_all_courses()

    class Meta:
        model=User
        fields=["name", "id", "email", "paid_courses"]