/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";

const Test: NextPage = () => {
  return (
    <>
      <h1>그리드 테스트</h1>
      <Container>
        <Row>
          <Col xs={2} md={4} lg={6}>
            1
          </Col>
          <Col xs={2} md={4} lg={6}>
            2
          </Col>
          <Col xs={2} md={4} lg={6}>
            3
          </Col>
          <Col xs={2} md={4} lg={6}>
            4
          </Col>
          <Col xs={2} md={4} lg={6}>
            5
          </Col>
          <Col xs={2} md={4} lg={6}>
            6
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Test;
