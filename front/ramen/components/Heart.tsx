import axios from "axios";
import { getCookie, removeCookies } from "cookies-next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Heart = ({ params }: { params: string }) => {
  const accessToken = getCookie("accessToken");
  const member_id = getCookie("member_id");
  const router = useRouter();
  const [likeCheck, setLike] = useState<boolean>(false);
  const likeChange = async () => {
    // 주석 해제
    try {
      const { status: userLikeStatus } = await axios.post(
        `http://j6c104.p.ssafy.io:8080/v1/member/like?memberId=${member_id}&ramenId=${params}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (200 <= userLikeStatus && userLikeStatus < 300) {
        setLike(!likeCheck);
      }
    } catch {
      if (!member_id) {
        removeCookies("member_id");
        removeCookies("accessToken");
        removeCookies("refreshToken");
        removeCookies("name");
        removeCookies("age");
        removeCookies("gender");
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    const TestTTT = async () => {
      try {
        console.log("111");
        const { status: userLikeStatus } = await axios.get(
          `http://j6c104.p.ssafy.io:8080/v1/ramen/islike/${params}/${member_id}`,
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
