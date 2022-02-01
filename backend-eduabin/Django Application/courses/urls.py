from django.urls import path

from courses.views import (CoursesHomeView,
                            CourseDetail,
                            SectorCourse,
                            SearchCourse,
                            AddComment,
                            GetCartDetail,
                            CourseStudy)
from django.urls import path
# URLs de las vistas de la aplicacion Curso
urlpatterns = [
    path('', CoursesHomeView.as_view()),                        # Home
    path('search/<str:search_term>/', SearchCourse.as_view()),  # Vista de busqueda de curso
    path('<uuid:sector_uuid>/', SectorCourse.as_view()),        # Vista de Sector 
    path('detail/<uuid:course_uuid>/',CourseDetail.as_view()),  # Vista de Detalles del Curso
    path('comment/<course_uuid>/', AddComment.as_view()),       # Vista de Comentarios
    path('cart/', GetCartDetail.as_view()),                     # vista de adiciones al Carrito
    path('study/<uuid:course_uuid>/', CourseStudy.as_view()),   # Vista de Cursos Comprados
]