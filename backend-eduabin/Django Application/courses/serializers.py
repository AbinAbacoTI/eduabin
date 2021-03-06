from unicodedata import decimal
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Additional_material, Division, Hashtags, Section, Category, Sector, Course, Comment, Module, Sub_topic, Topic, Packages, Event
from users.serializers import UserSerializer
from decimal import Decimal
import uuid

# Serializer para la seccion
class SectionSerializer(ModelSerializer):
    class Meta:         # Datos de Seccion a renderizar/Serializar
        model=Section
        exclude=[
            'id'
        ]

# Serializer para la categoría
class CategorySerializer(ModelSerializer):
    class Meta:         # Datos de Categoria a renderizar/Serializar
        model=Category
        exclude=[
            'id'
        ]

# Serializer para el sector
class SectorSerializer(ModelSerializer):
    class Meta:         # Datos de Sector a renderizar/Serializar
        model=Sector
        exclude=[
            'id'
        ]

class HashtagSerializer(ModelSerializer):
    class Meta:
        model=Hashtags
        exclude=[
            'id'
        ]

# Serializer para el curso
class CourseSerializer(ModelSerializer):
    # campos adicionales para rendericacion
    author = UserSerializer(read_only=True)                                 # Autor del Curso(Extraido del Serializer del Profesor)
    image_url = serializers.CharField(source='get_absolute_image_url')      # Imagen del Curso
    discount_price = serializers.DecimalField(source='get_discount_price', max_digits=7, decimal_places=2)
    hashtag = HashtagSerializer(many=True)

    class Meta:         # Datos de Curso a renderizar/Serializar
        model=Course
        fields=[
            'id',
            'course_uuid',
            'course_name',
            'author',
            'image_url',
            'valoration',
            'price',
            'discount',
            'discount_price',
            'hashtag',
        ]

# Serializer para la division
class DivisionSerializer(ModelSerializer):
    related_course = CourseSerializer(many=True)
    image_url = serializers.CharField(source='get_image_absolute_url')      # Imagen de División
    class Meta:         # Datos de Division a renderizar/Serializar
        model=Division
        exclude=[
            'id',
            'division_image'
        ]

# Serializer para los datos de los cursos/Rederizacion (Aun sin Comprar)
class CourseDisplaySerializer(ModelSerializer):
    # campos adicionales para rendericacion
    student_no = serializers.IntegerField(source='get_enrolled_student')    # Numero de Estudiantes
    author = UserSerializer(read_only=True)                                 # Autor del Curso(Extraido del Serializer del Profesor)
    image_url = serializers.CharField(source='get_absolute_image_url')      # Imagen del Curso
    discount_price = serializers.DecimalField(source='get_discount_price', max_digits=7, decimal_places=2)
    hashtag = HashtagSerializer(many=True)

    class Meta:         # Datos de Curso a renderizar/Serializar
        model=Course
        fields=[
            'course_name',
            'course_uuid',
            'student_no',
            'author',
            'price',
            'discount',
            'image_url',
            'discount_price',
            'hashtag'
        ]

# Serializer para los datos de los sectores/Rederizacion (Aun sin Comprar)
class SectorDisplaySerializer(ModelSerializer):
    sector_image = serializers.CharField(source='get_image_absolute_url')      # Imagen del Sector
    content = serializers.SerializerMethodField('get_content')  
    division_exist = serializers.SerializerMethodField('check_division') 

    def get_divisions(self, Sector):
        sector_divisions = Sector.related_division
        division_serializer = DivisionSerializer(sector_divisions, many=True)
        return division_serializer.data

    def get_content(self, Sector):
        divisions = self.get_divisions(Sector)
        if divisions == []:
            sector_courses = Sector.related_course
            course_serializer = CourseSerializer(sector_courses, many=True)
            return course_serializer.data
        return divisions

    def check_division(self, Sector):
        divisions = self.get_divisions(Sector)
        if divisions == []:
            return False
        return True

    class Meta:         # Datos de Sector a renderizar/Serializar
        model=Sector
        fields=[
            'name',
            'sector_uuid',
            'sector_image',
            'content',
            'division_exist',
        ]

