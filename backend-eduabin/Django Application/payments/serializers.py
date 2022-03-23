from unicodedata import decimal
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Payment


# Serializer para pagos
class PaymentsSerializer(ModelSerializer):
    class Meta:         # Datos de Pagos a renderizar/Serializar
        model=Payment
        exclude=[
            'id'
        ]
