import * as React from 'react';
import { Container,Row,Col,Card} from 'react-bootstrap';





export default function Suggestion() {

  return (
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="text.jpg" />
  <Card.Body>
    <Card.Title>추천라면</Card.Title>
    <Card.Text>
      알고리즘 기반으로 추천드리는 라면입니다.
    </Card.Text>
  </Card.Body>
</Card>
  );
}