from import_export import resources
from .models import Organization

class OrganizationResource(resources.ModelResource):
    class Meta:
        model = Organization
        skip_unchanged = True
        # exclude = ('id',)
        import_id_fields = ['org_id']
        # fields = ('ein', 'name', 'address1', 'address2', 'city', 'state', 'zip', 'country', 'phone', 'mission_stmt', 'email', 'website', 'facebook', 'twitter', 'founded', 'region_id')


# For import into different tables (Most likely just user and Org) may need to add another resource for Users