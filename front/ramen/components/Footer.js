/* eslint-disable react/react-in-jsx-scope */
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function NavBar() {

  const size = useWindowSize();
  // const [size,setSize] = useState(size)
  const [sizeon,setSizeon] = useState(false)
  useEffect(()=>{
    if(size.width<=576){
      console.log('핸드폰화면Footer')
      setSizeon(true)
    }else if(size.width>567){
      setSizeon(false)
    }
    console.log(size.width)
    console.log(size.height)
  },[size])
  return (
    <>
      <Container>
        <Row>
          <Col xs={1} md={2} lg={2}></Col>
          <Col xs={10} md={8} lg={8}>
            <hr></hr>

            <div className="footer">
              라면 추천 서비스 / &nbsp;
            </div>
            <div className="icon">
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
      {
        sizeon
        ?<div className="watchFooter"></div>
        :null
      }

      <style jsx>{`
      .watchFooter{
        height:80px;
      }
        .footer {
          margin: 10px;
          display:inline;
        }
        .icon{
          font-size:8px;
          display:inline;

        }
        .sidenav {
          width: 100%;
          position: fixed;
          z-index: 1;
          bottom:0px;
          // top: 200px;
          // right: 10px;
          margin-top:300px;
          background: #eee;
          overflow-x: hidden;
          padding: 8px 0;
          // border-radius:15px;
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
          .sidenav {padding-top: 15px;}
          .sidenav a {font-size: 18px;}
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