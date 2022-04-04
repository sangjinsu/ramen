/* eslint-disable prefer-const */
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "next/router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import axios from "axios";
import { setCookies, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { signupType } from "../../components/Types";

function RamenPreference({ router: { query } }: signupType) {
  const Router = useRouter();
  const default_img = "ramen/default.png";
  const handleImage = (e) => {
    e.target.src = default_img;
  };

  const ramenCodes = {
    "CJ가쓰오우동 한그릇": 228,
    "CJ얼큰우동 한그릇": 230,
    THE배터질라면: 391,
    YOUUS인생라면: 197,
    gomgom호로록짬뽕라면: 417,
    "生生(생생)우동": 92,
    고추비빔면: 34,
    "쌀국수 소고기짜장면": 47,
    "공화춘 삼선짬뽕컵": 421,
    김치찌개면: 167,
    까르보불닭볶음면: 159,
    꼬꼬면왕컵: 406,
    꽃게탕면: 452,
    "나가사끼 짬뽕": 132,
    남자라면: 432,
    "뉴트리 라면": 435,
    "도전! 불닭비빔면": 116,
    된장라면: 156,
    맛있는라면: 168,
    메밀비빔면: 237,
    모듬해물탕면: 90,
    무파마탕면큰사발면: 82,
    민생라면컵: 434,
    보글보글부대찌개면: 79,
    북경짜장: 292,
    불닭볶음면: 201,
    뽀로로짜장: 378,
    사리곰탕큰사발면: 93,
    삼양라면: 171,
    "삼양라면 골드": 170,
    새우탕큰사발면: 71,
    속초홍게라면: 420,
    스낵면: 306,
    신라면: 85,
    신라면블랙: 35,
    안성탕면: 94,
    앵그리너구리: 75,
    양념치킨면: 9,
    얼큰한너구리: 86,
    "오뚜기 북엇국라면": 299,
    "오뚜기 스파게티": 248,
    "오뚜기 오동통면 얼큰한맛": 313,
    "오뚜기 진라면 순한맛": 326,
    "오뚜기 케챂볶음면": 233,
    오뚜기김치라면: 300,
    오뚜기쇠고기미역국라면: 328,
    오뚜기열라면: 322,
    오뚜기진라면매운맛: 272,
    오징어짬뽕: 53,
    올리브짜파게티: 73,
    "완면각 짬뽕": 303,
    "요괴라면 매운볶음맛": 353,
    "요린이의 보글보글 된장라면": 190,
    우육탕면: 50,
    "유어스 가락우동": 231,
    유어스틈새라면: 405,
    육개장사발면: 57,
    일품삼선짜장: 381,
    자연드림사골라면: 343,
    자연드림해물라면컵: 342,
    제주마늘라면: 304,
    짜계치: 246,
    짜왕: 36,
    짜왕매운맛: 48,
    "참깨라면 CUP": 286,
    초마짬뽕: 175,
    "큰컵 대만식마장면": 115,
    "큰컵 미원라면": 186,
    "큰컵 쇠고기면": 161,
    "큰컵 짱구 허니시나몬볶음면": 106,
    "큰컵 커리불닭볶음면": 138,
    "큰컵 튀김칼국수": 153,
    "큰컵삼양라면 매운맛": 196,
    튀김우동: 290,
    "팔도 가쓰오우동왕뚜껑": 415,
    "팔도 더왕뚜껑": 423,
    "팔도 왕뚜껑": 413,
    팔도비빔면: 372,
    "현대홈쇼핑 생활라면 매운맛": 316,
    희망줄라면: 297,
  };

  const ramenLists = [
    [
      "신라면",
      "신라면블랙",
      "유어스틈새라면",
      "맛있는라면",
      "오뚜기진라면매운맛",
      "오뚜기 진라면 순한맛",
      "남자라면",
      "오뚜기열라면",
      "안성탕면",
      "요린이의 보글보글 된장라면",
      "된장라면",
      "YOUUS인생라면",
      "삼양라면",
      "삼양라면 골드",
      "큰컵삼양라면 매운맛",
      "스낵면",
      "얼큰한너구리",
      "오뚜기 오동통면 얼큰한맛",
      "오뚜기김치라면",
      "앵그리너구리",
    ],
    [
      "올리브짜파게티",
      "북경짜장",
      "뽀로로짜장",
      "일품삼선짜장",
      "팔도비빔면",
      "양념치킨면",
      "메밀비빔면",
      "고추비빔면",
      "불닭볶음면",
      "도전! 불닭비빔면",
      "까르보불닭볶음면",
      "큰컵 커리불닭볶음면",
      "짜왕",
      "짜왕매운맛",
      "쌀국수 소고기짜장면",
      "짜계치",
      "오뚜기 스파게티",
      "오뚜기 케챂볶음면",
      "큰컵 대만식마장면",
      "큰컵 짱구 허니시나몬볶음면",
    ],
    [
      "육개장사발면",
      "큰컵 쇠고기면",
      "희망줄라면",
      "민생라면컵",
      "참깨라면 CUP",
      "현대홈쇼핑 생활라면 매운맛",
      "완면각 짬뽕",
      "공화춘 삼선짬뽕컵",
      "팔도 왕뚜껑",
      "팔도 더왕뚜껑",
      "팔도 가쓰오우동왕뚜껑",
      "뉴트리 라면",
      "새우탕큰사발면",
      "오뚜기 북엇국라면",
      "THE배터질라면",
      "꽃게탕면",
      "生生(생생)우동",
      "CJ얼큰우동 한그릇",
      "유어스 가락우동",
      "CJ가쓰오우동 한그릇",
    ],
    [
      "오뚜기쇠고기미역국라면",
      "자연드림해물라면컵",
      "속초홍게라면",
      "모듬해물탕면",
      "나가사끼 짬뽕",
      "꼬꼬면왕컵",
      "큰컵 튀김칼국수",
      "제주마늘라면",
      "보글보글부대찌개면",
      "김치찌개면",
      "초마짬뽕",
      "요괴라면 매운볶음맛",
      "사리곰탕큰사발면",
      "자연드림사골라면",
      "튀김우동",
      "큰컵 미원라면",
      "우육탕면",
      "무파마탕면큰사발면",
      "오징어짬뽕",
      "gomgom호로록짬뽕라면",
    ],
  ];
  const [likedRamens, setLikedRamens] = useState({
    "生生(생생)우동": false,
    "나가사끼 짬뽕": false,
    보글보글부대찌개면: false,
    불닭볶음면: false,
    사리곰탕큰사발면: false,
    삼양라면: false,
    새우탕큰사발면: false,
    신라면: false,
    안성탕면: false,
    얼큰한너구리: false,
    "오뚜기 스파게티": false,
    오뚜기쇠고기미역국라면: false,
    오뚜기진라면매운맛: false,
    올리브짜파게티: false,
    우육탕면: false,
    육개장사발면: false,
    짜왕: false,
    "참깨라면 CUP": false,
    "팔도 왕뚜껑": false,
    팔도비빔면: false,
  });
  const [clickRamens, setClickRamens] = useState({
    "生生(생생)우동": false,
    "나가사끼 짬뽕": false,
    보글보글부대찌개면: false,
    불닭볶음면: false,
    사리곰탕큰사발면: false,
    삼양라면: false,
    새우탕큰사발면: false,
    신라면: false,
    안성탕면: false,
    얼큰한너구리: false,
    "오뚜기 스파게티": false,
    오뚜기쇠고기미역국라면: false,
    오뚜기진라면매운맛: false,
    올리브짜파게티: false,
    우육탕면: false,
    육개장사발면: false,
    짜왕: false,
    "참깨라면 CUP": false,
    "팔도 왕뚜껑": false,
    팔도비빔면: false,
  });
  const categorizationName = ["국물 라면", "비빔 라면", "컵라면", "마니아"];
  const [canGoNext, setCanGoNext] = useState(false);
  const [likedRamenCnt, setLikedRamenCnt] = useState(0);

  const onClickRamen = (event: React.MouseEvent<HTMLButtonElement>) => {
    const ramenName = (event.target as HTMLButtonElement).id;
    console.log(ramenName);
    console.log(ramenCodes[ramenName]);
    if (likedRamens[ramenName]) {
      setLikedRamenCnt((prev) => prev - 1);
    } else {
      setLikedRamenCnt((prev) => prev + 1);
    }

    setLikedRamens((prevLikedRamens) => {
      return {
        ...prevLikedRamens,
        [ramenName]: !prevLikedRamens[ramenName],
      };
    });
    setClickRamens((prevLikedRamens) => {
      return {
        ...prevLikedRamens,
        [ramenName]: true,
      };
    });
  };

  const makeSelectList = () => {
    const select: Array<string> = [];
    for (let key in likedRamens) {
      if (likedRamens[key]) {
        select.push(ramenCodes[key]);
      }
    }
    return select;
  };

  const setCookiesInLogin = async (response) => {
    const member_id = response.data.member_id;
    const gender = response.data.gender;
    const age = response.data.age;
    const name = response.data.name;
    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;
    await setCookies("member_id", member_id);
    await setCookies("gender", gender);
    await setCookies("age", age);
    await setCookies("name", name);
    await setCookies("accessToken", accessToken);
    await setCookies("refreshToken", refreshToken);
  };

  const onClickSubmit = async () => {
    const userInfo = await JSON.parse(query.userInfo);
    const select = await makeSelectList();
    userInfo["selectRamens"] = select;
    console.log(userInfo);
    axios
      .post("http://j6c104.p.ssafy.io:8083/v1/member/signup", userInfo)
      .then(function (response) {
        console.log("성공");
        setCookiesInLogin(response);
        Router.push({
          pathname: "/",
        });
      })
      .catch(function (error) {
        alert(error);
        Router.push({
          pathname: "/signup",
        });
      });
  };

  useEffect(() => {
    if (likedRamenCnt >= 1) {
      setCanGoNext(true);
    } else {
      setCanGoNext(false);
    }
  }, [likedRamenCnt]);

  useEffect(() => {
    const refreshToken = getCookie("refreshToken");
    if (refreshToken) {
      axios
        .get("http://j6c104.p.ssafy.io:8083/v1/member/refresh", {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        })
        .then(function (response) {
          console.log("refresh 성공", response);
          setCookies("accessToken", response.data.accessToken);
          Router.push({
            pathname: "/",
          });
        });
    }
  }, []);

  return (
    <>
      <Container>
        {ramenLists.map((ramenList, idxList) => {
          return (
            <div key={idxList}>
              <Row>
                <h2>{categorizationName[idxList]}</h2>
                {ramenLists[idxList].map((ramen, idxRamen) => {
                  if (
                    // true
                    idxRamen % 4 === 0 ||
                    clickRamens[
                      ramenLists[idxList][idxRamen - (idxRamen % 4)]
                    ] === true
                  ) {
                    return (
                      <Col
                        sm={2}
                        style={{ margin: "15px" }}
                        key={idxRamen}
                        onClick={onClickRamen}
                        id={ramenLists[idxList][idxRamen]}
                      >
                        <img
                          width={150}
                          id={ramenLists[idxList][idxRamen]}
                          src={`/ramen/${ramenLists[idxList][idxRamen]}.png`}
                          onError={handleImage}
                        ></img>
                        <h4 id={ramenLists[idxList][idxRamen]}>
                          {ramenLists[idxList][idxRamen]}
                        </h4>
                        {likedRamens[ramenLists[idxList][idxRamen]] === true ? (
                          <FavoriteIcon
                            id={ramenLists[idxList][idxRamen]}
                            style={{ color: "red" }}
                          />
                        ) : (
                          <FavoriteBorderIcon
                            id={ramenLists[idxList][idxRamen]}
                            style={{ color: "red" }}
                          />
                        )}
                      </Col>
                    );
                  }
                })}
              </Row>
              <br />
              <br />
              <br />
            </div>
          );
        })}
        <Row>
          <Col></Col>
          <Col></Col>

          <Col variant="contained">
            {canGoNext ? (
              <Button
                sx={{ fontSize: 18 }}
                style={{
                  color: "orange",
                  width: "13rem",
                  border: "1px solid orange",
                }}
                variant="outlined"
                onClick={onClickSubmit}
              >
                회원가입
              </Button>
            ) : (
              <Button variant="outlined" disabled>
                Disabled
              </Button>
            )}
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(RamenPreference);
