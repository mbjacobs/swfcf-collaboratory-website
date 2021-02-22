#serializers.py

from rest_framework import serializers
from .models import Organization

class OrganizationSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Organization
		fields = ('id', 'name', 'ein')

