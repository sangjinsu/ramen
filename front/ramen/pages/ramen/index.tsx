import type { NextPage } from "next";
import Image from "next/image";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import axios from "axios";
import { RamenListType } from "../../components/Types";

const RamentList: React.FC<RamenListType> = ({
  AllList,
  bongiList,
  cupList,
}) => {
  console.log(AllList);
  console.log(bongiList);
  console.log(cupList);

  const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    console.log(value);
  };

  const ramenPerPage = 8; // 페이지당 라면 개수
  const currentPageLast = currentPage * ramenPerPage; // 현재 페이지의 처음
  const currentPageFirst = currentPageLast - ramenPerPage; /// 현재 페이지의 끝
  const currentRamens = AllList.slice(currentPageFirst, currentPageLast); // 0 ~ 8
  const pageNumber = Math.ceil(AllList.length / ramenPerPage);
  // const imageListheight = currentRamens.length <= 4 ? 350 : 550; // 현재 페이지 갯수에 따른 높이 조정

  return (
    <>
      <div className="img_list_page">
        <div className="img_list">
          <ImageList sx={{ width: "100%" }} cols={4} gap={10}>
            {currentRamens.map((ramen) => (
              <ImageListItem key={ramen.ramenId}>
                <div className="test">
                  <Link href={`/ramen/${ramen.ramenId}`}>
                    <a>
                      <img
                        src={`/ramen/${ramen.name}.png?w=248&fit=crop&auto=format`}
                        srcSet={`/ramen/${ramen.name}.png?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={ramen.name}
                        loading="lazy"
                      />
                      <ImageListItemBar title={ramen.name} position="below" />
                    </a>
                  </Link>
                </div>
              </ImageListItem>
            ))}
          </ImageList>
        </div>

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
      <style jsx>
        {`
          .img_list_page {
            margin: 3rem auto;
            width: 80%;
            display: flex;
            flex-direction: column;
          }
          a {
            text-decoration: none;
            color: black;
          }
          .img_list {
            display: flex;
            justify-content: center;
          }
          img {
            width: 70%;
          }
          .test {
            width: 50%;
          }
          .page_list {
            margin-left: 0;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export async function getServerSideProps() {
  const { data: bongiList } = await axios.get(
    `http://j6c104.p.ssafy.io:8080/v1/ramen/list/bongji`
  );
  const { data: cupList } = await axios.get(
    `http://j6c104.p.ssafy.io:8080/v1/ramen/list/cup`
  );
  const AllList = [...bongiList, ...cupList];
  return {
    props: {
      AllList,
      bongiList,
      cupList,
    },
  };
}

export default RamentList;
