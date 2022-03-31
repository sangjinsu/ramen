import * as React from 'react';
import { Row,Col,Card} from 'react-bootstrap';
import axios from 'axios'
import { useEffect, useState } from 'react';



export default function Suggestion() {
  // useEffect(()=>{
  //   axios.get('https://codingapple1.github.io/shop/data2.json')
  //   .then((result)=>{console.log('요청성공')
  // console.log(result)
  // console.log(result.data)
  // console.log(result.data[0])
  
  // })
  //   .catch((error)=>{console.log('요청실패')
  //   console.log(error)
  
  // })
  // },[])
  return (

      <>
<Row>
  <Col xs={1} md={1} lg={1}></Col>
  <Col xs={10} md={10} lg={10}>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src="text.jpg" />
  <Card.Body>
    <Card.Title>추천라면</Card.Title>
    <Card.Text>
      알고리즘 기반으로 추천드리는 라면입니다.
    </Card.Text>
  </Card.Body>
</Card>
  </Col>
  <Col xs={1} md={1} lg={1}></Col>

</Row>


<style jsx>{`
        
        

        
      `}</style>
      </>
  );
}