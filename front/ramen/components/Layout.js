/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import NavBar from "./NavBar";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      <div>{children}</div>
      <Footer></Footer>
    </>
  );
}
