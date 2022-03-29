from rest_framework.decorators import api_view

from recommend.utils.table import ramen

ramen()    

@api_view(['GET'])  
def ubcf(request, memberId):
    pass 

@api_view(['GET'])
def ibcf(request, memberId):
    pass

@api_view(['GET'])
def dbrc(request, memberId):
    pass

@api_view(['GET'])
def similarity(request, memberId):
    pass