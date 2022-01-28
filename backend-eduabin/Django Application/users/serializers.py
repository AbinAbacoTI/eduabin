from rest_framework.serializers import ModelSerializer
from .models import Teacher

class TeacherSerializer(ModelSerializer):
    class Meta:
        model = Teacher
        fields = [
            'first_name',
        ]