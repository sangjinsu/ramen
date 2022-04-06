/* eslint-disable react/prop-types */
import { Figure } from "react-bootstrap";
import { Row, Col, Badge,Modal,Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          이용가이드
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>검색창</h4>
        <p>
        최소1개 최대3개의 아이콘을 클릭해 고르실수 있습니다! 봉지와 컵중 하나를 고르고, 건면,유탕 그리고 생면과숙면중에 하나를고르고 마지막으로 국물,비빔과볶음,짜장중에 하나를 골라 검색해주세요!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <p onClick={props.onHide} style={{cursor:"pointer"}}>닫기</p>
      </Modal.Footer>
    </Modal>
  );
}



const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
  },
});

const longText = `
최소1개 최대3개의 아이콘을 클릭해 고르실수 있습니다!
봉지와 컵중 하나를 고르고, 건면,유탕 그리고 생면과숙면중에 하나를고르고
마지막으로 국물,비빔과볶음,짜장중에 하나를 골라 검색해주세요!
`;

export default function Layout() {
  // 여기다가 변수로 저장한다음 어케어케 하면 될거같은데 말이지 ㅇㅇ..
  // on/off 로다가 ㅇㅇ 추가하면 되겟네 ㅇㅇ true false그거로 3개를 만들면 되겠다. ㅇㅇ
  // on/off 혹은 경우의 수에 따라 ㅇㅇ 하도록하쟈 여튼 ㅅㄱ.
  let [ramen1, setRamen1] = useState(0);
  let [ramen2, setRamen2] = useState(0);
  let [ramen3, setRamen3] = useState(0);
  let [ramenresult, setRamenresult] = useState([0, 0, 0]);
  // 1,2,3,4,5,6,7,8
  const router = useRouter();
  const [modalShow, setModalShow] = React.useState(false);



  const mobileText = `
최소1개 최대3개의 아이콘을 클릭해 고르실수 있습니다!
봉지와 컵중 하나를 고르고, 건면,유탕 그리고 생면과숙면중에 하나를고르고
마지막으로 국물,비빔과볶음,짜장중에 하나를 골라 검색해주세요!
`;


  return (
    <>
    
      <div className="box">
        <Row>
          <Col xs={0} md={3} lg={3}></Col>
          {/* 반응형에서 찌그러져서 xs속성줘야함 */}
          <Col xs={12} md={6} lg={5}>
            {" "}
            <div className="iconbox" width={500}>
              <div style={{ display: "inline" }}>
                <img src="icon/rightarrow.png" width={45}></img>{" "}
              </div>
              <R1 ramen1={ramen1}></R1>
              <R2 ramen2={ramen2}></R2>
              <R3 ramen3={ramen3}></R3>
              {/* 순서가 왜바뀌는지는 모르지만 서치랑,리셋버튼바뀜 */}
              <div className="icon" width={20}></div>
              <div
                className="icon"
                onClick={() => {
                  // alert(ramenresult)
                  // router.push(
                  //   {
                  //   pathname: '/SearchResult',
                  //   query: {
                  //     "ramenType":ramenresult[0],
                  //     "noodleType":ramenresult[1],
                  //     "ramenStyle":ramenresult[2]
                  //    },
                  // },
                  // `/SearchResult`
                  // )
                  // ||가아니라 &&가 and엿구낭 ㅎㅎ
                  if (
                    ramenresult[0] === 0 &&
                    ramenresult[1] === 0 &&
                    ramenresult[2] === 0
                  ) {
                    // alert('최소 하나이상 골라주세요')
                  } else {
                    router.push(
                      {
                        pathname: "/SearchResult",
                        query: {
                          ramenType: ramenresult[0],
                          noodleType: ramenresult[1],
                          ramenStyle: ramenresult[2],
                        },
                      },
                      `/SearchResult`
                    );
                    // masking해서 넘어가는 쿼리 숨기기
                  }
                }}
              >
                <img src="icon/search.png" width={45}></img>
              </div>
              <div
                className="icon"
                onClick={() => {
                  setRamen1(0);
                  setRamen2(0);
                  setRamen3(0);
                  let newArray = [...ramenresult];
                  newArray[0] = 0;
                  newArray[1] = 0;
                  newArray[2] = 0;
                  setRamenresult(newArray);
                }}
              >
                <img src="icon/delete.png" width={45}></img>
              </div>
            </div>
          </Col>
          <Col xs={0} md={3} lg={4}></Col>
        </Row>
        <div className="marginbox"></div>
        {/* <Row>
      <Col></Col>
      <Col><hr></hr></Col>
      <Col></Col>

    </Row> */}
        <Row>
          <Col xs={1} md={3}></Col>

          <Col
            xs={3}
            md={2}
            // style={{ borderRight: "thin solid #000", color: "#D3D3D3" }}
          >
            {/* <div >
    <h5><Badge bg="light" text="dark">
    패키지
  </Badge></h5>
    </div> */}
            <div className="figure">
              {/* classname N오타 */}

              <Figure
                onClick={() => {
                  setRamen1(1);
                  let newArray = [...ramenresult];
                  newArray[0] = 1;
                  setRamenresult(newArray);
                }}
              >
                <Figure.Image
                  width={100}
                  // height={180}
                  alt="171x180"
                  src="icon/bongji.png"
                />
                <Figure.Caption>봉지</Figure.Caption>
              </Figure>
            </div>
            <div className="figure">
              <Figure
                onClick={() => {
                  setRamen1(2);
                  let newArray = [...ramenresult];
                  newArray[0] = 2;
                  setRamenresult(newArray);
                }}
              >
                <Figure.Image
                  width={100}
                  // height={180}
                  alt="171x180"
                  src="icon/cup.png"
                />
                <Figure.Caption>컵</Figure.Caption>
              </Figure>
            </div>
            
            <Tooltip   title={longText} placement="top">
            
            <div className="figure" onClick={() => setModalShow(true)}>
              <Figure
                
              >
                <Figure.Image
                  width={100}
                  // height={180}
                  alt="171x180"
                  src="icon/guide.png"
                />
                <Figure.Caption>이용가이드</Figure.Caption>
              </Figure>
            </div>
      </Tooltip>
      <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        이용가이드
      </Button> */}
      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
      
          </Col>
          <Col
            xs={3}
            md={2}
            // style={{ borderRight: "thin solid #000", color: "#D3D3D3" }}
          >
            {/* <div >
    <h5><Badge bg="light" text="dark">
    면종류
  </Badge></h5>
    </div> */}
            <div className="figure">
              <Figure
                onClick={() => {
                  setRamen2(1);
                  let newArray = [...ramenresult];
                  newArray[1] = 1;
                  setRamenresult(newArray);
                }}
              >
                <Figure.Image
                  width={100}
                  // height={180}
                  alt="171x180"
                  src="icon/dry.png"
                />
                <Figure.Caption>건면</Figure.Caption>
              </Figure>
            </div>
            <div className="figure">
              <Figure
                onClick={() => {
                  setRamen2(2);
                  let newArray = [...ramenresult];
                  newArray[1] = 2;
                  setRamenresult(newArray);
                }}
              >
                <Figure.Image
                  width={100}
                  // height={180}
                  alt="171x180"
                  src="icon/fried.png"
                />
                <Figure.Caption>유탕</Figure.Caption>
              </Figure>
            </div>
            <div className="figure">
              <Figure
                onClick={() => {
                  setRamen2(3);
                  let newArray = [...ramenresult];
                  newArray[1] = 3;
                  setRamenresult(newArray);
                }}
              >
                <Figure.Image
                  width={100}
                  // height={180}
                  alt="171x180"
                  src="icon/real.png"
                />
                <Figure.Caption>생면,숙면</Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col xs={3} md={2}>
            {/* <div >
    <h5><Badge bg="light" text="dark">
    요리종류
  </Badge></h5>
    </div> */}
            <div className="figure">
              <Figure
                onClick={() => {
                  setRamen3(1);
                  let newArray = [...ramenresult];
                  newArray[2] = 1;
                  setRamenresult(newArray);
                }}
              >
                <Figure.Image
                  width={100}
                  // height={180}
                  alt="171x180"
                  src="icon/soup.png"
                />
                <Figure.Caption>국물</Figure.Caption>
              </Figure>
            </div>
            <div className="figure">
              <Figure
                onClick={() => {
                  setRamen3(2);
                  let newArray = [...ramenresult];
                  newArray[2] = 2;
                  setRamenresult(newArray);
                }}
              >
                <Figure.Image
                  width={100}
                  // height={180}
                  alt="171x180"
                  src="icon/bok.png"
                />
                <Figure.Caption>비빔,볶음</Figure.Caption>
              </Figure>
            </div>
            <div className="figure">
              <Figure
                onClick={() => {
                  setRamen3(3);
                  let newArray = [...ramenresult];
                  newArray[2] = 3;
                  setRamenresult(newArray);
                }}
              >
                <Figure.Image
                  width={100}
                  // height={180}
                  alt="171x180"
                  src="icon/jjajang.png"
                />
                <Figure.Caption>짜장</Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col xs={1} md={3}></Col>
        </Row>
      </div>
      <style jsx>{`
        .box {
          margin: 0px;
        }
        .marginbox {
          margin: 40px;
        }
        .figure {
          cursor: pointer;
        }
        .figure:active {
          transform: translateY(4px);
        }
        .iconbox {
          border: 2px solid;
          height: 50px;
          border-radius: 15px;
          box-shadow: 1px 2px;
        }
        .icon {
          float: right;
          cursor: pointer;
          margin-right: 10px;
        }
        .icon:active {
          transform: translateY(2px);
        }
        .sbicon {
          display: inline;
        }
        .boxstyle {
          border: solid;
        }
      `}</style>
    </>
  );
}

