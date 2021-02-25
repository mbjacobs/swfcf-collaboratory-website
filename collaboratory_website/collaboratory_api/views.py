from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializers import *
from .models import Organization, Changemakers, Regions

class OrganizationViewSet(viewsets.ModelViewSet):
	queryset=Organization.objects.all().order_by('name')
	serializer_class = OrganizationSerializer

class ChangemakersViewSet(viewsets.ModelViewSet):
    serializer_class = ChangemakersSerializer
    queryset = Changemakers.objects.all().order_by('cid')

class RegionsViewSet(viewsets.ModelViewSet):
    serializer_class = RegionsSerializer
    queryset = Regions.objects.all().order_by('rid')

@api_view(['GET', 'POST'])
def organizations_list(request):
    if request.method == 'GET':
        data = Organization.objects.all()

        serializer = OrganizationSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = OrganizationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def organizations_detail(request, pk):
    try:
        organization = Organization.objects.get(pk=pk)
    except Organization.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = OrganizationSerializer(organization, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

