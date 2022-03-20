import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CakeIcon from "@mui/icons-material/Cake";
import WcIcon from "@mui/icons-material/Wc";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Link from "next/link";

function Signup() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPwConfirm, setInputPwConfirm] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputGender, setInputGender] = useState("");

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };

  const handleInputPw = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPw(event.target.value);
  };

  const handleInputPwConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPwConfirm(event.target.value);
  };

  const handleInputAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(typeof event.target.value);
    console.log(event.target.value);
    setInputAge(event.target.value);
  };

  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const handleInputGenderMale = () => {
    setInputGender("Male");
  };

  const handleInputGenderFemale = () => {
    setInputGender("Female");
  };

  // login 버튼 클릭 이벤트
  const onClickNext = () => {
    console.log("click Next");
  };

  return (
    <>
      <div>
        <h2>회원 정보입력</h2>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input_email">Email</InputLabel>
            <Input
              id="input_email"
              value={inputEmail}
              onChange={handleInputEmail}
              placeholder="이메일을 입력해주세요"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <FormControl variant="standard">
            <InputLabel htmlFor="input_pw">Choose password</InputLabel>
            <Input
              id="input_pw"
              value={inputPw}
              onChange={handleInputPw}
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <FormControl variant="standard">
            <InputLabel htmlFor="input_pw_confirm">Confirm password</InputLabel>
            <Input
              id="input_pw_confirm"
              value={inputPwConfirm}
              onChange={handleInputPwConfirm}
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <FormControl variant="standard">
            <InputLabel htmlFor="input_name">Name</InputLabel>
            <Input
              id="input_name"
              value={inputName}
              onChange={handleInputName}
              startAdornment={
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <FormControl variant="standard">
            <InputLabel htmlFor="input_age">Ages</InputLabel>
            <Input
              id="input_age"
              type="number"
              value={inputAge}
              onChange={handleInputAge}
              startAdornment={
                <InputAdornment position="start">
                  <CakeIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <div style={{ color: "rgba(0, 0, 0, 0.54)" }}>
            {/* MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root */}
            {/* MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root */}
            <WcIcon />
            <label htmlFor="input_gender">Gender </label>
            <br />
            <ButtonGroup
              color="primary"
              aria-label="medium secondary button group"
            >
              {inputGender === "Male" ? (
                <Button variant="contained" onClick={handleInputGenderMale}>
                  Male
                </Button>
              ) : (
                <Button onClick={handleInputGenderMale}>Male</Button>
              )}
              {inputGender === "Female" ? (
                <Button variant="contained" onClick={handleInputGenderFemale}>
                  Female
                </Button>
              ) : (
                <Button onClick={handleInputGenderFemale}>Female</Button>
              )}
            </ButtonGroup>
          </div>
        </Box>
        <div>
          <button onClick={onClickNext}>
            <Link href="/ramenpreference">
              <a>
                <ArrowForwardIosIcon />
              </a>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Signup;
