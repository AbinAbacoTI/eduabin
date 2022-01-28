from django.urls import path

from courses.views import CoursesHomeView
from django.urls import path

urlpatterns = [
    path('', CoursesHomeView.as_view())
]