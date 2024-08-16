from django.urls import path
from .views import ProtectedView
from .views import UserRegistrationView, ProtectedView, VerifyEmailView, ResendVerificationView

urlpatterns = [
    path('protected/', ProtectedView.as_view(), name='protected'),
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('verify-email/<str:token>/', VerifyEmailView.as_view(), name='verify-email'),
    path('resend-verification/', ResendVerificationView.as_view(), name='resend-verification'),
]


