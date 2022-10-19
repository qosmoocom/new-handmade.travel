import React, {useEffect, useState, useRef} from "react";
import styled from 'styled-components'
import BlocksOneCity from './blocks-one-city'

const Section = styled.div`
  .panel {
    padding : 20px 50px;
    margin-bottom : 20px;
  }
  .blocks {
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between; 
    margin-top : 20px;
  }

  .blocks-title{
    font-size : 30px;
    fonr-weight : 600;
  }
`
const Blocks = ({data, id, title}) => {
  
    //   const [home, setHome] = useState(homeRu)
  
  useEffect(() => {
    // axios.get("/api/tour/home").then((res) => {
    //   setTours(res.data);
    // });
  }, []);

  return (
    <Section>
        <div className="panel" id={id}>
            <div className="blocks-title">{title}</div>
            <div className="blocks">
                {data.map((item,index) => {
                    return (
                        <BlocksOneCity item={item} key={index}/>
                    )
                })}
            </div>
            
        </div>
    </Section>
  )
}

export default Blocks;