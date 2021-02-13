from django.shortcuts import render

from rest_framework import viewsets,status
from rest_framework.response import Response
from rest_framework.decorators import action
from  rest_framework.authentication import TokenAuthentication
from  rest_framework.permissions import IsAuthenticated,AllowAny

from django.contrib.auth.models import User  
from .models import Movie,Rating
from .serializers import MovieSerializer,RatingSerializer,UserSerializer
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    @action(detail=True,methods=['POST'])
    def rate_Movie(self,request,pk=None):
        print(request.data)
        
        if 'stars' in request.data:
            movie = Movie.objects.get(id=pk)
            stars = request.data['stars']
            user = request.data['user']
            # user = User.objects.get(id=1)
            try:
               rating  = Rating.objects.get(user=user.id,movie=movie.id)
               rating.stars = stars
               rating.save() 

            except:
                rating  = Rating.objects.create(user=user.id,movie=movie.id,star=stars)
            serializer = RatingSerializer(rating,many=False)
            response={"message":"gooood"}
        else:
            response={"message":"baaaaad"}
        return Response(response,status=status.HTTP_200_OK)

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    def update(self,request,*args, **kwargs):
        response = {'message':'you can\'t update raitng like that!'}
        return Response(response,status=status.HTTP_400_BAD_REQUEST)
    def create(self,request,*args, **kwargs):
        response = {'message':'you can\'t create rating like that!'}
        return Response(response,status=status.HTTP_400_BAD_REQUEST)