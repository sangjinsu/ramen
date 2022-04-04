/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import NavBar from "./NavBar";
import Footer from "./Footer";
import FooterNav from "./FooterNav";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const size = useWindowSize();
  // const [size,setSize] = useState(size)
  const [sizeon, setSizeon] = useState(false);
  useEffect(() => {
    if (size.width <= 768) {
      console.log("핸드폰화면Layout");
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
        <div className="navnav">
          <NavBar></NavBar>
          <hr style={{ margin: "0px" }}></hr>
        </div>
      ) : (
        <NavBar></NavBar>
      )}
      {sizeon ? <div className="dm"></div> : null}

      <div>{children}</div>
      <Footer></Footer>
      <FooterNav></FooterNav>

      <style jsx>{`
        .dm {
          height: 120px;
        }
        .navnav {
          width: 100%;
          position: fixed;
          z-index: 1;
          // bottom:0px;
          // top: 200px;
          // right: 10px;
          // margin-top:10px;
          margin: 0px;
          background: white;
          overflow-x: hidden;
          padding: 0px;
          // border-radius:15px;
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
