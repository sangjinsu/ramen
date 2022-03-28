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
        console.log(result)
        console.log('==========')

        setRamen(result.data)
        console.log(ramen)
        // setArray(result.data)
      })
      .catch((error) => {
        console.log('요청실패')
        console.log(error)
      })

  }, [])



  return <>
    <Container>
      {/* {id} */}
      {ramen.map(function (a, index) {
        return (
          <p key={index}>{a.ramenId}</p>
        )
      })}
      {/* {ramen[0].ramenId} */}
      <Ibox></Ibox>
      <Row>
        <Col xs={1} md={2} lg={3}></Col>
        <Col xs={10} md={8} lg={5}><Lank></Lank></Col>
        <Col xs={1} md={2} lg={4}></Col>
      </Row>
      <Row>
        <Col xs={0} md={2} lg={3}></Col>
        <Col xs={12} md={4} lg={3}><div className='sug'><Sug></Sug></div></Col>
        <Col xs={12} md={4} lg={3}><div className='sug'><Sug></Sug></div></Col>
        <Col xs={0} md={2} lg={3}></Col>
      </Row>

    </Container>

    <style jsx>{`
        .sug{
          margin:10px;
        }
        

        
      `}</style>


  </>


}

export default Home
