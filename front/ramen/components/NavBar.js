import Link from "next/link";
import { useRouter } from "next/router";
import { Container,Row,Col,Navbar,Nav,NavDropdown,Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
  const router = useRouter();


  
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="bg-white" variant="light">
  <Container>
  <Navbar.Brand ><img src="/logo.png" width={200}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {/* 최종 네브바, 반응형 위함 Link안에서 링크는 없애주고 안에넣기 */}
      <Nav.Link >
      <Link href="/">
          <div><a className='navmenu'>카테고리검색</a></div>
        </Link>
    </Nav.Link>

    <Nav.Link >
    <Link href="/index2">
          <div><a className='navmenu'>키워드검색</a></div>
        </Link>
    </Nav.Link>
    <Nav.Link >
    <Link href="/SearchResult">
          <div><a className='navmenu'>검색결과</a></div>
        </Link>
    </Nav.Link>
    <Nav.Link >
    <Link href="/SearchTextResult">
          <div><a className='navmenu'>텍스트검색결과</a></div>
        </Link>
    </Nav.Link>
    {/* <Nav.Link >
    <Link href="/">
    <div><a className='navmenu'>테스트메뉴</a></div>

        </Link>
    </Nav.Link> */}
    


{/* div감싸주는것만으로도 잘목는다 띄어쓰기나 블럭 속성 */}
{/* <div>
    
        <Link href="/index2">
          <a className='navmenu'>카테고리검색</a>
        </Link>
    </div> */}

    
        
      {/* <Nav.Link href="/"><h4>라면검색</h4></Nav.Link>
      
      <Nav.Link href="/index2"><h4>전체라면보기</h4></Nav.Link> */}
    {/* <Link href="/">
      Link Home
        </Link>
        <Link href="/index2">
          Link index2
        </Link>

      <Nav.Link href="/"><h4>라면검색</h4></Nav.Link>
      
      <Nav.Link href="/index2"><h4>전체라면보기</h4></Nav.Link> */}
      
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
<style jsx>{`
        .navmenu {
          color:grey;
          text-decoration-line: none;
          font-size:20px;
        }
        
      `}</style>
    </>

  );
}