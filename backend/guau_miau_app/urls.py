from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdopterViewSet, ShelterViewSet, PetViewSet, AdoptionRequestViewSet, CollaborationViewSet, AdministratorViewSet, UserManagementViewSet, SearchFilterViewSet

router = DefaultRouter()
router.register(r'adopters', AdopterViewSet)
router.register(r'shelters', ShelterViewSet)
router.register(r'pets', PetViewSet)
router.register(r'adoption-requests', AdoptionRequestViewSet)
router.register(r'collaborations', CollaborationViewSet)
router.register(r'administrators', AdministratorViewSet)
router.register(r'user-managements', UserManagementViewSet)
router.register(r'search-filters', SearchFilterViewSet)

urlpatterns = [
    path('', include(router.urls)),
]