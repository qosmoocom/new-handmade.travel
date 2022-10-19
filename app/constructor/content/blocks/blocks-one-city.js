import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import BlockItem from './block-item'

const Section = styled.div`
  .panel {
    padding : 20px 50px;
    margin-bottom : 20px;
  }

  .blocks-one-city {
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between; 
    margin-top : 20px;
  }

  .city-title{
    font-size : 30px;
    font-weight : 600;
    border-bottom : 1px solid #000;
  }
`
const BlocksOneCity = ({item, key}) => {
    
    //   const [home, setHome] = useState(homeRu)
  
  useEffect(() => {
    // axios.get("/api/tour/home").then((res) => {
    //   setTours(res.data);
    // });
  }, []);

  return (
    <Section key={key}>
        <div className="city-title">{item.city}</div>
        <div className="blocks-one-city">
            {item.data.map((item,index) => {
                return (
                    <BlockItem item={item} key={index}/>
                )
            })}
        </div>
    </Section>
  )
}

export default BlocksOneCity;