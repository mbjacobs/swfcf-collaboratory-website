from django.shortcuts import render

from rest_framework import viewsets

from .serializers import OrganizationSerializer
from .models import Organization

class OrganizationViewSet(viewsets.ModelViewSet):
	queryset=Organization.objects.all().order_by('name')
	serializer_class = OrganizationSerializer
