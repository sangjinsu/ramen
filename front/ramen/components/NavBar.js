import Link from "next/link";
import { useRouter } from "next/router";
import { Container,Row,Col,Navbar,Nav,NavDropdown,Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
  const router = useRouter();


  
  return (
    <Navbar collapseOnSelect expand="lg" bg="bg-white" variant="light">
  <Container>
  <Navbar.Brand href="/"><img src="/logo.png" width={200}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/"><h4>라면검색</h4></Nav.Link>
      
      <Nav.Link href="/index2"><h4>전체라면보기</h4></Nav.Link>
      
    </Nav>
    <Nav>
    <Dropdown>
  <Dropdown.Toggle variant="" id="dropdown-basic">
  <FontAwesomeIcon icon={faUser} /> 회원메뉴
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">로그인 / 로그아웃</Dropdown.Item>
    <Dropdown.Item href="#/action-2">회원가입</Dropdown.Item>
    <Dropdown.Item href="#/action-3">마이페이지</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

    {/* <NavDropdown title="회원메뉴" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">로그인</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">로그아웃</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">회원가입</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">마이페이지</NavDropdown.Item>
      </NavDropdown> */}
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