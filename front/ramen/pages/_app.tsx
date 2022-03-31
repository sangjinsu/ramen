/* eslint-disable react/react-in-jsx-scope */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
      {/* <style jsx global>
        {
          `
          body {
            background: linear-gradient(-45deg, #ee7752, #23d5ab);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
        }
        
        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    `
        }
      </style> */}
      {/* <style jsx global>
        {
          `
          @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&family=Nanum+Pen+Script&display=swap');
body {
      font-family: 'Nanum Pen Script', cursive;
    }
    `
        }
      </style> */}
    </>
  );
}

export default MyApp;
