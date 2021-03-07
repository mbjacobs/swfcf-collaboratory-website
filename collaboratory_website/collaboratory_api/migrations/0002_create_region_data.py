from django.db import migrations, models


class Migration(migrations.Migration):

    def create_data(apps, schema_editor):
        Region = apps.get_model('collaboratory_api', 'Region')
        Region(region_id=1, name="Hendry").save()
        Region(region_id=2, name="Glades").save()
        Region(region_id=3, name="Charlotte").save()
        Region(region_id=4, name="Lee").save()
        Region(region_id=5, name="Collier").save()
        Region(region_id=6, name="Other").save()

    dependencies = [
        ('collaboratory_api', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]