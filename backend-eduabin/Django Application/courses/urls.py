from django.urls import path

from courses.views import (CoursesHomeView,
                            AllCoursesHomeView,
                            CourseDetail,
                            SectorCourse,
                            SearchCourse,
                            AddComment,
                            GetCartDetail,
                            CourseStudy,
                            AddCourse,
                            AddSector,
                            AddCategory,
                            )
# URLs de las vistas de la aplicacion Curso
urlpatterns = [
    path('', CoursesHomeView.as_view()),                        # Home
    path('all', AllCoursesHomeView.as_view()),                  # Home con todos los cursos
    path('search/<str:search_term>/', SearchCourse.as_view()),  # Vista de busqueda de curso
    path('<uuid:sector_uuid>/', SectorCourse.as_view()),        # Vista de Sector 
    path('detail/<uuid:course_uuid>/',CourseDetail.as_view()),  # Vista de Detalles del Curso
    path('comment/<course_uuid>/', AddComment.as_view()),       # Vista de Comentarios
    path('cart/', GetCartDetail.as_view()),                     # vista de adiciones al Carrito
    path('study/<uuid:course_uuid>/', CourseStudy.as_view()),   # Vista de Cursos Comprados
    path('addCategory/', AddCategory.as_view()),                # Vista de agregar Categoría
    path('addCategory/<category_uuid>', AddCategory.as_view()), # Vista de agregar categoria
    path('addSector/<uuid:category_uuid>/', AddSector.as_view()),    # Vista de agregar Sector
    path('addCourse/<uuid:sector_uuid>/', AddCourse.as_view()),      # Vista de agregar Curso
]