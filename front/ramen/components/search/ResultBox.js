/* eslint-disable react/prop-types */
import * as React from "react";
import { Table, Card } from "react-bootstrap";
// import default_img from '../../public/ramen/default.png'
// import default_img from 'ramen/default.png'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import DocData from "../main/data";

export default function ResultBox(props) {
  let docc = DocData;
  let doc = ["hi", "bue"];

  const default_img = "ramen/default.png";
  const handleImage = (e) => {
    e.target.src = default_img;
    // console.log(e.target.src);
  };

  return (
    <>
      <div>
        {/* {doc[0]}
     {doc[1]}
     {
       docc.includes("hi")
       ?<p>있어</p>
       :<p>없어</p>
     } */}
        {/* <div className='pic'><img src={props.image} width={200}></img></div> */}
        {/* <img src={default_img}></img> */}
        {/* <img src='ramen/default.png'></img>
     <img src='../../public/ramen/default.png'></img> */}
        {/* {default_img} */}
        {/* {props.image} */}
        {/* {props.ramenName} */}
        {/* {
       docc.includes(`${props.ramenName}`)
       ?<p>있어</p>
       :<p>없어</p>
     } */}
        {/* <Link href={`/ramen/${props.id}`}> */}
        {/* {props.ramenName} */}
        {docc.includes(`${props.ramenName}`) ? (
          <Link href={`/ramen/${props.id}`}>
            <div className="explain">
              <img
                src={props.image}
                onError={handleImage}
                width={150}
                alt="제품이미지"
              ></img>
            </div>
          </Link>
        ) : (
          <Link href={`/ramen/${props.id}`}>
            <div className="explain">
              <img
                src="ramen/default.png"
                onError={handleImage}
                width={150}
                alt="제품이미지"
              ></img>
            </div>
          </Link>
        )}

        {/* <div className='explain'><img src={props.image} onError={handleImage} width={150} alt="제품이미지"></img></div> */}
        {/* <Link href={`/ramen/${props.id}`}>
       <a>이동하기</a>
     </Link> */}
        {/* props.image값 not null체크 */}
        {/* </Link> */}
        {/* <div className='explain'><img src={props.image} onError={handleImage} width={150} alt="제품이미지"></img></div> */}
        {/* <Link href={`/ramen/${props.id}`}>
       <a className="link">링크</a>
     </Link> */}

        <div className="pic">
          <Card style={{ width: "" }}>
            <Card.Body>
              <Card.Title>제품명 : {props.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                제조사 : {props.brand}
              </Card.Subtitle>
              {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
            </Card.Body>
          </Card>
        </div>

        {/* <div className='explain'>제품명: {props.name} /</div>
     <div className='explain'> 제조사: {props.brand}</div> */}

        <hr></hr>
      </div>
      <style jsx>{`
        .pic {
          display: inline;
        }
        .explain {
          display: inline;
          cursor: pointer;
        }
        .link {
          color: black;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
