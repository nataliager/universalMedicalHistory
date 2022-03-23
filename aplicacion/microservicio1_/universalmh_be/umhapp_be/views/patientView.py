from rest_framework import views, status, generics
from rest_framework.response import Response
from umhapp_be.models import Patient
from umhapp_be.serializers import PatientSerializer
from rest_framework_simplejwt.backends import TokenBackend
from django.conf import settings
from rest_framework.permissions import IsAuthenticated

class PatientView(views.APIView):
    
    #Metodo para obtener info de un paciente (filtro)
    #Metodo GET funciona correctamente
    def get(self, request, *args, **kwargs):
        
        pacientes = Patient.objects.filter(numero_documento__contains=request.query_params.get('numero_documento')) 
        tmp = []
        for p in pacientes:
            tmp.append(PatientSerializer(p).data)
        return Response({
            'pacientes': tmp
        })
        
    
        
    #Metodo para crear un paciente
    #Metodo POST funciona correctamente
    def post(self, request, *args, **kwargs):
        serializer = PatientSerializer(data=request.data)
        valid = serializer.is_valid()
        if valid:
            serializer.save()
            return Response("Paciente registrado exitosamente!!")
        else:
            return Response("Fallo en el registro de paciente")

#Vista concreta para recuperar, actualizar o eliminar una instancia de modelo
class DetailPatientView(generics.RetrieveUpdateDestroyAPIView):
    
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    
    #GET funciona correctamente
    #PATCH funciona correctamente
    #DELETE funciona correctamente