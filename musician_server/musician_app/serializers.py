from rest_framework import serializers
from .models import MusicianModel


class MusicianSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicianModel
        fields = "__all__"
