import type { NextPage } from 'next'
import { Container,Row,Col} from 'react-bootstrap';
import ResultBox from '../components/search/ResultBox'
import { useRouter } from "next/router";
import axios from 'axios'
import { useEffect, useState } from 'react';


const Search: NextPage = () => {
  let name= ['진라면 매운맛','잔라면 순한맛','짜파게티']
  let image = ['j.jpg','j2.jpg','jja.jpg']
  const {query} = useRouter()
  // let [q,Setq] = useState([query.ramenType,query.noodleType,query.ramenStyle])
  let [array,setArray] = useState([])
  let toto = []


   useEffect(()=>{
     axios({
      method:'post',
      url:'http://j6c104.p.ssafy.io:8080/v1/ramen/category',
      data: {
        noodleType: query.noodleType,
        ramenStyle: query.ramenStyle,
        ramenType: query.ramenType,
      },
    })
    .then((result)=>{console.log('요청성공')
    console.log(result)
    // console.log(result.data)
    // console.log('------여기부터출력------')
    // let temp = []
    // temp.push(...result.data)
    setArray(result.data)
    // console.log(array)
    // console.log('여긴 안나오지만 밑에 삼항연산자에는 나옴')


  })
    .catch((error)=>{console.log('요청실패')
    console.log(error)  
  })

  },[])
 


  return <>
  {/* <button onClick={()=>{
  axios({
    method:'post',
    url:'http://j6c104.p.ssafy.io:8080/v1/ramen/category',
    data: {
      noodleType: 1,
      ramenStyle: 1,
      ramenType: 1,
    },
  })
  .then((result)=>{console.log('요청성공')
console.log(result)
console.log(result.data[0])

console.log(result.data[0].name)
setArray(result.data)
console.log('-----어레[이=--')
console.log(array)
console.log(array[0])
console.log(array[0].name)


})
  .catch((error)=>{console.log('요청실패')
  console.log(error)

})
}}>클릭3</button> */}
  <Row>
    <Col xs={2} md={2}></Col>
    <Col xs={8} md={8}>
    <h1>카테고리결과</h1> 
{
  array.length ===0
  ?null
  :(
    array.map(function(a,index){
      return (
        <ResultBox key = {index} name={a.name} brand={a.brand}></ResultBox>
        // <p>{index} {a.name}</p>
        // 아니 배열+1개까지뜨다가지금은 왜 되냐..?
      )
    })
  )
}
  
      {/* {
        name.map(function(n,i){
          return(
            <ResultBox key = {i} name={n} image={image[i]}></ResultBox>
          )
        })
      }   */}
    </Col>
    <Col xs={2} md={2}></Col>

  </Row>


  </>
   
  
}

export default Search

// function ListResult(props:any){
  
  
//   if(props.array.length ===0){
//     return <div>없음</div>
//   } else{
//     for(let i=0;i<props.array.length-1;i++){
//       return <div>{props.array[i].name}</div>
//     }
//     // return <div>{props.array[0].name}</div>

//   }

// }
