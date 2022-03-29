from rest_framework.decorators import api_view

from recommend.utils.table import member_like_ramen, ramen

ramen()   
member_like_ramen() 

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