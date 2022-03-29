// HOC/withAuth.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie, setCookies } from "cookies-next";
import axios from "axios";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    // 유효한 로그인
    const [verified, setVerified] = useState(false);
    const [accessToken, setAccessToken] = useState(getCookie("accessToken"));
    const refreshToken = getCookie("refreshToken");

    useEffect(async () => {
      console.log("accessToken: ", accessToken);
      // accessToken - X, 로그인 페이지
      if (!accessToken) {
        Router.replace("/login");
      }
      // accessToken 유효 검사
      else {
        await axios
          .get("http://j6c104.p.ssafy.io:3000/v1/member/check-jwt", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          // accessToken 유효 - O
          .then(function (response) {
            setVerified(true);
            console.log("check-jwt 성공", response);
            Router.replace("/");
          })
          // accessToken 유효 - X
          .catch(function (error) {
            console.log("check-jwt 실패", error.response.status);
            if (error.response.status === 401) {
              // refreshToken 유효 검사
              axios
                .get("http://j6c104.p.ssafy.io:3000/v1/member/refresh", {
                  headers: {
                    Authorization: `Bearer ${refreshToken}`,
                  },
                })
                // refreshToken 유효 - O, accessToken 갱신
                .then(function (response) {
                  console.log("refresh 성공", response);
                  setCookies("accessToken", response.data.accessToken);
                  setAccessToken(getCookie("accessToken"));
                })
                // refreshToken 유효 - X, 다시 로그인
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
