from django.db import migrations, models

def create_data(apps, schema_editor):
    Role = apps.get_model('collaboratory_api', 'Role')
    Role(role_id=1, name="Administrator").save()
    Role(role_id=2, name="Changemaker").save()
    Role(role_id=3, name="Volunteer").save()
    Role(role_id=4, name="Other").save()


class Migration(migrations.Migration):

    dependencies = [
        ('collaboratory_api', '0002_create_organization_data'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]