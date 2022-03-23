"""umh_be URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from umhapp_be.views import UserView
from umhapp_be.views import PatientView
from umhapp_be.views import DetailPatientView
from umhapp_be.views import EntityView
from umhapp_be.views import DetailEntityView
from umhapp_be.views import DetailUserView
from umhapp_be.views import VerifyTokenView
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)

urlpatterns = [
    
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    
    path('verifyToken/',VerifyTokenView.as_view()),
    
    path('user/', UserView.as_view()),
    path('user/<str:pk>/', DetailUserView.as_view()),
    
    path('patient/', PatientView.as_view(), name='Pacientes'),
    path('patient/<str:pk>', DetailPatientView.as_view(), name='Paciente'),
    
    path('entity/', EntityView.as_view(), name='Pacientes'),
    path('entity/<str:pk>', DetailEntityView.as_view(), name='Paciente'),
]
