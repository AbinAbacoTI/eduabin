from rest_framework.serializers import ModelSerializer
from .models import Teacher, Student, User
from rest_framework import serializers

# Serializer para Profesor/Rederizacion
class TeacherSerializer(ModelSerializer):
    class Meta:
        # Campos adicionales
        model = Teacher # Modelo de Profesor
        fields = [      # Datos de Profesor a Renderizar/Serializar
            'first_name',
        ]

# Serializer para Estudiante/Rederizacion
class StudentSerializer(ModelSerializer):
    class Meta:
        # Campos Adicional
        model = Student # Modelo Estudiante
        fields = [      # Datos de Estudiante a Renderizar/Serializar
            'first_name',
        ]

# Serializer para Usuario Normal/Rederizacion
class UserSerializer(ModelSerializer):
    class Meta:         # Datos de Usuario a Renderizar/Serializar
        model = User
        fields = [
            'name',
        ]

# Serializer para Usuario Logeado/Rederizacion (Forget)
class UserLoginSerializer(ModelSerializer):
    class Meta:         
        model=User
        fields='__all__'

# Serializer para Autentificacion de Usuario/Rederizacion
class UserAuthSerializer(ModelSerializer):
    paid_courses=serializers.SerializerMethodField('get_paid_courses')  # Cursos Comprados

    def get_paid_courses(self, User):   # Metodo para obtener los cursos comprados de un Usuario
        return Student.objects.get(user=User.id).get_all_courses()

    class Meta:                         # Datos de Usuario a Renderizar/Serializar
        model=User
        fields=["name", "id", "email", "paid_courses"]