#collaboratory_api/urls.py
from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework import routers
from . import views
from django.views.generic.base import TemplateView
from django.conf.urls import url
from collaboratory_api.views import landing

from django.conf.urls import include, url
from collaboratory_api.views import register, landing

from .views import *

router = routers.DefaultRouter()
router.register(r'regions', views.RegionViewSet)
router.register(r'roles', views.RoleViewSet)
router.register(r'causes', views.CauseViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'organizations', views.OrganizationViewSet)
router.register(r'events', views.EventViewSet)
router.register(r'channels', views.ChannelViewSet)
router.register(r'announcement', views.AnnouncementViewSet)
router.register(r'post', views.PostViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    # this route catches the "naked" URL with no path specified. you can link to it in most places
    path(r'dashboard/', views.MainView.as_view(), name='react_app'),  
    # this route catches any url below the main one, so the path can be passed to the front end
    path(r'dashboard/<path:path>', views.MainView.as_view(), name='react_app_with_path'),
    #login #what's the difference between path and url? path & re_path?
    url(r"^accounts/", include("django.contrib.auth.urls")),
    re_path(r'^landing', views.landing, name='landing'),
    #registration
    url(r"^register/", register, name="register"),
    #current user
    re_path(r'^currentuser/$', views.current_user),


    # Rest API + React (Working)
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # re_path(r'^organizations/$', views.organizations_list),
    # re_path(r'^organizations/([0-9])$', views.organizations_detail),
    re_path(r'^users/$', views.users_list),
    re_path(r'^userss/([0-9])$', views.users_detail),
    re_path(r'^events/$', views.events_list),
    re_path(r'^post/$', views.posts_list),
    # this route catches the "naked" URL with no path specified. you can link to it in most places
    path(r'dashboard/', views.MainView.as_view(), name='react_app'),  
    # this route catches any url below the main one, so the path can be passed to the front end
    path(r'dashboard/<path:path>', views.MainView.as_view(), name='react_app_with_path'),
    #login #what's the difference between path and url? path & re_path?
    path('accounts/', include('django.contrib.auth.urls')),
    re_path(r'^landing', views.landing, name='landing'),
    # url(r"^landing/", landing, name="landing"),
    # url(r"^dashboard/", dashboard, name="dashboard"),

    # Search filters
    path('orgsearch/', OrganizationSearchFilter.as_view(), name = 'Organization Search'),
    path('orgfilter/', OrganizationFilterForm.as_view(), name = 'Organization Filter'),

    path('personsearch/', PersonSearchFilter.as_view(), name = 'Person Search'),

    # Discussion Post Filter
    path('postfilter/', PostFilter.as_view(), name = 'Post Filter')

]

