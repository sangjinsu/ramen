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

const Search3: NextPage = () => {
  const { query } = useRouter()
  let [array, setArray] = useState([])
  const resultImage = `/keyword/${query.keyWord}.png`
  const eng = query.keyWord
  const queryResult = {
    kkoDeul: '꼬들',
    taengGeul: '탱글',
    jjolGit: '쫄깃',
    greenOnion: '파',
    egg: '달걀',
    beef: '소고기',
    pork: '돼지고기',
    chickenBreast: '닭가슴살',
    milk: '우유',
    riceCake: '떡',
    dumpling: '만두',
    softTofu: '순두부',
    kimchi: '김치',
    mayonnaise: '마요네즈',
    cheese: '치즈',
    garlic: '마늘',
    pepper: '후추',
    chiliPowder: '고춧가루',
    beanSprouts: '숙주',
    redPepper: '고추',
    soyaSprouts: '콩나물',
    seafood: '해산물',
    seaweed: '미역',
    sausage: '소세지',
    tuna: '참치',
    ketchup: '케찹',
    vegan: '비건',
    diet: '다이어트',
    spicy: '매운맛',
    lightness: '담백',
    haejang: '해장',
  }


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
      method: 'get',
      url: `http://j6c104.p.ssafy.io:8080/v1/ramen/analysis/${query.keyWord}`,
    })
      .then((result) => {
        console.log('get요청성공')
        console.log(result)
        setArray(result.data)
      })
      .catch((error) => {
        console.log('요청실패')
        console.log(error)
      })

  }, [])

  return <>
    <Container>
      <Row>
        <Col xs={2} md={2}></Col>
        <Col xs={8} md={8}>
          <div className='keyword'><img src={`keyword/${query.keyWord}.png`} width={100}></img> </div>
          <div className='keyword'>{queryResult[eng]}</div>
          <hr></hr>
          {/* <p>{query}</p> */}
          {/* <p>{query.keyWord}</p> */}
          {currentRamens.map(function (a, index) {
            let imgpath = `ramen/${a.name}.png`
            let ramenName = `${a.name}.png`
            return (
              <ResultBox key={index} name={a.name} brand={a.brand} image={imgpath} id={a.ramenId} ramenName={ramenName}></ResultBox>
            )
          })}

          <Stack spacing={2} >
            <Pagination count={pageNumber} shape="rounded" onChange={handleChange} />
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
    </Container>
    <style jsx>{`
        .keyword {
          display: inline;
          font-weight: bold;
          font-size:30px;
        }
        
        
      `}</style>

  </>


}

export default Search3
