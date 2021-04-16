from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.views.generic.base import TemplateView

# For user testing...
from rest_framework.views import APIView

from .serializers import *
from .models import *

from django.contrib.auth import login
from django.shortcuts import redirect, render
from django.urls import reverse
from collaboratory_api.forms import CustomUserCreationForm
from tablib import Dataset
from .resources import OrganizationResource
from rest_framework import filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import *

from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.csrf import csrf_exempt
from braces.views import CsrfExemptMixin

class RegionViewSet(viewsets.ModelViewSet):
    serializer_class = RegionSerializer
    queryset = Region.objects.all().order_by('region_id')

class RoleViewSet(viewsets.ModelViewSet):
    serializer_class = RoleSerializer
    queryset = Role.objects.all().order_by('role_id')

class CauseViewSet(viewsets.ModelViewSet):
    serializer_class = CauseSerializer
    queryset = Cause.objects.all().order_by('cause_id')

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all().order_by('user_id')

# specific view for person search
class PersonSearchFilter(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['$first_name', '$last_name']

class OrganizationViewSet(viewsets.ModelViewSet):
    serializer_class = OrganizationSerializer
    queryset=Organization.objects.all().order_by('name')

# specific view for organization search
class OrganizationSearchFilter(generics.ListAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['$name']

class OrganizationFilterForm(generics.ListAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['region_id', 'cause_id']

class EventViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all().order_by('event_id')

class ChannelViewSet(viewsets.ModelViewSet):
    serializer_class = ChannelSerializer
    queryset = Channel.objects.all().order_by('channel_id')

class AnnouncementViewSet(viewsets.ModelViewSet):
    serializer_class = AnnouncementSerializer
    queryset = Announcement.objects.all().order_by('announcement_id')

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all().order_by('post_id')

class OrganizationRegionViewSet(viewsets.ModelViewSet):
    serializer_class = OrganizationRegionSerializer
    queryset = Organization_Region.objects.all().order_by('id')

class OrganizationCauseViewSet(viewsets.ModelViewSet):
    serializer_class = OrganizationCauseSerializer
    queryset = Organization_Cause_Alignment.objects.all().order_by('id')

class UserEventViewSet(viewsets.ModelViewSet):
    serializer_class = UserEventSerializer
    queryset = User_Event_Attendance.objects.all().order_by('id')

## Organization API Views: Former per React ##
# Now, we are rending only results from the search.

# @api_view(['GET', 'POST'])
# def organizations_list(request):
#     if request.method == 'GET':
#         data = Organization.objects.all()
#         serializer = OrganizationSerializer(data, context={'request': request}, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = OrganizationSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['PUT', 'DELETE'])
# def organizations_detail(request, pk):
#     try:
#         organization = Organization.objects.get(pk=pk)
#     except Organization.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'PUT':
#         serializer = OrganizationSerializer(organization, data=request.data,context={'request': request})
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_204_NO_CONTENT)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         organization.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

## User API Views ##
@api_view(['GET', 'POST'])
def users_list(request):
    if request.method == 'GET':
        data = User.objects.all()
        serializer = UserSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def users_detail(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


## Current User API View ##
@api_view(['GET'])
def current_user(request):
    user = request.user
    return Response({
        'id': user.id,
        'username': user.username,
        'first name': user.first_name,
        'last name': user.last_name,
        'email': user.email,
    })

## Events API View ##
# @ensure_csrf_cookie
@api_view(['GET', 'POST'])
@csrf_exempt
def events_list(CsrfExemptMixin, request):
    authentication_classes = []

    if request.method == 'GET':
        data = Event.objects.all()
        serializer = EventSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EventSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        print(request.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

## Channels API Views ##
@api_view(['GET', 'POST'])
def channels_list(request):
    if request.method == 'GET':
        data = Channel.objects.all()
        serializer = ChannelSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ChannelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def channels_detail(request, pk):
    try:
        channel = Channel.objects.get(pk=pk)
    except Channel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = EventSerializer(
            channel, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        channel.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

## Posts API Views ##
@api_view(['GET', 'POST'])
def posts_list(request):
    if request.method == 'GET':
        data = Post.objects.all()
        serializer = PostSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def posts_detail(request, pk):
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = EventSerializer(
            post, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Registration
def register(request):
    if request.method == "GET":
        return render(
            request, "users/register.html",
            {"form": CustomUserCreationForm}
        )
    elif request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect(reverse("react_app"))
    return render(request, 'users/register.html',{"form": form})

#login
def landing(request):
    return render(request, "others/landing.html")


# @method_decorator(login_required, name='dispatch') #We will want this later for login
class MainView(TemplateView):
    # our hybrid template, shown above
    template_name = 'dashboard.html'
    def get_context_data(self, **kwargs):
        return {'context_variable': 'value'}


# Import View, Organization

def simple_upload(request):
    if request.method == 'POST':
        organization_resource = OrganizationResource()
        dataset = Dataset()
        new_orgs = request.FILES['myfile']

        imported_data = dataset.load(new_orgs.read())
        result = organization_resource.import_data(dataset, dry_run=True)  # Test the data import

        if not result.has_errors():
            organization_resource.import_data(dataset, dry_run=False)  # Actually import now

    return render(request, 'core/simple_upload.html')
