import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function Login() {
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
      .post("api/member/login", {
        inputEmail: inputEmail,
        inputPw: inputPw,
      })
      .then(function (response) {
        console.log(response);
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
              <div>
                <label htmlFor="input_email">ID : </label>
                <input
                  type="text"
                  name="input_email"
                  value={inputEmail}
                  onChange={handleInputEmail}
                />
              </div>
              <div>
                <label htmlFor="input_pw">PW : </label>
                <input
                  type="password"
                  name="input_pw"
                  value={inputPw}
                  onChange={handleInputPw}
                />
              </div>
              <div>
                <button type="button" onClick={onClickLogin}>
                  Login
                </button>
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
