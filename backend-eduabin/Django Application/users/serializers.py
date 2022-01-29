from rest_framework.serializers import ModelSerializer
from .models import Teacher, Student

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