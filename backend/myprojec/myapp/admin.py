from django.contrib import admin

# Register your models here.
from .models import EmailVerificationToken

admin.site.register(EmailVerificationToken)