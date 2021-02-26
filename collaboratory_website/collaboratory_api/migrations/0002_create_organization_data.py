from django.db import migrations, models


class Migration(migrations.Migration):

    def create_data(apps, schema_editor):
        Region = apps.get_model('collaboratory_api', 'Region')
        test_region = Region.objects.get(rid=1)

        Organization = apps.get_model('collaboratory_api', 'Organization')
        Organization(ein=810830144, name="ACLU of Florida Foundation", address1="1804 Garnet Ave.", city="San Diego", state="CA", zip=92109, country="USA", phone="00000000", missionstmt="To provide advocacy, awareness and alliances needed for every veteran to succeed in the modern world.", website="", regionid=test_region).save()

    dependencies = [
        ('collaboratory_api', '0002_create_region_data'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]