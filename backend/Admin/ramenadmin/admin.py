from django.contrib import admin
from .models import *

# # # Register your models here.

admin.site.register(Member)
admin.site.register(Nutrient)
admin.site.register(Ramen)
admin.site.register(Analysis)
admin.site.register(Composition)
admin.site.register(Fond)
admin.site.register(MemberLikeRamen)

