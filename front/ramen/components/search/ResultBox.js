/* eslint-disable react/prop-types */
import * as React from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";
import DocDataDictionary from "../main/dataDictionary";

const docDictionary = DocDataDictionary;

export default function ResultBox(props) {
  const default_img = "ramen/default.png";
  const handleImage = (e) => {
    e.target.src = default_img;
    console.log(e.target.src);
  };

  return (
    <>
      <div>
        {docDictionary[`${props.ramenName}`] ? (
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

        <div className="pic">
          <Card style={{ width: "" }}>
            <Card.Body>
              <Card.Title>제품명 : {props.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                제조사 : {props.brand}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>

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
