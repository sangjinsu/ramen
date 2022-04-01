/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";

export default function GenderButton({
  inputGender,
  inputGenderFlag,
  gender,
  handleFunction,
}) {
  return (
    <>
      {inputGender === inputGenderFlag ? (
        <Button
          variant="contained"
          onClick={handleFunction}
          style={{ color: "orange" }}
        >
          {gender}
        </Button>
      ) : (
        <Button onClick={handleFunction} style={{ color: "orange" }}>
          {gender}
        </Button>
      )}
    </>
  );
}
