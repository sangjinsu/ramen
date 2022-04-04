/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import type { NextPage } from "next";
import Image from "next/image";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCakeCandles,
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
import { userPageType } from "../../../components/Types";
import withAuth from "../../../components/hoc/withAuth";
import { getCookie, setCookies } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/router";
import Heart from "../../../components/Heart";
import serverURLDoc from "../../../components/main/ServerURL";
import { Container, Row, Col } from "react-bootstrap";
import ramenPngDoc from "../../../components/main/data";
import WcIcon from "@mui/icons-material/Wc";

const AUTH_URL = serverURLDoc.AUTH_URL;
const accessToken = getCookie("accessToken");
const name = getCookie("name");
const age = getCookie("age");
const gender = getCookie("gender");
const member_id = getCookie("member_id");

const Detail: React.FC<userPageType> = ({ params, fonds }) => {
  const ramenPngs = ramenPngDoc;
  const [likeRamens, setLikeRamens] = React.useState([]);
  const fondTitle = ["면의 길이", "면의 식감", "계란", "맵기"];
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

  const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const ramenPerPage = 3; // 페이지당 라면 개수
  const currentPageLast = currentPage * ramenPerPage; // 현재 페이지의 처음
  const currentPageFirst = currentPageLast - ramenPerPage; /// 현재 페이지의 끝
  const currentRamens = likeRamens.slice(currentPageFirst, currentPageLast); // 0 ~ 8
  const pageNumber = Math.ceil(likeRamens.length / ramenPerPage);

  const router = useRouter();
  const [accessToken, setAccessToken] = React.useState(
    getCookie("accessToken")
  );
  const refreshToken = getCookie("refreshToken");

  const checkTokenValid = () => {
    if (!accessToken) {
      router.replace("/login");
    } else {
      axios
        .get(`${AUTH_URL}/check-jwt`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .catch(function (error) {
          console.log("accessToken 만료");
          if (error.response.status === 401) {
            axios
              .get(`${AUTH_URL}/refresh`, {
                headers: {
                  Authorization: `Bearer ${refreshToken}`,
                },
              })
              .then(function (response) {
                setCookies("accessToken", response.data.accessToken);
                setAccessToken(response.data.accessToken);
              })
              .catch(function (error) {
                router.replace("/login");
              });
          }
        });
    }
  };

  React.useEffect(() => {
    if (member_id !== params) {
      alert("잘못된 접근입니다");
      router.push("/");
    }
  }, []);

  React.useEffect(() => {
    const userLikeData = async () => {
      try {
        const accessToken = getCookie("accessToken");
        const { data: likeRamenList } = await axios.get(
          `http://j6c104.p.ssafy.io:8080/v1/member/${params}/like`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const userLikeList = likeRamenList.map((ramen) => [
          ramen.name,
          ramen.ramenId,
        ]);
        setLikeRamens(userLikeList);
      } catch {
        router.push("/");
      }
    };
    userLikeData();
  }, []);

  return (
    <>
      <div className="detail_page">
        <div className="left_area">
          <section>
            <div className="left_user_name">
              <FontAwesomeIcon icon={faUser} />
              <p className="font_left">{name}</p>
            </div>
          </section>
          <section>
            <div className="user_info">
              <FontAwesomeIcon icon={faCakeCandles} />
              <p className="font_left">{age}</p>
            </div>
            <div className="user_info">
              <WcIcon />
              <p className="font_left">{gender}</p>
            </div>
          </section>
          <section>
            <div className="user_info">
              <Link
                href={{
                  pathname: `/user/${params}/preferenceupdate`,
                  query: fonds,
                }}
                as={`/user/${params}/preferenceupdate`}
              >
                <a className="fond_update">
                  <FontAwesomeIcon icon={faUtensils} />
                  <p className="font_left">취향 수정</p>
                </a>
              </Link>
            </div>
          </section>
        </div>

        <div className="right_area">
          <section className="main_section">
            <div className="right_user_info">
              <FontAwesomeIcon icon={faUser} />
              <p>{name}</p>
            </div>

            <div className="right_user_info">
              <FontAwesomeIcon icon={faCakeCandles} />
              <p>{age}</p>
            </div>

            <div className="right_user_info">
              <WcIcon />
              <p>{gender}</p>
            </div>

            <div>
              <Link
                href={{
                  pathname: `/user/${params}/preferenceupdate`,
                  query: fonds,
                }}
                as={`/user/${params}/preferenceupdate`}
              >
                <a className="fond_update right_user_info">
                  <FontAwesomeIcon icon={faUtensils} />
                  <p className="font_left">취향 수정</p>
                </a>
              </Link>
            </div>
          </section>

          <section>
            <div className="section_title">라면 취향</div>
            <div className="taste_infos">
              <Container>
                <Row>
                  {fondTitle.map((title, idxTitle) => {
                    return (
                      <Col sm={3} key={idxTitle}>
                        <div className="taste_info">
                          <div className="taste_info_title">
                            {fondTitle[idxTitle]}
                          </div>
                          <div className="taste_info_detail">
                            {eatFond[idxTitle]}
                          </div>
                        </div>
                        <img
                          style={{ width: "100%" }}
                          src={`/topping/${eatFond[idxTitle]}.jpg`}
                          srcSet={`/topping/${eatFond[idxTitle]}.jpg`}
                          loading="lazy"
                        />
                      </Col>
                    );
                  })}
                </Row>

                <Row>
                  <Col>
                    <div className="taste_info">
                      <div className="taste_info_title">토핑</div>
                    </div>
                  </Col>
                </Row>
                {toppingFonds[0] === "없음" ? (
                  <Row className="justify-content-md-center">
                    <Col sm={3}>
                      <p style={{ textAlign: "center" }}>안 넣음</p>
                      <img
                        src={`/topping/안 넣음.jpg`}
                        style={{ width: "100%", height: "70%" }}
                      />
                    </Col>
                  </Row>
                ) : (
                  <Row className="justify-content-md-center">
                    {toppingFonds.map(function (topping, idxTopping) {
                      return (
                        <Col key={idxTopping} sm={3}>
                          <p style={{ textAlign: "center" }}>{topping}</p>
                          <img
                            src={`/topping/${topping}.jpg`}
                            style={{ width: "100%" }}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                )}
                <Row>
                  <Col>
                    <div className="taste_info">
                      <div className="taste_info_title">국물 재료</div>
                    </div>
                  </Col>
                </Row>
                {ingredientFonds[0] === "없음" ? (
                  <Row className="justify-content-md-center">
                    <Col sm={3}>
                      <p style={{ textAlign: "center" }}>안 넣음</p>
                      <img
                        src={`/topping/안 넣음.jpg`}
                        style={{ width: "100%" }}
                      />
                    </Col>
                  </Row>
                ) : (
                  <Row className="justify-content-md-center">
                    {ingredientFonds.map(function (ingredient, idxIngredient) {
                      return (
                        <Col key={idxIngredient} sm={3}>
                          <p style={{ textAlign: "center" }}>{ingredient}</p>
                          <img
                            src={`/topping/${ingredient}.jpg`}
                            style={{ width: "100%", height: "70%" }}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                )}
              </Container>
            </div>
          </section>

          <section>
            <div className="section_title">좋아요 목록</div>
            <div className="like_infos">
              <ImageList sx={{ width: "100%" }} cols={1} gap={10}>
                {currentRamens.map((ramen) => (
                  <div className="like_info" key={ramen[0]}>
                    <ImageListItem>
                      <Link href={`/ramen/${ramen[1]}`}>
                        <a className="left_link_area">
                          {ramenPngs.includes(`${ramen[0]}.png`) ? (
                            <img
                              width={150}
                              height={150}
                              src={`/ramen/${ramen[0]}.png`}
                              srcSet={`/ramen/${ramen[0]}.png`}
                              alt={ramen[0]}
                              loading="lazy"
                            />
                          ) : (
                            <img width={150} src={`/ramen/default.png`}></img>
                          )}
                        </a>
                      </Link>
                    </ImageListItem>
                    <div className="right_link_area">
                      <ImageListItemBar title={ramen[0]} position="below" />
                      <Heart params={ramen[1]} />
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

          .font_left {
            margin-left: 0.5rem;
            margin-top: 0.2rem;
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
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            padding: 0.75rem 0.625rem;
          }
          @media (min-width: 60rem) {
            .main_section {
              display: none;
            }
          }
          .right_user_info {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 0.5rem;
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
            margin-top: 1.3rem;
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
            justify-content: center;
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
  try {
    const { data: fonds } = await axios.get(
      `http://j6c104.p.ssafy.io:8080/v1/member/${params}/fond`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return {
      props: {
        params,
        fonds,
      },
    };
  } catch {
    const fonds = {
      egg: false,
      ingredientGarlic: false,
      ingredientGreenOnion: false,
      ingredientNone: false,
      ingredientPepper: false,
      noodleLength: "no data",
      noodleTexture: "no data",
      spicy: "no data",
      toppingCheese: false,
      toppingDumpling: false,
      toppingNone: false,
      toppingTteok: false,
    };
    return {
      props: {
        params,
        fonds,
      },
    };
  }
}

export default Detail;
