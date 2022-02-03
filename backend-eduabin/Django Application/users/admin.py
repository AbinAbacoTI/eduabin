from django.contrib import admin
from .models import *

# Registra lo Modelo
admin.site.register(User)
admin.site.register(History)                # Modelo de Historia
admin.site.register(Student)                # Modelo de Estudiante
admin.site.register(User_bank_account)      # Modelo de Cuenta Bancaria del Usuario
admin.site.register(Personal_data)          # Modelo de Datos del personal
admin.site.register(Teacher_bank_account)   # Modelo de Cuenta Bancaria del Profesor
admin.site.register(Teacher)                # Modelo de Profesor
admin.site.register(Notification)           # Modelo de Notificacion