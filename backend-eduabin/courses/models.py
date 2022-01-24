from distutils.command.upload import upload
from email import message
from time import time
from django.db import models
from django.core.validators import FileExtensionValidator
from django.forms import CharField, IntegerField, PasswordInput, forms, widgets


#MODELOS USUARIOS

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=20)

class Notification(models.Model):
    message = models.CharField(max_length=500)
    time = models.TimeField()
    date = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Teacher_Bank_account(models.Model):
    number_account = models.IntegerField()

class Teacher(models.Model):
    curriculum = models.FileField(upload_to='curriculum', null=True,verbose_name='curriculum')
    profile_picture = models.ImageField(upload_to='profile_picture')
    baccount = models.ForeignKey(Teacher_Bank_account, on_delete=models.CASCADE)
    birthday = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cellphone_number = models.IntegerField()

class Student(models.Model):
    profile_picture = models.ImageField(upload_to='students_profile')
    user = models.ForeignKey(User,on_delete=models.CASCADE)

class Personal_Data(models.Model):
    firstname = models.CharField(max_length=250)
    lastname = models.CharField(max_length=250)
    cellphone = models.DecimalField(max_digits=12,decimal_places=0)
    country = models.CharField(max_length=250)
    birthday = models.DateField()
    DNI = models.DecimalField(max_digits=9,decimal_places=0)
    student = models.ForeignKey(Student,on_delete=models.CASCADE)


# MODELOS PROFESOR

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
    description = models.CharField(max_length=2000)
    short_description = models.CharField(max_length=1000)
    #id_teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    students_number = models.IntegerField()
    valoration = models.IntegerField()
    price = models.DecimalField(max_digits=5,decimal_places=2)
    objectives = models.CharField(max_length=1000)
    last_update = models.DateField()
    state = models.CharField(max_length=15, choices=states)
    def __str__(self):
        return self.course_name

class Module(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    module_name = models.CharField(max_length=255)
    video = models.FileField(upload_to='module_videos', null=True,verbose_name='Video de presentacion', validators=[FileExtensionValidator(allowed_extensions=['mp4']) ])
    objectives = models.CharField(max_length=1000)
    presentation = models.CharField(max_length=1000)
    advice = models.CharField(max_length=3000)
    requirements = models.CharField(max_length=3000)
    def __str__(self):
        return self.module_name


class Topic(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    topic_name = models.CharField(max_length=255)
    video = models.FileField(upload_to='topic_videos', null=True,verbose_name='Video de Tema', validators=[FileExtensionValidator(allowed_extensions=['mp4']) ])
    objectives = models.CharField(max_length=1000)
    def __str__(self):
        return self.topic_name


class Sub_topic(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    subtopic_name = models.CharField(max_length=255)
    description = models.CharField(max_length=2000)
    def __str__(self):
        return self.subtopic_name


class Additional_material(models.Model):
    sub_topic = models.ForeignKey(Sub_topic, on_delete=models.CASCADE)
    file = models.FileField(upload_to='additional_material_files', null=True,verbose_name='Material adicional')

class Question(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    date = models.DateTimeField('published date')
    question = CharField(max_length=1000)
    answer = CharField(max_length=2000)
    def __str__(self):
        return self.question