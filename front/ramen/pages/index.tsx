import type { NextPage } from 'next'
import { Container, Row, Col } from 'react-bootstrap';
import * as React from 'react';
import Ibox from '../components/main/box'
import Lank from '../components/main/Lank'
import Sug from '../components/main/Suggestion'
import axios from 'axios'
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  let [ramen, setRamen] = useState([])


  useEffect(() => {
    axios({
      method: 'get',
      url: `http://j6c104.p.ssafy.io:8081/v1/ranking/ramen`,
    })
      .then((result) => {
        console.log('랭킹요청성공')
        console.log(result.data)
        console.log(result.data[0])
        console.log(result.data[0].ramenId)
        console.log(result.data.length)
        setRamen(result.data)
        // console.log(ramen)

      })
      .catch((error) => {
        console.log('요청실패')
        console.log(error)
      })
  }, [])

  // 시간차 랭킹리스트
  // useEffect(() => {
  //   setTimeout(function () {
  //     axios
  //       .all([axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${idNum[0]}`),
  //       axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${idNum[1]}`),
  //       axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${idNum[2]}`),
  //       axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${idNum[3]}`)])
  //       .then(
  //         axios.spread((res1, res2, res3, res4) => {
  //           console.log(res1, res2, res3, res4)
  //           // console.log(idNum[0])
  //           console.log('시간차리스트요청성공')
  //         }))
  //       .catch((error) => {
  //         console.log('리스트요청실패')
  //         console.log(error)
  //       })
  //   }, 200);
  // }, [])



  return <>
    <Container>
      {/* <h1>테스트출력</h1>
      {ramen[0]
        ? <p>{ramen[0].ramenId}</p>
        : null}
      {ramen.map(function (a, index) {
        return (
          <p key={index}>{a.ramenId}</p>
        )
      })} */}
      <Ibox></Ibox>
      <Row>
        <Col xs={1} md={2} lg={3}></Col>
        <Col xs={10} md={8} lg={5}>
          <Lank ramen={ramen}></Lank>
        </Col>
        <Col xs={1} md={2} lg={4}></Col>
      </Row>
      <Row>
        <Col xs={0} md={2} lg={3}></Col>
        <Col xs={12} md={4} lg={3}><div className='sug'><Sug></Sug></div></Col>
        <Col xs={12} md={4} lg={3}><div className='sug'><Sug></Sug></div></Col>
        <Col xs={0} md={2} lg={3}></Col>
      </Row>
      {/* <div className="test">이거 박스테스트</div> */}
    </Container>
    <style jsx>{`
        .sug{
          margin:10px;
        }
        .test{
          border: 1px solid;
          border-radius: 10px;
        }        
      `}</style>
  </>


}

export default Home
