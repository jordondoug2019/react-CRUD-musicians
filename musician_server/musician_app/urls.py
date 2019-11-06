from rest_framework import routers
from .api import MusicianViewSet

router = routers.DefaultRouter()
router.register('musicians', MusicianViewSet)

urlpatterns = router.urls