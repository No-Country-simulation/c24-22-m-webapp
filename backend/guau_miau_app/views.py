from rest_framework import viewsets, status
from rest_framework.response import Response
from django.db.models import Q
from .models import Adopter, Shelter, Pet, AdoptionRequest, Collaboration, Administrator, UserManagement, SearchFilter
from .serializers import AdopterSerializer, ShelterSerializer, PetSerializer, AdoptionRequestSerializer, CollaborationSerializer, AdministratorSerializer, UserManagementSerializer, SearchFilterSerializer

class AdopterViewSet(viewsets.ModelViewSet):
    queryset = Adopter.objects.all()
    serializer_class = AdopterSerializer

class ShelterViewSet(viewsets.ModelViewSet):
    queryset = Shelter.objects.all()
    serializer_class = ShelterSerializer

class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer

class AdoptionRequestViewSet(viewsets.ModelViewSet):
    queryset = AdoptionRequest.objects.all()
    serializer_class = AdoptionRequestSerializer

class CollaborationViewSet(viewsets.ModelViewSet):
    queryset = Collaboration.objects.all()
    serializer_class = CollaborationSerializer

class AdministratorViewSet(viewsets.ModelViewSet):
    queryset = Administrator.objects.all()
    serializer_class = AdministratorSerializer

class UserManagementViewSet(viewsets.ModelViewSet):
    queryset = UserManagement.objects.all()
    serializer_class = UserManagementSerializer

class SearchFilterViewSet(viewsets.ViewSet):
    def create(self, request):
        filters = Q()
        if "species" in request.data:
            filters &= Q(species__iexact=request.data["species"])
        if "breed" in request.data:
            filters &= Q(breed__iexact=request.data["breed"])
        if "min_age" in request.data:
            filters &= Q(age__gte=request.data["min_age"])
        if "max_age" in request.data:
            filters &= Q(age__lte=request.data["max_age"])
        if "size" in request.data:
            filters &= Q(size__iexact=request.data["size"])
        if "location" in request.data:
            filters &= Q(location__iexact=request.data["location"])

        results = Pet.objects.filter(filters)
        serializer = PetSerializer(results, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
