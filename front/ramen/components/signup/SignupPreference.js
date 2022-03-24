import Avatar from "@mui/material/Avatar";
import { orange } from "@mui/material/colors";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function SignupPreference({
  userInfo,
  flagSoup,
  flagTopping,
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
  onClickChoice,
}) {
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
                      <Card.Header id={`choice-${idxPreference}-${idxChoice}`}>
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
      <Row></Row>
    </>
  );
}
