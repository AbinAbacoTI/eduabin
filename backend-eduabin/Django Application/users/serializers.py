from rest_framework.serializers import ModelSerializer
from .models import Teacher, Student, User
from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
        
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            'name',
        ]
        
class StudentSerializer(ModelSerializer):
    class Meta:
        model = Student
        fields = [
            '__all__',
        ]

class UserRegistrationSerializer(UserCreateSerializer):
    #student = StudentSerializer()
    email = serializers.CharField()
    password = serializers.CharField(
        write_only=True,
        style={'input_type': 'password'}
    )

    class Meta:
        model = User
        fields = ('email', 'name', 'password')

    def create(self, validated_data):
        #student = validated_data.pop('student')
        password = validated_data.pop('password')
        user = User.objects.create(**validated_data)
        #Student.objects.create(user=user, **student)
        user.set_password(password)
        user.save()
        Student.objects.create(user=user)
        return user

class UserAuthSerializer(ModelSerializer):
    paid_courses=serializers.SerializerMethodField('get_paid_courses')

    def get_paid_courses(self, User):
        return Student.objects.get(user=User.id).get_all_courses()

    class Meta:
        model=User
        fields=["name", "id", "email", "paid_courses"]