from fridge.models import FridgeItem
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.
from .models import FridgeItem

def index(request):
    items = FridgeItem.objects.all()

    jsonlist = []
    for item in items:
        jsonlist.append(item.serialize())

    return JsonResponse(jsonlist,safe = False)