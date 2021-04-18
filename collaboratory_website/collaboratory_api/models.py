# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Region(models.Model):
    region_id = models.IntegerField(db_column='RegionID', primary_key=True)
    name = models.CharField(db_column='Name', max_length=50)

    class Meta:
        # managed = False
        db_table = 'Region'

class Role(models.Model):
    role_id = models.IntegerField(db_column='RoleID', primary_key=True)
    name = models.CharField(db_column='Name', max_length=50)

    class Meta:
        # managed = False
        db_table = 'Role'

class Cause(models.Model):
    cause_id = models.IntegerField(db_column='CauseID', primary_key=True)
    name = models.CharField(db_column='Name', max_length=50)

    class Meta:
        # managed = False
        db_table = 'Cause'

class Organization(models.Model):
    org_id = models.AutoField(db_column='OrgID', primary_key=True)
    #org_id, this needs to be the PK
    ein = models.IntegerField(db_column='EIN', blank=True, null=True)
    # ein = models.IntegerField(db_column='EIN', primary_key=True)
    name = models.CharField(db_column='Name', max_length=200)
    address1 = models.CharField(db_column='Address1', max_length=100)
    address2 = models.CharField(db_column='Address2', max_length=50, blank=True, null=True)
    city = models.CharField(db_column='City', max_length=50)
    state = models.CharField(db_column='State', max_length=2)
    zip = models.CharField(db_column='Zip', max_length = 20, blank=True, null=True)
    country = models.CharField(db_column='Country', max_length=50)
    phone = models.CharField(db_column='Phone', max_length=45, blank=True, null=True)
    mission = models.TextField(db_column='MissionStmt')
    email =  models.EmailField(blank=True, null=True)
    website = models.URLField(db_column='Website', max_length=200, blank=True, null=True)
    facebook = models.CharField(db_column='Facebook', max_length=200, blank=True, null=True)
    twitter = models.CharField(db_column='Twitter', max_length=200, blank=True, null=True)
    founded = models.IntegerField(db_column='YearFounded', blank=True, null=True)
    cause_id = models.ManyToManyField(Cause) #, db_column='CauseID' , related_name='organization', blank=True)
    region_id = models.ManyToManyField(Region) #', db_column='RegionID', related_name='organization', blank=True)
    # region_id = models.ForeignKey(Region, on_delete=models.SET_NULL, db_column='RegionID', null=True)
    # will definitely need a cause_foreign key (cause_id)

    class Meta:
        # managed = False
        db_table = 'Organization'

class User(models.Model):
    user = models.OneToOneField(User, db_column='UserID', on_delete=models.CASCADE, primary_key=True)
    phone = models.CharField(db_column='Phone', max_length=14, null=True)
    registration_date = models.DateField(db_column="RegistrationDate", auto_now_add=True)
    preferred_pronouns = models.CharField(db_column='Pronouns', max_length=25, blank=True, null=True)
    role_id = models.ForeignKey(Role, on_delete=models.SET_NULL, db_column='RoleID', null=True)
    organization_id = models.ForeignKey(Organization, db_column='OrganizationID', related_name="org", on_delete=models.SET_NULL, blank=True, null=True)

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            User.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.user.save()

    class Meta:
        # managed = False
        db_table = 'User'

class Event(models.Model):
    event_id = models.AutoField(db_column='EventID', primary_key=True)
    name = models.CharField(db_column='Name', max_length=50)
    date = models.DateTimeField(db_column='Date', blank=True, null=True)
    location = models.CharField(db_column='Location', max_length=250, blank=True, null=True)
    RSVP = models.CharField(db_column='RSVP', max_length=100, blank=True, null=True)
    description = models.TextField(db_column='Text', blank=True)
    user = models.CharField(db_column='User', max_length=50, blank=True)
    #user_id = models.ForeignKey(User, on_delete=models.SET_NULL, db_column='UserID', null=True)

    class Meta:
        # managed = False
        db_table = 'Event'

class Channel(models.Model):
    channel_id = models.IntegerField(db_column='ChannelID', primary_key=True)
    name = models.CharField(db_column='Name', max_length=50)
    description = models.TextField(db_column='Text')

    class Meta:
        # managed = False
        db_table = 'Channel'

