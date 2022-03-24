import type { NextPage } from 'next'
import { Container,Row,Col} from 'react-bootstrap';
import ResultBox from '../components/search/ResultBox'
import { useRouter } from "next/router";



const Search: NextPage = () => {
  let name= ['진라면 매운맛','잔라면 순한맛','짜파게티']
  let image = ['j.jpg','j2.jpg','jja.jpg']
  const {query} = useRouter()


  return <>
  <Row>
    <Col xs={2} md={2}></Col>
    <Col xs={8} md={8}>
    <h1>검색결과</h1>
    <p>{query.ramenType}</p>
      <p>{query.noodleType}</p>
      <p>{query.ramenStyle}</p>

      {
        name.map(function(n,i){
          return(
            <ResultBox key = {i} name={n} image={image[i]}></ResultBox>
          )
        })
      }
{/*       
      <ResultBox name={name[0]} image={image[0]}></ResultBox>
    <ResultBox name={name[0]} image={image[0]}></ResultBox>
    <ResultBox name={name[0]} image={image[0]}></ResultBox> */}
    
    </Col>
    <Col xs={2} md={2}></Col>

  </Row>


  </>
   
  
}

export default Search
