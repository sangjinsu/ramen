import axios from "axios";
import { getCookie } from "cookies-next";
import type { NextPage } from "next";
import { useRouter } from "next/router";
// import Image from "next/image";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PieCustom from "../../components/PieCustom";
import RamenTable from "../../components/RamenTable";
import SimilarRamen from "../../components/SimilarRamen";
import {
  DataProps,
  RamenDetailType,
  SimilarRamenType,
} from "../../components/Types";
import Youtube from "../../components/Youtube";
import { Container, Row, Col } from "react-bootstrap";
import Heart from "../../components/Heart";

const memberId = getCookie("member_id");

const Detail: React.FC<RamenDetailType> = ({
  params,
  ramenInfos,
  similarityRamen,
}) => {
  // const [similarityRamen, setsimilarityRamen] = useState<SimilarRamenType>();
  console.log(ramenInfos);
  const router = useRouter();

  const barChartData: DataProps = {
    data: [
      ramenInfos.kcal,
      ramenInfos.carbs,
      ramenInfos.protein,
      ramenInfos.lipid,
      ramenInfos.sugar,
      ramenInfos.sodium,
    ],
  };

  const pieChartData: DataProps = {
    data: [ramenInfos.carbs, ramenInfos.protein, ramenInfos.lipid],
  };

  useEffect(() => {
    const numParams = Number(params);
    if (numParams < 0 || 487 < numParams) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    const logSend = async () => {
      if (memberId) {
        await axios.post(`http://j6c104.p.ssafy.io.:8080/v1/log`, {
          logDto: {
            memberId: memberId,
            ramenId: params,
          },
        });
        await axios.get(
          `http://j6c104.p.ssafy.io.:8081/v1/ranking/view/${params}/${memberId}`,
          {}
        );
      } else {
        await axios.get(
          `http://j6c104.p.ssafy.io.:8081/v1/ranking/view/${params}`,
          {}
        );
      }
    };
    logSend();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <div className="detail_page">
            <div className="left_area">
              <section>
                <div className="left_ramenName">{ramenInfos.name}</div>
              </section>
              <section>
                <img
                  src={`/ramen/${ramenInfos.name}.png?w=248&fit=crop&auto=format`}
                  className="left_ramen_img"
                />
              </section>
              <section className="left_area_btn">
                <Heart params={params} />
                <div>좋아요</div>
              </section>
            </div>

            <div className="right_area">
              <Col xs={0} md={0} lg={0}></Col>
              <Col xs={12} md={12} lg={12}>
                <section className="main_section">
                  <div className="right_ramenName">
                    {ramenInfos.name}
                    <Heart params={params} />
                  </div>
                  <div className="right_ramen_img_area">
                    <img
                      src={`/ramen/${ramenInfos.name}.png?w=248&fit=crop&auto=format`}
                      className="right_ramen_img"
                    />
                  </div>
                </section>

                <section>
                  <div className="ramen_infos">
                    <div className="ramen_info">
                      <div className="ramen_info_title">면 종류</div>
                      <div className="ramen_info_detail">
                        {ramenInfos.noodle}
                      </div>
                    </div>
                    <div className="ramen_info">
                      <div className="ramen_info_title">라면 타입</div>
                      <div className="ramen_info_detail">
                        {ramenInfos.soup ? "국물" : "비빔"}
                      </div>
                    </div>
                    <div className="ramen_info">
                      <div className="ramen_info_title">스프</div>
                      <div className="ramen_info_detail">
                        {ramenInfos.powder ? "분말" : "액상"}
                      </div>
                    </div>
                    <div className="ramen_info">
                      <div className="ramen_info_title">조미유</div>
                      <div className="ramen_info_detail">
                        {ramenInfos.seasoning ? "O" : "X"}
                      </div>
                    </div>
                    <div className="ramen_info">
                      <div className="ramen_info_title">Cold</div>
                      <div className="ramen_info_detail">
                        {ramenInfos.cold ? "O" : "X"}
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="pie_area">
                    <PieCustom pieChartData={pieChartData} />
                  </div>
                </section>

                {barChartData.data[0] && (
                  <section>
                    <RamenTable barChartData={barChartData} />
                  </section>
                )}

                <section>
                  <SimilarRamen
                    similarityRamen={similarityRamen}
                  ></SimilarRamen>
                </section>

                <section>
                  <Youtube searchTitle={ramenInfos.name}></Youtube>
                </section>
              </Col>
              <Col xs={0} md={12} lg={0}></Col>
            </div>
          </div>
        </Row>
      </Container>

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

          .left_ramen_img {
            width: 100%;
          }

          .left_area_btn {
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .right_ramen_img_area {
            display: flex;
            justify-content: center;
          }

          .right_ramen_img {
            width: 70%;
            padding-top: 1rem;
            padding-bottom: 1.5rem;
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

          .left_ramenName {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 1rem;
          }

          .right_ramenName {
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
            margin-bottom: 1rem;

            font-size: 20px;
            transform: translate(-0.0625rem, -0.0625rem);
            box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 15px -3px;
          }

          .ramen_infos {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            padding: 0.75rem 0.625rem;
          }
          .ramen_info {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .ramen_info_title {
            font-size: 0.75rem;
            margin-bottom: 0.0625rem;
            color: var(--colors-gray900);
            opacity: 0.8;
            white-space: nowrap;
          }
          @media (min-width: 30rem) .ramen_info_title {
            font-size: 0.8125rem;
            opacity: 0.9;
          }
          .ramen_info_detail {
            font-size: 0.9375rem;
            font-weight: 700;
            margin-bottom: 0.1875rem;
          }
          @media (min-width: 30rem) .ramen_info_detail {
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

export async function getServerSideProps({ params: { params } }) {
  try {
    const { data: ramenInfos } = await axios.get(
      `http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${params}`
    );

    const { data: fetchSimilarity } = await axios.get(
      `http://j6c104.p.ssafy.io.:8084/v1/recommend/similarity/${params}`
    );
    const ramenKeys: string[] = Object.keys(fetchSimilarity);
    const similarityRamen: SimilarRamenType = {
      first: {
        id: ramenKeys[0],
        name: fetchSimilarity[ramenKeys[0]].name,
        salty: fetchSimilarity[ramenKeys[0]].salty,
        sweetness: fetchSimilarity[ramenKeys[0]].sweetness,
      },
      second: {
        id: ramenKeys[1],
        name: fetchSimilarity[ramenKeys[1]].name,
        salty: fetchSimilarity[ramenKeys[1]].salty,
        sweetness: fetchSimilarity[ramenKeys[1]].sweetness,
      },
      third: {
        id: ramenKeys[2],
        name: fetchSimilarity[ramenKeys[2]].name,
        salty: fetchSimilarity[ramenKeys[2]].salty,
        sweetness: fetchSimilarity[ramenKeys[2]].sweetness,
      },
      origin: {
        salty: ramenInfos.salty,
        sweetness: ramenInfos.sweetness,
      },
    };
    return {
      props: {
        params,
        ramenInfos,
        similarityRamen,
      },
    };
  } catch {
    const ramenInfos = {
      brand: "no data",
      carbs: 0,
      cholesterol: 0,
      code: "no data",
      cold: 0,
      cup: 0,
      englishBrand: "no data",
      englishName: "no data",
      jjajang: 0,
      kcal: 0,
      lipid: 0,
      liquid: 0,
      name: "no data",
      noodle: "no data",
      powder: 0,
      protein: 0,
      ramenId: 0,
      salty: 0,
      sampleId: "no data",
      saturated_fat: 0,
      seasoning: 0,
      sodium: 0,
      soup: 0,
      sugar: 0,
      surveyYear: 0,
      sweetness: 0,
      transFat: 0,
      volume: 0,
    };
    const similarityRamen: SimilarRamenType = {
      first: {
        id: "no data",
        name: "no data",
        salty: 0,
        sweetness: 0,
      },
      second: {
        id: "no data",
        name: "no data",
        salty: 0,
        sweetness: 0,
      },
      third: {
        id: "no data",
        name: "no data",
        salty: 0,
        sweetness: 0,
      },
      origin: {
        salty: 0,
        sweetness: 0,
      },
    };
    return {
      props: {
        params,
        ramenInfos,
        similarityRamen,
      },
    };
  }
}

export default Detail;
