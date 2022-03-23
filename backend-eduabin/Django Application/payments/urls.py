from django.urls import path
from payments.views import PaymentHandler, WebHook, ListPaymentsAPIView

urlpatterns = [
    path("", PaymentHandler.as_view()),
    path("webhook/", WebHook.as_view()),
    path("listpays/", ListPaymentsAPIView.as_view()),
] 