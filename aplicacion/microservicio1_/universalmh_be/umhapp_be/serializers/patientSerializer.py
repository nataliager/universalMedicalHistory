from rest_framework import serializers
from umhapp_be.models.patient import Patient


class PatientSerializer(serializers.ModelSerializer):

    class Meta: #siempre se tiene que llamar Meta
        model = Patient #modelo
        fields = ['tipo_documento', 'numero_documento', 'fullname', 'sex', 'age','dateBirth','bloodType','EPS', 'address', 'phone', 'email', 'ocupation', 'maritalStatus'] #datos q van json

