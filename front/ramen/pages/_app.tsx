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

      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon&family=Jua&display=swap");

          body {
            font-family: "Jua", sans-serif;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