#TODO: Delete, unused
class Announcement(models.Model):
    announcement_id = models.IntegerField(db_column='AnnouncementID', primary_key=True)
    title = models.CharField(db_column='Title', max_length=50)
    text = models.TextField(db_column='Text')
    date = models.DateTimeField(db_column="Date", auto_now_add=True)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, db_column='UserID', null=True)
    # user_id = models.ForeignKey(User, on_delete=models.CASCADE, db_column='UserID')
    event_id = models.ForeignKey(Event, on_delete=models.SET_NULL, db_column='EventID', blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'Announcement'

class Post(models.Model):
    post_id = models.AutoField(db_column='PostID', primary_key=True)
    title = models.CharField(db_column='Title', max_length=50)
    text = models.TextField(db_column='Text')
    channel = models.CharField(db_column='Channel', max_length=50, blank=True)
    user = models.CharField(db_column='User', max_length=50, blank=True)
    # channel_id = models.ForeignKey(Channel, on_delete=models.CASCADE, db_column='ChannelID', null=True)
    # user_id = models.ForeignKey(User, on_delete=models.CASCADE, db_column='UserID', null=True)
    
    class Meta:
        # managed = False
        db_table = 'Post'

#TODO: Delete, unused
class Organization_Region(models.Model):
    id = models.IntegerField(primary_key=True)
    organization_id = models.ForeignKey(Organization, on_delete=models.CASCADE, db_column='OrganizationID')
    region_id = models.ForeignKey(Region, on_delete=models.CASCADE, db_column='RegionID')

    class Meta:
        # managed = False
        db_table = 'Organization-Region'

#TODO: Delete, unused
class Organization_Cause_Alignment(models.Model):
    id = models.IntegerField(primary_key=True)
    organization_id = models.ForeignKey(Organization, on_delete=models.CASCADE, db_column='OrganizationID')
    cause_id = models.ForeignKey(Cause, on_delete=models.CASCADE, db_column='CauseID')

    class Meta:
        # managed = False
        db_table = 'Organization-Cause-Alignment'

#TODO: Delete, unused
class User_Event_Attendance(models.Model):
    id = models.IntegerField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, db_column='UserID')
    event_id = models.ForeignKey(Event, on_delete=models.CASCADE, db_column='EventID')

    class Meta:
        # managed = False
        db_table = 'User-Event-Attendance'

#TODO: Anyone know why these are commented out? Or why they exist here in the first place?
# class AuthGroup(models.Model):
#     name = models.CharField(unique=True, max_length=150)

#     class Meta:
#         # managed = False
#         db_table = 'auth_group'


# class AuthGroupPermissions(models.Model):
#     group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
#     permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

#     class Meta:
#         # managed = False
#         db_table = 'auth_group_permissions'
#         unique_together = (('group', 'permission'),)


# class AuthPermission(models.Model):
#     name = models.CharField(max_length=255)
#     content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
#     codename = models.CharField(max_length=100)

#     class Meta:
#         # managed = False
#         db_table = 'auth_permission'
#         unique_together = (('content_type', 'codename'),)


# class AuthUser(models.Model):
#     password = models.CharField(max_length=128)
#     last_login = models.DateTimeField(blank=True, null=True)
#     is_superuser = models.IntegerField()
#     username = models.CharField(unique=True, max_length=150)
#     first_name = models.CharField(max_length=150)
#     last_name = models.CharField(max_length=150)
#     email = models.CharField(max_length=254)
#     is_staff = models.IntegerField()
#     is_active = models.IntegerField()
#     date_joined = models.DateTimeField()

#     class Meta:
#         # managed = False
#         db_table = 'auth_user'


# class AuthUserGroups(models.Model):
#     user = models.ForeignKey(AuthUser, models.DO_NOTHING)
#     group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

#     class Meta:
#         # managed = False
#         db_table = 'auth_user_groups'
#         unique_together = (('user', 'group'),)


# class AuthUserUserPermissions(models.Model):
#     user = models.ForeignKey(AuthUser, models.DO_NOTHING)
#     permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

#     class Meta:
#         # managed = False
#         db_table = 'auth_user_user_permissions'
#         unique_together = (('user', 'permission'),)


# class CollaboratoryApiOrganization(models.Model):
#     name = models.CharField(max_length=120)
#     ein = models.IntegerField(unique=True)

#     class Meta:
#         # managed = False
#         db_table = 'collaboratory_api_organization'


# class DjangoAdminLog(models.Model):
#     action_time = models.DateTimeField()
#     object_id = models.TextField(blank=True, null=True)
#     object_repr = models.CharField(max_length=200)
#     action_flag = models.PositiveSmallIntegerField()
#     change_message = models.TextField()
#     content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
#     user = models.ForeignKey(AuthUser, models.DO_NOTHING)

#     class Meta:
#         # managed = False
#         db_table = 'django_admin_log'


# class DjangoContentType(models.Model):
#     app_label = models.CharField(max_length=100)
#     model = models.CharField(max_length=100)

#     class Meta:
#         # managed = False
#         db_table = 'django_content_type'
#         unique_together = (('app_label', 'model'),)


# class DjangoMigrations(models.Model):
#     app = models.CharField(max_length=255)
#     name = models.CharField(max_length=255)
#     applied = models.DateTimeField()

#     class Meta:
#         # managed = False
#         db_table = 'django_migrations'


# class DjangoSession(models.Model):
#     session_key = models.CharField(primary_key=True, max_length=40)
#     session_data = models.TextField()
#     expire_date = models.DateTimeField()

#     class Meta:
#         # managed = False
#         db_table = 'django_session'
