# Generated by Django 3.2.9 on 2021-11-19 03:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('umhapp_be', '0005_rename_numero_documeto_patient_numero_documento'),
    ]

    operations = [
        migrations.RenameField(
            model_name='doctor',
            old_name='entity',
            new_name='institution',
        ),
    ]
