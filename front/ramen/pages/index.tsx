import type { NextPage } from 'next'
import { Container,Row,Col} from 'react-bootstrap';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Ibox from '../components/main/box'
import Lank from '../components/main/Lank'
import Sug from '../components/main/Suggestion'
import Button from '@mui/material/Button';

const Home: NextPage = () => {
  const [search, setSearch] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return <>

  <Container>
  {/* <Row>
    
    <Col></Col>
    <Col>
    
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="검색" id="fullWidth" value={search} onChange={handleChange}/>
      
    </Box>
    
    
    </Col>
    <Col> {search}</Col>
  </Row> */}
 
  <Ibox></Ibox> 
 
   
   

 <Row>
 <Col xs={1} md={2} lg={3}></Col>
 <Col xs={10} md={8} lg={5}><Lank></Lank></Col>
   <Col xs={1} md={2} lg={4}></Col>
 </Row>
 <Row>
 <Col ></Col>
   <Col ><Sug></Sug></Col>
   <Col ><Sug></Sug></Col>
   <Col></Col>
 </Row>
  
</Container>



  </>
   
  
}

export default Home
