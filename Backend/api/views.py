
# from django.db import models
from api.models import Reviews,  RouteCard, RouteDetail, BusOperator, Town, User
from api.serializers import BusOperatorSerializer, ReviewsSerializer, RouteCardSerializer, RouteDetailsSerializer, TownsSerializer, UserSerializer, UserSerializer

from rest_framework import permissions, viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter


# copied imports

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny

# Create your views here.


class UserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BusOperatorViewSet(viewsets.ModelViewSet):
    queryset = BusOperator.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = BusOperatorSerializer


class TownsViewSet(viewsets.ModelViewSet):
    queryset = Town.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = TownsSerializer


class RouteCardViewSet(viewsets.ModelViewSet):
    queryset = RouteCard.objects.all()
    serializer_class = RouteCardSerializer

    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filtersets_fields = ['bus_operator', 'fare']
    ordering = ['bookings']
    ordering_fields = ['fare', 'rating', 'bookings']
    search_fields = ['=depart_from__name', '=arrive_to__name', '=day']
    permission_classes = [permissions.AllowAny]


class RouteDetailsViewSet(viewsets.ModelViewSet):
    queryset = RouteDetail.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RouteDetailsSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer
    # lookup_field = 'phone_no'


class ReviewsViewSet(viewsets.ModelViewSet):
    queryset = Reviews.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ReviewsSerializer
