/* eslint-disable react/prop-types */
import * as React from "react";
import { Table, Card } from "react-bootstrap";
// import default_img from '../../public/ramen/default.png'
// import default_img from 'ramen/default.png'
import Link from "next/link";
import Image from "next/image";
<<<<<<< HEAD
import { useEffect, useState } from "react";

export default function ResultBox(props) {
  let docc = [
    "7가지 채소가득 우리밀라면.png",
    "CJ가쓰오우동 한그릇.png",
    "CJ얼큰우동 한그릇.png",
    "Gamer'z cup 힐러 고기짬뽕.png",
    "NEW 공화춘곱빼기.png",
    "NEW 공화춘자장컵.png",
    "default.png",
    "gomgom호로록매콤라면.png",
    "gomgom호로록짜장라면.png",
    "gomgom호로록짬뽕라면.png",
    "生生(생생)우동.png",
    "간짬뽕.png",
    "감자면큰사발면.png",
    "감자탕큰사발면.png",
    "감자해물맛라면.png",
    "강릉 교동반점 직화짬뽕소컵.png",
    "강릉 교동반점 짬뽕.png",
    "강릉교동반점직화짬뽕.png",
    "공화춘 삼선짬뽕.png",
    "공화춘 삼선짬뽕컵.png",
    "공화춘 아주매운짬뽕.png",
    "공화춘 유산슬라면.png",
    "공화춘삼선짬뽕소컵.png",
    "괄도네넴띤.png",
    "국민비빔면.png",
    "국민컵라면.png",
    "군산불짬뽕컵면.png",
    "굴진짬뽕.png",
    "김치사발면.png",
    "김치왕뚜껑.png",
    "김치찌개면.png",
    "김치큰사발면.png",
    "까르보불닭볶음면.png",
    "꼬꼬면.png",
    "꼬꼬면왕컵.png",
    "꽃게랑면.png",
    "꽃게탕면.png",
    "나가사끼 짬뽕.png",
    "남자라면.png",
    "너구리컵.png",
    "너구리큰사발면.png",
    "농심 스파게티 까르보나라.png",
    "농심감자면.png",
    "뉴트리 라면.png",
    "뉴트리 클로렐라컵면.png",
    "뉴트리김치찌개면.png",
    "뉴트리짜장면.png",
    "대파라면.png",
    "더왕뚜껑컵 순한맛.png",
    "도전! 불닭비빔면.png",
    "돈코츠라멘.png",
    "동원 참치라면.png",
    "된장라면.png",
    "드레싱누들 오리엔탈소스맛.png",
    "라면볶이.png",
    "라면한그릇 얼큰하고 진한 맛.png",
    "랍면.png",
    "마늘면볶이.png",
    "마라탕면.png",
    "맛이차이나짜장면.png",
    "맛있는라면.png",
    "맛짬뽕.png",
    "매운맛 돈코츠라멘.png",
    "메밀비빔면.png",
    "메밀소바.png",
    "멸치칼국수.png",
    "모듬해물탕면.png",
    "무파마탕면.png",
    "무파마탕면큰사발면.png",
    "미고랭 페다스 핫라면.png",
    "미니컵면 시원한해장국맛.png",
    "민생라면컵.png",
    "바지락칼국수.png",
    "백제 김치맛 쌀국수.png",
    "백제 월남맛 쌀국수.png",
    "보글보글부대찌개면.png",
    "보글보글부대찌개컵.png",
    "보글보글부대찌개큰사발면.png",
    "볶음너구리.png",
    "볶음너구리큰사발면.png",
    "본고장 얼큰유부 우동.png",
    "본고장 유부 우동.png",
    "부산매운어묵라면.png",
    "불닭볶음면.png",
    "빅3볶음김치면.png",
    "뽀로로스파게티.png",
    "뽀로로짜장.png",
    "사리곰탕컵.png",
    "사리곰탕큰사발면.png",
    "사천짜파게티.png",
    "사천짜파게티큰사발면.png",
    "삼양 수타면.png",
    "삼양라면 골드.png",
    "삼양라면 매운맛.png",
    "삼양라면.png",
    "삼육 우리밀로만든감자라면컵.png",
    "삼육채식라면(순한맛).png",
    "새우탕컵.png",
    "새우탕큰사발면.png",
    "샘표 바지락칼국수.png",
    "샘표 비빔국수.png",
    "샘표 잔치국수.png",
    "생면식감 매운맛.png",
    "생면식감 순한맛.png",
    "생생 야끼우동 데리야끼맛.png",
    "생생 야끼우동 화끈한맛.png",
    "생생우동 데리야끼맛.png",
    "생생우동 봉지.png",
    "생생우동 화끈한맛.png",
    "세이면 설렁탕.png",
    "속초홍게라면.png",
    "손칼국수.png",
    "송탄 영빈루 짜장.png",
    "쇠고기면.png",
    "쇠고기미역국라면Cup.png",
    "순쌀짜장면.png",
    "순한너구리.png",
    "순한너구리컵.png",
    "순후추라면 매운맛.png",
    "순후추라면 사골곰탕맛.png",
    "쉐푸드 베트남쌀국수.png",
    "스낵면 Cup.png",
    "스낵면 미니컵.png",
    "스낵면.png",
    "시원한 두껍라면.png",
    "식객 오모리 김치찌개라면.png",
    "신라면 블랙컵.png",
    "신라면 큰사발면.png",
    "신라면.png",
    "신라면블랙.png",
    "신라면블랙사발.png",
    "신라면컵.png",
    "아임이 민생라면(봉지).png",
    "아임이 민생짜장.png",
    "안성탕면 컵.png",
    "안성탕면.png",
    "안성탕면컵.png",
    "애터미감자로만든채식라면.png",
    "애터미우리밀감자라면컵.png",
    "애터미착한짜장.png",
    "앵그리너구리.png",
    "앵그리알티에이(RtA)큰사발면.png",
    "앵그리짜파구리큰사발면.png",
    "야채라면.png",
    "얼큰장칼국수.png",
    "얼큰한너구리.png",
    "얼큰한맛 쌀국수.png",
    "열라면Cup.png",
    "열무비빔면.png",
    "오뚜기 리얼치즈라면.png",
    "오뚜기 볶음진짬뽕.png",
    "오뚜기 부대찌개라면.png",
    "오뚜기 북엇국라면.png",
    "오뚜기 새우탕면.png",
    "오뚜기 스파게티.png",
    "오뚜기 열려라참깨라면.png",
    "오뚜기 유부우동.png",
    "오뚜기 진라면 순한맛.png",
    "오뚜기 진짜장.png",
    "오뚜기 진짬뽕.png",
    "오뚜기 참깨라면.png",
    "오뚜기 철판뽀끼.png",
    "오뚜기 크림진짬뽕.png",
    "오뚜기김치라면.png",
    "오뚜기김치면.png",
    "오뚜기쇠고기미역국라면.png",
    "오뚜기열라면.png",
    "오뚜기오동통면.png",
    "오뚜기육개장.png",
    "오뚜기진라면매운맛.png",
    "오뚜기진진짜라.png",
    "오뚜기카레면.png",
    "오라면CUP.png",
    "오징어짬뽕.png",
    "오징어짬뽕컵.png",
    "오징어짬뽕큰사발면.png",
    "올리브짜파게티.png",
    "와사비진짜쫄면.png",
    "완면각 짬뽕.png",
    "왕뚜껑컵.png",
    "요괴라면 국물떡볶이맛.png",
    "요괴라면 크림크림맛.png",
    "요린이의 보글보글 된장라면.png",
    "우리감자로만든감자라면.png",
    "우리밀구쁘컵라면.png",
    "우리쌀로 만든 짬뽕라면.png",
    "우리채소가풍부한짬뽕라면.png",
    "우유라면.png",
    "우육탕큰사발면.png",
    "유부우동Cup.png",
    "유어스틈새라면.png",
    "육개장라면.png",
    "육개장맛 쌀국수.png",
    "육개장사발면.png",
    "육개장칼국수.png",
    "육개장큰사발면.png",
    "이것은 라면이 아니다 시원한 김치찌개라면.png",
    "이마트 육개장컵.png",
    "일월풍면 멸치 쌀국수.png",
    "일품삼선짜장.png",
    "일품해물라면 왕컵.png",
    "일품해물라면.png",
    "일품해물라면컵.png",
    "자연드림라면.png",
    "제주 흑돼지 라면 돗멘.png",
    "제주딱새우라면.png",
    "제주마늘라면.png",
    "제주흑돼지라면컵돗멘.png",
    "준코라면.png",
    "진라면Cup매운맛.png",
    "진라면Cup순한맛.png",
    "진비빔면.png",
    "진짜장 Cup.png",
    "진짜쫄면.png",
    "진짬뽕cup.png",
    "짜라볶이.png",
    "짜왕.png",
    "짜왕매운맛.png",
    "짜왕매운맛큰사발면.png",
    "짜왕큰사발면.png",
    "짜장 불닭볶음면.png",
    "짜장볶이.png",
    "짜짜로니.png",
    "짜파게티범벅.png",
    "짜파게티큰사발면.png",
    "찰비빔면.png",
    "참깨라면 CUP.png",
    "참깨라면 컵.png",
    "참치마요큰사발면.png",
    "청수멸치칼국수.png",
    "청수해물칼국수.png",
    "청양고추라면.png",
    "초마짬뽕.png",
    "춘천막국수.png",
    "치즈게티.png",
    "치즈맛라면.png",
    "치즈볶이.png",
    "치즈볶이CUP.png",
    "치즈불닭볶음면.png",
    "컵 맛있는라면.png",
    "컵 불닭볶음면.png",
    "컵 삼양라면 오리지널.png",
    "컵 삼양라면.png",
    "컵까르보불닭볶음면.png",
    "컵나가사끼짬뽕.png",
    "컵누들 매콤한맛.png",
    "컵누들 우동맛.png",
    "컵누들우동맛.png",
    "콩국수라면.png",
    "콩나물 뚝배기.png",
    "쿡시 멸치맛 쌀국수.png",
    "쿡시 얼큰한 맛 쌀국수.png",
    "크리스피어니언 미고랭.png",
    "큰컵 4가지치즈불닭볶음면.png",
    "큰컵 간짬뽕.png",
    "큰컵 까르보불닭볶음면.png",
    "큰컵 마라탕면.png",
    "큰컵 맛있는라면.png",
    "큰컵 미원라면.png",
    "큰컵 미트스파게티 불닭볶음면.png",
    "큰컵 불닭볶음면.png",
    "큰컵 불닭볶음탕면.png",
    "큰컵 불타는 고추짬뽕.png",
    "큰컵 삼양라면 오리지널.png",
    "큰컵 삼양라면골드.png",
    "큰컵 쇠고기면.png",
    "큰컵 신림동백순대볶음면.png",
    "큰컵 와사마요볶음면.png",
    "큰컵 유부우동.png",
    "큰컵 짜장불닭볶음면.png",
    "큰컵 짜짜로니.png",
    "큰컵 쫄볶이 불닭볶음면.png",
    "큰컵 쯔유간장우동.png",
    "큰컵 치즈불닭볶음면.png",
    "큰컵 커리불닭볶음면.png",
    "큰컵 크림까르보불닭볶음면.png",
    "큰컵 튀김칼국수.png",
    "큰컵나가사끼짬뽕.png",
    "큰컵삼양라면 매운맛.png",
    "탱탱 비빔쫄면.png",
    "탱탱쫄면.png",
    "튀김우동면.png",
    "튀김우동컵.png",
    "튀김우동큰사발면.png",
    "특육개장큰사발면.png",
    "틈새라면 빨계떡컵.png",
    "틈새라면왕컵.png",
    "팔도 mini 우동 왕뚜껑.png",
    "팔도 mini왕뚜껑.png",
    "팔도 가쓰오우동왕뚜껑.png",
    "팔도 더왕뚜껑.png",
    "팔도 도시락.png",
    "팔도 왕뚜껑.png",
    "팔도 짬뽕왕뚜껑.png",
    "팔도 쫄비빔면.png",
    "팔도 참깨라면.png",
    "팔도 틈새라면 볶음면 컵.png",
    "팔도김치도시락.png",
    "팔도라볶이.png",
    "팔도불짬뽕.png",
    "팔도비빔면.png",
    "팔도비빔면컵.png",
    "팔도왕짬뽕.png",
    "팔도짜장면 왕컵.png",
    "팔도짜장면.png",
    "팥칼국수.png",
    "편스토랑 마장면.png",
    "편스토랑 파래탕면.png",
    "해물안성탕면.png",
    "해물짬뽕.png",
    "해장의신 속풀라면.png",
    "핵불닭볶음면.png",
    "홍석천‘S 홍라면 매운치즈볶음면.png",
    "후루룩국수.png",
    "후루룩칼국수.png",
  ];
  let doc = ["hi", "bue"];

  const default_img = "ramen/default.png";
  const handleImage = (e) => {
    e.target.src = default_img;
    console.log(e.target.src);
  };
=======
import { useEffect, useState } from 'react';
import DocData from '../main/data'



export default function ResultBox(props) {
  let docc = DocData
  let doc = ['hi','bue']

  const default_img = 'ramen/default.png'
  const handleImage = (e)=>{
    e.target.src=default_img
    console.log(e.target.src)
  }
>>>>>>> ea71b3494930d8737194e7ccb10f2f3f0ccc987a

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
