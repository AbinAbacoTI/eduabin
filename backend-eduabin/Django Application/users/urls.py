from django.urls import path

from users.views import (StudentCRUD, AddFavorites)
# URLs de las vistas de la aplicacion Curso
urlpatterns = [
    path('', StudentCRUD.as_view()),                        # CRUD
    path('student/<user_id>/', StudentCRUD.as_view()),
    path('addfavorites/<user_id>/', AddFavorites.as_view())
]