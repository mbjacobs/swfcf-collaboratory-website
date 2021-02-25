from django.contrib import admin
from .models import Organization, Regions, Changemakers

admin.site.register(Organization)
admin.site.register(Regions)
admin.site.register(Changemakers)