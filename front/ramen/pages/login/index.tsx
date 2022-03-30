import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { setCookies, getCookie } from "cookies-next";
import { useRouter } from "next/router";

function Login() {
  const Router = useRouter();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };

  const handleInputPw = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPw(event.target.value);
  };

  const setCookiesInLogin = async (response) => {
    const member_id = response.data.member_id;
    const gender = response.data.gender;
    const age = response.data.age;
    const name = response.data.name;
    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;
    await setCookies("member_id", member_id);
    await setCookies("gender", gender);
    await setCookies("age", age);
    await setCookies("name", name);
    await setCookies("accessToken", accessToken);
    await setCookies("refreshToken", refreshToken);
  };

  const onClickLogin = () => {
    axios
      .post("http://j6c104.p.ssafy.io:8083/v1/member/login", {
        inputEmail: inputEmail,
        inputPw: inputPw,
      })
      .then(function (response) {
        // 쿠키에 저장
        setCookiesInLogin(response);
        // 메인 페이지로 보냄
        Router.replace("/");
      })
      .catch(function (error) {
        alert(error);
      });
  };

  // 유효한 로그인을 한 사용자는 메인 페이지로 보냄
  useEffect(() => {
    const refreshToken = getCookie("refreshToken");
    if (refreshToken) {
      axios
        .get("http://j6c104.p.ssafy.io:8083/v1/member/refresh", {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        })
        .then(function (response) {
          console.log("refresh 성공", response);
          setCookies("accessToken", response.data.accessToken);
          Router.push({
            pathname: "/",
          });
        });
    }
  }, []);

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <h2>로그인</h2>
              <div style={{ padding: "100px 0", textAlign: "center" }}>
                <Form>
                  <Form.Field inline>
                    <input
                      placeholder="Email"
                      type="text"
                      name="input_email"
                      value={inputEmail}
                      onChange={handleInputEmail}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <input
                      placeholder="Password"
                      type="password"
                      name="input_pw"
                      value={inputPw}
                      onChange={handleInputPw}
                    />
                  </Form.Field>
                  <Button color="blue" onClick={onClickLogin}>
                    Login
                  </Button>
                  <Button
                    color="blue"
                    onClick={() => {
                      Router.push({
                        pathname: "signup",
                      });
                    }}
                  >
                    Signup
                  </Button>
                </Form>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;
