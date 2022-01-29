from django.db import models
from django.core.validators import FileExtensionValidator
from django.contrib.auth import get_user_model
from decimal import Decimal
from .helpers import get_timer
from django.conf import settings
from django.apps import apps
from mutagen.mp4 import MP4, MP4StreamInfoError
import uuid

class Sector(models.Model):
    name = models.CharField(max_length=255)
    sector_uuid=models.UUIDField(default=uuid.uuid4,unique=True)
    related_course = models.ManyToManyField('Course', blank=True)
    sector_image = models.ImageField(upload_to='sector_image')

    #  /media/sector_image/what.png
    def get_image_absolute_url(self):
        return 'http://localhost:8000'+self.sector_image.url

class Course(models.Model):
    state_one = 'published'
    state_two = 'unpublished'
    state_three = 'pending'

    states=(
        (state_one, 'Published'),
        (state_two, 'Unpublished'),
        (state_three, 'Pending')
    )

    course_name = models.CharField(max_length=255)
    main_image = models.ImageField(upload_to='course_image')
    description = models.TextField()
    author = models.ForeignKey(settings.AUTH_TEACHER_MODEL, on_delete=models.CASCADE)
    valoration = models.IntegerField()
    price = models.DecimalField(max_digits=5,decimal_places=2)
    objectives = models.TextField()
    modules = models.ManyToManyField('Module', blank=True)
    last_update = models.DateField()
    state = models.CharField(max_length=15, choices=states)
    comments = models.ManyToManyField('Comment', blank=True)
    course_uuid=models.UUIDField(default=uuid.uuid4,unique=True)

    def __str__(self):
        return self.course_name

    def get_brief_description(self):
        return self.description[:100]

    def get_enrolled_student(self):
        students = apps.get_model('users','Student').objects.filter(paid_courses=self)
        return len(students)
    
    def get_total_modules(self):
        modules=0
        for module in self.modules.all():
            modules += len(module.topics.all())
        return modules
    
    def total_course_length(self):
        length=Decimal(0.0)
        for modules in self.modules.all():
            for topics in modules.topics.all():
                length+=topics.length
        return get_timer(length, type='short')
    
    def get_absolute_image_url(self):
        return 'http://localhost:8000' + self.main_image.url

class Module(models.Model):
    module_name = models.CharField(max_length=255)
    video = models.FileField(upload_to='module_videos', null=True,verbose_name='Video de presentacion', validators=[FileExtensionValidator(allowed_extensions=['mp4']) ])
    objectives = models.TextField()
    presentation = models.TextField()
    advice = models.TextField()
    requirements = models.TextField()
    topics = models.ManyToManyField('Topic', blank=True)

    def __str__(self):
        return self.module_name

    def total_length(self):
        total=Decimal(0.0)
        for topic in self.topics.all():
            total+=topic.length
        return get_timer(total, type='min')

class Topic(models.Model):
    topic_name = models.CharField(max_length=255)
    video = models.FileField(upload_to='topic_videos', null=True,verbose_name='Video de Tema', validators=[FileExtensionValidator(allowed_extensions=['mp4']) ])
    objectives = models.TextField()
    files = models.ManyToManyField('Additional_material', blank=True)
    sub_topics = models.ManyToManyField('Sub_topic', blank=True)
    length = models.DecimalField(max_digits=10,decimal_places=2)

    def __str__(self):
        return self.topic_name

    def get_video_length(self):
        try:
            video=MP4(self.video)
            return video.info.length
        except MP4StreamInfoError:
            return 0.0
    
    def get_video_length_time(self):
        return get_timer(self.length)
    
    def get_absolute_url(self):
        return 'http://localhost:8000'+self.video.url
    
    def save(self,*args,**kwargs):
        self.length=self.get_video_length()
        return super().save(*args,**kwargs)

class Sub_topic(models.Model):
    subtopic_name = models.CharField(max_length=255)
    description = models.TextField()
    files = models.ManyToManyField('Additional_material', blank=True)
    questions = models.ManyToManyField('Question', blank=True)

    def __str__(self):
        return self.subtopic_name

class Additional_material(models.Model):
    file_name = models.CharField(max_length=255, default='file')
    file = models.FileField(upload_to='additional_material_files', null=True,verbose_name='Material adicional')

    def get_absolute_url(self):
        return 'http://localhost:8000'+self.file.url

class Question(models.Model):
    user = models.ForeignKey(settings.AUTH_STUDENT_MODEL, on_delete=models.CASCADE)
    created = models.DateTimeField('published date')
    question = models.TextField()
    answer = models.TextField()
    def __str__(self):
        return self.question

class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_STUDENT_MODEL, on_delete=models.CASCADE)
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True)