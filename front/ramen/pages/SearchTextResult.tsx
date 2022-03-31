/* eslint-disable prefer-const */
import type { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import ResultBox from "../components/search/ResultBox";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Search2: NextPage = () => {
  const { query } = useRouter();
  let [name, setName] = useState([]);
  let [brand, setBrand] = useState([]);

  //제품명페이지
  const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    console.log(value);
  };
  const ramenPerPage = 5; // 페이지당 리스트 개수
  const currentPageLast = currentPage * ramenPerPage; // 현재 페이지의 처음
  const currentPageFirst = currentPageLast - ramenPerPage; /// 현재 페이지의 끝
  const currentRamens = name.slice(currentPageFirst, currentPageLast); // 동일이 고마오
  const pageNumber = Math.ceil(name.length / ramenPerPage);

  //브랜드페이지
  const [currentPage2, setCurrentPage2] = React.useState(1); // 현재 페이지
  const handleChange2 = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage2(value);
    console.log(value);
  };
  const ramenPerPage2 = 5; // 페이지당 리스트 개수
  const currentPageLast2 = currentPage2 * ramenPerPage2; // 현재 페이지의 처음
  const currentPageFirst2 = currentPageLast2 - ramenPerPage2; /// 현재 페이지의 끝
  const currentRamens2 = brand.slice(currentPageFirst2, currentPageLast2); // 동일이 고마오
  const pageNumber2 = Math.ceil(brand.length / ramenPerPage2);

  // let [쿼리,set쿼리] = useState('값')
  useEffect(() => {
    axios({
      method: "get",
      url: `http://j6c104.p.ssafy.io:8082/v1/search/name?query=${query.textResult}`,
    })
      .then((result) => {
        console.log("get요청성공");
        console.log(result);
        setName(result.data);
      })
      .catch((error) => {
        console.log("요청실패");
        console.log(error);
      });
  }, [query]);
  // state값이아니고 그냥 query값을 바꿔주었는데도된다.

  useEffect(() => {
    axios({
      method: "get",
      url: `http://j6c104.p.ssafy.io:8082/v1/search/brand?query=${query.textResult}`,
    })
      .then((result) => {
        console.log("get요청성공");
        console.log(result);
        setBrand(result.data);
      })
      .catch((error) => {
        console.log("요청실패");
        console.log(error);
      });
  }, [query]);

  return (
    <>
      <Container>
        <Row>
          {/* {query.textResult} */}
          <Col xs={2} md={2}></Col>
          <Col xs={8} md={8}>
            <div className="title">->제품 검색결과</div>
            <hr></hr>
            {/* <h1>텍스트검색결과</h1> */}
            {/* {query.textResult} */}
            {/* 여긴 백엔드 api받으면 해야할곳 */}
            {currentRamens.map(function (a, index) {
              let imgpath = `ramen/${a.name}.png`;
              let ramenName = `${a.name}.png`;

              return (
                <ResultBox
                  key={index}
                  name={a.name}
                  brand={a.brand}
                  image={imgpath}
                  id={a.ramenId}
                  ramenName={ramenName}
                ></ResultBox>
              );
            })}

            <Stack spacing={2}>
              <Pagination
                count={pageNumber}
                shape="rounded"
                onChange={handleChange}
              />
            </Stack>
          </Col>
          <Col xs={2} md={2}></Col>
        </Row>
        <hr></hr>
        <Row>
          <Col xs={2} md={2}></Col>
          <Col xs={8} md={8}>
            <div className="title">->제조사 검색결과</div>
            <hr></hr>
            {/* <h1>텍스트검색결과</h1> */}
            {/* {query.textResult} */}
            {/* 여긴 백엔드 api받으면 해야할곳 */}
            {currentRamens2.map(function (a, index) {
              let imgpath = `ramen/${a.name}.png`;
              return (
                <ResultBox
                  key={index}
                  name={a.name}
                  brand={a.brand}
                  image={imgpath}
                ></ResultBox>
              );
            })}

            <Stack spacing={2}>
              <Pagination
                count={pageNumber2}
                shape="rounded"
                onChange={handleChange2}
              />
            </Stack>
          </Col>
          <Col xs={2} md={2}></Col>
        </Row>
      </Container>

      <style jsx>{`
        .title {
          display: inline;
          font-weight: bold;
          font-size: 30px;
        }
      `}</style>
    </>
  );
};

export default Search2;
