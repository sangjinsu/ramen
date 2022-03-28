import type { NextPage } from 'next'
import { Container, Row, Col } from 'react-bootstrap';
import ResultBox from '../components/search/ResultBox'
import { useRouter } from "next/router";
import axios from 'axios'
import { useEffect, useState } from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Search: NextPage = () => {
  const { query } = useRouter()
  let [array, setArray] = useState([])
  const queryResult = [query.ramenType, query.noodleType, query.ramenStyle]
  const name = [['봉지라면', '컵라면'], ['건면', '유탕면', '생면,숙면'], ['국물', '비빔,볶음면', '짜장라면']]


  const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    console.log(value)
  };

  const ramenPerPage = 5; // 페이지당 리스트 개수
  const currentPageLast = currentPage * ramenPerPage; // 현재 페이지의 처음
  const currentPageFirst = currentPageLast - ramenPerPage; /// 현재 페이지의 끝
  const currentRamens = array.slice(currentPageFirst, currentPageLast); // 동일이 고마오
  const pageNumber = Math.ceil(array.length / ramenPerPage);

  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://j6c104.p.ssafy.io:8080/v1/ramen/category',
      data: {
        noodleType: query.noodleType,
        // 면타입
        ramenStyle: query.ramenStyle,
        // 국물,비빔,짜장..
        ramenType: query.ramenType,
        // 봉지,컵
      },
    })
      .then((result) => {
        console.log('요청성공')
        console.log(result)
        setArray(result.data)

      })
      .catch((error) => {
        console.log('요청실패')
        console.log(error)
      })
  }, [])

  return <>

    <Row>
      <Col xs={2} md={2}></Col>
      <Col xs={8} md={8}>
        <h1>카테고리결과 </h1>
        {/* {result[0]}{result[1]}{result[2]} */}
        {/* {result[0]}
        {result[1]}
        {result[2]} */}

        {/* {
  page.length ===0
  ?null
  :(
    page.map(function(a,index){
      return (
        <ResultBox key = {index} name={a[0].name} brand={a[0].brand}></ResultBox>
        // <p>{index} {a.name}</p>
        // 아니 배열+1개까지뜨다가지금은 왜 되냐..?
      )
    })
  )
} */}
        {/* {
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
} */}


        {currentRamens.map(function (a, index) {
          let imgpath = `ramen/${a.name}.png`
          return (
            <ResultBox key={index} name={a.name} brand={a.brand} image={imgpath}></ResultBox>
          )
        })}

        <Stack spacing={2} >
          <Pagination count={pageNumber} shape="rounded" onChange={handleChange} />
        </Stack>
        {/* <Stack spacing={2}>

      <Typography>Page: {page}</Typography>
      <Pagination count={5} page={page} onChange={handleChange} />
    </Stack> */}

        {/* {
        name.map(function(n,i){
          return(
            <ResultBox key = {i} name={n} image={image[i]}></ResultBox>
          )
        })
      }   */}


      </Col>
      <Col xs={2} md={2}></Col>

    </Row>


  </>


}

export default Search
