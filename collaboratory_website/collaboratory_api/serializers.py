#serializers.py

from rest_framework import serializers
from .models import Organization, Regions, Changemakers

class OrganizationSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Organization
		fields = ('ein', 'name', 'grantid', 'address1', 'address2', 'city', 'state', 'zip', 'country', 'phone', 'missionstmt', 'website', 'causes', 'regionid' )

class RegionsSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Regions
		fields = ('rid', 'regionname')

class ChangemakersSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Changemakers
		fields = ('cid', 'fname', 'lname', 'orgein', 'regionid' )