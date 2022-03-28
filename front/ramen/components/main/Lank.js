import * as React from 'react';
import { Container,Row,Col,ListGroup} from 'react-bootstrap';
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Lank() {
  
  const [ramen, setRamen] = useState([1,2,3,4,5])
  const [rank,setRank] = useState([])
  // 5개있다고 가정하고 우선제작
  // useEffect(()=>{
  //   axios.get('http://j6c104.p.ssafy.io:8081/v1/ranking/ramen')
  //   .then((result)=>{console.log('랭킹요청성공')
  // console.log(result)
  // // console.log(result.data)
  // // console.log(result.data[0])
  
  // })
  //   .catch((error)=>{console.log('요청실패')
  //   console.log(error)
  
  // })
  // },[])


  // 랭킹에 있는 라면들 상세페이지 정보로 가져오기
  useEffect(() => {
    axios
    .all([axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${ramen[0]}`)
    ,axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${ramen[1]}`)
  ,axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${ramen[2]}`)
,axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${ramen[3]}`)
,axios.get(`http://j6c104.p.ssafy.io:8080/v1/ramen/detail/${ramen[4]}`)])
    .then(
      axios.spread((result1,result2,result3,result4,result5)=>{
        console.log(result1,result2,result3,result4,result5)
        let tmp = []
        tmp.push(result1.data)
        tmp.push(result2.data)
        tmp.push(result3.data)
        tmp.push(result4.data)
        tmp.push(result5.data)
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