from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import UserRegistrationSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import EmailVerificationToken
from django.core.mail import send_mail
from django.conf import settings
from django.urls import reverse
from rest_framework import status
from .serializers import ResendVerificationSerializer
from django.contrib.auth.models import User

class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "This is a protected view", "user": str(request.user)})

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        
        # Add extra responses here
        data['username'] = self.user.username
        data['email'] = self.user.email
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
class UserRegistrationView(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserRegistrationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        # Send verification email
        token = EmailVerificationToken.objects.get(user=user)
        verification_url = request.build_absolute_uri(
            reverse('verify-email', kwargs={'token': str(token.token)})
        )
        send_mail(
            'Verify your email',
            f'Click the following link to verify your email: {verification_url}',
            settings.EMAIL_HOST_USER,
            [user.email],
            fail_silently=False,
        )

        return Response({
            "user": UserRegistrationSerializer(user, context=self.get_serializer_context()).data,
            "message": "Account created successfully. Please check your email to verify your account."
        }, status=status.HTTP_201_CREATED)

class VerifyEmailView(generics.GenericAPIView):
    permission_classes = (AllowAny,)

    def get(self, request, token):
        try:
            verification_token = EmailVerificationToken.objects.get(token=token)
            if verification_token.is_valid():
                user = verification_token.user
                user.is_active = True
                user.save()
                verification_token.delete()
                return Response({"message": "Email verified successfully."}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Verification link has expired."}, status=status.HTTP_400_BAD_REQUEST)
        except EmailVerificationToken.DoesNotExist:
            return Response({"error": "Invalid verification token."}, status=status.HTTP_400_BAD_REQUEST)

class ResendVerificationView(APIView):
    permission_classes = [AllowAny]
    serializer_class = ResendVerificationSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        email = serializer.validated_data['email']
        try:
            user = User.objects.get(email=email, is_active=False)
            verification_token, created = EmailVerificationToken.objects.get_or_create(user=user)

            # Regenerate token
            verification_token.regenerate_token()

            # Send a new verification email
            verification_url = request.build_absolute_uri(
                reverse('verify-email', kwargs={'token': str(verification_token.token)})
            )
            send_mail(
                'Verify your email',
                f'Click the following link to verify your email: {verification_url}',
                settings.EMAIL_HOST_USER,
                [user.email],
                fail_silently=False,
            )

            return Response({"message": "A new verification email has been sent."}, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response({"error": "User does not exist or is already verified."}, status=status.HTTP_400_BAD_REQUEST)