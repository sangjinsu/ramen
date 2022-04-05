import * as React from "react";
import { Container,Row, Col, Card, ListGroup } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState,useRef } from "react";
import Link from "next/link";





export default function Suggestion(props) {
  let [ramen, setRamen] = useState([]);
  let titleString = {
    "IBCF추천": "내가 좋아하는 라면과 비슷한",
"UBCF추천": "같은 취향의 사용자가 좋아하는",
"DBRC추천": "AI가 추천해주는"
  }
  const default_img = "ramen/default.png";
  const handleImage = (e) => {
    e.target.src = default_img;
    // console.log(e.target.src);
  };
  useEffect(() => {
    if (props.sug === "ubcf") {
      axios
        .get(`http://j6c104.p.ssafy.io:8084/v1/recommend/ubcf/${props.id}`)
        .then((result) => {
          console.log("ubcf요청성공");
          console.log(result);
          // console.log(result.data);
          // console.log(result.data[0]);
          setRamen(result.data);
        })
        .catch((error) => {
          console.log("ubcf요청실패");
          console.log(error);
        });
    }
  }, []);
  useEffect(() => {
    if (props.sug === "dbrc") {
      axios
        .get(`http://j6c104.p.ssafy.io:8084/v1/recommend/dbrc/${props.id}`)
        .then((result) => {
          console.log("dbrc요청성공");
          console.log(result);
          // console.log(result.data);
          // console.log(result.data[0]);
          setRamen(result.data);
        })
        .catch((error) => {
          console.log("dbrc요청실패");
          console.log(error);
        });
    }
  }, []);
  useEffect(() => {
    if (props.sug === "ibcf") {
      axios
        .get(`http://j6c104.p.ssafy.io:8084/v1/recommend/ibcf/${props.id}`)
        .then((result) => {
          console.log("ibcf요청성공");
          console.log(result);
          // console.log(result.data);
          // console.log(result.data[0]);
          setRamen(result.data);
        })
        .catch((error) => {
          console.log("ibcf요청실패");
          console.log(error);
        });
    }
  }, []);
  return (
    <>

    

      {/* {props.title} */}
      <hr></hr>
      <h3>{titleString[props.title]}</h3>
      <ListGroup>
        {/* {ramen.length !==0
    ? <p>{ramen.length}</p>
    : <p>0이 아닙니다.{ramen.length}</p>
    } */}
        {ramen.length !== 0 ? (
          <>
            <ListGroup.Item>
              {/* <img src="icon/number1.png" width={25}></img>
               */}1위
              <Link href={`/ramen/${Object.keys(ramen)[0]}`}>
              
                <a><img
                            src={`ramen/${Object.values(ramen)[0]}.png`}
                            width={45}    
                            onError={handleImage}                      
                          ></img>
                  {Object.values(ramen)[0]}</a>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              2위
              <Link href={`/ramen/${Object.keys(ramen)[1]}`}>
                <a><img
                            src={`ramen/${Object.values(ramen)[1]}.png`}
                            width={45}   
                            onError={handleImage}                       
                          ></img>
                  {Object.values(ramen)[1]}</a>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              3위
              <Link href={`/ramen/${Object.keys(ramen)[2]}`}>
                <a><img
                            src={`ramen/${Object.values(ramen)[2]}.png`}
                            width={45}  
                            onError={handleImage}                        
                          ></img>
                  {Object.values(ramen)[2]}</a>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              4위
              <Link href={`/ramen/${Object.keys(ramen)[3]}`}>
                <a><img
                            src={`ramen/${Object.values(ramen)[3]}.png`}
                            width={45}  
                            onError={handleImage}                        
                          ></img>
                  {Object.values(ramen)[3]}</a>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              5위
              <Link href={`/ramen/${Object.keys(ramen)[4]}`}>
                <a><img
                            src={`ramen/${Object.values(ramen)[4]}.png`}
                            width={45}  
                            onError={handleImage}                        
                          ></img>
                  {Object.values(ramen)[4]}</a>
              </Link>
            </ListGroup.Item>
          </>
        ) : (
          <>
            <ListGroup.Item>
              로그인 후 이용해 주세요
            </ListGroup.Item>

          </>
        )}
      </ListGroup>

      <style jsx>{`
        a {
          color: black;
          text-decoration-line: none;
        }
        img{
          margin-left:10px;
        }
        

      `}</style>
    </>
  );
}