function R1(props) {
  // return(
  //   <div>hihi {props.ramen1}</div>
  // )
  if (props.ramen1 === 0) {
    return <div style={{ display: "inline" }}></div>;
  } else if (props.ramen1 === 1) {
    return (
      <div style={{ display: "inline" }}>
        <img src="icon/bongji.png" width={45}></img>
      </div>
    );
  } else if (props.ramen1 === 2) {
    return (
      <div style={{ display: "inline" }}>
        <img src="icon/cup.png" width={45}></img>
      </div>
    );
  }
}
function R2(props) {
  if (props.ramen2 === 0) {
    return <div style={{ display: "inline" }}></div>;
  } else if (props.ramen2 === 1) {
    return (
      <div style={{ display: "inline" }}>
        <img src="icon/dry.png" width={45}></img>
      </div>
    );
  } else if (props.ramen2 === 2) {
    return (
      <div style={{ display: "inline" }}>
        <img src="icon/fried.png" width={45}></img>
      </div>
    );
  } else if (props.ramen2 === 3) {
    return (
      <div style={{ display: "inline" }}>
        <img src="icon/real.png" width={45}></img>
      </div>
    );
  }
}
function R3(props) {
  if (props.ramen3 === 0) {
    return <div style={{ display: "inline" }}></div>;
  } else if (props.ramen3 === 1) {
    return (
      <div style={{ display: "inline" }}>
        <img src="icon/soup.png" width={45}></img>
      </div>
    );
  } else if (props.ramen3 === 2) {
    return (
      <div style={{ display: "inline" }}>
        <img src="icon/bok.png" width={45}></img>
      </div>
    );
  } else if (props.ramen3 === 3) {
    return (
      <div style={{ display: "inline" }}>
        <img src="icon/jjajang.png" width={45}></img>
      </div>
    );
  }
}

