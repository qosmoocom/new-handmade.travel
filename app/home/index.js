import React from "react";
import Header from './header'
import {homeDataRu} from '../../store/homeData'
import Mission from "./mission"
import Tours from './tours'
import Utp from './utp'

const HomePage = () => {
  return (
    <>
      <Header data={homeDataRu}/>
      <Mission data={homeDataRu}/>
      <Tours data={homeDataRu}/>
      <Utp data={homeDataRu}/>
    </>
    
  )
}

export default HomePage;