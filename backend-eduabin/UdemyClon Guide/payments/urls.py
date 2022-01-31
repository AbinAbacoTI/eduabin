from django.urls import path
from payments.views import PaymentHandler, WebHook

urlpatterns = [
    path("", PaymentHandler.as_view()),
    path("webhook/", WebHook.as_view()),
]