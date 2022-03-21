from rest_framework.serializers import ModelSerializer
from .models import Teacher, Student, User
from courses.models import Course
from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
        
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            'name',
        ]
        
class CourseUuidSerializer(ModelSerializer):
    class Meta:
        model=Course
        fields=[
            'course_uuid',
            'course_name'
        ]
        
# Serializer para Estudiante/Rederizacion
class StudentSerializer(ModelSerializer):
    favorite_courses=CourseUuidSerializer(many=True)
    class Meta:
        # Campos Adicional
        model = Student # Modelo Estudiante
        exclude = [      # Datos de Estudiante a Renderizar/Serializar
            'user'
        ]

# Serializer para agregar a favoritos  
class AddFavoriteSerializer(ModelSerializer):
    class Meta:
        model=Student
        fields=[
            'favorite_courses',
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
        if User.objects.filter(email=validated_data["email"]).exists():
            raise serializers.ValidationError({"email": ["Este correo ya existe", "This email already exist"]})
        #student = validated_data.pop('student')
        password = validated_data.pop('password')
        user = User.objects.create(**validated_data)
        #Student.objects.create(user=user, **student)
        user.set_password(password)
        user.save()
        Student.objects.create(user=user, firstname=user.name)
        return user

# Serializer para Autentificacion de Usuario/Rederizacion
class UserAuthSerializer(ModelSerializer):
    paid_courses=serializers.SerializerMethodField('get_paid_courses')  # Cursos Comprados
    favorite_courses=serializers.SerializerMethodField('get_favorite_courses')  # Cursos Comprados
    remuneration=serializers.SerializerMethodField('get_remuneration')  # Cursos Comprados

    def get_paid_courses(self, User):   # Metodo para obtener los cursos comprados de un Usuario
        if User.user_type != 1:
            return []
        return Student.objects.get(user=User.id).get_all_courses()
    def get_favorite_courses(self, User):   # Metodo para obtener los cursos favoritos de un Usuario
        if User.user_type != 1:
            return []
        return Student.objects.get(user=User.id).get_all_favorites()
    def get_remuneration(self, User):
        if User.user_type != 1:
            return []
        return Student.objects.get(user=User.id).remuneration

    class Meta:                         # Datos de Usuario a Renderizar/Serializar
        model=User

        fields=["name", "user_type", "id", "email", "remuneration", "paid_courses", "favorite_courses"]