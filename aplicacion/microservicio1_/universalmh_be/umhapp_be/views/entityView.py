from rest_framework import views, status, generics
from rest_framework.response import Response
from umhapp_be.models import Entity
from umhapp_be.serializers import EntitySerializer
from rest_framework_simplejwt.backends import TokenBackend
from django.conf import settings
from rest_framework.permissions import IsAuthenticated

class EntityView(views.APIView):
    
    #Metodo para obtener info de una entidad (filtro)
    #metodo GET funciona correctamente
    def get(self, request, *args, **kwargs):
        
        entidades = Entity.objects.filter(name__contains=request.query_params.get('name'))
        tmp = []
        for e in entidades:
            tmp.append(EntitySerializer(e).data)
        return Response({
            'entidades': tmp
        })
        
    #Metodo para crear una entidad
    #metodo POST funciona correctamente
    def post(self, request, *args, **kwargs):
        serializer = EntitySerializer(data=request.data)
        valid = serializer.is_valid()
        if valid:
            serializer.save()
            return Response("Entidad registrada exitosamente!")
        else:
            return Response("Fallo en el registro de la entidad")

#Vista concreta para recuperar, actualizar o eliminar una instancia de modelo
class DetailEntityView(generics.RetrieveUpdateDestroyAPIView):
    
    queryset = Entity.objects.all()
    serializer_class = EntitySerializer
    
    #PATCH funciona correctamente
    #GET funciona correctamente
    #DELETE funciona correctamente