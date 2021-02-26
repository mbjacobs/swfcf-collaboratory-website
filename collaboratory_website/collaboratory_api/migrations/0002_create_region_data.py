from django.db import migrations, models


class Migration(migrations.Migration):

    def create_data(apps, schema_editor):
        Region = apps.get_model('collaboratory_api', 'Region')
        Region(rid=1, regionname="Hendry").save()
        Region(rid=2, regionname="Glades").save()
        Region(rid=3, regionname="Charlotte").save()
        Region(rid=4, regionname="Lee").save()
        Region(rid=5, regionname="Collier").save()

    dependencies = [
        ('collaboratory_api', '0001_initial_manual'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]