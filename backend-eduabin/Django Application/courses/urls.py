from django.urls import path

from courses.views import *
# URLs de las vistas de la aplicacion Curso
urlpatterns = [
    path('', CoursesHomeView.as_view()),                        # Home
    path('all/', AllCoursesHomeView.as_view()),                  # Home con todos los cursos
    path('all/filter/<str:category>/', AllCoursesFilterView.as_view()),                  # Home con todos los cursos
    path('search/<str:search_term>/', SearchCourse.as_view()),  # Vista de busqueda de curso
    path('<uuid:sector_uuid>/', SectorCourse.as_view()),        # Vista de Sector 
    path('detail/section/<uuid:section_uuid>/',SectionDetail.as_view()),# Vista de Detalles de la Sección
    path('detail/sector/<uuid:sector_uuid>/',SectorDetail.as_view()),  # Vista de Detalles del Sector
    path('detail/course/<uuid:course_uuid>/',CourseDetail.as_view()),  # Vista de Detalles del Curso
    path('comment/<course_uuid>/', AddComment.as_view()),       # Vista de Comentarios
    path('cart/', GetCartDetail.as_view()),                     # vista de adiciones al Carrito
    path('study/<uuid:course_uuid>/', CourseStudy.as_view()),   # Vista de Cursos Comprados
    #URLs CRUD seccion
    path('section/list/', ListSectionAPIView.as_view(), name='section_list'),                      # Vista de listar Seccion
    path('section/add/', section.as_view(), name='section_add'),                                   # Vista de agregar Seccion
    path('section/update/<uuid:section_uuid>/', section.as_view(), name='section_update'),         # Vista de actualizar Seccion
    path('section/delete/<uuid:section_uuid>/', section.as_view(), name='section_delete'),         # Vista de borrar Seccion
    #URLs CRUD categoria
    path('category/list/', ListCategoryAPIView.as_view(), name='category_list'),                    # Vista de listar Categoría
    path('category/add/', category.as_view(), name='category_add'),                                 # Vista de agregar Categoría
    path('category/update/<uuid:category_uuid>/', category.as_view(), name='category_update'),      # Vista de actualizar Categoría
    path('category/delete/<uuid:category_uuid>/', category.as_view(), name='category_delete'),      # Vista de borrar Categoría
    #URLs CRUD sector
    path('sector/list/', ListSectorAPIView.as_view(), name='sector_list'),                          # Vista de listar Sector
    path('sector/add/', sector.as_view(), name='sector_add'),                                       # Vista de agregar Sector
    path('sector/update/<uuid:sector_uuid>/', sector.as_view(), name='sector_update'),              # Vista de actualizar Sector
    path('sector/delete/<uuid:sector_uuid>/', sector.as_view(), name='sector_delete'),              # Vista de borrar Sector
    #URLs CRUD division
    path('division/list/', ListDivisionAPIView.as_view(), name='division_list'),                    # Vista de listar Division
    path('division/add/', division.as_view(), name='division_add'),                                 # Vista de agregar Division
    path('division/update/<uuid:division_uuid>/', division.as_view(), name='division_update'),      # Vista de actualizar Division
    path('division/delete/<uuid:division_uuid>/', division.as_view(), name='division_delete'),      # Vista de borrar Division
    #URLs CRUD curso
    path('course/list/', ListCourseAPIView.as_view(), name='course_list'),                          # Vista de listar Curso
    path('course/add/', course.as_view(), name='course_add'),                                       # Vista de agregar Curso
    path('course/update/<uuid:course_uuid>/', course.as_view(), name='course_update'),              # Vista de actualizar Curso
    path('course/delete/<uuid:course_uuid>/', course.as_view(), name='course_delete'),              # Vista de borrar Curso
]