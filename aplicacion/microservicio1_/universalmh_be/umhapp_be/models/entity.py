from django.db import models

class Entity(models.Model):
    
    #Atributos Entity
    nit = models.CharField (max_length=13, unique=True, null=False)
    name = models.CharField( primary_key= True,max_length=100, unique=True, null=False)
    address = models.CharField(max_length=50, unique=True)
    phone = models.CharField(max_length=10, unique=True)
    email = models.EmailField()
