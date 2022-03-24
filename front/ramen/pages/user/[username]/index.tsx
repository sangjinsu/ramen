import type { NextPage } from "next";
import Image from "next/image";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCakeCandles,
  faPerson,
  faPencil,
  faBowlFood,
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

const Detail: NextPage = () => {
  const likeRamen = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      author: "@bkristastucchio",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      author: "@helloimnik",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      author: "@nolanissac",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      author: "@hjrc33",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      author: "@tjdragotta",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      author: "@katie_wasserman",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      author: "@silverdalex",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      author: "@shelleypauls",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      author: "@bkristastucchio",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      author: "@helloimnik",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      author: "@nolanissac",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      author: "@hjrc33",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      author: "@tjdragotta",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      author: "@katie_wasserman",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      author: "@silverdalex",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      author: "@shelleypauls",
    },
  ];

  const userTaste = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      author: "@bkristastucchio",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      author: "@helloimnik",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      author: "@bkristastucchio",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      author: "@helloimnik",
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
  const currentRamens = likeRamen.slice(currentPageFirst, currentPageLast); // 0 ~ 8
  const pageNumber = Math.ceil(likeRamen.length / ramenPerPage);

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
              <FontAwesomeIcon icon={faPencil} />
              <p className="font_right">회원정보 수정</p>
            </div>
            <div className="user_info">
              <FontAwesomeIcon icon={faBowlFood} />
              <p className="font_right">선호라면 수정</p>
            </div>
            <div className="user_info">
              <FontAwesomeIcon icon={faUtensils} />
              <p className="font_right">취향 수정</p>
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
                <div className="taste_info_title">면 종류</div>
                <div className="taste_info_detail">건면</div>
              </div>
              <div className="taste_info">
                <div className="taste_info_title">라면 타입</div>
                <div className="taste_info_detail">국물</div>
              </div>
              <div className="taste_info">
                <div className="taste_info_title">스프</div>
                <div className="taste_info_detail">분말</div>
              </div>
              <div className="taste_info">
                <div className="taste_info_title">조미유</div>
                <div className="taste_info_detail">X</div>
              </div>
              <div className="taste_info">
                <div className="taste_info_title">Cold</div>
                <div className="taste_info_detail">X</div>
              </div>
              <div className="taste_info">
                <div className="taste_info_title">맵기</div>
                <div className="taste_info_detail">3</div>
              </div>
            </div>

            <div className="like_infos">
              <ImageList sx={{ width: "100%" }} cols={3} gap={10}>
                {userTaste.map((taste) => (
                  <div className="like_info" key={taste.img}>
                    <ImageListItem>
                      <img
                        src={`${taste.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${taste.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={taste.title}
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
                  <div className="like_info" key={ramen.img}>
                    <ImageListItem>
                      <Link href={`/detail`}>
                        <a className="left_link_area">
                          <img
                            src={`${ramen.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${ramen.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={ramen.title}
                            loading="lazy"
                          />
                        </a>
                      </Link>
                    </ImageListItem>
                    <div className="right_link_area">
                      <ImageListItemBar title={ramen.title} position="below" />
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

export default Detail;
