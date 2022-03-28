import Link from "next/link";
import { useRouter } from "next/router";
import { Container,Row,Col,Navbar,Nav,Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { off } from "process";

export default function NavBar() {
  const [search,setSearch] = useState('')
  const router = useRouter();  
  const handleChange = (event) =>{
    setSearch(event.target.value)
  }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="bg-white" variant="light">
  <Container>
  <Navbar.Brand >
  <Link href="/">
          <a className='navmenu'><img src="/logo.png" width={200}/> &nbsp;</a>
        </Link>
    {/* <img src="/logo.png" width={200}/> */}
    </Navbar.Brand>
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

    {/* <Link href="/SearchTextResult">
          <a className='navmenu'>텍스트결과 &nbsp;</a>
        </Link> */}
        {/* <Link href="/test">
          <a className='navmenu'>AxiosTest &nbsp;</a>
        </Link>       */}
    </Nav>
    <Nav>
    {/* <div className="search-container">
    <form action="/SearchTextResult">
      <input type="text" placeholder="라면 텍스트 검색" name="search"></input>
      <button type="submit">검색</button>
    </form>
  </div> */}
  <div className="searchform">
  <TextField
          id="standard-search"
          label="라면검색"
          defaultValue={search}
          type="search"
          variant="standard"
          color="warning"
          onChange={handleChange}
          // onChange={(event)=>{setSearch(event.target.value)}}
          onKeyPress={
            (e)=>{
              if(e.key==='Enter'){
                router.push(
                  {
                  pathname: '/SearchTextResult',
                  query: { 
                    "textResult":search,
      
                   },
                },
                `/SearchTextResult`
                )
              }
            }
          }
        />
         <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={()=>{
           router.push(
            {
            pathname: '/SearchTextResult',
            query: { 
              "textResult":search,

             },
          },
          `/SearchTextResult`
          )
         }}>
        <SearchIcon />
      </IconButton>
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
        .searchform{
          width:250px;
        }
        
        
        
      `}</style>
    </>

  );
}