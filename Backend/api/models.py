# from os import name
from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.db.models.deletion import CASCADE, DO_NOTHING, PROTECT
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None):

        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,

        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def crete_staffuser(self, email, first_name, last_name,  password=None):

        user = self.create_staffuser(
            email,
            first_name=first_name,
            last_name=last_name,
            password=password,

        )
        user.is_staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, password=None):

        user = self.create_user(
            email,
            first_name=first_name,
            last_name=last_name,
            password=password,

        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):

    username = None
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(
        verbose_name='email address', max_length=70, unique=True, null=False)
    phone_no = models.IntegerField(
        verbose_name='phone number', null=False, unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'phone_no'
    REQUIRED_FIELDS = [first_name, last_name, email]

    objects = UserManager()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_staff

    @property
    def is_admin(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_active


class Profile(models.Model):
    img_profile = models.ImageField(null=True)


class BusOperator(models.Model):
    name = models.CharField(max_length=100, null=False)
    # Routes = models.TextChoices()
    # towns = models.ForeignKey(Town,on_delete=DO_NOTHING)
    total_seats = models.IntegerField()

    def __str__(self):
        return self.name


class Town(models.Model):
    # routes = models.CharField(CHOICES)
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class Day(models.Model):
    DAY_CHOICES = (
        ('Mon', 'Monday'),
        ('Tue', 'Tuesday'),
        ('Wed', 'Wednesday'),
        ('Thur', "Thurday"),
        ('Fri', 'Friday'),
        ('Sat', 'Saturday'),
        ('Sun', 'Sunday')
    )

    name = models.CharField(choices=DAY_CHOICES, max_length=4)


class RouteCard(models.Model):
    depart_from = models.ForeignKey(
        Town, on_delete=CASCADE, related_name='+')
    arrive_to = models.ForeignKey(
        Town, on_delete=CASCADE, related_name='+')

    bus_operator = models.ForeignKey(BusOperator, on_delete=CASCADE)
    # day = models.ManyToManyField(Day)
    depart_at = models.TimeField(auto_now=False, auto_now_add=False)
    arrive_at = models.TimeField(auto_now=False, auto_now_add=False)
    fare = models.FloatField(null=False)
    bookings = models.IntegerField(default=0)
    rating = models.IntegerField(default=0)
    total_seats = models.IntegerField(default=52)
    seats_booked = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.depart_from} to {self.arrive_to} by {self.bus_operator}  at {self.depart_at}  -  {self.arrive_at}'


class Vehicle(models.Model):
    pass


class RouteDetail(models.Model):
    route = models.ForeignKey(RouteCard, on_delete=CASCADE)
    description = models.TextField()
    pickup_point = models.CharField(max_length=100, null=False)
    drop_point = models.CharField(max_length=100, null=False)


class Reviews(models.Model):
    route = models.ForeignKey(RouteDetail, on_delete=PROTECT)
    review = models.TextField(null=True, blank=True)
    review = models.TextField(null=True, blank=True)

    def __str__(self):
        return f'{self.review} '


class PaymentMethod(models.Model):
    name = models.CharField(max_length=30, null=False)


class Payment(models.Model):
    # user_id = models.ForeignKey(User, on_delete=DO_NOTHING)
    pay_method = models.ForeignKey(PaymentMethod, on_delete=DO_NOTHING)
    amount = models.FloatField()
    date = models.DateTimeField(auto_now_add=True)


class BookingStatus(models.Model):
    name = models.CharField(max_length=20)


class Booking(models.Model):
    seat_selected = models.IntegerField(),
    # user = models.ForeignKey(User, on_delete=PROTECT),
    route = models.ForeignKey(RouteDetail, on_delete=PROTECT),
    booking_date = models.DateTimeField(auto_now_add=True),
    booking_status = models.ForeignKey(
        BookingStatus, on_delete=DO_NOTHING)


# class Seat(models.Model):
#     SEAT_TYPE = (('Normal', 'Normal'),
#                  ('Business', 'Business'),
#                  ('VIP', 'VIP'),
#                  ('VVIP', 'VVIP'))
#     pos = models.PointField()
#     booked = models.BooleanField(default=False)
#     seat_no = models.CharField(max_length=5)
#     seat_type = models.CharField(choices=SEAT_TYPE, max_length=8)


# seat = [{
#     pos: (12, 29),
#     booked: True,
#     seat_no: 10,
#     seat_type: 'Normal'
# }, {
#     pos: (12, 29),
#     booked: True,
#     seat_no: 10,
#     seat_type: 'Normal'}]
