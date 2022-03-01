from unicodedata import decimal
from django.db import models
from users.models import User
from courses.models import Course

# Modelo de los intentos de pago
class PaymentIntent(models.Model):
    # Campos de Intento de Pago
    payment_intent_id=models.CharField(max_length=255)      # Id de Intento de Pago
    checkout_id=models.CharField(max_length=255)            # Id de Verificacion
    user=models.ForeignKey(User, on_delete=models.CASCADE)  # Usuario
    course=models.ManyToManyField(Course)                   # Curso
    created=models.DateTimeField(auto_now_add=True)         # Fecha de Intento
    remuneration=models.DecimalField(max_digits=7, decimal_places=2) #Total a remunerar

# Modelos para los pagos
class Payment(models.Model):
    # Campos de Pagos
    payment_intent=models.ForeignKey(PaymentIntent, on_delete=models.CASCADE)       # Inteto de Pago
    total_amount=models.DecimalField(max_digits=8, decimal_places=2)                # Monto total
    created=models.DateTimeField(auto_now_add=True)                                 # Fecha de Pago