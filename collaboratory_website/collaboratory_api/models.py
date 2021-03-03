# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class Organization(models.Model):
    ein = models.IntegerField(db_column='EIN', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=50)  # Field name made lowercase.
    address1 = models.CharField(db_column='Address1', max_length=50)  # Field name made lowercase.
    address2 = models.CharField(db_column='Address2', max_length=25)  # Field name made lowercase.
    city = models.CharField(db_column='City', max_length=25)  # Field name made lowercase.
    state = models.CharField(db_column='State', max_length=2)  # Field name made lowercase.
    zip = models.IntegerField(db_column='Zip')  # Field name made lowercase.
    country = models.CharField(db_column='Country', max_length=3)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=14)  # Field name made lowercase.
    missionstmt = models.TextField(db_column='MissionStmt')  # Field name made lowercase.
    website = models.CharField(db_column='Website', max_length=25)  # Field name made lowercase.
    causes = models.TextField(db_column='Causes')  # Field name made lowercase.
    regionid = models.ForeignKey('Region', models.DO_NOTHING, db_column='RegionID')  # Field name made lowercase.

    class Meta:
        # managed = False
        db_table = 'Organization'


class Region(models.Model):
    rid = models.IntegerField(db_column='RID', primary_key=True)  # Field name made lowercase.
    regionname = models.CharField(db_column='RegionName', max_length=25)  # Field name made lowercase.

    class Meta:
        # managed = False
        db_table = 'Region'


class Changemaker(models.Model):
    cid = models.IntegerField(db_column='CID', primary_key=True)  # Field name made lowercase.
    fname = models.CharField(db_column='Fname', max_length=25)  # Field name made lowercase.
    lname = models.CharField(db_column='Lname', max_length=25)  # Field name made lowercase.
    email =  models.CharField(db_column="Email", max_length=50, default="email@domain.com")
    orgein = models.ForeignKey('Organization', models.DO_NOTHING, db_column='OrgEIN')  # Field name made lowercase.
    regionid = models.ForeignKey('Region', models.DO_NOTHING, db_column='RegionID')  # Field name made lowercase.

    class Meta:
        # managed = False
        db_table = 'Changemaker'



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
