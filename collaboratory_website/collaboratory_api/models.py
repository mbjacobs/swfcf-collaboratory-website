from django.db import models

class Organization(models.Model):
	name =  models.CharField(max_length=120)
	ein = models.IntegerField(unique=True)
	
	def __str__(self):
		return self.name
