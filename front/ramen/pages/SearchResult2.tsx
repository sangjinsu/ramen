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
  // let [q,Setq] = useState([query.ramenType,query.noodleType,query.ramenStyle])
  let [array, setArray] = useState([]);
  let [pagenation, setPagenation] = useState([]);
  let [pagetmp, setPagetmp] = useState([]);

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    axios({
      method: "post",
      url: "http://j6c104.p.ssafy.io:8080/v1/ramen/category",
      data: {
        noodleType: query.noodleType,
        ramenStyle: query.ramenStyle,
        ramenType: query.ramenType,
      },
    })
      .then((result) => {
        console.log("요청성공");
        console.log(result);
        // console.log(result.data)
        // console.log('------여기부터출력------')
        // let temp = []
        // temp.push(...result.data)
        setArray(result.data);
        // console.log(array)
        // console.log('여긴 안나오지만 밑에 삼항연산자에는 나옴')
        let arr = [];
        let range = Math.ceil(result.data.length / 5) - 1;
        let remain = result.data.length % 5;
        for (let i = 0; i < range; i++) {
          let arr2 = [];
          arr2.push(...result.data.slice(5 * i, 5 * i + 5));
          arr.push(arr2);
        }
        let arr2 = [];
        arr2.push(result.data.slice(5 * range, 5 * range + remain));
        arr.push(...arr2);
        setPagenation(arr);
        // ...써봐..?
        //
        console.log(arr);
        console.log("========");
        console.log(arr[0]);
        // ...으로 벗기는것도 좋네
        console.log("========");
        console.log(arr[1]);
        console.log(arr[2]);
        console.log(arr[3]);
        console.log(arr[3][0].name);
        console.log(arr[3].length);

        // console.log(page)
        setPagetmp(arr[1]);
      })
      .catch((error) => {
        console.log("요청실패");
        console.log(error);
      });
  }, []);

  return (
    <>
      <Row>
        <Col xs={2} md={2}></Col>
        <Col xs={8} md={8}>
          <h1>카테고리결과</h1>
          {pagenation.length}

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
          {array.length === 0
            ? null
            : array.map(function (a, index) {
                return (
                  <ResultBox
                    key={index}
                    name={a.name}
                    brand={a.brand}
                  ></ResultBox>
                  // <p>{index} {a.name}</p>
                  // 아니 배열+1개까지뜨다가지금은 왜 되냐..?
                );
              })}
          <Stack spacing={2}>
            {/* 여기가 page별로 다른거 보여주면될듯 */}

            <Typography>Page: {page}</Typography>
            <Pagination count={5} page={page} onChange={handleChange} />
          </Stack>

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
  );
};

export default Search;
