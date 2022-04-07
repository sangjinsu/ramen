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
import ramenSelectDoc from "../../components/main/RamenSelect";
import ramenCodeDoc from "../../components/main/RamenCodes";
import serverURLDoc from "../../components/main/ServerURL";
import DocDataDictionary from "../../components/main/dataDictionary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Modal } from "react-bootstrap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AUTH_URL = serverURLDoc.AUTH_URL;

interface ObjectInterface {
  [props: string]: any;
}

function RamenPreference({ router: { query } }: signupType) {
  const categorizationName = ["국물 라면", "비빔 라면", "컵라면", "마니아"];
  const ramenLists = ramenSelectDoc;
  const ramenCodes = ramenCodeDoc;
  const [likedRamens, setLikedRamens] = useState({});
  const [clickRamens, setClickRamens] = useState({});
  const Router = useRouter();
  const [canGoNext, setCanGoNext] = useState(false);
  const [likedRamenCnt, setLikedRamenCnt] = useState(0);
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  const onClickRamen = (event: React.MouseEvent<HTMLButtonElement>) => {
    const ramenName = (event.target as HTMLButtonElement).id;
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

  const setCookiesInLogin = async (response: any) => {
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
    axios
      .post(`${AUTH_URL}/signup`, userInfo)
      .then(function (response) {
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
    let temp: ObjectInterface = {};
    ramenLists.map((ramenList, idxList) => {
      ramenList.map((ramen, idxRamen) => {
        temp[ramen] = false;
      });
    });
    setLikedRamens((prevState) => temp);
    setClickRamens((prevState) => temp);
    const refreshToken = getCookie("refreshToken");
    if (refreshToken) {
      axios
        .get(`${AUTH_URL}/refresh`, {
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
        <Row className="justify-content-md-center">
          <Col style={{ textAlign: "center" }}>
            <h1>선호 라면 선택</h1>
            <Modal
              show={open}
              onHide={handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  이용가이드
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>평소 즐겨 먹거나 좋아하는 라면을 선택해주세요.</p>
              </Modal.Body>
              <Modal.Footer>
                <p onClick={handleClose} style={{ cursor: "pointer" }}>
                  닫기
                </p>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
        <br />
        {ramenLists.map((ramenList, idxList) => {
          return (
            <div key={idxList}>
              <Row>
                <h2>{categorizationName[idxList]}</h2>
                {ramenLists[idxList].map((ramen, idxRamen) => {
                  if (
                    idxRamen % 4 === 0 ||
                    clickRamens[
                      ramenLists[idxList][idxRamen - (idxRamen % 4)]
                    ] === true
                  ) {
                    return (
                      <Col
                        sm={3}
                        xs={6}
                        key={idxRamen}
                        onClick={onClickRamen}
                        id={ramenLists[idxList][idxRamen]}
                      >
                        {/* 라면 이미지가 없으면 대체 이미지 사용 */}
                        {DocDataDictionary[
                          `${ramenLists[idxList][idxRamen]}.png`
                        ] ? (
                          <img
                            width={150}
                            height={150}
                            id={ramenLists[idxList][idxRamen]}
                            src={`/ramen/${ramenLists[idxList][idxRamen]}.png`}
                          ></img>
                        ) : (
                          <img
                            width={150}
                            id={ramenLists[idxList][idxRamen]}
                            src={`/ramen/default.png`}
                          ></img>
                        )}
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
              <Button
                variant="outlined"
                style={{ color: "#b0bec5", width: "13rem" }}
                onClick={function () {
                  alert("최소 1개 이상의 라면을 선택해주세요.");
                }}
              >
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
