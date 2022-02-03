from django.db import models
from django.core.validators import FileExtensionValidator
from decimal import Decimal
from .helpers import get_timer
from django.conf import settings
from django.contrib.auth import get_user_model
from django.apps import apps
from mutagen.mp4 import MP4, MP4StreamInfoError
import uuid

# Se genera el modelo del sector
class Sector(models.Model):
    #Campos SECTOR
    name = models.CharField(max_length=255)                             # Nombre del Sector
    sector_uuid=models.UUIDField(default=uuid.uuid4,unique=True)        # ID del Sector
    related_course = models.ManyToManyField('Course', blank=True)       # Campo de relacion con el curso
    sector_image = models.ImageField(upload_to='sector_image')          # imagen del Sector
    #  /media/sector_image/what.png
    def get_image_absolute_url(self):
        return 'http://localhost:8000'+self.sector_image.url            # Obtiene la imagen del Url

# Se genera el modelo para los cursos dentro de los Sectores
class Course(models.Model):
    # Estado del Curso: Publico/NO_Publico/Pendiente
    state_one = 'published'
    state_two = 'unpublished'
    state_three = 'pending'

    states=(
        (state_one, 'Published'),
        (state_two, 'Unpublished'),
        (state_three, 'Pending')
    )
    # Campos COURSE
    course_name = models.CharField(max_length=255)                                      # Nombre del Curso 
    main_image = models.ImageField(upload_to='course_image')                            # Imagen del Curso
    description = models.TextField()                                                    # Descripcion del Curso
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)      # Autor del Curso
    valoration = models.IntegerField()                                                  # Valoracion del Curso
    price = models.DecimalField(max_digits=5,decimal_places=2)                          # Precion del Curso
    objectives = models.TextField()                                                     # Objetivos del Curso
    modules = models.ManyToManyField('Module', blank=True)                              # Modulos del Curso
    last_update = models.DateField()                                                    # Ultima actualizacion del Curso
    state = models.CharField(max_length=15, choices=states)                             # Estado del Curso
    comments = models.ManyToManyField('Comment', blank=True)                            # Comentario del Curso
    course_uuid=models.UUIDField(default=uuid.uuid4,unique=True)                        # ID del Curso
    
    def __str__(self):                      # Muestra el Nombre del Curso
        return self.course_name
    
    def get_brief_description(self):        # Obtiene un breve descripcion del Curso
        return self.description[:100]

    def get_enrolled_student(self):         # Obtiene el total de Estudiantes del Curso
        students = apps.get_model('users','Student').objects.filter(paid_courses=self)
        return len(students)
    
    def get_total_modules(self):            # Obtiene el total del Modulos del Curso
        modules=0
        for module in self.modules.all():
            modules += len(module.topics.all())
        return modules
    
    def total_course_length(self):          # Obtiene el total de horas del Curso
        length=Decimal(0.0)
        for modules in self.modules.all():
            for topics in modules.topics.all():
                length+=topics.length
        return get_timer(length, type='short')
    
    def get_absolute_image_url(self):       # Obtiene la Url de la imagen del Curso
        return 'http://localhost:8000' + self.main_image.url

# Se genera el Modelo de los Modulos del Curso
class Module(models.Model):
    # Campos de MODULE
    module_name = models.CharField(max_length=255)                              # Nombre del Modulo
    video = models.FileField(upload_to='module_videos', null=True,verbose_name='Video de presentacion',
            validators=[FileExtensionValidator(allowed_extensions=['mp4']) ])   # Video del Modulo
    objectives = models.TextField()                                             # Objetivo del Modulo
    presentation = models.TextField()                                           # Presentacion del Modulo
    advice = models.TextField()                                                 # Consejo del Modulo
    requirements = models.TextField()                                           # Requerimientos del Modulo
    topics = models.ManyToManyField('Topic', blank=True)                        # Temas del Modulo

    def __str__(self):                  # Muestra el Nombre del Modulo
        return self.module_name

    def total_length(self):             # Total del Horas del Modulo
        total=Decimal(0.0)
        for topic in self.topics.all():
            total+=topic.length
        return get_timer(total, type='min')

# Se genera el Modelo de los Temas del Modulo
class Topic(models.Model):
    topic_name = models.CharField(max_length=255)                               # Nombre del Tema
    video = models.FileField(upload_to='topic_videos', null=True,verbose_name='Video de Tema',
            validators=[FileExtensionValidator(allowed_extensions=['mp4']) ])   # Video del Tema
    objectives = models.TextField()                                             # Objetivos del Tema
    files = models.ManyToManyField('Additional_material', blank=True)           # Archivos del Tema
    sub_topics = models.ManyToManyField('Sub_topic', blank=True)                # Subtema del Tema
    length = models.DecimalField(max_digits=10,decimal_places=2, blank=True)                # Duracion del Tema

    def __str__(self):                      # Muestra el Nombre del Tema  
        return self.topic_name

    def get_video_length(self):             # Obtiene la duracion del Video
        try:
            video=MP4(self.video)
            return video.info.length
        except MP4StreamInfoError:
            return 0.0
    
    def get_video_length_time(self):        # Obtiene Duracion del Video en Formato de Horas/Minutos/Segundos
        return get_timer(self.length)
    
    def get_absolute_url(self):             # Obtiene la Url del Video
        return 'http://localhost:8000'+self.video.url
    
    def save(self,*args,**kwargs):          # Obtiene el video y lo guarda
        self.length=self.get_video_length()
        return super().save(*args,**kwargs)

# Se genera el Modelo de los SubTemas del Tema
class Sub_topic(models.Model):
    subtopic_name = models.CharField(max_length=255)                    # Nombre del Sub-Tema
    description = models.TextField()                                    # Descripcion del Sub-Tema
    files = models.ManyToManyField('Additional_material', blank=True)   # Archivos del Sub-Tema
    questions = models.ManyToManyField('Question', blank=True)          # Preguntas sobre el Sub-Tema

    def __str__(self):                  # Muestra el Nombre del Sub-Tema 
        return self.subtopic_name

# Se genera el Modelo de Material Adicional
class Additional_material(models.Model):
    file_name = models.CharField(max_length=255, default='file')        # Nombre del Archivo Adicionl 
    file = models.FileField(upload_to='additional_material_files',      # Archivo adicional
           null=True,verbose_name='Material adicional')

    def get_absolute_url(self):     # Obtiene la url del Archivo
        return 'http://localhost:8000'+self.file.url

# Se genera el Modelo de Preguntas
class Question(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) # Usuario que hizo la pregunta 
    created = models.DateTimeField('published date')                                # Fecha del Publicacion
    question = models.TextField()                                                   # Texto de la pregunta
    answer = models.TextField()                                                     # Respuestas de la pregunta
    def __str__(self):              # Muestra la pregunta
        return self.question        

# Se genera el Modelo de Comentarios
class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) # Usuario que hizo el comentario
    message = models.TextField()                                                    # Mensaje del Comentarios
    created = models.DateTimeField(auto_now_add=True)                               # Fecha de Publicacion
