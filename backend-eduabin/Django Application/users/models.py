from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import BaseUserManager, PermissionsMixin
from courses.models import Course

class UserManager(BaseUserManager):
    use_in_migrations=True

    def create_superuser(self, email, password, name,**other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)

        if other_fields.get('is_staff') is not True:
            return ValueError('Superuser must have is_staff True')
        
        if other_fields.get('is_superuser') is not True:
            return ValueError('Superuser must have is_superuser True')

        return self.create_user(email, password, name, **other_fields)
    
    def create_user(self, email, password, name, **other_fields):
        if not email:
            raise ValueError('You must provide a valid email')
        
        email = self.normalize_email(email)

        user = self.model(email=email, name=name, **other_fields)

        user.set_password(password)

        user.save()

        return user
        
#Administrador
class Admin(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    notifications = models.ManyToManyField('Notification', blank=True)
    history = models.ManyToManyField('History', blank=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    objects = UserManager()

    def __str__(self) -> str:
        return self.name + " " + self.email
        
class History(models.Model):
    areas = (
        ('state_one','Users'),
        ('state_two','Courses'),
        ('state_three','Payments')
    )
    action = models.CharField(max_length=500)
    time = models.TimeField()
    date = models.DateField()
    area = models.CharField(max_length=15,choices=areas)

#Estudiante
class Student(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    profile_picture = models.ImageField(upload_to='students_profile')
    bank_accounts = models.ManyToManyField('User_bank_account', blank=True)
    personal_data = models.ManyToManyField('Personal_data', blank=True)
    paid_courses = models.ManyToManyField(Course)
    notifications = models.ManyToManyField('Notification', blank=True)

class User_bank_account(models.Model):
    number = models.CharField(max_length=16)

class Personal_data(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    cellphone = models.CharField(max_length=12)
    country = models.CharField(max_length=100)
    birthday = models.DateField()
    dni = models.CharField(max_length=8)

#Profesor
class Teacher_bank_account(models.Model):
    bank_name = models.CharField(max_length=255)
    number_account = models.IntegerField()

class Teacher(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    curriculum = models.FileField(upload_to='curriculum', null=True,verbose_name='curriculum')
    profile_picture = models.ImageField(upload_to='profile_picture')
    baccount = models.ForeignKey(Teacher_bank_account, on_delete=models.CASCADE)
    birthday = models.DateField()
    cellphone_number = models.IntegerField()
    notifications = models.ManyToManyField('Notification', blank=True)

class Notification(models.Model):
    user_from = models.CharField(max_length=255)
    message = models.TextField()
    created = models.DateTimeField()