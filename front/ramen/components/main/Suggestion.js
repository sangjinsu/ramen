import * as React from 'react';
import { Row,Col,Card,ListGroup} from 'react-bootstrap';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Link from "next/link";


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
    .then((result)=>{console.log('dbrc요청성공')
  console.log(result)
  console.log(result.data)
  console.log(result.data[0])
  setRamen(result.data)
  
  })
    .catch((error)=>{console.log('dbrc요청실패')
    console.log(error)
  
  })
    }
  },[])
  useEffect(()=>{
    if(props.sug==='ibcf'){
      axios.get(`http://j6c104.p.ssafy.io:8084/v1/recommend/ibcf/${props.id}`)
    .then((result)=>{console.log('ibcf요청성공')
  console.log(result)
  console.log(result.data)
  console.log(result.data[0])
  setRamen(result.data)
  
  })
    .catch((error)=>{console.log('ibcf요청실패')
    console.log(error)
  
  })
    }
  },[])
  return (

      <>

    {props.title}
  <ListGroup>
    {/* {ramen.length !==0
    ? <p>{ramen.length}</p>
    : <p>0이 아닙니다.{ramen.length}</p>
    } */}
    {
      ramen.length !==0
      ?(
        <>
        <ListGroup.Item><img src="icon/number1.png" width={25}></img>
        <Link href={`/ramen/${Object.keys(ramen)[0]}`}><a>{Object.values(ramen)[0]}</a></Link>
      
        </ListGroup.Item>
        <ListGroup.Item><img src="icon/number2.png" width={25}></img>
        <Link href={`/ramen/${Object.keys(ramen)[1]}`}><a>{Object.values(ramen)[1]}</a></Link>
        </ListGroup.Item>
        <ListGroup.Item><img src="icon/number3.png" width={25}></img>
        <Link href={`/ramen/${Object.keys(ramen)[2]}`}><a>{Object.values(ramen)[2]}</a></Link>
        </ListGroup.Item>
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
        a{
          color: black;
          text-decoration-line: none;
        }
        

        
      `}</style>
      </>
  );
}