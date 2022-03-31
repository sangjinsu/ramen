import type { NextPage } from 'next'
import { Container, Row, Col } from 'react-bootstrap';
import * as React from 'react';
import { useRouter } from "next/router";

const Home2: NextPage = () => {
   const router = useRouter()
   const handleKeyword = (keyWord: any) => {
      router.push(
         {
            pathname: '/SearchKeywordResult',
            query: {
               "keyWord": keyWord,
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
                  <div className='side' onClick={() => {
                     handleKeyword('kkoDeul')
                  }}><div className="keyword"><img src='/keyword/kkoDeul.png' width={45}></img></div>
                     #꼬들</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('taengGeul')
                  }}><div className="keyword"><img src='/keyword/taengGeul.png' width={45}></img></div>
                     #탱글</div>
                  <div className='side' onClick={() => {
                     handleKeyword('jjolGit')
                  }}><div className="keyword"><img src='/keyword/jjolGit.png' width={45}></img></div>
                     #쫄깃</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('greenOnion')
                  }}><div className="keyword"><img src='/keyword/greenOnion.png' width={45}></img></div>
                     #파</div>
                  <div className='side' onClick={() => {
                     handleKeyword('egg')
                  }}><div className="keyword"><img src='/keyword/egg.png' width={45}></img></div>
                     #달걀</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('beef')
                  }}><div className="keyword"><img src='/keyword/beef.png' width={45}></img></div>
                     #소고기</div>
               </div>


            </Col>
            <Col xs={2} md={2}>
               <div className='cloud2'>
                  <div className='side' onClick={() => {
                     handleKeyword('pork')
                  }}><div className="keyword"><img src='/keyword/pork.png' width={45}></img></div>
                     #돼지고기</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('chickenBreast')
                  }}><div className="keyword"><img src='/keyword/chickenBreast.png' width={45}></img></div>
                     #닭가슴살</div>
                  <div className='side' onClick={() => {
                     handleKeyword('milk')
                  }}><div className="keyword"><img src='/keyword/milk.png' width={45}></img></div>
                     #우유</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('riceCake')
                  }}><div className="keyword"><img src='/keyword/riceCake.png' width={45}></img></div>
                     #떡</div>
                  <div className='side' onClick={() => {
                     handleKeyword('dumpling')
                  }}><div className="keyword"><img src='/keyword/dumpling.png' width={45}></img></div>
                     #만두</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('softTofu')
                  }}><div className="keyword"><img src='/keyword/softTofu.png' width={45}></img></div>
                     #순두부</div>
                  <div className='side' onClick={() => {
                     handleKeyword('kimchi')
                  }}><div className="keyword"><img src='/keyword/kimchi.png' width={45}></img></div>
                     #김치</div>
               </div>

            </Col>
            <Col xs={2} md={2}>
               <div className='cloud'>
                  <div className='side' onClick={() => {
                     handleKeyword('mayonnaise')
                  }}><div className="keyword"><img src='/keyword/mayonnaise.png' width={45}></img></div>
                     #마요네즈</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('cheese')
                  }}><div className="keyword"><img src='/keyword/cheese.png' width={45}></img></div>
                     #치즈</div>
                  <div className='side' onClick={() => {
                     handleKeyword('garlic')
                  }}><div className="keyword"><img src='/keyword/garlic.png' width={45}></img></div>
                     #마늘</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('pepper')
                  }}><div className="keyword"><img src='/keyword/pepper.png' width={45}></img></div>
                     #후추</div>
                  <div className='side' onClick={() => {
                     handleKeyword('chiliPowder')
                  }}><div className="keyword"><img src='/keyword/chiliPowder.png' width={45}></img></div>
                     #고춧가루</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('beanSprouts')
                  }}><div className="keyword"><img src='/keyword/beanSprouts.png' width={45}></img></div>
                     #숙주</div>
               </div>


            </Col>
            <Col xs={2} md={2}>
               <div className='cloud2'>
                  <div className='side' onClick={() => {
                     handleKeyword('redPepper')
                  }}><div className="keyword"><img src='/keyword/redPepper.png' width={45}></img></div>
                     #고추</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('soyaSprouts')
                  }}><div className="keyword"><img src='/keyword/soyaSprouts.png' width={45}></img></div>
                     #콩나물</div>
                  <div className='side' onClick={() => {
                     handleKeyword('seafood')
                  }}><div className="keyword"><img src='/keyword/seafood.png' width={45}></img></div>
                     #해산물</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('seaweed')
                  }}><div className="keyword"><img src='/keyword/seaweed.png' width={45}></img></div>
                     #미역</div>
                  <div className='side' onClick={() => {
                     handleKeyword('sausage')
                  }}><div className="keyword"><img src='/keyword/sausage.png' width={45}></img></div>
                     #소세지</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('tuna')
                  }}><div className="keyword"><img src='/keyword/tuna.png' width={45}></img></div>
                     #참치</div>
                  <div className='side' onClick={() => {
                     handleKeyword('ketchup')
                  }}><div className="keyword"><img src='/keyword/ketchup.png' width={45}></img></div>
                     #케찹</div>
               </div>


            </Col>

            <Col xs={2} md={2}>
               <div className='cloud'>
                  <div className='side' onClick={() => {
                     handleKeyword('vegan')
                  }}><div className="keyword"><img src='/keyword/vegan.png' width={45}></img></div>
                     #비건</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('diet')
                  }}><div className="keyword"><img src='/keyword/diet.png' width={45}></img></div>
                     #다이어트</div>
                  <div className='side' onClick={() => {
                     handleKeyword('spicy')
                  }}><div className="keyword"><img src='/keyword/spicy.png' width={45}></img></div>
                     #매운맛</div>
                  <div className='side2' onClick={() => {
                     handleKeyword('lightness')
                  }}><div className="keyword"><img src='/keyword/lightness.png' width={45}></img></div>
                     #담백</div>
                  <div className='side' onClick={() => {
                     handleKeyword('haejang')
                  }}><div className="keyword"><img src='/keyword/haejang.png' width={45}></img></div>
                     #해장</div>

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
  margin:30px;
  cursor:pointer;
}
.side2{
  position:relative;
  right:30px;
  margin:30px;
  cursor:pointer;

}
.keyword{

}
        
      `}</style>

   </>


}

export default Home2
