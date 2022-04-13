from django.urls import path
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('', views.index, name='index'),
<<<<<<< HEAD
    path('job_offers/', views.job_offer, name='job_offers'),
=======
    path('job_offer/', views.job_offer, name='job_offer'),
>>>>>>> e2bf99961c37d5aa4a93e3d867a4b713c9209768
]

urlpatterns += staticfiles_urlpatterns()
