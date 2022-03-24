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
        <Button variant="contained" onClick={handleFunction}>
          {gender}
        </Button>
      ) : (
        <Button onClick={handleFunction}>{gender}</Button>
      )}
    </>
  );
}
