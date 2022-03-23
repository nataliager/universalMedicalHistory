from rest_framework import serializers
from umhapp_be.models.entity import Entity


class EntitySerializer(serializers.ModelSerializer):

    class Meta: 
        model = Entity
        fields = ['nit', 'name','address', 'phone', 'email'] #datos q van json

