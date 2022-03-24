import type { NextPage } from 'next'
import { Container,Row,Col} from 'react-bootstrap';
import * as React from 'react';
import Ibox from '../components/main/box'
import Lank from '../components/main/Lank'
import Sug from '../components/main/Suggestion'
// import { useRouter } from "next/router";


const Home: NextPage = () => {
  // const router = useRouter()
  // const tt = 'hihi'
  return <>
{/* <button
      type="button"
      onClick={() => {
        router.push(
          {
          pathname: '/test',
          query: { 
            "ramenType":0,
            "noodleType":0,
            "ramenStyle":tt
           },
        },
        `/test`
        )
        // masking해서 넘어가는 쿼리 숨기기
      }}
    >
      Click here to read more
    </button> */}
  <Container>
  <Ibox></Ibox> 
 <Row>
 <Col xs={1} md={2} lg={3}></Col>
 <Col xs={10} md={8} lg={5}><Lank></Lank></Col>
   <Col xs={1} md={2} lg={4}></Col>
 </Row>
 <Row>
 <Col ></Col>
   <Col ><Sug></Sug></Col>
   <Col ><Sug></Sug></Col>
   <Col></Col>
 </Row>
  
</Container>



  </>
   
  
}

export default Home
