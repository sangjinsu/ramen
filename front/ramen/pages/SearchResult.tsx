/* eslint-disable prefer-const */
import type { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import ResultBox from "../components/search/ResultBox";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Search: NextPage = () => {
  const { query } = useRouter();
  let [array, setArray] = useState([]);
  const queryResult = [query.ramenType, query.noodleType, query.ramenStyle];

  const default_img = "ramen/default.png";
  const handleImage = (e) => {
    e.target.src = default_img;
    console.log(e.target.src);
  };

  const ramenType = {
    1: "봉지라면",
    2: "컵라면",
  };
  const noodleType = {
    1: "건면",
    2: "유탕면",
    3: "생면,숙면",
  };
  const ramenStyle = {
    1: "국물",
    2: "비빔,볶음면",
    3: "짜장라면",
  };

  const categoryName = ["건면",
    "국물", "봉지라면", "비빔,볶음면",
    "생면,숙면", "유탕면", "짜장라면", "컵라면"
  ]



  const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    console.log(value);
  };

  const ramenPerPage = 5; // 페이지당 리스트 개수
  const currentPageLast = currentPage * ramenPerPage; // 현재 페이지의 처음
  const currentPageFirst = currentPageLast - ramenPerPage; /// 현재 페이지의 끝
  const currentRamens = array.slice(currentPageFirst, currentPageLast); // 동일이 고마오
  const pageNumber = Math.ceil(array.length / ramenPerPage);

  useEffect(() => {
    if (query.noodleType === undefined) {
      const dm = [{
        ramenId: 999,
        name: '없어용',
        brand: "다시 검색 해보세용",
      },
        // {
        //   ramenId: 31,
        //   name: 'h2',
        //   brand: "2h",
        // },
      ]
      console.log(dm)
      setArray(dm)
      // query.noodleType = 3
      // query.ramenStyle = 3
      // query.ramenType = 1
    }
    else {
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
          console.log(query.noodleType)
          console.log(query.ramenStyle)
          console.log(query.ramenType)

          console.log(result)
          console.log(result.data)
          setArray(result.data)
          // const dm = [{
          //   ramenId: 33,
          //   name: 'h',
          //   brand: "h",
          // }, {
          //   ramenId: 31,
          //   name: 'h2',
          //   brand: "2h",
          // },]
          // console.log(dm)
          // setArray(dm)
        })
        .catch((error) => {
          console.log('요청실패')
          console.log(error)

        })
    }

  }, [])

  return <>
    <Container>
      <Row>
        <Col xs={1} md={2}></Col>
        <Col xs={10} md={8}>
          {/* <h1>카테고리결과 </h1> */}
          {currentRamens
            ? (
              <div className="title">
                <Container>
                  <Row>
                    <Col xs={12} md={12} lg={12}>
                      {/* {categoryName.includes(ramenType[queryResult[0]])
                        ? <p>있어</p>
                        : null
                      } */}
                      <img src={`icon/rename/${ramenType[queryResult[0]]}.png`} width={45} onError={handleImage}></img>&nbsp;
                      <img src={`icon/rename/${noodleType[queryResult[1]]}.png`} width={45} onError={handleImage}></img>&nbsp;
                      <img src={`icon/rename/${ramenStyle[queryResult[2]]}.png`} width={45} onError={handleImage}></img>
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      {ramenType[queryResult[0]]}&nbsp;/&nbsp;
                      {noodleType[queryResult[1]]}&nbsp;/&nbsp;
                      {ramenStyle[queryResult[2]]}&nbsp;
                    </Col>
                  </Row>
                </Container>




              </div>
            )
            : null
          }

          <hr></hr>
          {/* {currentRamens.length === 0
            ? <p>없어</p>
            : <p>있어</p>} */}

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

        </Col>
        <Col xs={1} md={2}></Col>

      </Row>
    </Container>
    <style jsx>{`
        .title {
          display: inline;
          font-weight: bold;
          font-size: 16ㅔㅌ;;
        }
      `}</style>
  </>

};

export default Search

