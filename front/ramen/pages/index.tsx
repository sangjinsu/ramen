import type { NextPage } from 'next'
import { Container,Row,Col} from 'react-bootstrap';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Ibox from '../components/main/box'

const Home: NextPage = () => {
  const [search, setSearch] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return <>
  <Container>
  <Row>
    <Col><h1>index1</h1></Col>
    <Col><Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="검색" id="fullWidth" value={search} onChange={handleChange}/>
    </Box></Col>
    <Col>{search}</Col>
  </Row>
 <Ibox></Ibox>
  
</Container>


  </>
   
  
}

export default Home
