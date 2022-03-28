import * as React from 'react';
import { Table} from 'react-bootstrap';
// import default_img from '../../public/ramen/default.png'
// import default_img from 'ramen/default.png'




export default function ResultBox(props) {
  const default_img = 'ramen/default.png'
  const handleImage = (e)=>{
    e.target.src=default_img
  }

  return (
   <>
   <div>
     {/* <div className='pic'><img src={props.image} width={200}></img></div> */}
     {/* <img src={default_img}></img> */}
     {/* <img src='ramen/default.png'></img>
     <img src='../../public/ramen/default.png'></img> */}
     <div className='explain'><img src={props.image} onError={handleImage} width={150}></img></div>
     <div className='explain'>제품명: {props.name} /</div>
     <div className='explain'> 제조사: {props.brand}</div>

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