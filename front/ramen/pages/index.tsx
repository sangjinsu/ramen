import type { NextPage } from 'next'
import { Container,Row,Col} from 'react-bootstrap';
import * as React from 'react';
import Ibox from '../components/main/box'
import Lank from '../components/main/Lank'
import Sug from '../components/main/Suggestion'


const Home: NextPage = () => {

  return <>

  <Container>
  <Ibox></Ibox> 
 <Row>
 <Col xs={1} md={2} lg={3}></Col>
 <Col xs={10} md={8} lg={5}><Lank></Lank></Col>
   <Col xs={1} md={2} lg={4}></Col>
 </Row>
 <Row>
 <Col xs={0} md={2} lg={3}></Col>
   <Col xs={12} md={4} lg={3}><div className='sug'><Sug></Sug></div></Col>
   <Col xs={12} md={4} lg={3}><div className='sug'><Sug></Sug></div></Col>
   <Col xs={0} md={2} lg={3}></Col>
 </Row>
  
</Container>

<style jsx>{`
        .sug{
          margin:10px;
        }
        

        
      `}</style>


  </>
   
  
}

export default Home
