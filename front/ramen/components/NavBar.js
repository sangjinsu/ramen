import Link from "next/link";
import { useRouter } from "next/router";
import { Container,Row,Col,Navbar,Nav,Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


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
      <Link href="/">
          <a className='navmenu'>카테고리검색 &nbsp;</a>
        </Link>
    <Link href="/index2">
          <a className='navmenu'>키워드검색 &nbsp;</a>
        </Link>

    <Link href="/SearchTextResult">
          <a className='navmenu'>텍스트결과 &nbsp;</a>
        </Link>
        <Link href="/test">
          <a className='navmenu'>AxiosTest &nbsp;</a>
        </Link>      
    </Nav>
    <Nav>
    <div className="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="라면검색" name="search"></input>
      {/* value로 값조정 */}
      <button type="submit">검색</button>
    </form>
  </div>
    
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
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

<style jsx>{`
        .navmenu {
          color:grey;
          text-decoration-line: none;
          font-size:20px;
          display:inline-block;
          
        }
        
        
        
      `}</style>
    </>

  );
}