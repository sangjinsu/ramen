import type { NextPage } from 'next'
import { Container,Row,Col} from 'react-bootstrap';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Home2: NextPage = () => {

  return <>
  <Container>
 
  <Row>
    <Col xs={1} md={1}></Col>
    <Col xs={2} md={2}>
    <div className="cloud">
    <div className='side'>#꼬들</div>
    <div className='side2'>#탱글</div>
    <div className='side'>#쫄깃</div>
    <div className='side2'>#파</div>
    <div className='side'>#달걀</div>
    <div className='side2'>#소고기</div>
    </div>
    
    
    </Col>
    <Col xs={2} md={2}>    
 <div className='cloud2'>
 <div className='side'>#돼지고기</div>
    <div className='side2'>#닭가슴살</div>
    <div className='side'>#우유</div>
    <div className='side2'>#떡</div>
    <div className='side'>#만두</div>
    <div className='side2'>#순두부</div>
    <div className='side'>#김치</div>
 </div>
    
    </Col>
    <Col xs={2} md={2}>   
    <div className='cloud2'>
    <div className='side'>#마요네즈</div> 
    <div className='side2'>#치즈</div>
    <div className='side'>#마늘</div>
    <div className='side2'>#후추</div>
    <div className='side'>#고춧가루</div>
    <div className='side2'>#숙주</div>
      </div>
    
    
    </Col>
    <Col xs={2} md={2}>    
    <div className='cloud'>
    <div className='side'>#고추</div>
    <div className='side2'>#콩나물</div>
    <div className='side'>#해산물</div>
    <div className='side2'>#미역</div>
    <div className='side'>#소세지</div>
    <div className='side2'>#참치</div>
    <div className='side'>#케찹</div>
    </div>
    
    
    </Col>

    <Col xs={2} md={2}>   
    <div className='cloud2'>
    <div className='side'>#비건</div>
    <div className='side2'>#다이어트</div> 
    <div className='side'>#매운맛</div>
    <div className='side2'>#담백</div>
    <div className='side'>#쫄깃쫄깃</div>
    <div className='side2'>#파넣는라면</div>
    </div>
    
    </Col>
    <Col xs={1} md={1}></Col>
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
       top:10px;
    }
    
    to {
       left:0px;
       top:40px;
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
}
.side2{
  position:relative;
  right:30px;
  margin:50px;
}
        
      `}</style>

  </>
   
  
}

export default Home2