# Serializer para los datos de las categorias/Rederizacion (Aun sin Comprar)
class CategoryDisplaySerializer(ModelSerializer):
    category_image = serializers.CharField(source='get_image_absolute_url')      # Imagen de la categoria
    related_sector = SectorDisplaySerializer(many=True)
    class Meta:         # Datos de Categoria a renderizar/Serializar
        model=Category
        fields=[
            'name',
            'category_uuid',
            'category_image',
            'related_sector'
        ]

# Serializer para los Comentarios de los cursos/Rederizacion
class CommentSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    user=UserSerializer(read_only=True)  # Usuario(Extraido del Serializer "StudentSerializer")
    class Meta:         # Datos de comentario a Renderizar/Serializar
        model=Comment
        exclude=[
            'id'
        ]

# Serializer para los datos de material adicional/Rederizacion
class AdditionalMaterialPaidSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    file=serializers.CharField(source='get_absolute_url')   # Url del archivo Adicional
    class Meta:         # Datos de Material Adiccional a Renderizar/Serializar
        model=Additional_material
        fields=[
            'file_name',
            'file'
        ]

# Serializer para los datos de los Subtemas/Rederizacion
class SubTopicPaidSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    files=AdditionalMaterialPaidSerializer(many=True)       # Archivos de material adicional
    class Meta:         # Datos de Subtema a Renderizar/Serializar
        model=Sub_topic
        fields=[
            'subtopic_name',
            'description',
            'files'
        ]

# Serializer para los datos de los Temas/Rederizacion   (si no ha pagado)
class TopicUnpaidSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    length=serializers.CharField(source='get_video_length_time')    # tiempo de duracion del Video
    class Meta:         # Datos de Tema a Renderizar/Serializar
        model=Topic
        exclude=[
            'video' # Excluye el Video de la Serializacion
        ]

# Serializer para los datos de los Temas/Rederizacion (Si ha pagado)
class TopicPaidSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    sub_topics=SubTopicPaidSerializer(many=True) # Subtemas
    length=serializers.CharField(source='get_video_length_time') # tiempo de duracion del video
    class Meta:         # Datos de Tema a Renderizar/Serializar
        model=Topic
        fields=[
            'video',
            'topic_name',
            'objectives',
            'sub_topics',
            'length'
        ]

# Serializer para los datos de los Modulos/Rederizacion (Si no ha pagado)
class ModuleUnPaidSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    topics=TopicUnpaidSerializer(many=True) # Temas (Sin mostrar el video)
    total_duration=serializers.CharField(source='total_length') # Duracion total del Tema
    class Meta:         # Datos de Modulo a Renderizar/Serializar
        model=Module
        fields=[
            'id',
            'module_name',
            'topics',
            'total_duration',
        ]

# Serializer para los datos de los Modulos/Rederizacion
class ModulePaidSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    topics=TopicPaidSerializer(many=True) # Temas
    total_duration=serializers.CharField(source='total_length') # Duracion total del Tema
    class Meta:         # Datos de Modulo a Renderizar/Serializar
        model=Module
        fields=[
            'id',
            'module_name',
            'topics',
            'total_duration',
        ]

# Serializer para los datos de los cursos/Rederizacion (Si no ha pagado)
class CourseUnpaidSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    comments=CommentSerializer(many=True)                               # Comentarios
    author=UserSerializer()                                          # Profesor
    modules=ModuleUnPaidSerializer(many=True)                           # Modulos
    student_no=serializers.IntegerField(source='get_enrolled_student')  # No. de estudiantes
    total_modules=serializers.IntegerField(source='get_total_modules')  # Total de Modulos
    total_duration=serializers.CharField(source='total_course_length')  # Duracion total
    image_url=serializers.CharField(source='get_absolute_image_url')    # URL de imagen del curso

    class Meta:         # Datos de  a Renderizar/Serializar
        model=Course
        exclude=[
            'id',
        ]

