from rest_framework import serializers
import re
from .models import Adopter, Shelter, Pet, AdoptionRequest, Collaboration, Administrator, UserManagement, SearchFilter

class AdopterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adopter
        fields = '__all__'

class ShelterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shelter
        fields = '__all__'

class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = '__all__'

    def validate_photos(self, value):
        url_pattern = re.compile(r'https?://(?:[-\w.]|(?:%[\da-fA-F]{2}))+')
        if not url_pattern.match(value):
            raise serializers.ValidationError("Las fotos deben ser una URL válida.")
        return value

    def validate_breed(self, value):
        allowed_breeds = ["Gato", "Perro"]
        if value not in allowed_breeds:
            raise serializers.ValidationError(f"La raza debe ser 'Gato' o 'Perro'.")
        return value

    def validate_size(self, value):
        allowed_sizes = ["Pequeño", "Mediano", "Grande"]
        if value not in allowed_sizes:
            raise serializers.ValidationError(f"El tamaño debe ser 'Pequeño', 'Mediano' o 'Grande'.")
        return value

    def validate_health_status(self, value):
        allowed_statuses = ["Bien de salud", "Con medicación", "Avanzada edad"]
        if value not in allowed_statuses:
            raise serializers.ValidationError(f"El estado de salud debe ser 'Bien de salud', 'Con medicación' o 'Avanzada edad'.")
        return value

class AdoptionRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdoptionRequest
        fields = '__all__'

class CollaborationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collaboration
        fields = '__all__'

class AdministratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administrator
        fields = '__all__'

class UserManagementSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserManagement
        fields = '__all__'

    def validate(self, data):
        if not data.get("adopter") and not data.get("shelter"):
            raise serializers.ValidationError("Debes proporcionar al menos un adoptante o un refugio.")
        return data

class SearchFilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchFilter
        fields = '__all__'
