#collaboratory_api/urls.py
from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework import routers
from . import views

from django.conf.urls import include, url
from collaboratory_api.views import dashboard, register

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
    # Registration 
    url(r"^accounts/", include("django.contrib.auth.urls")),
    url(r"^dashboard/", dashboard, name="dashboard"),
    url(r"^register/", register, name="register"),
    
    # Rest API + React (Working)
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'^organizations/$', views.organizations_list),
    re_path(r'^organizations/([0-9])$', views.organizations_detail),
    re_path(r'^users/$', views.users_list),
    re_path(r'^users/([0-9])$', views.users_detail),
    
    #url(r'^signup/$', views.signup, name='signup'),
    #url(r'^users_test/$', views.UserCreate.as_view(), name='account-create'),
]

