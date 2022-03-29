import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { getCookie, removeCookies } from "cookies-next";

export default function NavBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const [validRefreshToken, setValidRefreshTokne] = useState(false);
  const [refreshToken, setRefreshToken] = useState(getCookie("refreshToken"));
  let cookie = getCookie("refreshToken");

  useEffect(() => {
    setRefreshToken(() => getCookie("refreshToken"));
  }, [cookie]);

  useEffect(() => {
    if (refreshToken) {
      setValidRefreshTokne(true);
    } else {
      setValidRefreshTokne(false);
    }
  }, [refreshToken]);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="bg-white" variant="light">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <a className="navmenu">
                <img src="/logo.png" width={200} /> &nbsp;
              </a>
            </Link>
            {/* <img src="/logo.png" width={200}/> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* 최종 네브바, 반응형 위함 Link안에서 링크는 없애주고 안에넣기 */}
              <Link href="/">
                <a className="navmenu">
                  <img src="/choice.png" width={35} />
                  &nbsp;카테고리검색 &nbsp;
                </a>
              </Link>
              <Link href="/index2">
                <a className="navmenu">
                  <img src="/chat.png" width={35} />
                  &nbsp;키워드검색 &nbsp;
                </a>
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
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      router.push(
                        {
                          pathname: "/SearchTextResult",
                          query: {
                            textResult: search,
                          },
                        },
                        `/SearchTextResult`
                      );
                    }
                  }}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  onClick={() => {
                    router.push(
                      {
                        pathname: "/SearchTextResult",
                        query: {
                          textResult: search,
                        },
                      },
                      `/SearchTextResult`
                    );
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </div>

              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <FontAwesomeIcon icon={faUser} /> 회원메뉴
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {validRefreshToken ? (
                    <Dropdown.Item
                      onClick={() => {
                        removeCookies("member_id");
                        removeCookies("accessToken");
                        removeCookies("refreshToken");
                        removeCookies("name");
                        removeCookies("age");
                        removeCookies("gender");
                        setRefreshToken(getCookie("refreshToken"));
                      }}
                    >
                      로그아웃
                    </Dropdown.Item>
                  ) : (
                    <Dropdown.Item
                      onClick={() => {
                        router.push({
                          pathname: "login",
                        });
                      }}
                    >
                      로그인
                    </Dropdown.Item>
                  )}
                  {/* <Dropdown.Item href="#/action-1">{accessToken}</Dropdown.Item> */}
                  {validRefreshToken ? null : (
                    <Dropdown.Item
                      onClick={() => {
                        router.push({
                          pathname: "signup",
                        });
                      }}
                    >
                      회원가입
                    </Dropdown.Item>
                  )}
                  {validRefreshToken ? (
                    <Dropdown.Item href="#/action-3">마이페이지</Dropdown.Item>
                  ) : null}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>{`
        .navmenu {
          color: grey;
          text-decoration-line: none;
          font-size: 20px;
          display: inline-block;
          font-weight: bold;
        }
        .navmenu:hover {
          color: orange;
        }
        .searchform {
          width: 250px;
        }
      `}</style>
    </>
  );
}
