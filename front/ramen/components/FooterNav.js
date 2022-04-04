/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import Link from "next/link";
import { getCookie, removeCookies } from "cookies-next";

export default function NavBar() {
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

  const size = useWindowSize();
  // const [size,setSize] = useState(size)
  const [sizeon, setSizeon] = useState(false);
  useEffect(() => {
    if (size.width <= 768) {
      console.log("핸드폰화면FooterNav");
      setSizeon(true);
    } else if (size.width > 768) {
      setSizeon(false);
    }
    // console.log(size.width)
    // console.log(size.height)
  }, [size]);
  return (
    <>
      {sizeon ? (
        <>
          {/* <hr style={{margin:"0px"}}></hr> */}
          <div className="sidenav">
            <div className="navin">
              {" "}
              <Link href="/">
                <a className="navmenu">
                  <img src="icon/home.png" width={25}></img>
                  &nbsp;홈
                </a>
              </Link>
            </div>

            <div className="navin">
              <Link href="/index2">
                <a className="navmenu">
                  <img src="icon/keyword.png" width={25}></img>
                  &nbsp;키워드추천
                </a>
              </Link>{" "}
            </div>

            {validRefreshToken ? (
              <>
                <div
                  className="navin"
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
                    // 테스트
                  }}
                >
                  <Link href="#">
                    <a className="navmenu">
                      <img src="icon/logout.png" width={25}></img>
                      &nbsp;로그아웃
                    </a>
                  </Link>{" "}
                </div>
              </>
            ) : (
              <div className="navin">
                <Link href="/login">
                  <a className="navmenu">
                    <img src="icon/login.png" width={25}></img>
                    &nbsp;로그인
                  </a>
                </Link>{" "}
              </div>
            )}
            {validRefreshToken ? (
              <>
                <div className="navin">
                  <Link href="#">
                    <a className="navmenu">
                      <img src="icon/mypage.png" width={25}></img>
                      &nbsp;마이페이지
                    </a>
                  </Link>{" "}
                </div>
              </>
            ) : (
              <div className="navin">
                <Link href="/signup">
                  <a className="navmenu">
                    <img src="icon/signup.png" width={25}></img>
                    &nbsp;가입
                  </a>
                </Link>{" "}
              </div>
            )}

            {/* <a href="#about">카테고리</a>
            <a href="#services">키워드</a> */}
          </div>
        </>
      ) : null}

      <style jsx>{`
        .navmenu {
          margin: 0px;
        }
        .navin {
          display: inline;
        }
        .sidenav {
          border-top: solid 1px #e6e6e6;
          display: flex;
          justify-content: space-evenly;
          height: 60px;
          width: 100%;
          position: fixed;
          z-index: 1;
          bottom: 0px;
          // top: 200px;
          // right: 10px;
          // margin-top:10px;
          // margin-botton:20px;
          background: white;
          // overflow-x: hidden;
          padding: 8px 0;
          // border-radius:15px;
        }

        .sidenav a {
          padding: 6px 8px 6px 16px;
          text-decoration: none;
          font-size: 14px;
          color: grey;
          display: inline;
        }

        .sidenav a:hover {
          color: orange;
        }

        .main {
          margin-left: 140px; /* Same width as the sidebar + left position in px */
          font-size: 28px; /* Increased text to enable scrolling */
          padding: 0px 10px;
        }

        @media screen and (max-height: 200px) {
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