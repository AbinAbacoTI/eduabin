from django.contrib import admin
from .models import *

# Registra los modelos a utilizar
admin.site.register(PaymentIntent)  # Intento de Pago
admin.site.register(Payment)        # Pago Realizado