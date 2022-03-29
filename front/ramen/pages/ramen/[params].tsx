import axios from "axios";
import type { NextPage } from "next";
// import Image from "next/image";
// import { useRouter } from "next/router";
import React, { useState } from "react";
import PieCustom from "../../components/PieCustom";
import RamenTable from "../../components/RamenTable";
import { DataProps, RamenDetailType } from "../../components/Types";

const Detail: React.FC<RamenDetailType> = ({
  params,
  ramenInfos,
  userLikeBoolean,
}) => {
  console.log(ramenInfos);
  // const dynamicValue = router.query.detail;
  // console.log(dynamicValue);

  const [likeCheck, setLike] = useState<boolean>(userLikeBoolean);

  const likeChange = () => {
    // const
    setLike(!likeCheck);
  };

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

  return (
    <>
      <div className="detail_page">
        <div className="left_area">
          <section>
            <div className="left_ramenName">{ramenInfos.name}</div>
          </section>
          <section>
            <img src="/logo.png" className="left_ramen_img" />
          </section>
          <section className="left_area_btn">
            <label className="like">
              <input type="checkbox" checked={likeCheck} onClick={likeChange} />
              <div className="hearth" />
            </label>
            <div>좋아요</div>
          </section>
        </div>

        <div className="right_area">
          <section className="main_section">
            <div className="right_ramenName">
              {ramenInfos.name}
              <label className="like">
                <input
                  type="checkbox"
                  checked={likeCheck}
                  onClick={likeChange}
                />
                <div className="hearth" />
              </label>
            </div>
            <img src="/logo.png" className="right_ramen_img" />
          </section>

          <section>
            <div className="ramen_infos">
              <div className="ramen_info">
                <div className="ramen_info_title">면 종류</div>
                <div className="ramen_info_detail">{ramenInfos.noodle}</div>
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
            <p>유사한 라면 보여줄 공간!</p>
            <p>유사한 라면 보여줄 공간!</p>
            <p>유사한 라면 보여줄 공간!</p>
          </section>

          <section>
            <p>유튜브!!</p>
            <p>유튜브!!</p>
            <p>유튜브!!</p>
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

          .left_ramen_img {
            width: 100%;
          }

          .left_area_btn {
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .right_ramen_img {
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

          // 하트효과
          input {
            display: none;
          }

          .like {
            display: block;
            cursor: pointer;
            border-radius: 999px;
            overflow: visible;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
          }

          .hearth {
            background-image: url("/heartEffect.svg");
            background-size: calc(50px * 62) 50px;
            background-repeat: no-repeat;
            background-position-x: calc(50px * (62 * -1 + 2));
            background-position-y: calc(50px * 0.02);
            width: 50px;
            height: 50px;
          }

          input:checked + .hearth {
            animation: like 1s steps(calc(62 - 3));
            animation-fill-mode: forwards;
          }

          @keyframes like {
            0% {
              background-position-x: 0;
            }
            100% {
              background-position-x: calc(50px * (62 * -1 + 3));
            }
          }
        `}
      </style>
    </>
  );
};

export async function getServerSideProps({ params: { params } }) {
  const { data: ramenInfos } = await axios.get(
    `http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${params}`
  );
  // login 구현되면 주석해제
  // const { status: userLikeStatus } = await axios.get(
  //   `http://j6c104.p.ssafy.io:8080/v1/ramen/islike/${params}/${1}`
  // );
  // const userLikeBoolean =
  // 200 <= userLikeStatus && userLikeStatus < 300 ? true : false;
  const userLikeBoolean = true;
  return {
    props: {
      params,
      ramenInfos,
      userLikeBoolean,
    },
  };
}

export default Detail;
