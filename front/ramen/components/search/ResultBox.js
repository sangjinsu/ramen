import * as React from 'react';
import { Table} from 'react-bootstrap';



export default function ResultBox(props) {


  return (
   <>
   <div>
     {/* <div className='pic'><img src={props.image} width={200}></img></div> */}
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