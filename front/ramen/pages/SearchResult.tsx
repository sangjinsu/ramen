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
  const prevNum1: any = query.ramenType;
  const prevNum2: any = query.noodleType;
  const prevNum3: any = query.ramenStyle;

  const default_img = "ramen/default.png";
  const handleImage = (e) => {
    e.target.src = default_img;
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

  const categoryName = [
    "건면",
    "국물",
    "봉지라면",
    "비빔,볶음면",
    "생면,숙면",
    "유탕면",
    "짜장라면",
    "컵라면",
  ];

  const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const ramenPerPage = 5; // 페이지당 리스트 개수
  const currentPageLast = currentPage * ramenPerPage; // 현재 페이지의 처음
  const currentPageFirst = currentPageLast - ramenPerPage; /// 현재 페이지의 끝
  const currentRamens = array.slice(currentPageFirst, currentPageLast); // 동일이 고마오
  const pageNumber = Math.ceil(array.length / ramenPerPage);

  useEffect(() => {
    if (query.noodleType === undefined) {
      const dm = [
        {
          ramenId: 999,
          name: "없어용",
          brand: "다시 검색 해보세용",
        },
        // {
        //   ramenId: 31,
        //   name: 'h2',
        //   brand: "2h",
        // },
      ];
      setArray(dm);
      // query.noodleType = 3
      // query.ramenStyle = 3
      // query.ramenType = 1
    } else {
      axios({
        method: "post",
        url: "http://j6c104.p.ssafy.io:8888/v1/ramen/category",
        data: {
          noodleType: query.noodleType,
          // 면타입
          ramenStyle: query.ramenStyle,
          // 국물,비빔,짜장..
          ramenType: query.ramenType,
          // 봉지,컵
        },
      }).then((result) => {
        setArray(result.data);
      });
    }
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col xs={1} md={2}></Col>
          <Col xs={10} md={8}>
            {/* <h1>카테고리결과 </h1> */}
            {currentRamens ? (
              <div className="title">
                <Container>
                  <Row>
                    <Col xs={12} md={12} lg={12}>
                      {prevNum1 === "0" ? null : (
                        <>
                          <img
                            src={`icon/rename/${ramenType[prevNum1]}.png`}
                            width={45}
                            onError={handleImage}
                          ></img>
                          &nbsp;
                        </>
                      )}
                      {prevNum2 === "0" ? null : (
                        <>
                          <img
                            src={`icon/rename/${noodleType[prevNum2]}.png`}
                            width={45}
                            onError={handleImage}
                          ></img>
                          &nbsp;
                        </>
                      )}
                      {prevNum3 === "0" ? null : (
                        <>
                          <img
                            src={`icon/rename/${ramenStyle[prevNum3]}.png`}
                            width={45}
                            onError={handleImage}
                          ></img>
                        </>
                      )}
                    </Col>
                  </Row>
                </Container>
              </div>
            ) : null}

            <hr></hr>
            {/* {currentRamens.length === 0
            ? <p>없어</p>
            : <p>있어</p>} */}

            {currentRamens.length ? null : <p>검색결과가 없어용</p>}

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

            <div className="pagination_area">
              <Stack spacing={2}>
                <Pagination
                  count={pageNumber}
                  shape="rounded"
                  onChange={handleChange}
                />
              </Stack>
            </div>
          </Col>
          <Col xs={1} md={2}></Col>
        </Row>
      </Container>
      <style jsx>{`
        .title {
          display: inline;
          font-weight: bold;
          font-size: 16px;
        }

        .pagination_area {
          margin-left: 0;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Search;
