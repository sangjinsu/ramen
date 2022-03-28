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

const Search2: NextPage = () => {
  const { query } = useRouter()
  let [array, setArray] = useState([])

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

  //   useEffect(()=>{
  //     axios({
  //      method:'get',
  //      url:`http://j6c104.p.ssafy.io:8080/v1/ramen/analysis/${query.keyWord}`,
  //    })
  //    .then((result)=>{
  //     console.log('get요청성공')
  //     console.log(result)
  //     setArray(result.data)
  //  })
  //    .catch((error)=>{console.log('요청실패')
  //    console.log(error)  
  //  })

  //  },[])

  return <>
    <Container>
      <Row>
        <Col xs={2} md={2}></Col>
        <Col xs={8} md={8}>
          <h1>텍스트검색결과</h1>
          {query.textResult}
          {/* 여긴 백엔드 api받으면 해야할곳 */}
        </Col>
        <Col xs={2} md={2}></Col>
      </Row>
    </Container>
  </>


}

export default Search2
