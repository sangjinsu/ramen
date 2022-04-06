import axios from "axios";
import { getCookie, removeCookies, setCookies } from "cookies-next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import serverURLDoc from "./main/ServerURL";

const AUTH_URL = serverURLDoc.AUTH_URL;

const Heart = ({ params }: { params: string }) => {
  const member_id = Number(getCookie("member_id"));
  const params1 = Number(params);
  const router = useRouter();
  const [likeCheck, setLike] = useState<boolean>(false);

  const [accessToken, setAccessToken] = useState(getCookie("accessToken"));
  const refreshToken = getCookie("refreshToken");

  const likeChange = async () => {
    if (!member_id) {
      removeCookies("member_id");
      removeCookies("accessToken");
      removeCookies("refreshToken");
      removeCookies("name");
      removeCookies("age");
      removeCookies("gender");
      router.push("/login");
    } else {
      await axios
        .get(`${AUTH_URL}/check-jwt`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        // accessToken 유효 - O
        .then(function (response) {
          console.log("check-jwt 성공", response);
          axios
            .post(
              `http://j6c104.p.ssafy.io:8080/v1/member/like?memberId=${Number(
                member_id
              )}&ramenId=${Number(params1)}`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            )
            .then(function (response) {
              const userLikeStatus = response.status;
              if (200 <= userLikeStatus && userLikeStatus < 300) {
                setLike(!likeCheck);
              }
              axios.get(
                `http://j6c104.p.ssafy.io:8081/v1/ranking/like/${Number(
                  params1
                )}/${member_id}`
              );
            })
            .catch(function (error) {
              console.log("like1 실패", error);
            });
        })
        // accessToken 유효 - X
        .catch(function (error) {
          console.log("check-jwt 실패", error.response.status);
          if (error.response.status === 401) {
            // refreshToken 유효 검사
            axios
              .get(`${AUTH_URL}/refresh`, {
                headers: {
                  Authorization: `Bearer ${refreshToken}`,
                },
              })
              // refreshToken 유효 - O, accessToken 갱신
              .then(function (response) {
                console.log("refresh 성공", response);
                setCookies("accessToken", response.data.accessToken);
                setAccessToken(response.data.accessToken);
                if (
                  params !== undefined &&
                  params !== null &&
                  member_id !== null
                ) {
                  axios
                    .post(
                      `http://j6c104.p.ssafy.io:8080/v1/member/like?memberId=${Number(
                        member_id
                      )}&ramenId=${Number(params1)}`,
                      {
                        headers: {
                          Authorization: `Bearer ${response.data.accessToken}`,
                        },
                      }
                    )
                    .then(function (response) {
                      const userLikeStatus = response.status;
                      if (200 <= userLikeStatus && userLikeStatus < 300) {
                        setLike(!likeCheck);
                      }
                      axios.get(
                        `http://j6c104.p.ssafy.io:8081/v1/ranking/like/${Number(
                          params1
                        )}/${Number(member_id)}`
                      );
                    });
                }
              })
              // refreshToken 유효 - X, 다시 로그인
              .catch(function (error) {
                alert("로그인 세션 시간이 만료되었습니다.");
                if (error.response.status === 401) {
                  removeCookies("member_id");
                  removeCookies("accessToken");
                  removeCookies("refreshToken");
                  removeCookies("name");
                  removeCookies("age");
                  removeCookies("gender");
                  router.replace("/login");
                }
              });
          }
        });
    }
  };

  useEffect(() => {
    const TestTTT = async () => {
      try {
        console.log("111");
        const { status: userLikeStatus } = await axios.get(
          `http://j6c104.p.ssafy.io:8080/v1/ramen/islike/${Number(
            params1
          )}/${Number(member_id)}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        200 <= userLikeStatus && userLikeStatus < 300
          ? setLike(true)
          : setLike(false);
        console.log(userLikeStatus);
      } catch {
        setLike(false);
      }
    };
    TestTTT();
  }, []);

  return (
    <>
      <label className="like">
        <input type="checkbox" checked={likeCheck} onClick={likeChange} />
        <div className="hearth" />
      </label>
      <style jsx>
        {`
          // 하트효과
          input {
            display: none;
          }

          .like {
            display: block;
            cursor: pointer;
            border-radius: 999px;
            overflow: visible;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
          }

          .hearth {
            background-image: url("/heartEffect.svg");
            background-size: calc(50px * 62) 50px;
            background-repeat: no-repeat;
            background-position-x: calc(50px * (62 * -1 + 2));
            background-position-y: calc(50px * 0.02);
            width: 50px;
            height: 50px;
          }

          input:checked + .hearth {
            animation: like 1s steps(calc(62 - 3));
            animation-fill-mode: forwards;
          }

          @keyframes like {
            0% {
              background-position-x: 0;
            }
            100% {
              background-position-x: calc(50px * (62 * -1 + 3));
            }
          }
        `}
      </style>
    </>
  );
};

export default Heart;
