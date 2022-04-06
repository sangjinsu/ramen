import axios from "axios";
import { getCookie, setCookies, removeCookies } from "cookies-next";
import { withRouter, useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignupPreference from "../../../components/signup/SignupPreference";
import { userPreferenceType } from "../../../components/Types";
import Button from "@mui/material/Button";
import serverURLDoc from "../../../components/main/ServerURL";

const AUTH_URL = serverURLDoc.AUTH_URL;
const member_id = getCookie("member_id");

const UserPreference: React.FC<userPreferenceType> = ({
  params,
  router: { query },
}) => {
  console.log(params);
  console.log(query.egg);

  const router = useRouter();
  const [userInfo, setUserInfo] = useState(query);

  const [flagSoup, setFlagSoup] = useState(true);
  const [flagTopping, setFlagTopping] = useState(true);

  const [selectLength, setSelectLength] = useState(userInfo.noodleLength);
  const [selectTexture, setSelectTexture] = useState(userInfo.noodleTexture);
  const [selectEgg, setSelectEgg] = useState(userInfo.egg);
  const [selectSpicy, setSelectSpicy] = useState(userInfo.spicy);

  const [selectSoupNothing, setSelectSoupNothing] = useState(
    userInfo.ingredientNone === "true" ? true : false
  );
  const [selectSoupGarlic, setSelectSoupGarlic] = useState(
    userInfo.ingredientGarlic === "true" ? true : false
  );
  const [selectSoupPepper, setSelectSoupPepper] = useState(
    userInfo.ingredientPepper === "true" ? true : false
  );
  const [selectSoupGreenOnion, setSelectSoupGreenOnion] = useState(
    userInfo.ingredientGreenOnion === "true" ? true : false
  );

  const [selectToppingNothing, setSelectToppingNothing] = useState(
    userInfo.toppingNone === "true" ? true : false
  );
  const [selectToppingCheese, setSelectToppingCheese] = useState(
    userInfo.toppingCheese === "true" ? true : false
  );
  const [selectToppingRicecake, setSelectToppingRicecake] = useState(
    userInfo.toppingTteok === "true" ? true : false
  );
  const [selectToppingDumpling, setSelectToppingDumpling] = useState(
    userInfo.toppingDumpling === "true" ? true : false
  );

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
    let accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");
    axios
      .get(`${AUTH_URL}/check-jwt`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(function (response) {
        axios
          .put(
            `http://j6c104.p.ssafy.io:8080/v1/member/fond?egg=${userInfo.egg}&ingredientGarlic=${userInfo.ingredientGarlic}&ingredientGreenOnion=${userInfo.ingredientGreenOnion}&ingredientNone=${userInfo.ingredientNone}&ingredientPepper=${userInfo.ingredientPepper}&memberId=${params}&noodleLength=${userInfo.noodleLength}&noodleTexture=${userInfo.noodleTexture}&spicy=${userInfo.spicy}&toppingCheese=${userInfo.toppingCheese}&toppingDumpling=${userInfo.toppingDumpling}&toppingNone=${userInfo.toppingNone}&toppingTteok=${userInfo.toppingTteok}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then(function (response) {
            router.push(`/user/${params}`);
          });
      })
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
              accessToken = response.data.accessToken;
              axios
                .put(
                  `http://j6c104.p.ssafy.io:8080/v1/member/fond?egg=${userInfo.egg}&ingredientGarlic=${userInfo.ingredientGarlic}&ingredientGreenOnion=${userInfo.ingredientGreenOnion}&ingredientNone=${userInfo.ingredientNone}&ingredientPepper=${userInfo.ingredientPepper}&memberId=${params}&noodleLength=${userInfo.noodleLength}&noodleTexture=${userInfo.noodleTexture}&spicy=${userInfo.spicy}&toppingCheese=${userInfo.toppingCheese}&toppingDumpling=${userInfo.toppingDumpling}&toppingNone=${userInfo.toppingNone}&toppingTteok=${userInfo.toppingTteok}`,
                  {
                    headers: {
                      Authorization: `Bearer ${accessToken}`,
                    },
                  }
                )
                .then(function (response) {
                  router.push(`/user/${params}`);
                });
            })
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
  };

  React.useEffect(() => {
    if (member_id !== params || !query.egg) {
      alert("잘못된 접근입니다");
      router.push("/");
    }
  }, []);

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
            <Col></Col>
            <Col></Col>

            <Col variant="contained">
              {canGoNext ? (
                <Button
                  sx={{ fontSize: 18 }}
                  style={{
                    color: "orange",
                    width: "100px",
                    border: "1px solid orange",
                  }}
                  variant="outlined"
                  onClick={updatePreference}
                >
                  Submit
                </Button>
              ) : (
                <Button variant="outlined" disabled style={{ width: "100px" }}>
                  Disabled
                </Button>
              )}
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export async function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}

export default withRouter(UserPreference);
