import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { orange } from "@mui/material/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { withRouter } from "next/router";
import Link from "next/link";

function FirstPost({ router: { query } }) {
  const [userInfo, setUserInfo] = useState(JSON.parse(query.userInfo));
  const [flagLength, setFlagLength] = useState(true);
  const [flagTexture, setFlagTexture] = useState(true);
  const [flagSoup, setFlagSoup] = useState(true);
  const [flagEgg, setFlagEgg] = useState(true);
  const [flagTopping, setFlagTopping] = useState(true);

  const [selectLength, setSelectLength] = useState(0);
  const [selectTexture, setSelectTexture] = useState(0);
  const [selectSoup, setSelectSoup] = useState(0);
  const [selectEgg, setSelectEgg] = useState(0);
  const [selectTopping, setSelectTopping] = useState(0);
  const [canGoNext, setCanGoNext] = useState(false);

  const onClickLength1 = () => {
    setFlagLength(false);
    setSelectLength(1);
  };
  const onClickLength2 = () => {
    setFlagLength(false);
    setSelectLength(2);
  };
  const onClickLength3 = () => {
    setFlagLength(false);
    setSelectLength(3);
  };
  const onClickLength4 = () => {
    setFlagLength(false);
    setSelectLength(4);
  };

  const onClickTexture1 = () => {
    setFlagTexture(false);
    setSelectTexture(1);
  };
  const onClickTexture2 = () => {
    setFlagTexture(false);
    setSelectTexture(2);
  };
  const onClickTexture3 = () => {
    setFlagTexture(false);
    setSelectTexture(3);
  };
  const onClickTexture4 = () => {
    setFlagTexture(false);
    setSelectTexture(4);
  };

  const onClickSoup1 = () => {
    setFlagSoup(false);
    setSelectSoup(1);
  };
  const onClickSoup2 = () => {
    setFlagSoup(false);
    setSelectSoup(2);
  };
  const onClickSoup3 = () => {
    setFlagSoup(false);
    setSelectSoup(3);
  };
  const onClickSoup4 = () => {
    setFlagSoup(false);
    setSelectSoup(4);
  };

  const onClickEgg1 = () => {
    setFlagEgg(false);
    setSelectEgg(1);
  };
  const onClickEgg2 = () => {
    setFlagEgg(false);
    setSelectEgg(2);
  };
  const onClickEgg3 = () => {
    setFlagEgg(false);
    setSelectEgg(3);
  };
  const onClickEgg4 = () => {
    setFlagEgg(false);
    setSelectEgg(4);
  };

  const onClickTopping1 = () => {
    setFlagTopping(false);
    setSelectTopping(1);
  };
  const onClickTopping2 = () => {
    setFlagTopping(false);
    setSelectTopping(2);
  };
  const onClickTopping3 = () => {
    setFlagTopping(false);
    setSelectTopping(3);
  };
  const onClickTopping4 = () => {
    setFlagTopping(false);
    setSelectTopping(4);
  };

  const onClickNext = () => {
    console.log(userInfo);
    console.log("click Next");
    console.log(JSON.stringify(userInfo));
  };

  useEffect(() => {
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        selectLength: selectLength,
        selectTexture: selectTexture,
        selectSoup: selectSoup,
        selectEgg: selectEgg,
        selectTopping: selectTopping,
      };
    });
    if (
      selectLength !== 0 &&
      selectTexture !== 0 &&
      selectSoup !== 0 &&
      selectEgg !== 0 &&
      selectTopping !== 0
    ) {
      setCanGoNext(true);
    }
  }, [selectLength, selectTexture, selectSoup, selectEgg, selectTopping]);

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <h1>라면 취향 선택</h1>
            </Col>
            <Col></Col>
          </Row>
          <br />
          <Row>
            <Col>1. 면의 길이</Col>
            <Col id="lenght1" type="button" onClick={onClickLength1}>
              <Card
                border="secondary"
                style={
                  flagLength || selectLength === 1
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  A
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/length_1.jpg" />
                <Card.Header>그냥</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickLength2}>
              <Card
                border="secondary"
                style={
                  flagLength || selectLength === 2
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  B
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/length_2.jpg" />
                <Card.Header>2개로 분리</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickLength3}>
              <Card
                border="secondary"
                style={
                  flagLength || selectLength === 3
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  C
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/length_3.jpg" />
                <Card.Header>4개로 분리</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickLength4}>
              <Card
                border="secondary"
                style={
                  flagLength || selectLength === 4
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  D
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/length_4.jpg" />
                <Card.Header>잘게</Card.Header>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <br />
          <Row>
            <Col>2. 면의 식감</Col>
            <Col type="button" onClick={onClickTexture1}>
              <Card
                border="secondary"
                style={
                  flagTexture || selectTexture === 1
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  A
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/texture_1.jpg" />
                <Card.Header>쫄깃하게</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickTexture2}>
              <Card
                border="secondary"
                style={
                  flagTexture || selectTexture === 2
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  B
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/texture_2.jpg" />
                <Card.Header>부드럽게</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickTexture3}>
              <Card
                border="secondary"
                style={
                  flagTexture || selectTexture === 3
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  C
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/texture_3.jpg" />
                <Card.Header>심지가 있게</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickTexture4}>
              <Card
                border="secondary"
                style={
                  flagTexture || selectTexture === 4
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  D
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/texture_4.jpg" />
                <Card.Header>퍼지게</Card.Header>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <br />
          <Row>
            <Col>3. 국물 재료</Col>
            <Col type="button" onClick={onClickSoup1}>
              <Card
                border="secondary"
                style={
                  flagSoup || selectSoup === 1
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  A
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/soup_1.jpg" />
                <Card.Header>안 넣음</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickSoup2}>
              <Card
                border="secondary"
                style={
                  flagSoup || selectSoup === 2
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  B
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/soup_2.jpg" />
                <Card.Header>마늘</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickSoup3}>
              <Card
                border="secondary"
                style={
                  flagSoup || selectSoup === 3
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  C
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/soup_3.jpg" />
                <Card.Header>고추</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickSoup4}>
              <Card
                border="secondary"
                style={
                  flagSoup || selectSoup === 4
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  D
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/soup_4.jpg" />
                <Card.Header>파</Card.Header>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <br />
          <Row>
            <Col>4. 계란</Col>
            <Col type="button" onClick={onClickEgg1}>
              <Card
                border="secondary"
                style={
                  flagEgg || selectEgg === 1
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  A
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/egg_1.jpg" />
                <Card.Header>안 넣음</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickEgg2}>
              <Card
                border="secondary"
                style={
                  flagEgg || selectEgg === 2
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  B
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/egg_2.jpg" />
                <Card.Header>완숙</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickEgg3}>
              <Card
                border="secondary"
                style={
                  flagEgg || selectEgg === 3
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  C
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/egg_3.jpg" />
                <Card.Header>반숙</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickEgg4}>
              <Card
                border="secondary"
                style={
                  flagEgg || selectEgg === 4
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  D
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/egg_4.jpg" />
                <Card.Header>풀어서</Card.Header>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <br />
          <Row>
            <Col>5. 토핑</Col>
            <Col type="button" onClick={onClickTopping1}>
              <Card
                border="secondary"
                style={
                  flagTopping || selectTopping === 1
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  A
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/ingre_1.jpg" />
                <Card.Header>안 넣음</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickTopping2}>
              <Card
                border="secondary"
                style={
                  flagTopping || selectTopping === 2
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                {" "}
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  B
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/ingre_2.jpg" />
                <Card.Header>치즈</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickTopping3}>
              <Card
                border="secondary"
                style={
                  flagTopping || selectTopping === 3
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  C
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/ingre_3.jpg" />
                <Card.Header>떡</Card.Header>
              </Card>
            </Col>
            <Col type="button" onClick={onClickTopping4}>
              <Card
                border="secondary"
                style={
                  flagTopping || selectTopping === 4
                    ? { width: "9rem" }
                    : { width: "9rem", opacity: "0.5" }
                }
              >
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  D
                </Avatar>
                <Card.Img width="50" src="/ramenpreference/ingre_4.jpg" />
                <Card.Header>만두</Card.Header>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <div>
          <button onClick={onClickNext}>
            <Link
              href={{
                pathname: "/signup",
                query: { userInfo: JSON.stringify(userInfo) },
              }}
            >
              <a>
                <ArrowBackIosIcon />
              </a>
            </Link>
          </button>
          {canGoNext ? (
            <button onClick={onClickNext}>
              <Link
                href={{
                  pathname: "/ramenpreference",
                  query: { userInfo: JSON.stringify(userInfo) },
                }}
              >
                <a>
                  <ArrowForwardIosIcon />
                </a>
              </Link>
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default withRouter(FirstPost);
