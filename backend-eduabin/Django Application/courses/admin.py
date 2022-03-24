from django.contrib import admin
from .models import *

# Se registran los modelos para la gestion de cursos 
admin.site.register(Section)                # Modelo de Seccion
admin.site.register(Category)               # Modelo de Category
admin.site.register(Sector)                 # Modelo de Sector
admin.site.register(Division)                 # Modelo de Division
admin.site.register(Course)                 # Modelo de Curso
admin.site.register(Module)                 # Modelo de Modulo
admin.site.register(Topic)                  # Modelo de Tema
admin.site.register(Sub_topic)              # Modelo de Sub-Tema
admin.site.register(Additional_material)    # Modelo de Material Adicional
admin.site.register(Question)               # Modelo de Preguntas    
admin.site.register(Comment)                # MOdelo de Comentarios
admin.site.register(Packages)               # MOdelo de Paquetes
admin.site.register(Event)                  # Modelo de Eventos