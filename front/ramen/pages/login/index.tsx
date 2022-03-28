import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import withAuth from "../../components/hoc/withAuth";
import { setCookies, getCookies } from "cookies-next";
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

  const onClickLogin = () => {
    axios
      .post("http://j6c104.p.ssafy.io:3000/v1/member/login", {
        inputEmail: inputEmail,
        inputPw: inputPw,
      })
      .then(function (response) {
        const gender = response.data.gender;
        const age = response.data.age;
        const name = response.data.name;
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        console.log(response);
        setCookies("gender", gender);
        setCookies("age", age);
        setCookies("name", name);
        setCookies("accessToken", accessToken);
        setCookies("refreshToken", refreshToken);
        // axios.defaults.headers.common["accessToken"] = `Bearer ${accessToken}`;
        // console.log(axios.defaults.headers);
        // axios.defaults.headers.common['accessToken'] = `Bearer %{accessToken}`
        Router.replace("/");
        console.log(getCookies());
      })
      .catch(function (error) {
        alert(error);
      });
  };

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
