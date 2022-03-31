/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

const Test: NextPage = () => {


  let [data, setData] = useState([]);
  let [like, setLike] = useState(false)
  useEffect(() => {
    axios
      .get("http://j6c104.p.ssafy.io:8080/v1/ramen/islike/7/1")
      .then((result) => {
        console.log("요청성공");
        console.log(result);
        setData(result.data);
      })
      .catch((error) => {
        console.log("요청실패으하하");
        setLike(true)
        console.log(error);
      });
  }, []);
  // 빈배열 한번 실행

  return (
    <>
      <h1>axios테스트</h1>

      {/* {data} */}
      <button
        onClick={() => {
          axios
            .get("http://j6c104.p.ssafy.io:8080/v1/ramen/islike/7/1")
            .then((result) => {
              console.log("요청성공");
              console.log(result);
              console.log(result.data);
              console.log(result.data[0]);
            })
            .catch((error) => {
              console.log("요청실패");
              console.log(error);
            });
        }}
      >
        클릭
      </button>
      <button
        onClick={() => {
          axios({
            method: "get",
            url: "https://codingapple1.github.io/shop/data2.json",
          })
            .then((result) => {
              console.log("요청성공");
              console.log(result);
              console.log(result.data);
              console.log(result.data[0]);
            })
            .catch((error) => {
              console.log("요청실패");
              console.log(error);
            });
        }}
      >
        클릭2
      </button>

      <button
        onClick={() => {
          axios({
            method: "post",
            url: "http://j6c104.p.ssafy.io:8080/v1/ramen/category",
            data: {
              noodleType: 1,
              ramenStyle: 1,
              ramenType: 1,
            },
          })
            .then((result) => {
              console.log("요청성공");
              console.log(result);
            })
            .catch((error) => {
              console.log("요청실패");
              console.log(error);
            });
        }}
      >
        클릭3
      </button>
      {
        like
          ? <p>좋아요버튼안보이지롱~!~!</p>
          : <p>좋아요버튼보이지롱!!!</p>
      }
      {/* <p>{data[0].title}</p> */}

      {/* 예제코드 */}
      {/* axios.post( 'url', 
  { 
   contact: 'Sewon', 
   email: 'sewon@gmail.com' 
   }, 
  { 
   headers:{ 
    'Content-type': 'application/json', 
    'Accept': 'application/json' 
      } 
    } 
) 
  .then((response) => { console.log(response.data); }) 
  .catch((response) => { console.log('Error!) }); */}
    </>
  );
};

export default Test;
