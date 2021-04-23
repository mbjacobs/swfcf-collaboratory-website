from import_export.admin import ImportExportModelAdmin
from django.contrib import admin
from .models import *
from .models import Organization
from .resources import OrganizationResource

admin.site.site_header = "Collaboratory Admin"
admin.site.site_title = "Collaboratory Admin Portal"
admin.site.index_title = "Welcome to Collaboratory Admin Portal"

admin.site.register(Region)
admin.site.register(Role)
admin.site.register(Cause)
# admin.site.register(Organization)

#import for Organization admin registration. May need to do this for all?
@admin.register(Organization)
class OrganizationAdmin(ImportExportModelAdmin):
    resource_class = OrganizationResource

    # exclude = ('id',)

admin.site.register(User)
admin.site.register(Event)
admin.site.register(Channel)
admin.site.register(Announcement)
admin.site.register(Post)
admin.site.register(Organization_Region)
admin.site.register(Organization_Cause_Alignment)
admin.site.register(User_Event_Attendance)



