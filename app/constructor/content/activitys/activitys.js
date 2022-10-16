import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import ActivityOneCity from './activity-one-city'

const Section = styled.div`
  .panel {
    padding : 20px 50px;
    margin-bottom : 20px;
  }
  .activitys {
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
const Activitys = ({activitys}) => {
    
    //   const [home, setHome] = useState(homeRu)
  
  useEffect(() => {
    // axios.get("/api/tour/home").then((res) => {
    //   setTours(res.data);
    // });
  }, []);

  return (
    <Section>
        <div className="panel">
            <div className="panel-title">Активности</div>
            <div className="activitys">
                {activitys.map((item,index) => {
                    return (
                        <ActivityOneCity item={item} key={index}/>
                    )
                })}
            </div>
            
        </div>
    </Section>
  )
}

export default Activitys;