import { Figure} from 'react-bootstrap';
import { Container,Row,Col} from 'react-bootstrap';

export default function Layout(){

  return <>
  <div className="box">
  <Row>
    <Col xs={3} md={3}></Col>
    <Col xs={2} md={2}>  
    <div>
    
<Figure>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/bongji.png"
  />
  <Figure.Caption>
    봉지라면
  </Figure.Caption>
</Figure>

    
    </div>
    <div>
    <Figure>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/cup.png"
  />
  <Figure.Caption>
    컵라면
  </Figure.Caption>
</Figure>
    </div>
    </Col>
    <Col xs={2} md={2}>  
    <Figure>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/dry.png"
  />
  <Figure.Caption>
    건면
  </Figure.Caption>
</Figure>
<Figure>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/fried.png"
  />
  <Figure.Caption>
    유탕면
  </Figure.Caption>
</Figure>
<Figure>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/real.png"
  />
  <Figure.Caption>
    생면,숙면
  </Figure.Caption>
</Figure>
    </Col>
    <Col xs={2} md={2}>  
    <Figure>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/soup.png"
  />
  <Figure.Caption>
    국물
  </Figure.Caption>
</Figure>
<Figure>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/bok.png"
  />
  <Figure.Caption>
    비빔,볶음면
  </Figure.Caption>
</Figure>
<Figure>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/jjajang.png"
  />
  <Figure.Caption>
    짜장라면
  </Figure.Caption>
</Figure>
    </Col>
    <Col></Col>
  </Row>
  </div>
  <style jsx>{`
        .box {
          margin:20px;
        }
        
      `}</style>
  </>
}