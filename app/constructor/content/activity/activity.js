import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import ActivityItem from './activity-item'

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
const Activity = ({activitys}) => {
    
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
                {activitys.map((item,index) => {
                    return (
                        <ActivityItem item={item} key={index}/>
                    )
                })}
            </div>
            
        </div>
    </Section>
  )
}

export default Activity;