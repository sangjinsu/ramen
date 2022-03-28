// HOC/withAuth.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie, setCookies } from "cookies-next";
import axios from "axios";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    const [accessToken, setAccessToken] = useState(getCookie("accessToken"));
    const refreshToken = getCookie("refreshToken");

    useEffect(async () => {
      console.log("accessToken: ", accessToken);
      // if no accessToken was found,then we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/login");
      } else {
        await axios
          .get("http://j6c104.p.ssafy.io:3000/v1/member/check-jwt", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then(function (response) {
            setVerified(true);
            console.log("check-jwt 성공", response);
          })
          .catch(function (error) {
            console.log("check-jwt 실패", error.response.status);
            if (error.response.status === 401) {
              axios
                .get("http://j6c104.p.ssafy.io:3000/v1/member/refresh", {
                  headers: {
                    Authorization: `Bearer ${refreshToken}`,
                  },
                })
                .then(function (response) {
                  console.log("refresh 성공", response);
                  setCookies("accessToken", response.data.accessToken);
                  setAccessToken(getCookie("accessToken"));
                })
                .catch(function (error) {
                  alert("로그인 세션 시간이 만료되었습니다.");
                  if (error.response.status === 401) {
                    Router.replace("/login");
                  }
                });
            }
          });
      }
    }, [accessToken]);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
