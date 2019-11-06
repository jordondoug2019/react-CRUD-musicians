from django.db import models


# Create your models here.
class MusicianModel(models.Model):
    artistName = models.CharField(max_length=200)
    genre = models.CharField(max_length=30)
    popularSong = models.CharField(max_length=200)
    favoriteAlbum = models.CharField(max_length=200)
