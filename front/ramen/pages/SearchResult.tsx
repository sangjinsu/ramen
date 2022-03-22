import type { NextPage } from 'next'
import { Container,Row,Col} from 'react-bootstrap';
import ResultBox from '../components/search/ResultBox'

const Search: NextPage = () => {
  let name= ['진라면 매운맛','잔라면 순한맛','짜파게티']
  let image = ['j.jpg','j2.jpg','jja.jpg']

  return <>
  <Row>
    <Col xs={2} md={2}></Col>
    <Col xs={8} md={8}>
    <h1>검색결과</h1>

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
