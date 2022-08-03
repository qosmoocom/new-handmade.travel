import React, {useEffect, useState} from "react";
import Header from './header'
import {homeDataRu} from '../../store/homeData'
import Mission from "./mission"
import Tours from './tours'
import Utp from './utp'
import Authors from './authors'
import Reviews from './reviews'
import Blogs from './blogs'
import Footer from './footer'

const HomePage = () => {

  return (
    <>
      <Header data={homeDataRu} />
      <Mission data={homeDataRu} />
      <Tours data={homeDataRu} />
      <Utp data={homeDataRu} />
      <Authors data={homeDataRu} />
      <Reviews data={homeDataRu} />
      <Blogs data={homeDataRu}/>
      <Footer data={homeDataRu}/>
    </>
    
  )
}

export default HomePage;