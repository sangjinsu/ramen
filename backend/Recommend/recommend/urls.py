from django.urls import path
from . import views

app_name = 'recommend'
urlpatterns = [
    path('ubcf/<int:member_id>', views.ubcf),
    path('ibcf/<int:member_id>', views.ibcf),
    path('dbrc/<int:member_id>', views.dbrc),
    path('similarity/<int:ramen_id>', views.similarity)
]