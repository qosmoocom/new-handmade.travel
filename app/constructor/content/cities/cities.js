import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import CityItem from './city-item'

const Section = styled.div`
  .panel {
    padding : 20px 50px;
  }
  .cities {
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between; 
    margin-top : 20px;
  }

  .panel-title{
    font-size : 30px;
    fonr-weight : 600;
  }
`
const Cities = ({cities}) => {
    
    //   const [home, setHome] = useState(homeRu)
  
  useEffect(() => {
    // axios.get("/api/tour/home").then((res) => {
    //   setTours(res.data);
    // });
  }, []);

  return (
    <Section>
        <div className="panel">
            <div className="panel-title">Города</div>
            <div className="cities">
                {cities.map((item,index) => {
                    return (
                        <CityItem item={item} key={index}/>
                    )
                })}
            </div>
            
        </div>
    </Section>
  )
}

export default Cities;