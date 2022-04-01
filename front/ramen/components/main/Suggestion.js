import * as React from 'react';
import { Row,Col,Card,ListGroup} from 'react-bootstrap';
import axios from 'axios'
import { useEffect, useState } from 'react';



export default function Suggestion(props) {
  let [ramen, setRamen] = useState([]);
  useEffect(()=>{
    if(props.sug==='ubcf'){
      axios.get(`http://j6c104.p.ssafy.io:8084/v1/recommend/ubcf/${props.id}`)
    .then((result)=>{console.log('ubcf요청성공')
  console.log(result)
  console.log(result.data)
  console.log(result.data[0])
  setRamen(result.data)
  
  })
    .catch((error)=>{console.log('ubcf요청실패')
    console.log(error)
  
  })
    }
  },[])
  useEffect(()=>{
    if(props.sug==='dbrc'){
      axios.get(`http://j6c104.p.ssafy.io:8084/v1/recommend/dbrc/${props.id}`)
    .then((result)=>{console.log('ubcf요청성공')
  console.log(result)
  console.log(result.data)
  console.log(result.data[0])
  setRamen(result.data)
  
  })
    .catch((error)=>{console.log('ubcf요청실패')
    console.log(error)
  
  })
    }
  },[])
  useEffect(()=>{
    if(props.sug==='ibcf'){
      axios.get(`http://j6c104.p.ssafy.io:8084/v1/recommend/ibcf/${props.id}`)
    .then((result)=>{console.log('ubcf요청성공')
  console.log(result)
  console.log(result.data)
  console.log(result.data[0])
  setRamen(result.data)
  
  })
    .catch((error)=>{console.log('ubcf요청실패')
    console.log(error)
  
  })
    }
  },[])
  return (

      <>

    {props.title}
  <ListGroup>
    {
      ramen.length
      ?(
        <>
        <ListGroup.Item><img src="icon/number1.png" width={25}></img>
        {ramen[0]}</ListGroup.Item>
        <ListGroup.Item><img src="icon/number2.png" width={25}></img>
        {ramen[1]}</ListGroup.Item>
        <ListGroup.Item><img src="icon/number3.png" width={25}></img>
        {ramen[2]}</ListGroup.Item>
        </>
      )
      :(
        <>
        <ListGroup.Item><img src="icon/number1.png" width={25}></img>
        데이터가 없습니다.</ListGroup.Item>
        <ListGroup.Item><img src="icon/number2.png" width={25}></img>
        데이터가 없습니다.</ListGroup.Item>
        <ListGroup.Item><img src="icon/number3.png" width={25}></img>
        데이터가 없습니다.</ListGroup.Item>
        </>
      )
    }

</ListGroup>



<style jsx>{`
        
        

        
      `}</style>
      </>
  );
}