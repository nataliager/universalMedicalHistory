from rest_framework import views, status, generics
from rest_framework.response import Response
from umhapp_be.models import Doctor
from umhapp_be.serializers import UserSerializer
from rest_framework_simplejwt.backends import TokenBackend  
from django.conf import settings
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class UserView(views.APIView):
    
    #Metodo para crear un usuario
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        tokenData = {"username":request.data["username"], 
                     "password":request.data["password"]}
        tokenSerializer = TokenObtainPairSerializer(data=tokenData)
        tokenSerializer.is_valid(raise_exception=True)
                
        return Response(tokenSerializer.validated_data, status=status.HTTP_201_CREATED)
    
    #Metodo para obtener info de un usuario (filtro)
    #metodo GET funciona correctamente
    def get(self, request, *args, **kwargs):
        
        usuarios = Doctor.objects.filter(numero_documento__contains=request.query_params.get('numero_documento'))
        tmp = []
        for u in usuarios:
            tmp.append(UserSerializer(u).data)
        return Response({
            'usuarios': tmp
        })
        
#Vista concreta para recuperar, actualizar o eliminar una instancia de modelo
class DetailUserView(generics.RetrieveUpdateDestroyAPIView):
    
    queryset = Doctor.objects.all()
    serializer_class = UserSerializer
    
    #PATCH funciona correctamente
    #GET funciona correctamente
    #DELETE funciona correctamente
    #Preguntar profe porq aparece la contraseña en el JSON ---
    

    
        