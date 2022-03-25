import type { NextPage } from 'next'
import { Container,Row,Col} from 'react-bootstrap';
import ResultBox from '../components/search/ResultBox'
import { useRouter } from "next/router";
import axios from 'axios'
import { useEffect, useState } from 'react';



const Search3: NextPage = () => {
  let name= ['진라면 매운맛','잔라면 순한맛','짜파게티']
  let image = ['j.jpg','j2.jpg','jja.jpg']
  const {query} = useRouter()
  let [array,setArray] = useState([])

  useEffect(()=>{
    axios({
     method:'get',
     url:`http://j6c104.p.ssafy.io:8080/v1/ramen/analysis/${query.keyWord}`,
   })
   .then((result)=>{
     console.log('요청성공')
     console.log('get요청성공')
      console.log(result)
      setArray(result.data)
 })
   .catch((error)=>{console.log('요청실패')
   console.log(error)  
 })

 },[])

  return <>
  <Row>
    <Col xs={2} md={2}></Col>
    <Col xs={8} md={8}>
    <h1>키워드결과</h1>
    {/* <p>{query}</p> */}
    <p>{query.keyWord}</p>
    {
  array.length ===0
  ?null
  :(
    array.map(function(a,index){
      return (
        <ResultBox key = {index} name={a.name} brand={a.brand}></ResultBox>
        // <p>{index} {a.name}</p>
        // 아니 배열+1개까지뜨다가지금은 왜 되냐..?
      )
    })
  )
}

      {/* {
        name.map(function(n,i){
          return(
            <ResultBox key = {i} name={n} image={image[i]}></ResultBox>
          )
        })
      } */}

    
    </Col>
    <Col xs={2} md={2}></Col>

  </Row>


  </>
   
  
}

export default Search3
