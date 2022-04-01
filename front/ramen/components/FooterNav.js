/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import Link from "next/link";


export default function NavBar() {

  const size = useWindowSize();
  // const [size,setSize] = useState(size)
  const [sizeon,setSizeon] = useState(false)
  useEffect(()=>{
    if(size.width<=576){
      console.log('핸드폰화면')
      setSizeon(true)
    }else if(size.width>567){
      setSizeon(false)
    }
    console.log(size.width)
    console.log(size.height)
  },[size])
  return (
    <>
    {sizeon
      ?(
<div className="sidenav">
      <div className="navin"> <Link href="/">
                <a className="navmenu">
                  카테고리
                </a>
              </Link></div>
      <div className="navin"><Link href="/index2">
                <a className="navmenu">
                  키워드
                </a>
              </Link> </div>

   
               
            {/* <a href="#about">카테고리</a>
            <a href="#services">키워드</a> */}
          </div>
      )
      :null
    }
      
      <style jsx>{`
      .navin{
        display:inline;
      }
        .sidenav {
          width: 100%;
          position: fixed;
          z-index: 1;
          bottom:0px;
          // top: 200px;
          // right: 10px;
          margin-top:10px;
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
        
        @media screen and (max-height: 200px) {
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