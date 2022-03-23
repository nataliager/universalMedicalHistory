from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, UserManager,BaseUserManager,PermissionsMixin
from django.contrib.auth.hashers import make_password
from .entity import Entity

#Crea los usuarios en el sistema de autenticación
class UserManager(BaseUserManager):
    
    #Crea el usuario, lo guarda en la BD y retorna el usuario
    def create_user(self, username, password=None):
        if not username:
            raise ValueError('Users must have an username')
        user = self.model(username=username)#Usuario de autenticación
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, username, password):
        
        user = self.create_user(
            username=username,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user
    
class Doctor(AbstractBaseUser, PermissionsMixin):
    
    #Definición de constantes
    CEDULA = 'CC'
    PASAPORTE = 'PA'
    CEDULAEXTRANJERIA = 'CE'
    FEMENINO = 'F'
    MASCULINO = 'M'
    OTROS = 'O'
    
    #Definición diccionarios para selección
    DOCUMENT_CHOICES = [
        (CEDULA, 'Cedula'),
        (PASAPORTE, 'Pasaporte'),
        (CEDULAEXTRANJERIA, 'Cedula de extranjería'),   
    ]
    
    GENDER_CHOICES = [
        (FEMENINO, 'Femenino'),
        (MASCULINO, 'Masculino'),
        (OTROS, 'Otros'),   
    ]
    
    #Atributos 
    tipo_documento = models.CharField(max_length=2, choices=DOCUMENT_CHOICES,default=CEDULA,)
    numero_documento = models.CharField (max_length=13, primary_key= True, unique=True, null=False)
    fullname = models.CharField(max_length=100, unique=False, null=False)
    sex = models.CharField(max_length=1, choices=GENDER_CHOICES,default=OTROS,)
    age = models.IntegerField(null=False)
    dateBirth = models.DateTimeField (null=False)
    address = models.CharField(max_length=50, unique=True)
    phone = models.CharField(max_length=10, unique=True)
    email = models.EmailField()
    username = models.CharField(max_length=50, unique=True, null=False)
    password= models.CharField(null=False, max_length=100)
    professionalCard = models.CharField (max_length=20, unique=True, null=False)
    entity = models.ForeignKey(Entity,on_delete=models.CASCADE,)
    
    
    #Metodo para encriptar la contraseña
    def save(self, **kwargs):
        some_salt = 'mMUj0DrIK6vgtdIYepkIxN' 
        self.password = make_password(self.password, some_salt)
        super().save(**kwargs)
        
    #Objeto para la autenticacion
    objects = UserManager()
    USERNAME_FIELD = 'username'