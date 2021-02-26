from django.contrib import admin
from .models import Organization, Region, Changemaker

admin.site.register(Organization)
admin.site.register(Region)
admin.site.register(Changemaker)