# Generated by Django 3.2.9 on 2021-11-12 15:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('umhapp_be', '0002_rename_numero_documeto_doctor_numero_documento'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='entity',
            name='last_login',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='password',
        ),
    ]
