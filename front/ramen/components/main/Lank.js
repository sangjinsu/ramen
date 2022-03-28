import * as React from 'react';
import { Container,Row,Col,ListGroup} from 'react-bootstrap';
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Lank() {
  // useEffect(()=>{
  //   axios.get('http://j6c104.p.ssafy.io:8081/v1/ranking/ramen')
  //   .then((result)=>{console.log('랭킹요청성공')
  // console.log(result)
  // // console.log(result.data)
  // // console.log(result.data[0])
  
  // })
  //   .catch((error)=>{console.log('요청실패')
  //   console.log(error)
  
  // })
  // },[])
  return <>
 
    <div className='list'>
    <ListGroup>
      <h3><img src="icon/ranking.png" width={50}></img> 라면랭킹</h3>
    <ListGroup.Item>1위 신라면 (농심)</ListGroup.Item>
    <ListGroup.Item>2위 진라면 매운맛(오뚜기)</ListGroup.Item>
    <ListGroup.Item>3위 열라면 (오뚜기)</ListGroup.Item>
    <ListGroup.Item>4위 팔도비빔면 (팔도)</ListGroup.Item>
    <ListGroup.Item>5위 틈새라면 (팔도)</ListGroup.Item>
  </ListGroup>
    </div>
    
  <style jsx>{`
       .list{
         margin:20px;
       }
        
      `}</style>
  </>
}