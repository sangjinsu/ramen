import type { NextPage } from 'next'
import { Container,Row,Col} from 'react-bootstrap';
import axios from 'axios'
import { useState } from 'react';

const Test: NextPage = () => {

  let [data,setData] = useState([]);

  return <>
<h1>axios테스트</h1>
{/* {data} */}
<button onClick={()=>{
  axios.get('https://codingapple1.github.io/shop/data2.json')
  .then((result)=>{console.log('요청성공')
console.log(result)
console.log(result.data)
console.log(result.data[0])

})
  .catch((error)=>{console.log('요청실패')
  console.log(error)

})
}}>클릭</button>

{/* 예제코드 */}
{/* axios.post( 'url', 
  { 
   contact: 'Sewon', 
   email: 'sewon@gmail.com' 
   }, 
  { 
   headers:{ 
    'Content-type': 'application/json', 
    'Accept': 'application/json' 
      } 
    } 
) 
  .then((response) => { console.log(response.data); }) 
  .catch((response) => { console.log('Error!) }); */}

  </>
   
  
}

export default Test
