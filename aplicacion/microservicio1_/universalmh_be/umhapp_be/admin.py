from django.contrib import admin
from .models.user import Doctor
from .models.entity import Entity
from .models.patient import Patient

# Register your models here.
admin.site.register(Entity)
admin.site.register(Doctor)
admin.site.register(Patient)