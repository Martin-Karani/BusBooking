
from api.views import BusOperatorViewSet, ReviewsViewSet, RouteCardViewSet, RouteDetailsViewSet, TownsViewSet, UserViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import UserCreate


# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'bus operators', BusOperatorViewSet)
router.register(r'route details', RouteDetailsViewSet)
router.register(r'towns', TownsViewSet)
router.register(r'user', UserViewSet)

router.register(r'route card', RouteCardViewSet)

router.register(r'reviews', ReviewsViewSet)


# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),

    path('create/', UserCreate.as_view(), name="create_user"),
    # path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
    #      name='blacklist'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
