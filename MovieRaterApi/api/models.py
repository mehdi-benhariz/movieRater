from django.db import models
from django.utils.translation import gettext as _
from django.urls import reverse
from django.contrib.auth.models import User  
from django.core.validators import MinValueValidator,MaxValueValidator

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField(max_length=360)
    
    def no_of_ratings(self):
         ratings = Rating.objects.filter(movie=self)
         return len(ratings)
    def average_ratings(self):
        ratings = Rating.objects.filter(movie=self)
        sum =0
        for r in ratings:
            sum+=r.stars
        return sum//len(ratings) if  len(ratings)>0 else 0

    class Meta:
        verbose_name = _("Movie")
        verbose_name_plural = _("Movies")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("Movie_detail", kwargs={"pk": self.pk})

class Rating(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)    
    user = models.ForeignKey(User, on_delete=models.CASCADE)    
    stars = models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])
    
    class Meta:
        unique_together=(('user','movie'),)
        index_together =(('user','movie'),)
        verbose_name = _("Rating")
        verbose_name_plural = _("Ratings")

    def get_absolute_url(self):
        return reverse("Rating_detail", kwargs={"pk": self.pk})
