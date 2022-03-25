from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import BaseUserManager, PermissionsMixin
from courses.models import Course

# Modelo para manejar usuarios de forma manual
class UserManager(BaseUserManager):
    use_in_migrations=True

    # Metodo para crear un super usuario
    def create_superuser(self, email, password, name,**other_fields):
        other_fields.setdefault('is_staff', True)       # si es un Administrador
        other_fields.setdefault('is_superuser', True)   # si es un SuperUsuario (maneja datos mas que el administrador) 
        other_fields.setdefault('user_type', 3)

        if other_fields.get('is_staff') is not True:
            return ValueError('Superuser must have is_staff True')
        
        if other_fields.get('is_superuser') is not True:
            return ValueError('Superuser must have is_superuser True')

        return self.create_user(email, password, name, **other_fields)
    
    # Metodo para crear un usuario simple
    def create_user(self, email, password, name, **other_fields):
        if not email:
            raise ValueError('You must provide a valid email')
        
        email = self.normalize_email(email)                         # Pide el Email de Usuario

        user = self.model(email=email, name=name, **other_fields)   # modela el usuario

        user.set_password(password)                                 # Pide contraseña y la cifra

        user.save()                                                 # guarda el usuario

        return user
        
#Se genera el  Modelo del Usuario
class User(AbstractBaseUser, PermissionsMixin):
    USER_TYPE_CHOICES = (       # tipos de roles que se pueden seleccionar
        (1, 'student'),
        (2, 'teacher'),
        (3, 'admin'),
    )

    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES, default=1) # Sirve para designar el tipo de usuario (rol)
    name = models.CharField(max_length=255)                             # Nombre del Administrador
    email = models.EmailField(max_length=255, unique=True)              # Email del Administrador
    created = models.DateTimeField(auto_now_add=True)                   # Fecha de Creacion del Administrador
    update = models.DateTimeField(auto_now=True)                        # Fecha de Actualizacion del Administrador
    notifications = models.ManyToManyField('Notification', blank=True)  # Notificaciones del Administrador
    is_staff = models.BooleanField(default=False)                       # Reconocer si es Administrador

    USERNAME_FIELD = 'email'        # Nombre del usuario como campo
    REQUIRED_FIELDS = ['name']      # Campos Obligarios

    objects = UserManager()     # crear un objeto para el manejo de usuarios

    def __str__(self) -> str:
        return self.name + " " + self.email
        
# Se genera el modelo para el tipo de usuarios ESTUDIANTE
class Student(models.Model):
    # Campos Student
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)   # Tipo de usuario
    profile_picture = models.ImageField(upload_to='students_profile', blank=True)               # Foto de Perfil
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    cellphone = models.CharField(max_length=12)
    country = models.CharField(max_length=150)
    dni = models.CharField(max_length=8)
    bank_accounts = models.ManyToManyField('User_bank_account', blank=True)         # Num. Cuenta Bancaria
    paid_courses = models.ManyToManyField(Course, blank=True, related_name="paid_courses")          # Cursos Comprados
    favorite_courses = models.ManyToManyField(Course, blank=True, related_name="desired_courses")    # Cursos deseados
    remuneration = models.DecimalField(default=0, max_digits=7, decimal_places=2)   # Dinero para retribuir
    
    def get_all_courses(self):      # Metodo para obtener todos lo cursos comprados del usuario
        courses=[]
        for course in self.paid_courses.all():
            courses.append(course.course_uuid)
        return courses
    
    def get_all_favorites(self):      # Metodo para obtener todos lo cursos comprados del usuario
        courses=[]
        for course in self.favorite_courses.all():
            courses.append(course.course_uuid)
        return courses
    
    def add_remuneration(self, amount):  #Metodo para agregar más cantidad a la remuneración acumulada por compras
        self.remuneration = self.remuneration + amount
        return super().save()
        
    def __str__(self):
        return self.firstname
# Se genera el modelo para la cuenta bancaria del Usuario
class User_bank_account(models.Model):
    # Campos User_bank_account 
    number = models.CharField(max_length=16)    # Numero de cuenta

# Se genera el modelo para la data personal del Usuario
'''
class Personal_data(models.Model):
    firstname = models.CharField(max_length=100)    # Nombre
    lastname = models.CharField(max_length=100)     # Apellido
    cellphone = models.CharField(max_length=12)     # Celular
    country = models.CharField(max_length=100)      # Pais
    birthday = models.DateField()                   # Nacimiento
    dni = models.CharField(max_length=8)            # DNI (documento de indentidad)
'''

# Se genera el modelo para el usuario Profesor
class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)                   # Tipo de Usuario
    first_name = models.CharField(max_length=255)                                                   # Nombre
    last_name = models.CharField(max_length=255)                                                    # Apellido
    curriculum = models.FileField(upload_to='curriculum', null=True,verbose_name='curriculum')      # Curriculum
    profile_picture = models.ImageField(upload_to='profile_picture')                                # Foto de Perfil
    baccount = models.ForeignKey('Teacher_bank_account', on_delete=models.CASCADE)                  # Cuenta Bancaria
    birthday = models.DateField()                                                                   # Nacimiento
    cellphone_number = models.IntegerField()                                                        # Celular

# Se genera el modelo para la cuenta bancaria del Usuario Profesor
class Teacher_bank_account(models.Model):
    bank_name = models.CharField(max_length=255)        # Nombre del Banco
    number_account = models.IntegerField()              # Numero de cuenta
    
# Se genera el modelo para la cuenta bancaria del Usuario Administrador
class History(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True) # Tipo de Usuario Administrador
    areas = (                                               # Areas a en cuales a interactuado
        ('state_one','Users'),
        ('state_two','Courses'),
        ('state_three','Payments')
    )
    action = models.CharField(max_length=500)               # Accion que realizo el Administrador
    time = models.TimeField()                               # Tiempor del cambio que ralizo
    date = models.DateField()                               # Fecha del cambio realizado
    area = models.CharField(max_length=15,choices=areas)    # Area que cambio o modifico

# Se genera el modelo para Notificaciones
class Notification(models.Model):
    user_from = models.CharField(max_length=255)    # Usuario al que se le enviara el mensaje  
    message = models.TextField()                    # Mensaje
    created = models.DateTimeField()                # Fecha de creacion del Mensaje