import type { NextPage } from 'next'
import Image from 'next/image';
import * as React from 'react';
import PieCustom from '../../components/PieCustom';
import RamenTable from '../../components/RamenTable';
import { DataProps } from '../../components/Types';


const Detail: NextPage = () => {
  const [testData, setData] = React.useState<DataProps>({testData:[0, 0, 0, 0, 0, 0]});
  
  React.useEffect( () => {
    setData({testData:[92, 69, 8, 1.3, 4, 1.95]})
  }, [])
  
  return (
    <>
      <div className="detail_page">
        <div className="left_area">
          <section>
            <div className="left_ramenName">
              신라면
            </div>
          </section>
          <section>
            <img src="/logo.png" className="left_ramen_img"/>

          </section>
        </div>

        <div className="right_area">
          <section className="main_section">
            <div className="right_ramenName">
              신라면
            </div>
            <img src="/logo.png" className="right_ramen_img"/>
          </section>

          <section>
            <div className="ramen_infos">
              <div className="ramen_info">
                <div className="ramen_info_title">면 종류</div>
                <div className="ramen_info_detail">건면</div>
              </div>
              <div className="ramen_info">
                <div className="ramen_info_title">라면 타입</div>
                <div className="ramen_info_detail">국물</div>
              </div>
              <div className="ramen_info">
                <div className="ramen_info_title">스프</div>
                <div className="ramen_info_detail">분말</div>
              </div>
              <div className="ramen_info">
                <div className="ramen_info_title">조미유</div>
                <div className="ramen_info_detail">X</div>
              </div>
              <div className="ramen_info">
                <div className="ramen_info_title">Cold</div>
                <div className="ramen_info_detail">X</div>
              </div>
            </div>
          </section>

          <section>
            <div className="pie_area">
              <PieCustom testData={testData}/>
            </div>
          </section>

          <section>
            <RamenTable testData={testData} />
          </section>

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
          @media (min-width: 30rem){
            .detail_page{
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
            .left_area{
              display: flex;
              position: sticky;
              height: 100%;
              top: 2.5rem;
              
            }
          }

          .left_ramen_img{
            width: 100%;
          }

          .right_ramen_img{
            padding-top: 1rem;
            padding-bottom: 1.5rem;
          }

          .right_area {
            display: flex;
            flex-direction: column;
            position: relative;
          }
          @media (min-width: 30rem){
            .right_area {
              width: 31.25rem;
            }
          }
          
          .main_section{
            display: flex;
            flex-direction: column;
          }
          @media (min-width: 60rem){
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
          @media (min-width: 30rem){
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

          .right_ramenName{
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
            margin-bottom: 1rem;

            font-size: 20px;
            transform: translate(-0.0625rem, -0.0625rem);
            box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 15px -3px
          }

          .ramen_infos{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            padding: 0.75rem 0.625rem;
          }
          .ramen_info{
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .ramen_info_title{
            font-size: 0.75rem;
            margin-bottom: 0.0625rem;
            color: var(--colors-gray900);
            opacity: 0.8;
            white-space: nowrap;
          }
          @media (min-width: 30rem)
          .ramen_info_title {
              font-size: 0.8125rem;
              opacity: 0.9;
          }
          .ramen_info_detail{
            font-size: 0.9375rem;
            font-weight: 700;
            margin-bottom: 0.1875rem;
          }
          @media (min-width: 30rem)
          .ramen_info_detail {
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
  )
}

export default Detail