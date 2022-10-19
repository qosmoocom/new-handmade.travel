import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import Cities from './cities'
import Blocks from './blocks'

const Section = styled.div`
  
`
const Content = ({cities, activitys, hotels}) => {
//   const [home, setHome] = useState(homeRu)
  
  useEffect(() => {
    // axios.get("/api/tour/home").then((res) => {
    //   setTours(res.data);
    // });
  }, []);

  return (
    <Section>
        <div className="panel">
            <Cities cities={cities}/>
            <Blocks data = {activitys} id={'activity'} title={'Активности'}/>
            <Blocks data = {hotels} id={'hotel'} title={'Гостиницы'}/>
        </div>
    </Section>
  )
}

export default Content;