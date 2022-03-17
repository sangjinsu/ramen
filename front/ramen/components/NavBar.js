import Link from "next/link";
import { useRouter } from "next/router";
import { Container,Row,Col,Navbar,Nav,NavDropdown} from 'react-bootstrap';


export default function NavBar() {
  const router = useRouter();

  
  return (
    <Navbar collapseOnSelect expand="lg" bg="bg-white" variant="light">
  <Container>
  <Navbar.Brand href="#home"><img src="/logo.png" width={200}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"><h3>라면검색</h3></Nav.Link>
      
      <Nav.Link href="#pricing"><h3>전체라면보기</h3></Nav.Link>
      
    </Nav>
    <Nav>
    <NavDropdown title="메뉴펼치기" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">로그인</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">로그아웃</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">회원가입</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">마이페이지</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
//     <nav>
//       <Container>
//   <Row>
//     <Col><img src="/logo.png" width={200}/></Col>
//     <Col>      
// </Col>
//     <Col></Col>
//   </Row>
// </Container>
      
      
//     </nav>
  );
}