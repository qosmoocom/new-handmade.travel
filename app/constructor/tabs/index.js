import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import TabItem from './tabItem'

const Section = styled.div`
  
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
        <div className="tabs">
            {data.map((item,index) => {
                return (
                    <TabItem item={item} key={index}/>
                )
            })}
        </div>
    </Section>
  )
}

export default Tabs;