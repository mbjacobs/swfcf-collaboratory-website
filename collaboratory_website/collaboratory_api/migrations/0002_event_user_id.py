# Generated by Django 3.1.7 on 2021-04-05 20:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('collaboratory_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='user_id',
            field=models.ForeignKey(db_column='UserID', null=True, on_delete=django.db.models.deletion.SET_NULL, to='collaboratory_api.user'),
        ),
    ]
