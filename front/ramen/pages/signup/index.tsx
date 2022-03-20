import React, { useEffect, useState } from "react";
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
import FormHelperText from "@mui/material/FormHelperText";

function Signup() {
  const [userInfo, setUserInfo] = useState({});
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPwConfirm, setInputPwConfirm] = useState("");
  const [isSamePw, setIsSamePw] = useState(true);
  const [inputAge, setInputAge] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [canGoNext, setCanGoNext] = useState(false);

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

  const handleIsSamePw = (event: React.FocusEvent<HTMLInputElement>) => {
    const pwd = event.target.value;
    if (pwd === inputPw) {
      setIsSamePw(true);
    } else {
      setIsSamePw(false);
    }
  };

  const handleInputAge = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  const onClickNext = async () => {
    console.log(userInfo);
    console.log("click Next");
    console.log(JSON.stringify(userInfo));
  };

  useEffect(() => {
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        inputEmail: inputEmail,
        inputPw: inputPw,
        inputName: inputName,
        inputAge: inputAge,
        inputGender: inputGender,
      };
    });
    if (
      isSamePw === true &&
      inputEmail !== "" &&
      inputName != "" &&
      inputAge !== "" &&
      inputGender !== ""
    ) {
      setCanGoNext(true);
    }
  }, [inputEmail, isSamePw, inputName, inputAge, inputGender]);

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
              type="password"
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
          {isSamePw ? (
            <FormControl variant="standard">
              <InputLabel htmlFor="input_pw_confirm">
                Confirm password
              </InputLabel>
              <Input
                id="input_pw_confirm"
                type="password"
                value={inputPwConfirm}
                onChange={handleInputPwConfirm}
                onBlur={handleIsSamePw}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          ) : (
            <FormControl error variant="standard">
              <InputLabel htmlFor="input_pw_confirm">
                Confirm password
              </InputLabel>
              <Input
                id="input_pw_confirm"
                type="password"
                value={inputPwConfirm}
                onChange={handleInputPwConfirm}
                onBlur={handleIsSamePw}
                aria-describedby="component-error-text"
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
              />
              <FormHelperText id="component-error-text">Error</FormHelperText>
            </FormControl>
          )}

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

export default Signup;
