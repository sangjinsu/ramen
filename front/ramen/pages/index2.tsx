import type { NextPage } from 'next'
import { Container,Row,Col} from 'react-bootstrap';
import * as React from 'react';
import { useRouter } from "next/router";

const Home2: NextPage = () => {
   const router = useRouter()
   const handleKeyword = (keyWord) =>{
      router.push(
        {
        pathname: '/SearchKeywordResult',
        query: { 
          "keyWord":keyWord,
         },
      },
      `/SearchKeywordResult`
      )
    }
  return <>
  <Container>
 
  <Row>
    <Col xs={0} md={1}></Col>
    <Col xs={2} md={2}>
    <div className="cloud">
    <div className='side' onClick={()=>{
       handleKeyword('kkoDeul')
    }}>#꼬들</div>
    <div className='side2' onClick={()=>{
       handleKeyword('taengGeul')
    }}>#탱글</div>
    <div className='side' onClick={()=>{
       handleKeyword('jjolGit')
    }}>#쫄깃</div>
    <div className='side2' onClick={()=>{
       handleKeyword('greenOnion')
    }}>#파</div>
    <div className='side' onClick={()=>{
       handleKeyword('egg')
    }}>#달걀</div>
    <div className='side2' onClick={()=>{
       handleKeyword('beef')
    }}>#소고기</div>
    </div>
    
    
    </Col>
    <Col xs={2} md={2}>    
 <div className='cloud2'>
 <div className='side' onClick={()=>{
       handleKeyword('pork')
    }}>#돼지고기</div>
    <div className='side2' onClick={()=>{
       handleKeyword('chickenBreast')
    }}>#닭가슴살</div>
    <div className='side' onClick={()=>{
       handleKeyword('milk')
    }}>#우유</div>
    <div className='side2' onClick={()=>{
       handleKeyword('riceCake')
    }}>#떡</div>
    <div className='side' onClick={()=>{
       handleKeyword('dumpling')
    }}>#만두</div>
    <div className='side2' onClick={()=>{
       handleKeyword('softTofu')
    }}>#순두부</div>
    <div className='side' onClick={()=>{
       handleKeyword('kimchi')
    }}>#김치</div>
 </div>
    
    </Col>
    <Col xs={2} md={2}>   
    <div className='cloud'>
    <div className='side' onClick={()=>{
       handleKeyword('mayonnaise')
    }}>#마요네즈</div> 
    <div className='side2' onClick={()=>{
       handleKeyword('cheese')
    }}>#치즈</div>
    <div className='side' onClick={()=>{
       handleKeyword('garlic')
    }}>#마늘</div>
    <div className='side2' onClick={()=>{
       handleKeyword('pepper')
    }}>#후추</div>
    <div className='side' onClick={()=>{
       handleKeyword('chiliPowder')
    }}>#고춧가루</div>
    <div className='side2' onClick={()=>{
       handleKeyword('beanSprouts')
    }}>#숙주</div>
      </div>
    
    
    </Col>
    <Col xs={2} md={2}>    
    <div className='cloud2'>
    <div className='side' onClick={()=>{
       handleKeyword('redPepper')
    }}>#고추</div>
    <div className='side2' onClick={()=>{
       handleKeyword('soyaSprouts')
    }}>#콩나물</div>
    <div className='side' onClick={()=>{
       handleKeyword('seafood')
    }}>#해산물</div>
    <div className='side2' onClick={()=>{
       handleKeyword('seaweed')
    }}>#미역</div>
    <div className='side' onClick={()=>{
       handleKeyword('sausage')
    }}>#소세지</div>
    <div className='side2' onClick={()=>{
       handleKeyword('tuna')
    }}>#참치</div>
    <div className='side' onClick={()=>{
       handleKeyword('ketchup')
    }}>#케찹</div>
    </div>
    
    
    </Col>

    <Col xs={2} md={2}>   
    <div className='cloud'>
    <div className='side' onClick={()=>{
       handleKeyword('vegan')
    }}>#비건</div>
    <div className='side2' onClick={()=>{
       handleKeyword('diet')
    }}>#다이어트</div> 
    <div className='side' onClick={()=>{
       handleKeyword('spicy')
    }}>#매운맛</div>
    <div className='side2' onClick={()=>{
       handleKeyword('lightness')
    }}>#담백</div>
    <div className='side' onClick={()=>{
       handleKeyword('haejang')
    }}>#해장</div>
    
    </div>
    
    </Col>
    <Col xs={0} md={1}></Col>
  </Row>
</Container>
<style jsx>{`
       .cloud {
        margin:10px;
        position:relative;
        -webkit-animation:glide 1s ease-in-out alternate infinite;
     }
     
    
     .cloud2 {
      margin:10px;
      position:relative;
      -webkit-animation:glide2 1s ease-in-out alternate infinite;
   }
   @-webkit-keyframes glide  {
    from {
       left:0px;
       top:70px;
    }
    
    to {
       left:0px;
       top:100px;
    }
 
 }
 @-webkit-keyframes glide2  {
  from {
     left:0px;
     top:0px;
  }
  
  to {
     left:0px;
     top:40px;
  }

}
.side{
  position:relative;
  left:30px;
  margin:50px;
  cursor:pointer;
}
.side2{
  position:relative;
  right:30px;
  margin:50px;
  cursor:pointer;

}
        
      `}</style>

  </>
   
  
}

export default Home2
