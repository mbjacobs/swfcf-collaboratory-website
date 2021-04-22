# collaboratory_api/forms.py

from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class CustomUserCreationForm(UserCreationForm):
    first_name = forms.CharField(widget = forms.TextInput, max_length=32,)
    last_name =  forms.CharField(widget = forms.TextInput, max_length=32,)
    
    class Meta(UserCreationForm.Meta):
        model = User
        fields = UserCreationForm.Meta.fields + ("first_name",  "last_name", "email", )