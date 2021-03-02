from django.db import migrations, models


class Migration(migrations.Migration):

    def create_data(apps, schema_editor):
        Organization = apps.get_model('collaboratory_api', 'Organization')
        test_org = Organization.objects.get(ein=810830144)
        Region = apps.get_model('collaboratory_api', 'Region')
        test_region = Region.objects.get(rid=1)

        Changemaker = apps.get_model('collaboratory_api', 'Changemaker')
        Changemaker(cid=1, fname="Changey", lname="McChangemaker", orgein=test_org, regionid=test_region).save()


    dependencies = [
        ('collaboratory_api', '0002_create_organization_data'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]