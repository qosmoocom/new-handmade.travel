import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import Cities from './cities'

const Section = styled.div`
  
`
const Content = ({cities, activitys}) => {
//   const [home, setHome] = useState(homeRu)
  
  useEffect(() => {
    // axios.get("/api/tour/home").then((res) => {
    //   setTours(res.data);
    // });
  }, []);

  return (
    <Section>
        <div className="panel">
            <Cities cities={cities} activitys = {activitys}/>
        </div>
    </Section>
  )
}

export default Content;