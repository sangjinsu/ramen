import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser } from '@fortawesome/free-solid-svg-icons'

const Home: NextPage = () => {
  return <>
  <h1>index2페이지</h1>
  <FontAwesomeIcon icon={faCoffee} />
  <FontAwesomeIcon icon={faUser} />
  <h2>test</h2>

  </>
   
  
}

export default Home
