import type { NextPage } from 'next'
import { Container,Row,Col} from 'react-bootstrap';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Home2: NextPage = () => {
  const [search, setSearch] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return <>
  <Container>
  <Row>
    <Col></Col>
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
  <Row>
    <Col>1</Col>
    <Col>2</Col>
    <Col>3</Col>
    <Col>4</Col>

  </Row>
</Container>


  </>
   
  
}

export default Home2
