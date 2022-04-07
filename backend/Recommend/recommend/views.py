from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

from .utils.algo import item_based_cf, user_based_cf, ramen_similarity, deaplearning_based_rc, train_ai

train_ai()

@api_view(['GET'])  
def ubcf(request, member_id):
    return Response(user_based_cf(member_id), status=status.HTTP_200_OK)
   

@api_view(['GET'])
def ibcf(request, member_id):
    return Response(item_based_cf(member_id), status=status.HTTP_200_OK)

@api_view(['GET'])
def dbrc(request, member_id):
    return Response(deaplearning_based_rc(member_id), status=status.HTTP_200_OK)

@api_view(['GET'])
def similarity(request, ramen_id):
    return Response(ramen_similarity(ramen_id), status=status.HTTP_200_OK)