import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import axios from "axios";
import { RamenListType } from "../../components/Types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container, Row, Col } from "react-bootstrap";
import DocDataDictionary from "../../components/main/dataDictionary";
import { TabPanel1, a11yProps } from "../../components/TabComponent";

const RamentList: React.FC<RamenListType> = ({
  AllList,
  bongiList,
  cupList,
}) => {
  const [currentRamenType, setRamenType] = React.useState(AllList);

  const [value, setValue] = React.useState(0);

  const tabHandleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentPage(1);
    const firstPage = document.getElementsByClassName(
      "MuiPaginationItem-root"
    )[1];
    (firstPage as HTMLButtonElement).click();
    const id = (event.target as HTMLButtonElement).id;
    if (id === "simple-tab-0") {
      setRamenType(AllList);
    } else if (id === "simple-tab-1") {
      setRamenType(bongiList);
    } else if (id === "simple-tab-2") {
      setRamenType(cupList);
    }
    setValue(newValue);
  };

  const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const ramenPerPage = 12; // 페이지당 라면 개수
  const ramenRowCount = 4;
  // const currentPageLast = currentPage * ramenPerPage; // 현재 페이지의 처음
  const currentPageFirst = currentPage * ramenPerPage - ramenPerPage; /// 현재 페이지의 끝
  const currentRamens = [
    currentRamenType.slice(currentPageFirst, currentPageFirst + ramenRowCount),
    currentRamenType.slice(
      currentPageFirst + ramenRowCount,
      currentPageFirst + ramenRowCount * 2
    ),
    currentRamenType.slice(
      currentPageFirst + ramenRowCount * 2,
      currentPageFirst + ramenRowCount * 3
    ),
  ]; // 0 ~ 8

  const pageNumber = Math.ceil(currentRamenType.length / ramenPerPage);
  // const imageListheight = currentRamens.length <= 4 ? 350 : 550; // 현재 페이지 갯수에 따른 높이 조정
  return (
    <>
      <div className="img_list_page">
        <div className="img_list">
          <Box sx={{ width: "100%" }}>
            <TabPanel1 value={value} index={0}>
              <Container>
                <Row>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={tabHandleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label={"All"} {...a11yProps(0)} />
                      <Tab label={"Bongji"} {...a11yProps(1)} />
                      <Tab label={"Cup"} {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                </Row>
                {currentRamens.map((tempRamenList, idxList) => {
                  return (
                    <Row key={idxList}>
                      {currentRamens[idxList].map((ramen, idxRamen) => {
                        return (
                          <Col sm={3} key={idxRamen}>
                            <Link href={`/ramen/${ramen.ramenId}`}>
                              <a>
                                {DocDataDictionary[`${ramen.name}.png`] ? (
                                  <img
                                    style={{ width: "100%" }}
                                    src={`/ramen/${ramen.name}.png`}
                                    alt={ramen.name}
                                    loading="lazy"
                                  />
                                ) : (
                                  <img src={"/ramen/default.png"} />
                                )}
                                <h4
                                  style={{
                                    fontFamily: "Jua, sans-serif",
                                    textAlign: "center",
                                  }}
                                >
                                  {ramen.name}
                                </h4>
                              </a>
                            </Link>
                          </Col>
                        );
                      })}
                    </Row>
                  );
                })}
              </Container>
            </TabPanel1>
          </Box>
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
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .test1 {
            display: inline;
            justify-content: center;
          }
          .test1 div {
            display: inline;
            color: blue;
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
    `http://j6c104.p.ssafy.io:8888/v1/ramen/list/bongji`
  );
  const { data: cupList } = await axios.get(
    `http://j6c104.p.ssafy.io:8888/v1/ramen/list/cup`
  );
  const { data: AllList } = await axios.get(
    `http://j6c104.p.ssafy.io:8888/v1/ramen/list/all`
  );
  return {
    props: {
      AllList,
      bongiList,
      cupList,
    },
  };
}

export default RamentList;
