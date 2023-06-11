from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
#request -> response
#request handler


def first(request):
    return render(request,'firstpage.html')