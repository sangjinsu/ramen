import type { NextPage } from 'next'
import { Container,Row,Col} from 'react-bootstrap';
import ResultBox from '../components/search/ResultBox'
import { useRouter } from "next/router";
import axios from 'axios'
import { useEffect, useState } from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Search3: NextPage = () => {
  const {query} = useRouter()
  let [array,setArray] = useState([])

  const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    console.log(value)
  };
  const ramenPerPage = 5; // 페이지당 리스트 개수
  const currentPageLast = currentPage * ramenPerPage; // 현재 페이지의 처음
  const currentPageFirst = currentPageLast -ramenPerPage; /// 현재 페이지의 끝
  const currentRamens = array.slice(currentPageFirst, currentPageLast); // 동일이 고마오
  const pageNumber = Math.ceil(array.length / ramenPerPage);


  useEffect(()=>{
    axios({
     method:'get',
     url:`http://j6c104.p.ssafy.io:8080/v1/ramen/analysis/${query.keyWord}`,
   })
   .then((result)=>{
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
    {currentRamens.map(function(a,index){
  return(
    <ResultBox key = {index} name={a.name} brand={a.brand}></ResultBox>
  )
})}

<Stack spacing={2} >
        <Pagination count={pageNumber} shape="rounded" onChange={handleChange}/>
      </Stack>
    {/* {
  array.length ===0
  ?null
  :(
    array.map(function(a,index){
      return (
        <ResultBox key = {index} name={a.name} brand={a.brand}></ResultBox>
      )
    })
  )
} */}

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
