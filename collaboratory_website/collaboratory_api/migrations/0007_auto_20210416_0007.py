# Generated by Django 3.1.7 on 2021-04-16 00:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('collaboratory_api', '0006_event_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_id',
            field=models.IntegerField(db_column='EventID', primary_key=True, serialize=False),
        ),
    ]
