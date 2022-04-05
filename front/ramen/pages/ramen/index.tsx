import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import axios from "axios";
import { RamenListType } from "../../components/Types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Row, Col } from "react-bootstrap";
import DocDataDictionary from "../../components/main/dataDictionary";

// 컴포넌트화
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// 여기까지

const RamentList: React.FC<RamenListType> = ({
  AllList,
  bongiList,
  cupList,
}) => {
  console.log(AllList);
  console.log(bongiList);
  console.log(cupList);

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
    console.log(value);
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

  console.log("test", currentRamens);
  const pageNumber = Math.ceil(currentRamenType.length / ramenPerPage);
  // const imageListheight = currentRamens.length <= 4 ? 350 : 550; // 현재 페이지 갯수에 따른 높이 조정
  return (
    <>
      <div className="img_list_page">
        <div className="img_list">
          <Box sx={{ width: "100%" }}>
            <TabPanel value={value} index={0}>
              <Container>
                <Row>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={tabHandleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label={"All"} {...a11yProps(0)} />
                      <Tab label={"Bongi"} {...a11yProps(1)} />
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
                                    src={`/ramen/${ramen.name}.png`}
                                    srcSet={`/ramen/${ramen.name}.png`}
                                    alt={ramen.name}
                                    loading="lazy"
                                  />
                                ) : (
                                  <img src={"/ramen/default.png"} />
                                )}
                              </a>
                            </Link>
                            <h4
                              style={{ "font-family": ["Jua", "sans-serif"] }}
                            >
                              {ramen.name}
                            </h4>
                          </Col>
                        );
                      })}
                    </Row>
                  );
                })}
              </Container>
            </TabPanel>
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
