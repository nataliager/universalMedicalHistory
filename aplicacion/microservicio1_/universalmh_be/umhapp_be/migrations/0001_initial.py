# Generated by Django 3.2.9 on 2021-11-12 03:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Entity',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('nit', models.CharField(max_length=13, unique=True)),
                ('name', models.CharField(max_length=100, primary_key=True, serialize=False, unique=True)),
                ('address', models.CharField(max_length=50, unique=True)),
                ('phone', models.CharField(max_length=10, unique=True)),
                ('email', models.EmailField(max_length=254)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('tipo_documento', models.CharField(choices=[('CC', 'Cedula'), ('PA', 'Pasaporte'), ('CE', 'Cedula de extranjería'), ('TI', 'Tarjeta de identidad'), ('RC', 'Registro civil')], default='CC', max_length=2)),
                ('numero_documeto', models.CharField(max_length=13, primary_key=True, serialize=False, unique=True)),
                ('fullname', models.CharField(max_length=100)),
                ('sex', models.CharField(choices=[('F', 'Femenino'), ('M', 'Masculino'), ('O', 'Otros')], default='O', max_length=1)),
                ('age', models.IntegerField()),
                ('dateBirth', models.DateTimeField()),
                ('bloodType', models.CharField(choices=[('O+', 'O+'), ('O-', 'O-'), ('A+', 'A+'), ('A-', 'A-'), ('B+', 'B+'), ('B-', 'B-'), ('AB+', 'AB+'), ('AB-', 'AB-')], default='O+', max_length=3)),
                ('EPS', models.CharField(max_length=20)),
                ('address', models.CharField(max_length=50, unique=True)),
                ('phone', models.CharField(max_length=10, unique=True)),
                ('email', models.EmailField(max_length=254)),
                ('ocupation', models.CharField(max_length=20)),
                ('maritalStatus', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('tipo_documento', models.CharField(choices=[('CC', 'Cedula'), ('PA', 'Pasaporte'), ('CE', 'Cedula de extranjería')], default='CC', max_length=2)),
                ('numero_documeto', models.CharField(max_length=13, primary_key=True, serialize=False, unique=True)),
                ('fullname', models.CharField(max_length=100)),
                ('sex', models.CharField(choices=[('F', 'Femenino'), ('M', 'Masculino'), ('O', 'Otros')], default='O', max_length=1)),
                ('age', models.IntegerField()),
                ('dateBirth', models.DateTimeField()),
                ('address', models.CharField(max_length=50, unique=True)),
                ('phone', models.CharField(max_length=10, unique=True)),
                ('email', models.EmailField(max_length=254)),
                ('username', models.CharField(max_length=50, unique=True)),
                ('password', models.CharField(max_length=100)),
                ('professionalCard', models.CharField(max_length=20, unique=True)),
                ('entity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='umhapp_be.entity')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]