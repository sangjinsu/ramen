import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "next/router";
import BackArrow from "../../components/signup/BackArrow";
import FrontArrow from "../../components/signup/FrontArrow";
import SignupPreference from "../../components/signup/SignupPreference";
import axios from "axios";
import { setCookies, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { signupType } from "../../components/Types";
import serverURLDoc from "../../components/main/ServerURL";

const AUTH_URL = serverURLDoc.AUTH_URL;

function RamenPreference({ router: { query } }: signupType) {
  const Router = useRouter();

  const [userInfo, setUserInfo] = useState({});

  const [flagSoup, setFlagSoup] = useState(true);
  const [flagTopping, setFlagTopping] = useState(true);

  const [selectLength, setSelectLength] = useState("");
  const [selectTexture, setSelectTexture] = useState("");
  const [selectEgg, setSelectEgg] = useState("");
  const [selectSpicy, setSelectSpicy] = useState("");

  const [selectSoupNothing, setSelectSoupNothing] = useState(false);
  const [selectSoupGarlic, setSelectSoupGarlic] = useState(false);
  const [selectSoupPepper, setSelectSoupPepper] = useState(false);
  const [selectSoupGreenOnion, setSelectSoupGreenOnion] = useState(false);

  const [selectToppingNothing, setSelectToppingNothing] = useState(false);
  const [selectToppingCheese, setSelectToppingCheese] = useState(false);
  const [selectToppingRicecake, setSelectToppingRicecake] = useState(false);
  const [selectToppingDumpling, setSelectToppingDumpling] = useState(false);

  const [canGoNext, setCanGoNext] = useState(false);
  const ramenPreferences = [
    ["그냥", "2개로 분리", "4개로 분리", "잘게"],
    ["쫄깃하게", "부드럽게", "심지가 있게", "퍼지게"],
    ["안 넣음", "완숙", "반숙", "풀어서"],
    ["안 맵게", "조금 맵게", "맵게", "아주 맵게"],
    ["안 넣음", "마늘", "고추", "파"],
    ["안 넣음", "치즈", "떡", "만두"],
  ];

  const onClickChoice = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
    const idArray = (event.target as HTMLButtonElement).id.split("-");
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
      if (selectSpicy === choice) {
        setSelectSpicy((prevEgg) => "");
      } else {
        setSelectSpicy((prevEgg) => choice);
      }
    } else if (categoryId === 5) {
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
    if (query.userInfo) {
      setUserInfo((prevUserInfo) => JSON.parse(query.userInfo));
    }
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        noodleLength: selectLength,
        noodleTexture: selectTexture,
        egg: selectEgg,
        spicy: selectSpicy,
        toppingNone: selectToppingNothing,
        toppingCheese: selectToppingCheese,
        toppingTteok: selectToppingRicecake,
        toppingDumpling: selectToppingDumpling,
        ingredientNone: selectSoupNothing,
        ingredientGarlic: selectSoupGarlic,
        ingredientPepper: selectSoupPepper,
        ingredientGreenOnion: selectSoupGreenOnion,
      };
    });
    if (
      selectLength !== "" &&
      selectTexture !== "" &&
      selectEgg !== "" &&
      selectSpicy !== "" &&
      (selectToppingNothing ||
        selectToppingCheese ||
        selectToppingRicecake ||
        selectToppingDumpling) &&
      (selectSoupNothing ||
        selectSoupGarlic ||
        selectSoupPepper ||
        selectSoupGreenOnion)
    ) {
      setCanGoNext(true);
    } else {
      setCanGoNext(false);
    }
  }, [
    selectLength,
    selectTexture,
    selectEgg,
    selectSpicy,
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
    selectToppingNothing,
    selectToppingCheese,
    selectToppingRicecake,
    selectToppingDumpling,
  ]);

  return (
    <>
      <div>
        <Container style={{ width: "70%" }}>
          <SignupPreference
            flagSoup={flagSoup}
            flagTopping={flagTopping}
            selectLength={selectLength}
            selectTexture={selectTexture}
            selectEgg={selectEgg}
            selectSpicy={selectSpicy}
            selectSoupNothing={selectSoupNothing}
            selectSoupGarlic={selectSoupGarlic}
            selectSoupPepper={selectSoupPepper}
            selectSoupGreenOnion={selectSoupGreenOnion}
            selectToppingNothing={selectToppingNothing}
            selectToppingCheese={selectToppingCheese}
            selectToppingRicecake={selectToppingRicecake}
            selectToppingDumpling={selectToppingDumpling}
            onClickChoice={onClickChoice}
          />
        </Container>
        <Container>
          <Row>
            <Col>
              <div style={{ float: "left" }}>
                <BackArrow pathname={"/signup"} userInfo={userInfo} />
              </div>
              <div style={{ float: "right" }}>
                {canGoNext ? (
                  <FrontArrow pathname={"/ramenselect"} userInfo={userInfo} />
                ) : null}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default withRouter(RamenPreference);
