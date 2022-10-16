import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import ActivityItem from './activity-item'

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
    font-weight : 600;
    border-bottom : 1px solid #000;
  }
`
const ActivityOneCity = ({item, key}) => {
    
    //   const [home, setHome] = useState(homeRu)
  
  useEffect(() => {
    // axios.get("/api/tour/home").then((res) => {
    //   setTours(res.data);
    // });
  }, []);

  return (
    <Section key={key}>
        <div className="panel-title">{item.city}</div>
        <div className="activitys">
            {item.data.map((item,index) => {
                return (
                    <ActivityItem item={item} key={index}/>
                )
            })}
        </div>
    </Section>
  )
}

export default ActivityOneCity;