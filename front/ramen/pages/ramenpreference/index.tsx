import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { orange } from "@mui/material/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { withRouter } from "next/router";
import Link from "next/link";

function RamenPreference({ router: { query } }) {
  const [userInfo, setUserInfo] = useState(JSON.parse(query.userInfo));

  const [flagSoup, setFlagSoup] = useState(true);
  const [flagTopping, setFlagTopping] = useState(true);

  const [selectLength, setSelectLength] = useState("");
  const [selectTexture, setSelectTexture] = useState("");
  const [selectEgg, setSelectEgg] = useState("");

  const [selectSoupNothing, setSelectSoupNothing] = useState(false);
  const [selectSoupGarlic, setSelectSoupGarlic] = useState(false);
  const [selectSoupPepper, setSelectSoupPepper] = useState(false);
  const [selectSoupGreenOnion, setSelectSoupGreenOnion] = useState(false);

  const [selectToppingNothing, setSelectToppingNothing] = useState(false);
  const [selectToppingCheese, setSelectToppingCheese] = useState(false);
  const [selectToppingRicecake, setSelectToppingRicecake] = useState(false);
  const [selectToppingDumpling, setSelectToppingDumpling] = useState(false);

  const [canGoNext, setCanGoNext] = useState(false);

  const labelList = ["A", "B", "C", "D"];
  const ramenPreferences = [
    ["그냥", "2개로 분리", "4개로 분리", "잘게"],
    ["쫄깃하게", "부드럽게", "심지가 있게", "퍼지게"],
    ["안 넣음", "완숙", "반숙", "풀어서"],
    ["안 넣음", "마늘", "고추", "파"],
    ["안 넣음", "치즈", "떡", "만두"],
  ];
  const ramenPreferenceName = [
    "1. 면의 길이",
    "2. 면의 식감",
    "3. 계란",
    "4. 국물 재료",
    "5. 토핑",
  ];

  const onClickChoice = (event: React.MouseEvent<HTMLButtonElement>) => {
    const idArray = event.target.id.split("-");
    const categoryId = Number(idArray[1]);
    const choiceId = Number(idArray[2]);
    const choice = ramenPreferences[categoryId][choiceId];
    if (categoryId === 0) {
      if (selectLength === choice) {
        console.log("prevLength", selectLength);
        setSelectLength((prevLength) => "");
      } else {
        setSelectLength((prevLength) => choice);
      }
    } else if (categoryId === 1) {
      if (selectTexture === choice) {
        setSelectTexture((prevTexture) => "");
      } else {
        setSelectTexture((prevTextutre) => choice);
      }
    } else if (categoryId === 2) {
      if (selectEgg === choice) {
        setSelectEgg((prevEgg) => "");
      } else {
        setSelectEgg((prevEgg) => choice);
      }
    } else if (categoryId === 3) {
      if (choiceId === 0) {
        setSelectSoupNothing((prevSelect) => !prevSelect);
        setSelectSoupGarlic((prevSelect) => false);
        setSelectSoupPepper((prevSelect) => false);
        setSelectSoupGreenOnion((prevSelect) => false);
      } else {
        setSelectSoupNothing((prevSelect) => false);
        if (choiceId === 1) {
          setSelectSoupGarlic((prevSelect) => !prevSelect);
        } else if (choiceId === 2) {
          setSelectSoupPepper((prevSelect) => !prevSelect);
        } else if (choiceId === 3) {
          setSelectSoupGreenOnion((prevSelect) => !prevSelect);
        }
      }
    } else if (categoryId === 4) {
      setFlagTopping((prevState) => false);
      if (choiceId === 0) {
        setSelectToppingNothing((prevSelect) => !prevSelect);
        setSelectToppingCheese((prevSelect) => false);
        setSelectToppingRicecake((prevSelect) => false);
        setSelectToppingDumpling((prevSelect) => false);
      } else {
        setSelectToppingNothing((prevSelect) => false);
        if (choiceId === 1) {
          setSelectToppingCheese((prevSelect) => !prevSelect);
        } else if (choiceId === 2) {
          setSelectToppingRicecake((prevSelect) => !prevSelect);
        } else if (choiceId === 3) {
          setSelectToppingDumpling((prevSelect) => !prevSelect);
        }
      }
    }
  };

  useEffect(() => {
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        noodleLength: selectLength,
        noodleTexture: selectTexture,
        egg: selectEgg,
        ingredientNone: selectSoupNothing,
        ingredientGarlic: selectSoupGarlic,
        ingredientPepper: selectSoupPepper,
        ingredientGreenOnion: selectSoupGreenOnion,
        toppingNone: selectToppingNothing,
        toppingCheese: selectToppingCheese,
        toppingTteok: selectToppingRicecake,
        toppingDumpling: selectToppingDumpling,
      };
    });
    if (
      selectLength !== "" &&
      selectTexture !== "" &&
      (selectSoupNothing ||
        selectSoupGarlic ||
        selectSoupPepper ||
        selectSoupGreenOnion) &&
      selectEgg !== "" &&
      (selectToppingNothing ||
        selectToppingCheese ||
        selectToppingRicecake ||
        selectToppingDumpling)
    ) {
      setCanGoNext(true);
    } else {
      setCanGoNext(false);
    }
  }, [
    selectLength,
    selectTexture,
    selectEgg,
    selectSoupNothing,
    selectSoupGarlic,
    selectSoupPepper,
    selectSoupGreenOnion,
    selectToppingNothing,
    selectToppingCheese,
    selectToppingRicecake,
    selectToppingDumpling,
  ]);

  useEffect(() => {
    if (
      !selectSoupNothing &&
      !selectSoupGarlic &&
      !selectSoupPepper &&
      !selectSoupGreenOnion
    ) {
      setFlagSoup((prevState) => true);
    } else {
      setFlagSoup((prevState) => false);
    }
  }, [
    selectSoupNothing,
    selectSoupGarlic,
    selectSoupPepper,
    selectSoupGreenOnion,
  ]);

  useEffect(() => {
    if (
      !selectToppingNothing &&
      !selectToppingCheese &&
      !selectToppingRicecake &&
      !selectToppingDumpling
    ) {
      setFlagTopping((prevState) => true);
    } else {
      setFlagTopping((prevState) => false);
    }
  }, [
    selectSoupNothing,
    selectSoupGarlic,
    selectSoupPepper,
    selectSoupGreenOnion,
  ]);

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
          {ramenPreferences.map((ramenPreference, idxPreference) => {
            return (
              <div key={idxPreference}>
                <Row>
                  <Col>{ramenPreferenceName[idxPreference]}</Col>
                  {ramenPreferences[idxPreference].map((choice, idxChoice) => {
                    return (
                      <Col
                        id={`choice-${idxPreference}-${idxChoice}`}
                        key={idxChoice}
                        type="button"
                        onClick={onClickChoice}
                      >
                        <Card
                          id={`choice-${idxPreference}-${idxChoice}`}
                          border="secondary"
                          style={
                            (idxPreference === 0 &&
                              (selectLength === "" ||
                                selectLength ===
                                  ramenPreferences[idxPreference][
                                    idxChoice
                                  ])) ||
                            (idxPreference === 1 &&
                              (selectTexture === "" ||
                                selectTexture ===
                                  ramenPreferences[idxPreference][
                                    idxChoice
                                  ])) ||
                            (idxPreference === 2 &&
                              (selectEgg === "" ||
                                selectEgg ===
                                  ramenPreferences[idxPreference][
                                    idxChoice
                                  ])) ||
                            (idxPreference === 3 &&
                              idxChoice === 0 &&
                              (flagSoup || selectSoupNothing)) ||
                            (idxPreference === 3 &&
                              idxChoice === 1 &&
                              (flagSoup || selectSoupGarlic)) ||
                            (idxPreference === 3 &&
                              idxChoice === 2 &&
                              (flagSoup || selectSoupPepper)) ||
                            (idxPreference === 3 &&
                              idxChoice === 3 &&
                              (flagSoup || selectSoupGreenOnion)) ||
                            (idxPreference === 4 &&
                              idxChoice === 0 &&
                              (flagTopping || selectToppingNothing)) ||
                            (idxPreference === 4 &&
                              idxChoice === 1 &&
                              (flagTopping || selectToppingCheese)) ||
                            (idxPreference === 4 &&
                              idxChoice === 2 &&
                              (flagTopping || selectToppingRicecake)) ||
                            (idxPreference === 4 &&
                              idxChoice === 3 &&
                              (flagTopping || selectToppingDumpling))
                              ? { width: "9rem" }
                              : { width: "9rem", opacity: "0.5" }
                          }
                        >
                          <Avatar
                            id={`choice-${idxPreference}-${idxChoice}`}
                            sx={{ bgcolor: orange[500] }}
                            aria-label="recipe"
                          >
                            {labelList[idxChoice]}
                          </Avatar>
                          <Card.Img
                            id={`choice-${idxPreference}-${idxChoice}`}
                            width="50"
                            src={`/ramenpreference/image_${idxPreference}_${idxChoice}.jpg`}
                          />
                          <Card.Header
                            id={`choice-${idxPreference}-${idxChoice}`}
                          >
                            {ramenPreferences[idxPreference][idxChoice]}
                          </Card.Header>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
                <br />
              </div>
            );
          })}
          <Row>
            <Col>
              <button>
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
            </Col>
            <Col></Col>
            <Col>
              {canGoNext ? (
                <button>
                  <Link
                    href={{
                      pathname: "/ramenselect",
                      query: { userInfo: JSON.stringify(userInfo) },
                    }}
                  >
                    <a>
                      <ArrowForwardIosIcon />
                    </a>
                  </Link>
                </button>
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default withRouter(RamenPreference);
