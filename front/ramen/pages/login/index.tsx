import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

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

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <h2>로그인</h2>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;