# Serializer para los datos de los cursos/Rederizacion (Si ha pagado)
class CoursePaidSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    comments=CommentSerializer(many=True)                               # Comentarios
    author=UserSerializer()                                             # Profesor
    modules=ModulePaidSerializer(many=True)                             # Modulos
    student_no=serializers.IntegerField(source='get_enrolled_student')  # No. de estudiantes
    total_modules=serializers.IntegerField(source='get_total_modules')  # Total de Modulos
    total_duration=serializers.CharField(source='total_course_length')  # Duracion Toral
    image_url=serializers.CharField(source='get_absolute_image_url')    # URL de imagen del curso

    class Meta:         # Datos de Curso a Renderizar/Serializar
        model=Course
        exclude=[
            'id',
        ]

class SectorUnpaidSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    image_url=serializers.CharField(source='get_image_absolute_url')    # URL de imagen de la sección

    class Meta:         # Datos de  a Renderizar/Serializar
        model=Sector
        exclude=[
            'id',
            'related_course',
            'related_division',
        ]

class CategoryUnpaidSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    image_url=serializers.CharField(source='get_image_absolute_url')    # URL de imagen de la sección
    related_sector=SectorUnpaidSerializer(many=True)
    class Meta:         # Datos de  a Renderizar/Serializar
        model=Category
        exclude=[
            'id',
            'category_image',
        ]

class SectionUnpaidSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    image_url=serializers.CharField(source='get_image_absolute_url')    # URL de imagen de la sección
    related_category=CategoryUnpaidSerializer(many=True)

    class Meta:         # Datos de  a Renderizar/Serializar
        model=Section
        exclude=[
            'id',
        ]

# Serializer para los datos de los cursos/Rederizacion
class CourseListSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    student_no=serializers.IntegerField(source='get_enrolled_student')  # No. de estudiantes
    author=UserSerializer()                                          # Profesor
    description=serializers.CharField(source='get_brief_description')   # Descripcion
    total_modules=serializers.IntegerField(source='get_total_modules')  # Total de Modulos 
    class Meta:         # Datos de Curso a Renderizar/Serializar
        model=Course
        fields=[
            'course_uuid',
            'course_name',
            'student_no',
            'author',
            'price',
            'main_image',
            'description',
            'total_modules'
        ]

# Serializer para los datos del Carrito de Compra/Rederizacion
class CartItemSerializer(ModelSerializer):
    # Campos adicionales para renderizar/Serializar
    author=UserSerializer()                                          # Estudiante
    image_url=serializers.CharField(source='get_absolute_image_url')    # URL de imgamen de carrito
    discount_price=serializers.DecimalField(max_digits=8, decimal_places=2,source='get_discount_price')
    class Meta:         # Datos de  a Renderizar/Serializar
        model=Course
        fields=[
            'author',
            'course_name',
            'price',
            'discount',
            'discount_price',
            'image_url'
        ]

class PackageCoursesSerializer(ModelSerializer):
    class Meta:
        model=Packages
        fields=[
            'id',
            'courses'
        ]

class CoursePackageSerializer(ModelSerializer):
    image_url = serializers.CharField(source='get_absolute_image_url')      # Imagen del Curso
    class Meta:
        model=Course
        fields=[
            'course_name',
            'course_uuid',
            'price',
            'image_url',
        ]
        
# Serializer para los paquetes de cursos / Renderizacion
class PackageSerializer(ModelSerializer):
    # Campos adicionales a renderizar

    class Meta:         # Datos de Curso a renderizar/Serializar
        model=Packages
        fields= '__all__'

# Serializer para los paquetes de cursos / Renderizacion
class PackageDisplaySerializer(ModelSerializer):
    # Campos adicionales a renderizar
    courses=CoursePackageSerializer(many=True,read_only=True)
    total_price=serializers.DecimalField(source='get_total_price', decimal_places=2, max_digits=7, read_only=True)
    discount_price=serializers.DecimalField(source='get_discount_price', decimal_places=2, max_digits=7, read_only=True)
    pack_image=serializers.CharField(source='get_image_absolute_url')

    class Meta:         # Datos de Curso a renderizar/Serializar
        model=Packages
        fields=[
            'id',
            'pack_name',
            'pack_image',
            'announcement',
            'discount',
            'courses',
            'total_price',
            'discount_price'
        ]

class EventSerializer(ModelSerializer):
    # Campos adicionales a renderizar

    class Meta:         # Datos de Curso a renderizar/Serializar
        model=Event
        exclude=[
            'id',
        ]