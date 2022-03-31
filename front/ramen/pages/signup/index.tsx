/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CakeIcon from "@mui/icons-material/Cake";
import WcIcon from "@mui/icons-material/Wc";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "next/router";
import FrontArrow from "../../components/signup/FrontArrow";
import SignupUserInfoForm from "../../components/signup/SignupUserInfoForm";
import GenderButton from "../../components/signup/GenderButton";
import Button from "@mui/material/Button";
import axios from "axios";
import { setCookies, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { signupType } from "../../components/Types";
import { orange } from "@mui/material/colors";

import SendIcon from "@mui/icons-material/Send";

const Signup: React.FC<signupType> = ({ router: { query } }) => {
  console.log(query);
  const Router = useRouter();

  const [userInfo, setUserInfo] = useState({});
  // 이메일 형식 확인: "@" + ".com"
  const [inputEmail, setInputEmail] = useState("");
  const [isEmailOnly, setIsEmailOnly] = useState(false);
  const [inputPw, setInputPw] = useState("");
  const [inputPwConfirm, setInputPwConfirm] = useState("");
  const [isSamePw, setIsSamePw] = useState(true);
  const [inputAge, setInputAge] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [canGoNext, setCanGoNext] = useState(false);

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 중복 검사를 이미 마쳤다고 하더라도 이메일을 바꾸면 다시 검사
    setIsEmailOnly((prevState) => false);
    setInputEmail(event.target.value);
  };

  const onClickEmailCheck = () => {
    const email = inputEmail;
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 이메일 형식, 중복 확인
    if (regEmail.test(email) === true) {
      console.log("이메일 형식이 맞음", inputEmail, typeof inputEmail);
      axios
        .post("http://j6c104.p.ssafy.io:8083/v1/member/check-email", {
          inputEmail: inputEmail,
        })
        // 중복되지 않는 경우, 중복검사 확인
        .then(function (response) {
          if (response.status === 200) {
            setIsEmailOnly((prevState) => true);
          }
          console.log("응답", response);
        })
        // 중복되는 경우, 다시 중복검사 + 알림(이미 사용중인 이메일)
        .catch(function (error) {
          alert("이미 사용중인 이메일입니다.");
          setIsEmailOnly((prevState) => false);
        });
      // 이메일 형식 X, 다시 중복검사 + 알림(메일 형식 아님)
    } else {
      alert("이메일 형식이 아닙니다.");
    }
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
    setInputGender("M");
  };

  const handleInputGenderFemale = () => {
    setInputGender("F");
  };

  useEffect(() => {
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        inputEmail: inputEmail,
        inputPw: inputPw,
        inputName: inputName,
        inputAge: Number(inputAge),
        inputGender: inputGender,
      };
    });
    if (
      isSamePw === true &&
      isEmailOnly === true &&
      inputName != "" &&
      inputAge !== "" &&
      inputGender !== "" &&
      inputPw === inputPwConfirm
    ) {
      setCanGoNext(true);
    } else {
      setCanGoNext(false);
    }
  }, [
    isEmailOnly,
    isSamePw,
    inputName,
    inputAge,
    inputGender,
    inputPw,
    inputPwConfirm,
  ]);

  useEffect(() => {
    if (query.userInfo) {
      const prevUserInfo = JSON.parse(query.userInfo);
      setInputEmail(prevUserInfo["inputEmail"]);
      setInputPw(prevUserInfo["inputPw"]);
      setInputAge(prevUserInfo["inputAge"]);
      setInputName(prevUserInfo["inputName"]);
      setInputGender(prevUserInfo["inputGender"]);
    }
  }, []);

  useEffect(() => {
    const refreshToken = getCookie("refreshToken");
    if (refreshToken) {
      axios
        .get("http://j6c104.p.ssafy.io:8083/v1/member/refresh", {
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

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <h2>회원 정보입력</h2>
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <div style={{ width: "100%" }}>
                  {isEmailOnly ? (
                    <SignupUserInfoForm
                      infoName={"Email"}
                      infoId={"input_email"}
                      handleFunction={handleInputEmail}
                      value={inputEmail}
                      type={"text"}
                      icon={<MailOutlineIcon />}
                      icon2={null}
                    />
                  ) : (
                    <SignupUserInfoForm
                      infoName={"Email"}
                      infoId={"input_email"}
                      handleFunction={handleInputEmail}
                      value={inputEmail}
                      type={"text"}
                      icon={<MailOutlineIcon />}
                      icon2={
                        <Button
                          // sx={{ color: orange[300] }}
                          onClick={onClickEmailCheck}
                          endIcon={<SendIcon />}
                        ></Button>
                      }
                    />
                  )}
                  <br />
                </div>
                <div>
                  <SignupUserInfoForm
                    infoName={"Choose password"}
                    infoId={"input_pw"}
                    handleFunction={handleInputPw}
                    value={inputPw}
                    type={"password"}
                    icon={<LockIcon />}
                    icon2={null}
                  />
                  <br />
                </div>
                <div>
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
                      <FormHelperText id="component-error-text">
                        Error
                      </FormHelperText>
                    </FormControl>
                  )}
                  <br />
                </div>
                <div>
                  <SignupUserInfoForm
                    infoName={"Name"}
                    infoId={"input_name"}
                    handleFunction={handleInputName}
                    value={inputName}
                    type={"text"}
                    icon={<PersonOutlineIcon />}
                    icon2={null}
                  />
                  <br />
                </div>
                <div>
                  <SignupUserInfoForm
                    infoName={"Ages"}
                    infoId={"input_age"}
                    handleFunction={handleInputAge}
                    value={inputAge}
                    type={"number"}
                    icon={<CakeIcon />}
                    icon2={null}
                  />
                  <br />
                </div>
                <div style={{ color: "rgba(0, 0, 0, 0.54)" }}>
                  <WcIcon />
                  <label htmlFor="input_gender">Gender </label>
                  <br />
                  <ButtonGroup
                    style={{ margin: "10px" }}
                    color="primary"
                    aria-label="medium secondary button group"
                  >
                    <Container>
                      <Row>
                        <Col>
                          <GenderButton
                            inputGender={inputGender}
                            inputGenderFlag={"M"}
                            gender={"Male"}
                            handleFunction={handleInputGenderMale}
                          />
                        </Col>
                        <Col>
                          <GenderButton
                            inputGender={inputGender}
                            inputGenderFlag={"F"}
                            gender={"Female"}
                            handleFunction={handleInputGenderFemale}
                          />
                        </Col>
                      </Row>
                    </Container>
                  </ButtonGroup>
                </div>
              </Box>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col>
              <div>
                {canGoNext ? (
                  <FrontArrow
                    pathname={"/ramenpreference"}
                    userInfo={userInfo}
                  />
                ) : null}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default withRouter(Signup);
