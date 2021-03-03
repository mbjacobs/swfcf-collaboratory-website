#serializers.py

from rest_framework import serializers
from .models import Organization, Region, Changemaker, User

class OrganizationSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Organization
		fields = ('ein', 'name','address1', 'address2', 'city', 'state', 'zip', 'country', 'phone', 'missionstmt', 'website', 'causes', 'regionid' )

class RegionSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Region
		fields = ('rid', 'regionname')

class ChangemakerSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Changemaker
		fields = ('cid', 'fname', 'lname', 'email', 'orgein', 'regionid' )

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('uid', 'firstname', 'lastname', 'preferredpronouns')
