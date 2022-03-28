import * as React from 'react';
import { Container,Row,Col,ListGroup} from 'react-bootstrap';
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Lank(props) {
  
  // let [ramen, setRamen] = useState([])
  // let test = []
  let [rank,setRank] = useState([])

  // useEffect( () => {
  //    axios({
  //     method: 'get',
  //     url: `http://j6c104.p.ssafy.io:8081/v1/ranking/ramen`,
  //   })
  //     .then((result) => {
  //       console.log('랭킹요청성공')
  //       console.log(result)
  //       test.push(...result.data)
  //       console.log('==========')
  //       console.log(test)
  //       console.log(test[0])
  //       console.log(test[0].ramenId)
  //       console.log('==========')
  //       setRamen(result.data)
  //       console.log(ramen)
  //       // setArray(result.data)
  //     })
  //     .catch((error) => {
  //       console.log('요청실패')
  //       console.log(error)
  //     })

  // }, [])
  // useEffect(()=>{
  //   console.log('=======1,2,3,4출력')
  //   console.log(test)
  //   console.log(test[0])
  //   console.log(test[1])
  //   console.log(test[2])
  //   console.log(test[3])

  //       // console.log(test[0].ramenId)
  // },[])

  // 랭킹에 있는 라면들 상세페이지 정보로 가져오기
  useEffect( () => {
     axios
    .all([axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/9`)
    ,axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/4`)
  ,axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/2`)
,axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/30`)
])
    .then(
      axios.spread((result1,result2,result3,result4)=>{
        console.log(result1,result2,result3,result4)
        let tmp = []
        tmp.push(result1.data)
        tmp.push(result2.data)
        tmp.push(result3.data)
        tmp.push(result4.data)
        console.log('------라멘아이디출력---')
        console.log(props.ramen)
        // console.log(ramen)
        
        console.log(tmp)
        setRank(tmp)
      })

    )
    .catch((error)=>console.log(error))
    // axios({
    //   method: 'get',
    //   url: `http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${ramen[0]}`,

    // })
    //   .then((result) => {
    //     console.log('요청성공')
    //     console.log(result)
    //     console.log(result.data)
    //   })
    //   .catch((error) => {
    //     console.log('요청실패')
    //     console.log(error)
    //   })
  }, [])

 
  return <>
    {/* {rank[0].name}
    {rank[1].name} */}
    {/* {rank.map(function (a, index) {
            return (
              <p key={index}>{a.name}</p>
            )
          })} */}

    <div className='list'>
    <ListGroup>
      <h3><img src="icon/ranking.png" width={50}></img> 라면랭킹</h3>
      {/* {
        ramen.map(function(a,index){
          return <p>{a.ramenId}</p>
        })
      } */}
      {rank.map(function (a, index) {
            return (
              <ListGroup.Item key={index}>{index+1}위 {a.name} ({a.brand})</ListGroup.Item>
              // <p key={index}>{a.name}</p>
            )
          })}
    {/* <ListGroup.Item>1위 신라면 (농심)</ListGroup.Item>
    <ListGroup.Item>2위 진라면 매운맛(오뚜기)</ListGroup.Item>
    <ListGroup.Item>3위 열라면 (오뚜기)</ListGroup.Item>
    <ListGroup.Item>4위 팔도비빔면 (팔도)</ListGroup.Item>
    <ListGroup.Item>5위 틈새라면 (팔도)</ListGroup.Item> */}
  </ListGroup>
    </div>
    
  <style jsx>{`
       .list{
         margin:20px;
       }
        
      `}</style>
  </>
}