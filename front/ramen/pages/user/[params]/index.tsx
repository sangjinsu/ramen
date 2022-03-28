import type { NextPage } from "next";
import Image from "next/image";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCakeCandles,
  faPerson,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Pagination,
  Stack,
} from "@mui/material";
import Link from "next/link";

const Detail: NextPage = ({ params, fonds }) => {
  const [likeRamens, setLikeRamens] = React.useState([]);
  const eatFond = [
    fonds.noodleLength,
    fonds.noodleTexture,
    fonds.egg,
    fonds.spicy,
  ];
  const toppingFonds = fonds.toppingNone
    ? ["없음"]
    : [
        fonds.toppingCheese ? "치즈" : false,
        fonds.toppingDumpling ? "만두" : false,
        fonds.toppingTteok ? "떡" : false,
      ].filter((fond) => fond !== false);
  const ingredientFonds = fonds.ingredientNone
    ? ["없음"]
    : [
        fonds.ingredientGarlic ? "마늘" : false,
        fonds.ingredientGreenOnion ? "파" : false,
        fonds.ingredientPepper ? "고추" : false,
      ].filter((fond) => fond !== false);

  console.log(ingredientFonds);
  console.log(toppingFonds);

  const likeRamen = [
    {
      img: "간짬뽕",
      name: "간짬뽕",
      ramenId: "1",
    },
    {
      img: "감자면큰사발면",
      name: "감자면큰사발면",
      ramenId: "2",
    },
    {
      img: "7가지 채소가득 우리밀라면",
      name: "7가지 채소가득 우리밀라면",
      ramenId: "3",
    },
    {
      img: "강릉 교동반점 직화짬뽕소컵",
      name: "강릉 교동반점 직화짬뽕소컵",
      ramenId: "4",
    },
    {
      img: "까르보불닭볶음면",
      name: "까르보불닭볶음면",
      ramenId: "5",
    },
    {
      img: "꽃게탕면",
      name: "꽃게탕면",
      ramenId: "6",
    },
  ];

  const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    console.log(value);
  };

  const ramenPerPage = 3; // 페이지당 라면 개수
  const currentPageLast = currentPage * ramenPerPage; // 현재 페이지의 처음
  const currentPageFirst = currentPageLast - ramenPerPage; /// 현재 페이지의 끝
  const currentRamens = likeRamens.slice(currentPageFirst, currentPageLast); // 0 ~ 8
  const pageNumber = Math.ceil(likeRamens.length / ramenPerPage);

  React.useEffect(() => {
    const userLikeData = async () => {
      // const { data: likeRamenList } = await axios.get(
      //   `http://j6c104.p.ssafy.io:8080/v1/membmer/${params}/like`
      // );
      // const userLikeList = likeRamenList.map((ramen) => [
      //   ramen.ramenId,
      //   ramen.ramen.name,
      // ]);
      const test = likeRamen.map((test) => [test.img, test.name, test.ramenId]);
      console.log(test);
      setLikeRamens(test);
    };
    userLikeData();
  }, []);

  // React.useEffect(() => {
  //   const userfondData = async () => {
  //     // const { data: fondList } = await axios.get(
  //     //   `http://j6c104.p.ssafy.io:8080/v1/membmer/${1}/fond`
  //     // );
  //     const test = {
  //       egg: "완숙",
  //       ingredientGarlic: true,
  //       ingredientGreenOnion: true,
  //       ingredientNone: false,
  //       ingredientPepper: true,
  //       noodleLength: "4등분",
  //       noodleTexture: "꼬들",
  //       spicy: "조금 맵게",
  //       toppingCheese: true,
  //       toppingDumpling: true,
  //       toppingNone: false,
  //       toppingTteok: true,
  //     };
  //     setLikeRamens(fondList);
  //   };
  //   userfondData();
  // }, []);

  return (
    <>
      <div className="detail_page">
        <div className="left_area">
          <section>
            <div className="left_user_name">
              <FontAwesomeIcon icon={faUser} />
              <p className="font_right">김동일</p>
            </div>
          </section>
          <section>
            <div className="user_info">
              <FontAwesomeIcon icon={faCakeCandles} />
              <p className="font_right">25</p>
            </div>
            <div className="user_info">
              <FontAwesomeIcon icon={faPerson} />
              <p className="font_right">남자</p>
            </div>
          </section>
          <section>
            <div className="user_info">
              <Link href={`/user/${params}/preferenceupdate`}>
                <a className="fond_update">
                  <FontAwesomeIcon icon={faUtensils} />
                  <p className="font_right">취향 수정</p>
                </a>
              </Link>
            </div>
          </section>
        </div>

        <div className="right_area">
          <section className="main_section">
            <div className="right_user_name">김동일</div>
          </section>

          <section>
            <div className="section_title">라면 취향</div>

            <div className="taste_infos">
              <div className="taste_info">
                <div className="taste_info_title">면 크기</div>
                <div className="taste_info_detail">{eatFond[0]}</div>
              </div>
              <div className="taste_info">
                <div className="taste_info_title">면의 식감</div>
                <div className="taste_info_detail">{eatFond[1]}</div>
              </div>
              <div className="taste_info">
                <div className="taste_info_title">계란</div>
                <div className="taste_info_detail">{eatFond[2]}</div>
              </div>
              <div className="taste_info">
                <div className="taste_info_title">맵기</div>
                <div className="taste_info_detail">{eatFond[3]}</div>
              </div>
            </div>

            <div className="like_infos">
              <ImageList sx={{ width: "100%" }} cols={2} gap={10}>
                {eatFond.map((eat) => (
                  <div className="like_info" key={eat}>
                    <ImageListItem>
                      <img
                        src={`/topping/${eat}.jpg?w=248&fit=crop&auto=format`}
                        srcSet={`/topping/${eat}.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={eat}
                        loading="lazy"
                      />
                    </ImageListItem>
                  </div>
                ))}
              </ImageList>
            </div>

            <div className="taste_infos">
              <div className="taste_info">
                <div className="taste_info_title">토핑</div>
                <div className="taste_info_detail topping_info">
                  {toppingFonds.map(function (topping, i) {
                    return <p key={i}>{topping}</p>;
                  })}
                </div>
              </div>
              <div className="taste_info">
                <div className="taste_info_title">국물 재료</div>
                <div className="taste_info_detail topping_info">
                  {ingredientFonds.map(function (ingredientFond, i) {
                    return <p key={i}>{ingredientFond}</p>;
                  })}
                </div>
              </div>
            </div>

            <div className="like_infos">
              <ImageList sx={{ width: "100%" }} cols={3} gap={10}>
                {toppingFonds.map((topping) => (
                  <div className="like_info" key={topping}>
                    <ImageListItem>
                      <img
                        src={`/topping/${topping}.jpg?w=248&fit=crop&auto=format`}
                        srcSet={`/topping/${topping}.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={topping}
                        loading="lazy"
                      />
                    </ImageListItem>
                  </div>
                ))}
              </ImageList>
              <ImageList sx={{ width: "100%" }} cols={3} gap={10}>
                {ingredientFonds.map((ingredient) => (
                  <div className="like_info" key={ingredient}>
                    <ImageListItem>
                      <img
                        src={`/topping/${ingredient}.jpg?w=248&fit=crop&auto=format`}
                        srcSet={`/topping/${ingredient}.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={ingredient}
                        loading="lazy"
                      />
                    </ImageListItem>
                  </div>
                ))}
              </ImageList>
            </div>
          </section>

          <section>
            <div className="section_title">좋아요 목록</div>
            <div className="like_infos">
              <ImageList sx={{ width: "100%" }} cols={1} gap={10}>
                {currentRamens.map((ramen) => (
                  <div className="like_info" key={ramen[0]}>
                    <ImageListItem>
                      <Link href={`/ramen/${ramen[2]}`}>
                        <a className="left_link_area">
                          <img
                            src={`/ramen/${ramen[0]}.png?w=248&fit=crop&auto=format`}
                            srcSet={`/ramen/${ramen[0]}.png?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={ramen[1]}
                            loading="lazy"
                          />
                        </a>
                      </Link>
                    </ImageListItem>
                    <div className="right_link_area">
                      <ImageListItemBar title={ramen[1]} position="below" />
                      <div>하트 놔둘 곳</div>
                    </div>
                  </div>
                ))}
              </ImageList>
              <div className="page_list">
                <Stack spacing={2}>
                  <Pagination
                    count={pageNumber}
                    shape="rounded"
                    onChange={handleChange}
                  />
                </Stack>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>
        {`
          .detail_page {
            display: flex;
            flex-direction: row;
            justify-content: center;
            background: #f3f4f5;
            height: max-content;
            width: 100vw;
          }
          @media (min-width: 30rem) {
            .detail_page {
              background: #ffffff;
              padding-top: 2.5rem;
              padding-bottom: 2.5rem;
            }
          }

          .left_area {
            display: none;
            flex-direction: column;
            width: 15rem;
            margin-right: 5rem;
          }
          @media (min-width: 60rem) {
            .left_area {
              display: flex;
              position: sticky;
              height: 100%;
              top: 2.5rem;
            }
          }

          .font_right {
            margin-left: 0.5rem;
          }

          .user_info {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 1rem;
            border-left: 0.25rem solid transparent;
            flex: 1 1 0%;
            height: 3.25rem;
          }
          .fond_update {
            display: flex;
            flex-direction: row;
            align-items: center;
            color: black;
            text-decoration: none;
          }

          .right_area {
            display: flex;
            flex-direction: column;
            position: relative;
          }
          @media (min-width: 30rem) {
            .right_area {
              width: 31.25rem;
            }
          }

          .main_section {
            display: flex;
            flex-direction: column;
          }
          @media (min-width: 60rem) {
            .main_section {
              display: none;
            }
          }

          section {
            background: #ffffff;
            width: 100%;
            overflow: hidden;
            flex-shrink: 0;
            box-shadow: rgb(0 0 0 / 2%) -0.0625rem 0.0625rem 0.0625rem;
            margin-bottom: 0.5625rem;
          }
          @media (min-width: 30rem) {
            section {
              margin-bottom: 1.375rem;
              border-radius: 0.75rem;
              border: 0.0625rem solid #dedede;
              box-shadow: #dedede;
            }
          }

          .left_user_name {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 1rem;
          }

          .right_user_name {
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            font-size: 20px;
            transform: translate(-0.0625rem, -0.0625rem);
            box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 15px -3px;
          }

          .section_title {
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: 1rem;
            margin-top: 1rem;
            margin-bottom: 1rem;

            font-size: 20px;
            transform: translate(-0.0625rem, -0.0625rem);
            box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 15px -3px;
          }

          .like_infos {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            padding: 0.75rem 0.625rem;
          }
          .like_info {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .left_link_area {
            margin: 0.75rem 0.625rem;
          }
          .right_link_area {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .taste_infos {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            padding: 0.75rem 0.625rem;
          }
          .taste_info {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .taste_info_title {
            font-size: 0.75rem;
            margin-bottom: 0.0625rem;
            color: var(--colors-gray900);
            opacity: 0.8;
            white-space: nowrap;
          }
          @media (min-width: 30rem) .taste_info_title {
            font-size: 0.8125rem;
            opacity: 0.9;
          }
          .taste_info_detail {
            font-size: 0.9375rem;
            font-weight: 700;
            margin-bottom: 0.1875rem;
          }
          @media (min-width: 30rem) .taste_info_detail {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
          }
          .topping_info {
            display: flex;
            flex-direction: row;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            vertical-align: baseline;
            -webkit-tap-highlight-color: transparent;
          }
        `}
      </style>
    </>
  );
};

export async function getServerSideProps({ params: { params } }) {
  // const { data: fondList } = await axios.get(
  //   `http://j6c104.p.ssafy.io:8080/v1/membmer/${params}/fond`
  // );
  const fonds = {
    egg: "완숙",
    ingredientGarlic: true,
    ingredientGreenOnion: true,
    ingredientNone: false,
    ingredientPepper: true,
    noodleLength: "4개로 분리",
    noodleTexture: "쫄깃하게",
    spicy: "1단계",
    toppingCheese: true,
    toppingDumpling: true,
    toppingNone: false,
    toppingTteok: true,
  };
  return {
    props: {
      params,
      fonds,
    },
  };
}

export default Detail;
