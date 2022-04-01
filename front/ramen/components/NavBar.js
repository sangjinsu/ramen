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

  const size = useWindowSize();
  // const [size,setSize] = useState(size)
  const [sizeon,setSizeon] = useState(false)
  useEffect(()=>{
    if(size.width<=768){
      console.log('핸드폰화면')
      setSizeon(true)
    }else if(size.width>768){
      setSizeon(false)
    }
    console.log(size.width)
    console.log(size.height)
  },[size])

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
              <a className="navmenu king" >
                라면
                {/* <img src="/logo.png" width={150} />  */}
                &nbsp;
              </a>
            </Link>

            <div className="searchform">
              <TextField
                style={{ width: 150 }}
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
                style={{ marginBottom: 25 }}
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

            {/* <img src="/logo.png" width={200}/> */}
          </Navbar.Brand>
          {
            sizeon
            ?null
            :(
              <>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link href="/">
                <a className="navmenu">
                  &nbsp;첫화면 &nbsp;
                </a>
              </Link>
              <Link href="/index2">
                <a className="navmenu">&nbsp;키워드검색 &nbsp;</a>
              </Link>
            </Nav>
            <Nav>
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
                        alert("로그아웃 하였습니다.");
                        location.reload();
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
              </>
            )
          }
          
        </Container>
      </Navbar>
      {/* <hr></hr> */}
      <style jsx>{`
        .navmenu {
          color: grey;
          text-decoration-line: none;
          display: inline-block;
          margin: 0px;
          font-size: 24px;
        }
        .king {
          font-size: 50px;
          color: orange;
          margin: 0px;
          font-family: "Black Han Sans", sans-serif;
        }
        .navmenu:hover {
          color: orange;
        }
        .searchform {
          display: inline;
          width: 250px;
        }
        hr {
          margin: 1px;
        }

        .sidenav {
          width: 80px;
          position: fixed;
          z-index: 1;
          top: 200px;
          right: 10px;
          background: #eee;
          overflow-x: hidden;
          padding: 8px 0;
          border-radius: 15px;
        }

        .sidenav a {
          padding: 6px 8px 6px 16px;
          text-decoration: none;
          font-size: 16px;
          color: grey;
          display: block;
        }

        .sidenav a:hover {
          color: orange;
        }

        .main {
          margin-left: 140px; /* Same width as the sidebar + left position in px */
          font-size: 28px; /* Increased text to enable scrolling */
          padding: 0px 10px;
        }

        @media screen and (max-height: 450px) {
          .sidenav {
            padding-top: 15px;
          }
          .sidenav a {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}