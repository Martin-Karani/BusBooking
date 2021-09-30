# from django.db.models import fields


from django.db.models.fields import SlugField
from rest_framework import serializers

from api.models import Booking, BusOperator,  Reviews, RouteCard, RouteDetail,  Town, User


class UserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(required=True)
    phone_no = serializers.IntegerField(required=True)

    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)

    password = serializers.CharField(min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ('email', 'phone_no', 'first_name', 'last_name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class TownsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Town
        fields = ['name']


class RouteCardSerializer(serializers.ModelSerializer):
    bus_operator = serializers.SlugRelatedField(
        slug_field='name', read_only=True)
    depart_from = serializers.SlugRelatedField(
        slug_field='name', read_only=True)
    arrive_to = serializers.SlugRelatedField(
        slug_field='name', read_only=True)

    class Meta:
        model = RouteCard
        fields = ('depart_at', 'depart_from', 'arrive_to', 'arrive_at', 'fare',
                  'total_seats', 'seats_booked', 'bus_operator')


class RouteDetailsSerializer(serializers.ModelSerializer):
    # route = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = RouteDetail
        fields = ('route', 'pickup_point', 'drop_point', 'description')


class ReviewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reviews
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = '__all__'


class ReviewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reviews
        fields = '__all__'


class BusOperatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusOperator
        fields = '__all__'
