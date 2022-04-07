/* eslint-disable prefer-const */
import type { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import * as React from "react";
import Ibox from "../components/main/box";
import Lank from "../components/main/Lank";
import Sug from "../components/main/Suggestion";
import axios from "axios";
import { useEffect, useState } from "react";
import { getCookie, setCookies, removeCookies } from "cookies-next";
import { useRouter } from "next/router";
import serverURLDoc from "../components/main/ServerURL";

const AUTH_URL = serverURLDoc.AUTH_URL;

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
        .get(`${AUTH_URL}/check-jwt`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        // accessToken 유효 X
        .catch(function (error) {
          axios
            .get(`${AUTH_URL}/refresh`, {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            })
            // 추천 라면 가져오기
            .then(function (response) {
              setCookies("accessToken", response.data.accessToken);
              setAccessToken(response.data.accessToken);
              axios.get(
                `http://j6c104.p.ssafy.io.:8888/v1/recommend/ibcf/${memberID}`
              );
            })
            .catch(function (error) {
              alert("로그인 세션 시간이 만료되었습니다.");
              removeCookies("member_id");
              removeCookies("accessToken");
              removeCookies("refreshToken");
              removeCookies("name");
              removeCookies("age");
              removeCookies("gender");

              Router.replace("/login");
            });
        });
    } else {
      // console.log("로그인 안함");
    }
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://j6c104.p.ssafy.io:8888/v1/ranking/ramen`,
    }).then((result) => {
      setRamen(result.data);
    });
  }, []);

  return (
    <>
      <Container>
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
