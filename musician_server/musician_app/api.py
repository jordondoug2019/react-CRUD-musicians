from .models import MusicianModel
from rest_framework import viewsets
from .serializers import MusicianSerializer


class MusicianViewSet(viewsets.ModelViewSet):
    queryset = MusicianModel.objects.all()
    serializer_class = MusicianSerializer
