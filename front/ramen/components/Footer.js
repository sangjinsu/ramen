/* eslint-disable react/react-in-jsx-scope */
import { Container, Row, Col } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={1} md={2} lg={2}></Col>
          <Col xs={10} md={8} lg={8}>
            <hr></hr>

            <div className="footer">
              라면 추천 서비스 / &nbsp;
              <a
                href="https://www.flaticon.com/kr/free-icons/"
                title="라면 아이콘"
                style={{ color: "black", textDecoration: "none" }}
              >
                아이콘 제작자: tulpahn - Flaticon
              </a>
            </div>
          </Col>
          
          <Col xs={1} md={2} lg={2}></Col>
        </Row>
      </Container>
      <style jsx>{`
        .footer {
          margin: 10px;
        }
      `}</style>
    </>
  );
}
