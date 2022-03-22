import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "next/router";

// 신라면, 진라면 매운맛, 안성탕면, 삼양라면, 얼큰한너구리
// 올리브짜파게티, 팔도비빔면, 불닭볶음면, 짜왕, 오뚜기 스파게티
// 육개장사발면, 참깨라면 CUP, 팔도 왕뚜껑, 새우탕큰사발면, 生生(생생)우동
// 오뚜기쇠고기미역국라면, 나가사끼 짬뽕, 보글보글 부대찌개면, 사리곰탕큰사발면, 우육탕면

function RamenPreference({ router: { query } }) {
  const [userInfo, setUserInfo] = useState(JSON.parse(query.userInfo));
  console.log(userInfo);
  const ramenList1 = [
    "신라면",
    "진라면 매운맛",
    "안성탕면",
    "삼양라면",
    "얼큰한 너구리",
  ];

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <h1>선호 라면 선택</h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(RamenPreference);
