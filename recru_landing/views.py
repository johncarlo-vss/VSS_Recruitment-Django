from django.shortcuts import render
from django.http import HttpResponse
from django import forms



def index(request):
    return render(request, 'index.html')

def job_offer(request):
    return render(request, 'job_offers.html')
