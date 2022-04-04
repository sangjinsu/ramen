/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Avatar from "@mui/material/Avatar";
import { orange } from "@mui/material/colors";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function SignupPreference({
  flagSoup,
  flagTopping,
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
  onClickChoice,
}) {
  const labelList = ["A", "B", "C", "D"];
  const ramenPreferenceName = [
    "1. 면의 길이",
    "2. 면의 식감",
    "3. 계란",
    "4. 맴기",
    "5. 토핑",
    "6. 국물 재료",
  ];
  const ramenPreferences = [
    ["그냥", "2개로 분리", "4개로 분리", "잘게"],
    ["쫄깃하게", "부드럽게", "심지가 있게", "퍼지게"],
    ["안 넣음", "완숙", "반숙", "풀어서"],
    ["안 맵게", "조금 맵게", "맵게", "아주 맵게"],
    ["안 넣음", "치즈", "떡", "만두"],
    ["안 넣음", "마늘", "고추", "파"],
  ];

  return (
    <>
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
              <Col>
                <h4>{ramenPreferenceName[idxPreference]}</h4>
              </Col>
            </Row>
            <Row>
              {ramenPreferences[idxPreference].map((choice, idxChoice) => {
                return (
                  <Col
                    className="mx-5"
                    id={`choice-${idxPreference}-${idxChoice}`}
                    key={idxChoice}
                  >
                    <Card
                      type="button"
                      onClick={onClickChoice}
                      id={`choice-${idxPreference}-${idxChoice}`}
                      border="secondary"
                      style={
                        (idxPreference === 0 &&
                          (selectLength === "" ||
                            selectLength ===
                              ramenPreferences[idxPreference][idxChoice])) ||
                        (idxPreference === 1 &&
                          (selectTexture === "" ||
                            selectTexture ===
                              ramenPreferences[idxPreference][idxChoice])) ||
                        (idxPreference === 2 &&
                          (selectEgg === "" ||
                            selectEgg ===
                              ramenPreferences[idxPreference][idxChoice])) ||
                        (idxPreference === 3 &&
                          (selectSpicy === "" ||
                            selectSpicy ===
                              ramenPreferences[idxPreference][idxChoice])) ||
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
                          (flagTopping || selectToppingDumpling)) ||
                        (idxPreference === 5 &&
                          idxChoice === 0 &&
                          (flagSoup || selectSoupNothing)) ||
                        (idxPreference === 5 &&
                          idxChoice === 1 &&
                          (flagSoup || selectSoupGarlic)) ||
                        (idxPreference === 5 &&
                          idxChoice === 2 &&
                          (flagSoup || selectSoupPepper)) ||
                        (idxPreference === 5 &&
                          idxChoice === 3 &&
                          (flagSoup || selectSoupGreenOnion))
                          ? { width: "11rem" }
                          : { width: "10rem", opacity: "0.5" }
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
                      <Card.Header id={`choice-${idxPreference}-${idxChoice}`}>
                        {ramenPreferences[idxPreference][idxChoice]}
                      </Card.Header>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <br />
            <br />
            <br />
            <br />
          </div>
        );
      })}
      <Row></Row>
    </>
  );
}
