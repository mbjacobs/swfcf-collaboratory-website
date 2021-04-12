# collaboratory_api/forms.py

from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class CustomUserCreationForm(UserCreationForm):
    #user_id = forms.IntegerField(db_column='UserID', primary_key=True)
    # first_name = forms.CharField(widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'First Name'}), max_length=32, help_text='First name')
    # last_name =  forms.CharField(widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Last Name'}), max_length=32, help_text='Last name')
    first_name = forms.CharField(widget = forms.TextInput, max_length=32, help_text='First name')
    last_name =  forms.CharField(widget = forms.TextInput, max_length=32, help_text='Last name')
    #phone = forms.CharField(db_column='Phone', max_length=14)
    #registration_date = forms.DateField(db_column="RegistrationDate", auto_now_add=True)
    #preferred_pronouns = forms.CharField(db_column='Pronouns', max_length=25, blank=True, null=True)  
    #role_id = forms.ForeignKey(Role, on_delete=models.SET_NULL, db_column='RoleID', null=True)  
    #organization_id = forms.ForeignKey(Organization, db_column='OrganizationID', default='N/A', on_delete=models.SET_DEFAULT, blank=True, null=False)
    
    class Meta(UserCreationForm.Meta):
        model = User
        fields = UserCreationForm.Meta.fields + ("first_name",  "last_name", "email", )