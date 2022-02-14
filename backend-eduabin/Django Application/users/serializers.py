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
        
# Serializer para Estudiante/Rederizacion
class StudentSerializer(ModelSerializer):
    class Meta:
        # Campos Adicional
        model = Student # Modelo Estudiante
        fields = [      # Datos de Estudiante a Renderizar/Serializar
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
        if User.objects.filter(email=validated_data["email"]).exists():
            raise serializers.ValidationError({"email": ["Este correo ya existe", "This email already exist"]})
        #student = validated_data.pop('student')
        password = validated_data.pop('password')
        user = User.objects.create(**validated_data)
        #Student.objects.create(user=user, **student)
        user.set_password(password)
        user.save()
        Student.objects.create(user=user)
        return user

# Serializer para Autentificacion de Usuario/Rederizacion
class UserAuthSerializer(ModelSerializer):
    paid_courses=serializers.SerializerMethodField('get_paid_courses')  # Cursos Comprados

    def get_paid_courses(self, User):   # Metodo para obtener los cursos comprados de un Usuario
        if User.user_type == 3:
            return []
        return Student.objects.get(user=User.id).get_all_courses()

    class Meta:                         # Datos de Usuario a Renderizar/Serializar
        model=User

        fields=["name", "user_type", "id", "email", "user_type", "paid_courses"]
