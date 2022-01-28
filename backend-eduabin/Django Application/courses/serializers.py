from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Course
from users.serializers import TeacherSerializer

class CourseDisplaySerializer(ModelSerializer):
    student_no = serializers.IntegerField(source='get_enrolled_student')
    author = TeacherSerializer()
    image_url = serializers.CharField(source='get_absolute_image_url')

    class Meta:
        model=Course
        fields=[
            'course_name',
            'student_no',
            'author',
            'price',
            'image_url'
        ]