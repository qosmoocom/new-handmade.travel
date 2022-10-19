import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import TabItem from './tabItem'
import Compass from './ico/compass'
import Location from './ico/location'
import Activity from "./ico/activity";
import Hotel from './ico/hotel'
import Transport from './ico/transport'
import Eat from './ico/eat'

const Section = styled.div`
.tab-item{
  text-align : center;
  color : #fff;
  font-size : 20px;
  margin-bottom : 20px;
  padding : 15px 0px 10px;
  cursor : pointer;
  :hover {
    background-color : #fff;
    color : #33cccc;
    svg {
      fill: #33cccc;
    }
  }
  svg{
    fill : #fff;
    width : 55px;
    height : 55px;
    margin : 0 auto;
  }

}  
`

const Tabs = ({data}) => {
//   const [home, setHome] = useState(homeRu)
  
  useEffect(() => {
    // axios.get("/api/tour/home").then((res) => {
    //   setTours(res.data);
    // });
  }, []);

  
  return (
    <Section>
        <ul className="tabs">
            {data.map((item,index) => {
                return (
                    <TabItem item={item} key={index}/>
                )
            })}
          {/* <li className="tab-item">
            <Compass/>    
            <div className="tab-title">Главная</div>
          </li>
          <li className="tab-item">
            <Location/>    
            <div className="tab-title">Города</div>
          </li>
          <li className="tab-item">
            <Activity/>    
            <div className="tab-title">Активности</div>
          </li>
          <li className="tab-item">
            <Hotel/>    
            <div className="tab-title">Гостиницы</div>
          </li>
          <li className="tab-item">
            <Transport/>    
            <div className="tab-title">Транспорт</div>
          </li>
          <li className="tab-item">
            <Eat/>    
            <div className="tab-title">Питание</div>
          </li> */}

        </ul>
        
    </Section>
  )
}

export default Tabs;