import * as React from 'react';
import { Table,Card} from 'react-bootstrap';
// import default_img from '../../public/ramen/default.png'
// import default_img from 'ramen/default.png'
import Link from "next/link";




export default function ResultBox(props) {
  const default_img = 'ramen/default.png'
  const handleImage = (e)=>{
    e.target.src=default_img
    console.log(e.target.src)
  }

  return (
   <>
   <div>
     {/* <div className='pic'><img src={props.image} width={200}></img></div> */}
     {/* <img src={default_img}></img> */}
     {/* <img src='ramen/default.png'></img>
     <img src='../../public/ramen/default.png'></img> */}
     {/* {default_img} */}
     <div className='explain'><img src={props.image} onError={handleImage} width={150} alt="제품이미지"></img></div>
     {/* <div className='explain'><img src={props.image} onError={handleImage} width={150} alt="제품이미지"></img></div> */}
     <Link href={`/ramen/${props.id}`}>링크</Link>
     <div className="explain">
     <Card style={{ width: '' }}>
  <Card.Body>
    <Card.Title>제품명 : {props.name}
      </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">제조사 : {props.brand}</Card.Subtitle>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}

  </Card.Body>
  
</Card>
     </div>
     {/* <div className='explain'>제품명: {props.name} /</div>
     <div className='explain'> 제조사: {props.brand}</div> */}

     <hr></hr>
   </div>
   <style jsx>{`
        .pic {
          display: inline;

        }
        .explain {
          display: inline;

        }
        
      `}</style>
   </>
  
    
  );
}