from rest_framework import serializers
from umhapp_be.models.user import Doctor
from umhapp_be.serializers.entitySerializer import EntitySerializer

class UserSerializer(serializers.ModelSerializer):

    class Meta: #siempre se tiene que llamar Meta
        model = Doctor #modelo
        fields = ['tipo_documento', 'numero_documento', 'fullname', 'sex', 'age','dateBirth','address', 'phone', 'email', 'username','password','professionalCard', 'entity'] #datos q van json

    #metodos - polimorfismo por herencia de clase padre modelSerializer
    #Trae un diccionario(validated data) info del json
        def create(self, validated_data):
            userInstance = Doctor.objects.create(**validated_data)#json -->crea un obj de tipo user
            return userInstance #instancia de user
        
        def to_representation(self, obj): #conv de obj(base datos) a jeison
            user = Doctor.objects.get(numero_documento=obj.numero_documento) #busco obj user --> selected 
            return {
                        'tipo_documento': user.tipo_documento,
                        'numero_documento': user.numero_documento,
                        'fullname': user.fullname,
                        'sex': user.sex,
                        'age': user.age,
                        'dateBirth': user.dateBirth,
                        'address': user.address,
                        'phone' : user.phone,
                        'email': user.email,
                        'username': user.username,
                        'professionalCard': user.professionalCard,
                        'entity': user.entity
                }  
                
