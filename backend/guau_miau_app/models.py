from django.db import models

class Adopter(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=255)
    address = models.CharField(max_length=255)

class Shelter(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    shelter_type = models.CharField(max_length=20, choices=[('private', 'Private'), ('organization', 'Organization')])
    location = models.CharField(max_length=255)

class Pet(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField()
    photos = models.TextField()
    breed = models.CharField(max_length=255)
    size = models.CharField(max_length=255)
    health_status = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    shelter = models.ForeignKey(Shelter, on_delete=models.CASCADE)

class AdoptionRequest(models.Model):
    adopter = models.ForeignKey(Adopter, on_delete=models.CASCADE)
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    adoption_reason = models.TextField()
    pet_experience = models.TextField(blank=True, null=True)
    request_date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')])

class Collaboration(models.Model):
    shelter = models.ForeignKey(Shelter, on_delete=models.CASCADE)
    collaboration_type = models.CharField(max_length=20, choices=[('donation', 'Donation'), ('volunteering', 'Volunteering')])
    details = models.TextField()

class Administrator(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

class UserManagement(models.Model):
    admin = models.ForeignKey(Administrator, on_delete=models.CASCADE)
    adopter = models.ForeignKey(Adopter, on_delete=models.CASCADE, blank=True, null=True)
    shelter = models.ForeignKey(Shelter, on_delete=models.CASCADE, blank=True, null=True)
    action = models.CharField(max_length=20, choices=[('activate', 'Activate'), ('deactivate', 'Deactivate'), ('delete', 'Delete')])
    action_date = models.DateField(auto_now_add=True)

class SearchFilter(models.Model):
    species = models.CharField(max_length=255)
    breed = models.CharField(max_length=255)
    min_age = models.IntegerField()
    max_age = models.IntegerField()
    size = models.CharField(max_length=255)
    location = models.CharField(max_length=255)