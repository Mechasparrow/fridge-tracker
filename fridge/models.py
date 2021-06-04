from django.db import models

# Create your models here.

class FridgeItem(models.Model):
    name = models.CharField(max_length=200)
    quantity = models.IntegerField()
    units = models.CharField(max_length=200)
    expirationDate = models.DateTimeField("expiration date")

    def __str__(self):
        return self.name

    def serialize(self):
        return {
            "name": self.name,
            "quantity": self.quantity,
            "units": self.units,
            "expirationDate": self.expirationDate
        }