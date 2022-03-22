import { Figure} from 'react-bootstrap';
import { Container,Row,Col} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

export default function Layout(){
  // 여기다가 변수로 저장한다음 어케어케 하면 될거같은데 말이지 ㅇㅇ..
// on/off 로다가 ㅇㅇ 추가하면 되겟네 ㅇㅇ true false그거로 3개를 만들면 되겠다. ㅇㅇ
// on/off 혹은 경우의 수에 따라 ㅇㅇ 하도록하쟈 여튼 ㅅㄱ. 
let [ramen1,setRamen1] = useState(0)
let [ramen2,setRamen2] = useState(0)
let [ramen3,setRamen3] = useState(0)
let [ramenresult,setRamenresult] = useState([])
// 1,2,3,4,5,6,7,8
  return <>
    <div className="box">
    <Row>
      <Col></Col>
      <Col>    <div className="iconbox">
        <R1 ramen1={ramen1}></R1>
        <R2 ramen2={ramen2}></R2>
        <R3 ramen3={ramen3}></R3>
        {/* 순서가 왜바뀌는지는 모르지만 서치랑,리셋버튼바뀜 */}
        <div className="icon" ><img src="search.png" width={45}></img></div>
        <div className="icon" onClick={()=>{setRamen1(0);setRamen2(0);setRamen3(0)
        }}><img src="reset.png" width={45}></img></div>
      </div>
      

</Col>
      <Col></Col>

    </Row>
  <Row>
    <Col xs={3} md={3}></Col>
    <Col xs={2} md={2}>  
    <div className="figure">
      {/* classname N오타 */}
    
<Figure onClick={()=>{setRamen1(1)}}>
  <Figure.Image 
    width={100}
    // height={180}
    alt="171x180"
    src="icon/bongji.png"
  />
  <Figure.Caption>
    봉지라면
  </Figure.Caption>
</Figure>

    
    </div>
    <div className="figure">
    <Figure onClick={()=>{setRamen1(2)}}>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/cup.png"
  />
  <Figure.Caption>
    컵라면
  </Figure.Caption>
</Figure>
    </div>
    </Col>
    <Col xs={2} md={2}>
      <div className="figure"><Figure onClick={()=>{setRamen2(1)}}>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/dry.png"
  />
  <Figure.Caption>
    건면
  </Figure.Caption>
</Figure></div>  
      <div className="figure"><Figure onClick={()=>{setRamen2(2)}}>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/fried.png"
  />
  <Figure.Caption>
    유탕면
  </Figure.Caption>
</Figure></div>  
      <div className="figure"><Figure onClick={()=>{setRamen2(3)}}>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/real.png"
  />
  <Figure.Caption>
    생면,숙면
  </Figure.Caption>
</Figure></div>  

    


    </Col>
    <Col xs={2} md={2}>  
    <div className="figure"><Figure onClick={()=>{setRamen3(1)}}>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/soup.png"
  />
  <Figure.Caption>
    국물
  </Figure.Caption>
</Figure></div>
    <div className="figure"><Figure onClick={()=>{setRamen3(2)}}>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/bok.png"
  />
  <Figure.Caption>
    비빔,볶음면
  </Figure.Caption>
</Figure></div>
    <div className="figure">
<Figure>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/jjajang.png"
  />
  <Figure.Caption>
    짜장라면
  </Figure.Caption>
</Figure></div>


    

    </Col>
    <Col></Col>
  </Row>
  </div>
  <style jsx>{`
        .box {
          margin:20px;
          
        }
        .figure{
          cursor: pointer;

        }
        .figure:active{
          transform: translateY(4px);
        }
        .iconbox {
          border: 1px solid;
          height: 50px;
          

        }
        .icon{
          float:right;
          cursor: pointer;

        }
        .icon:active{
          transform: translateY(2px);
        }
        .sbicon{
          display:inline;
        }

        
      `}</style>
  </>
}

function R1(props){
  
  // return(
  //   <div>hihi {props.ramen1}</div>
  // )
  if(props.ramen1===0){
    return <div style={{display:"inline"}}></div>
  }else if(props.ramen1===1){
    return <div style={{display:"inline"}}><img src="icon/bongji.png" width={45}></img></div>
  }else if(props.ramen1===2){
    return <div style={{display:"inline"}}><img src="icon/cup.png" width={45}></img></div>
  }
}
function R2(props){

  if(props.ramen2===0){
    return <div style={{display:"inline"}}></div>
  }else if(props.ramen2===1){
    return <div style={{display:"inline"}}><img src="icon/dry.png" width={45}></img></div>
  }else if(props.ramen2===2){
    return <div style={{display:"inline"}}><img src="icon/fried.png" width={45}></img></div>
  }
  else if(props.ramen2===3){
    return <div style={{display:"inline"}}><img src="icon/real.png" width={45}></img></div>
  }
}
function R3(props){

  if(props.ramen3===0){
    return <div style={{display:"inline"}}></div>
  }else if(props.ramen3===1){
    return <div style={{display:"inline"}}><img src="icon/soup.png" width={45}></img></div>
  }else if(props.ramen3===2){
    return <div style={{display:"inline"}}><img src="icon/bok.png" width={45}></img></div>
  }
  else if(props.ramen3===2){
    return <div style={{display:"inline"}}><img src="icon/jjajang.png" width={45}></img></div>
  }
}