from django.db import models

class Patient(models.Model):
    
    #Definición de constantes
    CEDULA = 'CC'
    PASAPORTE = 'PA'
    CEDULAEXTRANJERIA = 'CE'
    TARJETAIDENTIDAD = 'TI'
    REGISTROCIVIL = 'RC'
    
    FEMENINO = 'F'
    MASCULINO = 'M'
    OTROS = 'O'
    
    OPOSITIVO = 'O+'
    ONEGATIVO = 'O-'
    APOSITIVO = 'A+'
    ANEGATIVO= 'A-'
    BPOSITIVO = 'B+'
    BNEGATIVO= 'B-'
    ABPOSITIVO = 'AB+'
    ABNEGATIVO= 'AB-'
    
    
    
    #Definición diccionarios para selección
    DOCUMENT_CHOICES = [
        (CEDULA, 'Cedula'),
        (PASAPORTE, 'Pasaporte'),
        (CEDULAEXTRANJERIA, 'Cedula de extranjería'),   
        (TARJETAIDENTIDAD, 'Tarjeta de identidad'),
        (REGISTROCIVIL, 'Registro civil')
    ]
    
    GENDER_CHOICES = [
        (FEMENINO, 'Femenino'),
        (MASCULINO, 'Masculino'),
        (OTROS, 'Otros'),   
    ]
    
    BLOODTYPE_CHOICES = [
        (OPOSITIVO, 'O+'),
        (ONEGATIVO, 'O-'),
        (APOSITIVO ,'A+'),
        (ANEGATIVO, 'A-'),
        (BPOSITIVO, 'B+'),
        (BNEGATIVO, 'B-'),
        (ABPOSITIVO,'AB+'),
        (ABNEGATIVO, 'AB-'),  
    ]
    
    EPS_CHOICES = [
        
     
    ]
    
    #Atributos Patient
    tipo_documento = models.CharField(max_length=2, choices=DOCUMENT_CHOICES,default=CEDULA,)
    numero_documento = models.CharField (max_length=13, primary_key= True, unique=True, null=False)
    fullname = models.CharField(max_length=100, unique=False, null=False)
    sex = models.CharField(max_length=1, choices=GENDER_CHOICES,default=OTROS,)
    age = models.IntegerField(null=False)
    dateBirth = models.DateTimeField (null=False)
    bloodType = models.CharField(max_length=3, choices=BLOODTYPE_CHOICES,default=OPOSITIVO,)
    EPS = models.CharField(max_length=20, null=False)
    address = models.CharField(max_length=50, unique=True)
    phone = models.CharField(max_length=10, unique=True)
    email = models.EmailField()
    ocupation = models.CharField(max_length=20)
    maritalStatus = models.CharField(max_length=20)


