from django.db import migrations, models

def create_data(apps, schema_editor):
    Region = apps.get_model('collaboratory_api', 'Region')
    Region(region_id=1, name="Hendry").save()
    Region(region_id=2, name="Glades").save()
    Region(region_id=3, name="Charlotte").save()
    Region(region_id=4, name="Lee").save()
    Region(region_id=5, name="Collier").save()
    Region(region_id=6, name="Other").save()


class Migration(migrations.Migration):

    dependencies = [
        ('collaboratory_api', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]