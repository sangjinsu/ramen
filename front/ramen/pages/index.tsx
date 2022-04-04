/* eslint-disable prefer-const */
import type { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import * as React from "react";
import Ibox from "../components/main/box";
import Lank from "../components/main/Lank";
import Sug from "../components/main/Suggestion";
import axios from "axios";
import { useEffect, useState } from "react";
import { getCookie, setCookies } from "cookies-next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  let [ramen, setRamen] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const Router = useRouter();
  const [accessToken, setAccessToken] = useState(getCookie("accessToken"));
  const [refreshToken, setRefreshToken] = useState(getCookie("refreshToken"));
  const [memberID, setMemberID] = useState(getCookie("member_id"));

  useEffect(() => {
    if (accessToken) {
      setIsLogin(true);
      axios
        .get("http://j6c104.p.ssafy.io:8083/v1/member/check-jwt", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        // accessToken 유효
        .then(function (response) {
          // 추천 라면 가져오기
          console.log("추천 라면 가져오기");
        })
        // accessToken 유효 X
        .catch(function (error) {
          if (error.response.status === 401) {
            axios
              .get("http://j6c104.p.ssafy.io:8083/v1/member/refresh", {
                headers: {
                  Authorization: `Bearer ${refreshToken}`,
                },
              })
              // 추천 라면 가져오기
              .then(function (response) {
                setCookies("accessToken", response.data.accessToken);
                setAccessToken(response.data.accessToken);
                axios.get(
                  `http://j6c104.p.ssafy.io.:8084/v1/recommend/ibcf/${memberID}`
                );
              })
              .catch(function (error) {
                alert("로그인 세션 시간이 만료되었습니다.");
                if (error.response.statue === 401) {
                  Router.replace("/login");
                }
              });
          }
        });
    } else {
      console.log("로그인 안함");
    }
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://j6c104.p.ssafy.io:8081/v1/ranking/ramen`,
    })
      .then((result) => {
        console.log("랭킹요청성공");
        console.log(result.data);
        console.log(result.data[0]);
        console.log(result.data[0].ramenId);
        console.log(result.data.length);
        setRamen(result.data);
        // console.log(ramen)
      })
      .catch((error) => {
        console.log("요청실패");
        console.log(error);
      });
  }, []);

  // 시간차 랭킹리스트
  // useEffect(() => {
  //   setTimeout(function () {
  //     axios
  //       .all([axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${idNum[0]}`),
  //       axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${idNum[1]}`),
  //       axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${idNum[2]}`),
  //       axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${idNum[3]}`)])
  //       .then(
  //         axios.spread((res1, res2, res3, res4) => {
  //           console.log(res1, res2, res3, res4)
  //           // console.log(idNum[0])
  //           console.log('시간차리스트요청성공')
  //         }))
  //       .catch((error) => {
  //         console.log('리스트요청실패')
  //         console.log(error)
  //       })
  //   }, 200);
  // }, [])

  return (
    <>
      <Container>
        {/* <h1>테스트출력</h1>
      {ramen[0]
        ? <p>{ramen[0].ramenId}</p>
        : null}
      {ramen.map(function (a, index) {
        return (
          <p key={index}>{a.ramenId}</p>
        )
      })} */}
        <Ibox></Ibox>
        <Row>
          <Col xs={1} md={2} lg={3}></Col>
          <Col xs={10} md={8} lg={5}>
            <Lank ramen={ramen}></Lank>
          </Col>
          <Col xs={1} md={2} lg={4}></Col>
        </Row>
        <Row>
          <Col xs={1} md={2} lg={3}></Col>
          <Col xs={10} md={8} lg={5}>

            <Sug id={memberID} title="DBRC추천" sug="dbrc"></Sug>
          </Col>
          <Col xs={1} md={2} lg={4}></Col>
        </Row>
        <Row>
          <Col xs={1} md={2} lg={3}></Col>
          <Col xs={10} md={8} lg={5}>
            <Sug id={memberID} title="IBCF추천" sug="ibcf"></Sug>
          </Col>
          <Col xs={1} md={2} lg={4}></Col>
        </Row>
        <Row>
          <Col xs={1} md={2} lg={3}></Col>
          <Col xs={10} md={8} lg={5}>
            <Sug id={memberID} title="UBCF추천" sug="ubcf"></Sug>
          </Col>
          <Col xs={1} md={2} lg={4}></Col>
        </Row>
        {/* <Row>
          <Col xs={0} md={2} lg={3}></Col>
          <Col xs={5} md={4} lg={3}>
            <div className="sug">
              <Sug id={memberID}></Sug>
            </div>
          </Col>
          <Col xs={5} md={4} lg={3}>
            <div className="sug">
              <Sug id={memberID}></Sug>
            </div>
          </Col>
          <Col xs={0} md={2} lg={3}></Col>
        </Row> */}
        {/* {isLogin ? <h1>추천라면 보여주면 될듯 {memberID}</h1> : null} */}
        {/* <div className="test">이거 박스테스트</div> */}
      </Container>
      <style jsx>{`
        .sug {
          margin: 10px;
        }
        .test {
          border: 1px solid;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default Home;
