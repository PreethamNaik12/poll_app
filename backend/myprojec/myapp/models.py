# myapp/models.py
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
import uuid

from myprojec.settings import EMAIL_TOKEN_EXPIRY

class EmailVerificationToken(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    token = models.UUIDField(default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(default=timezone.now)

    def regenerate_token(self):
        self.token = uuid.uuid4()
        self.created_at = timezone.now()
        self.save()

    def is_valid(self):
        expiry_date = self.created_at + EMAIL_TOKEN_EXPIRY
        return timezone.now() <= expiry_date
