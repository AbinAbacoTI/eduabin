from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Additional_material, Course, Comment, Module, Sub_topic, Topic
from users.serializers import TeacherSerializer, StudentSerializer

class CourseDisplaySerializer(ModelSerializer):
    student_no = serializers.IntegerField(source='get_enrolled_student')
    author = TeacherSerializer()
    image_url = serializers.CharField(source='get_absolute_image_url')

    class Meta:
        model=Course
        fields=[
            'course_name',
            'course_uuid',
            'student_no',
            'author',
            'price',
            'image_url'
        ]

class CommentSerializer(ModelSerializer):
    user=StudentSerializer(read_only=True)
    class Meta:
        model=Comment
        exclude=[
            'id'
        ]

class AdditionalMaterialPaidSerializer(ModelSerializer):
    file=serializers.CharField(source='get_absolute_url')
    class Meta:
        model=Additional_material
        fields=[
            'file_name',
            'file'
        ]

class SubTopicPaidSerializer(ModelSerializer):
    files=AdditionalMaterialPaidSerializer(many=True)
    class Meta:
        model=Sub_topic
        fields=[
            'subtopic_name',
            'description',
            'files'
        ]

class TopicUnpaidSerializer(ModelSerializer):
    length=serializers.CharField(source='get_video_length_time')
    class Meta:
        model=Topic
        exclude=[
            'video'
        ]

class TopicPaidSerializer(ModelSerializer):
    sub_topics=SubTopicPaidSerializer(many=True)
    length=serializers.CharField(source='get_video_length_time')
    class Meta:
        model=Topic
        fields=[
            'video',
            'topic_name',
            'objectives',
            'sub_topics',
            'length'
        ]

class ModuleUnPaidSerializer(ModelSerializer):
    topics=TopicUnpaidSerializer(many=True)
    total_duration=serializers.CharField(source='total_length')
    class Meta:
        model=Module
        fields=[
            'module_name',
            'topics',
            'total_duration',
        ]

class ModulePaidSerializer(ModelSerializer):
    topics=TopicPaidSerializer(many=True)
    total_duration=serializers.CharField(source='total_length')
    class Meta:
        model=Module
        fields=[
            'module_name',
            'topics',
            'total_duration',
        ]

class CourseUnpaidSerializer(ModelSerializer):
    comments=CommentSerializer(many=True)
    author=TeacherSerializer()
    modules=ModuleUnPaidSerializer(many=True)
    student_no=serializers.IntegerField(source='get_enrolled_student')
    total_modules=serializers.IntegerField(source='get_total_modules')
    total_duration=serializers.CharField(source='total_course_length')
    image_url=serializers.CharField(source='get_absolute_image_url')

    class Meta:
        model=Course
        exclude=[
            'id',
        ]

class CoursePaidSerializer(ModelSerializer):
    comments=CommentSerializer(many=True)
    author=TeacherSerializer()
    modules=ModulePaidSerializer(many=True)
    student_no=serializers.IntegerField(source='get_enrolled_student')
    total_modules=serializers.IntegerField(source='get_total_modules')
    total_duration=serializers.CharField(source='total_course_length')
    image_url=serializers.CharField(source='get_absolute_image_url')

    class Meta:
        model=Course
        exclude=[
            'id',
        ]

class CourseListSerializer(ModelSerializer):
    student_no=serializers.IntegerField(source='get_enrolled_student')
    author=TeacherSerializer()
    description=serializers.CharField(source='get_brief_description')
    total_modules=serializers.IntegerField(source='get_total_modules')
    class Meta: 
        model=Course
        fields=[
            'course_uuid',
            'course_name',
            'student_no',
            'author',
            'price',
            'main_image',
            'description',
            'total_modules'
        ]

class CartItemSerializer(ModelSerializer):
    author=StudentSerializer()
    image_url=serializers.CharField(source='get_absolute_image_url')
    class Meta:
        model=Course
        fields=[
            'author',
            'course_name',
            'price',
            'image_url'
        ]
