import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "next/router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import axios from "axios";
import { setCookies, getCookie } from "cookies-next";
import { useRouter } from "next/router";

function RamenPreference({ router: { query } }) {
  const Router = useRouter();

  const ramenCodes = {
    "生生(생생)우동": "P020318",
    "生生(생생)우동1": "",
    "生生(생생)우동2": "",
    "生生(생생)우동3": "",
    "나가사끼 짬뽕": "P031444",
    "나가사끼 짬뽕1": "",
    "나가사끼 짬뽕2": "",
    "나가사끼 짬뽕3": "",
    보글보글부대찌개면: "P023615",
    보글보글부대찌개면1: "",
    보글보글부대찌개면2: "",
    보글보글부대찌개면3: "",
    불닭볶음면: "P031453",
    불닭볶음면1: "",
    불닭볶음면2: "",
    불닭볶음면3: "",
    사리곰탕큰사발면: "P065204",
    사리곰탕큰사발면1: "",
    사리곰탕큰사발면2: "",
    사리곰탕큰사발면3: "",
    삼양라면: "P031542",
    삼양라면1: "",
    삼양라면2: "",
    삼양라면3: "",
    새우탕큰사발면: "P065207",
    새우탕큰사발면1: "",
    새우탕큰사발면2: "",
    새우탕큰사발면3: "",
    신라면: "P023571",
    신라면1: "",
    신라면2: "",
    신라면3: "",
    안성탕면: "P023583",
    안성탕면1: "",
    안성탕면2: "",
    안성탕면3: "",
    "얼큰한 너구리": "",
    "얼큰한 너구리1": "",
    "얼큰한 너구리2": "",
    "얼큰한 너구리3": "",
    "오뚜기 스파게티": "P023685",
    "오뚜기 스파게티1": "",
    "오뚜기 스파게티2": "",
    "오뚜기 스파게티3": "",
    오뚜기쇠고기미역국라면: "P080823",
    오뚜기쇠고기미역국라면1: "",
    오뚜기쇠고기미역국라면2: "",
    오뚜기쇠고기미역국라면3: "",
    오뚜기진라면매운맛: "P080827",
    오뚜기진라면매운맛1: "",
    오뚜기진라면매운맛2: "",
    오뚜기진라면매운맛3: "",
    올리브짜파게티: "P023572",
    올리브짜파게티1: "",
    올리브짜파게티2: "",
    올리브짜파게티3: "",
    우육탕면: "P023655",
    우육탕면1: "",
    우육탕면2: "",
    우육탕면3: "",
    육개장사발면: "P065220",
    육개장사발면1: "",
    육개장사발면2: "",
    육개장사발면3: "",
    짜왕: "P023619",
    짜왕1: "",
    짜왕2: "",
    짜왕3: "",
    "참깨라면 CUP": "P080847",
    "참깨라면 CUP1": "",
    "참깨라면 CUP2": "",
    "참깨라면 CUP3": "",
    "팔도 왕뚜껑": "P064412",
    "팔도 왕뚜껑1": "",
    "팔도 왕뚜껑2": "",
    "팔도 왕뚜껑3": "",
    팔도비빔면: "P023589",
    팔도비빔면1: "",
    팔도비빔면2: "",
    팔도비빔면3: "",
  };

  const ramenLists = [
    [
      "신라면",
      "신라면1",
      "신라면2",
      "신라면3",
      "오뚜기진라면매운맛",
      "오뚜기진라면매운맛1",
      "오뚜기진라면매운맛2",
      "오뚜기진라면매운맛3",
      "안성탕면",
      "안성탕면1",
      "안성탕면2",
      "안성탕면3",
      "삼양라면",
      "삼양라면1",
      "삼양라면2",
      "삼양라면3",
      "얼큰한 너구리",
      "얼큰한 너구리1",
      "얼큰한 너구리2",
      "얼큰한 너구리3",
    ],
    [
      "올리브짜파게티",
      "올리브짜파게티1",
      "올리브짜파게티2",
      "올리브짜파게티3",
      "팔도비빔면",
      "팔도비빔면1",
      "팔도비빔면2",
      "팔도비빔면3",
      "불닭볶음면",
      "불닭볶음면1",
      "불닭볶음면2",
      "불닭볶음면3",
      "짜왕",
      "짜왕1",
      "짜왕2",
      "짜왕3",
      "오뚜기 스파게티",
      "오뚜기 스파게티1",
      "오뚜기 스파게티2",
      "오뚜기 스파게티3",
    ],
    [
      "육개장사발면",
      "육개장사발면1",
      "육개장사발면2",
      "육개장사발면3",
      "참깨라면 CUP",
      "참깨라면 CUP1",
      "참깨라면 CUP2",
      "참깨라면 CUP3",
      "팔도 왕뚜껑",
      "팔도 왕뚜껑1",
      "팔도 왕뚜껑2",
      "팔도 왕뚜껑3",
      "새우탕큰사발면",
      "새우탕큰사발면1",
      "새우탕큰사발면2",
      "새우탕큰사발면3",
      "生生(생생)우동",
      "生生(생생)우동1",
      "生生(생생)우동2",
      "生生(생생)우동3",
    ],
    [
      "오뚜기쇠고기미역국라면",
      "오뚜기쇠고기미역국라면1",
      "오뚜기쇠고기미역국라면2",
      "오뚜기쇠고기미역국라면3",
      "나가사끼 짬뽕",
      "나가사끼 짬뽕1",
      "나가사끼 짬뽕2",
      "나가사끼 짬뽕3",
      "보글보글부대찌개면",
      "보글보글부대찌개면1",
      "보글보글부대찌개면2",
      "보글보글부대찌개면3",
      "사리곰탕큰사발면",
      "사리곰탕큰사발면1",
      "사리곰탕큰사발면2",
      "사리곰탕큰사발면3",
      "우육탕면",
      "우육탕면1",
      "우육탕면2",
      "우육탕면3",
    ],
  ];
  const [likedRamens, setLikedRamens] = useState({
    신라면: false,
    오뚜기진라면매운맛: false,
    안성탕면: false,
    삼양라면: false,
    "얼큰한 너구리": false,
    올리브짜파게티: false,
    팔도비빔면: false,
    불닭볶음면: false,
    짜왕: false,
    "오뚜기 스파게티": false,
    육개장사발면: false,
    "참깨라면 CUP": false,
    "팔도 왕뚜껑": false,
    새우탕큰사발면: false,
    "生生(생생)우동": false,
    오뚜기쇠고기미역국라면: false,
    "나가사끼 짬뽕": false,
    보글보글부대찌개면: false,
    사리곰탕큰사발면: false,
    우육탕면: false,
  });
  const [clickRamens, setClickRamens] = useState({
    신라면: false,
    오뚜기진라면매운맛: false,
    안성탕면: false,
    삼양라면: false,
    "얼큰한 너구리": false,
    올리브짜파게티: false,
    팔도비빔면: false,
    불닭볶음면: false,
    짜왕: false,
    "오뚜기 스파게티": false,
    육개장사발면: false,
    "참깨라면 CUP": false,
    "팔도 왕뚜껑": false,
    새우탕큰사발면: false,
    "生生(생생)우동": false,
    오뚜기쇠고기미역국라면: false,
    "나가사끼 짬뽕": false,
    보글보글부대찌개면: false,
    사리곰탕큰사발면: false,
    우육탕면: false,
  });
  const categorizationName = ["국물 라면", "비빔 라면", "컵라면", "마니아"];
  const [canGoNext, setCanGoNext] = useState(false);
  const [likedRamenCnt, setLikedRamenCnt] = useState(0);

  const onClickRamen = (event: React.MouseEvent<HTMLButtonElement>) => {
    const ramenName = event.target.id;
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
      .post("http://j6c104.p.ssafy.io:3000/v1/member/signup", userInfo)
      .then(function (response) {
        console.log(userInfo.inputEmail, userInfo.inputPW);
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
        .get("http://j6c104.p.ssafy.io:3000/v1/member/refresh", {
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
                          id={ramenLists[idxList][idxRamen]}
                          src={`/ramen/${ramenLists[idxList][idxRamen]}.png`}
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
              <Button variant="outlined" onClick={onClickSubmit}>
                <a>회원가입</a>
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
