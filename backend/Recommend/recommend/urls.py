from django.urls import path
from . import views

app_name = 'recommend'
urlpatterns = [
    path('member/<str:memberId>', views.ubcf),
    path('ramen/<str:memberId>', views.ibcf),
    path('ramen/<str:memberId>', views.dbrc),
    path('similarity', views.similarity)
]