import axios from "axios";
import { withRouter, useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignupPreference from "../../../components/signup/SignupPreference";

function UserPreference({ params, router: { query } }) {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(JSON.parse(query.fonds));

  const [flagSoup, setFlagSoup] = useState(true);
  const [flagTopping, setFlagTopping] = useState(true);

  const [selectLength, setSelectLength] = useState(userInfo.noodleLength);
  const [selectTexture, setSelectTexture] = useState(userInfo.noodleTexture);
  const [selectEgg, setSelectEgg] = useState(userInfo.egg);
  const [selectSpicy, setSelectSpicy] = useState(userInfo.spicy);

  const [selectSoupNothing, setSelectSoupNothing] = useState(
    userInfo.ingredientNone
  );
  const [selectSoupGarlic, setSelectSoupGarlic] = useState(
    userInfo.ingredientGarlic
  );
  const [selectSoupPepper, setSelectSoupPepper] = useState(
    userInfo.ingredientPepper
  );
  const [selectSoupGreenOnion, setSelectSoupGreenOnion] = useState(
    userInfo.ingredientGreenOnion
  );

  const [selectToppingNothing, setSelectToppingNothing] = useState(
    userInfo.toppingNone
  );
  const [selectToppingCheese, setSelectToppingCheese] = useState(
    userInfo.toppingCheese
  );
  const [selectToppingRicecake, setSelectToppingRicecake] = useState(
    userInfo.toppingTteok
  );
  const [selectToppingDumpling, setSelectToppingDumpling] = useState(
    userInfo.toppingDumpling
  );

  const [canGoNext, setCanGoNext] = useState(false);

  const ramenPreferences = [
    ["그냥", "2개로 분리", "4개로 분리", "잘게"],
    ["쫄깃하게", "부드럽게", "심지가 있게", "퍼지게"],
    ["안 넣음", "완숙", "반숙", "풀어서"],
    ["안 맴게", "조금 맵게", "맴게", "아주 맴게"],
    ["안 넣음", "마늘", "고추", "파"],
    ["안 넣음", "치즈", "떡", "만두"],
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

  const updatePreference = async () => {
    try {
      const sendPreference = Object.assign({}, userInfo);
      sendPreference.memberId = 1;
      await axios.put("v1/member/fond", sendPreference);
      router.push(`/user/${params}`);
    } catch {
      alert("다시 시도해주세요!!");
      router.push(`/user/${params}`);
    }
  };

  useEffect(() => {
    setUserInfo(() => {
      return {
        egg: selectEgg,
        ingredientGarlic: selectSoupGarlic,
        ingredientGreenOnion: selectSoupGreenOnion,
        ingredientNone: selectSoupNothing,
        ingredientPepper: selectSoupPepper,
        noodleLength: selectLength,
        noodleTexture: selectTexture,
        spicy: selectSpicy,
        toppingCheese: selectToppingCheese,
        toppingDumpling: selectToppingDumpling,
        toppingNone: selectToppingNothing,
        toppingTteok: selectToppingRicecake,
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
        <Container>
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

          <Row>
            <Col>
              {canGoNext ? <div onClick={updatePreference}>submit</div> : null}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export async function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}

export default withRouter(UserPreference);
