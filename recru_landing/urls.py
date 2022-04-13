from django.urls import path
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('', views.index, name='index'),
    path('job_offer/' views.job_offer, name='job_offer'),
]

urlpatterns += staticfiles_urlpatterns()
