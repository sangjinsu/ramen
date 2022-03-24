import type { NextPage } from 'next'
import Image from 'next/image';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Link from 'next/link';


const RamentList: NextPage = () => {
  // 임시데이터
  const ramenData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
  ];

  const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    console.log(value)
  };

  const ramenPerPage = 8; // 페이지당 라면 개수
  const currentPageLast = currentPage * ramenPerPage; // 현재 페이지의 처음
  const currentPageFirst = currentPageLast -ramenPerPage; /// 현재 페이지의 끝
  const currentRamens = ramenData.slice(currentPageFirst, currentPageLast); // 0 ~ 8
  const pageNumber = Math.ceil(ramenData.length / ramenPerPage);
  // const imageListheight = currentRamens.length <= 4 ? 350 : 550; // 현재 페이지 갯수에 따른 높이 조정

  

  return (
    <div className="img_list">
      <ImageList sx={{ width: "100%" }} cols={4} gap={10}>
        {currentRamens.map((ramen) => (
          <ImageListItem key={ramen.img}>
            <img
              src={`${ramen.img}?w=248&fit=crop&auto=format`}
              srcSet={`${ramen.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={ramen.title}
              loading="lazy"
            />
            <Link href={`/ramen/${1}`}>
              <ImageListItemBar
                title={ramen.title}
                position="below"
              />
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
        
      <div className="page_list">

      <Stack spacing={2} >
        <Pagination count={pageNumber} shape="rounded" onChange={handleChange}/>
      </Stack>
      </div>

      <style jsx>
        {`
          .img_list{
            margin: 3rem auto;
            width: 80%;
          }
          .page_list{
            margin-left: 0;
          }
        `}
      </style>
    </div>
  );
}

export default RamentList