#collaboratory_api/urls.py
from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'organizations', views.OrganizationViewSet)
router.register(r'changemakers', views.ChangemakerViewSet)
router.register(r'regions', views.RegionViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'^organizations/$', views.organizations_list),
    re_path(r'^organizations/([0-9])$', views.organizations_detail),
    re_path(r'^changemakers/$', views.changemakers_list),
    re_path(r'^changemakers/([0-9])$', views.changemakers_detail),
]

