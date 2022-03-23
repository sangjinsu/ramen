import * as React from 'react';
import { Container,Row,Col,ListGroup} from 'react-bootstrap';



export default function Lank() {
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