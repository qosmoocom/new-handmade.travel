import React, {useEffect, useState} from "react";
import Header from '../app/home/header'
import Footer from '../app/home/footer'
import Blog from '../app/home/blog'

import {home as homeRu} from '../store/data/home/homeRu'
import {home as homeEn} from '../store/data/home/homeEn'
import {home as homeEs} from '../store/data/home/homeEs'
import {home as homeDe} from '../store/data/home/homeDe'
import {home as homeIt} from '../store/data/home/homeIt'
import {home as homeFr} from '../store/data/home/homeFr'

import styled from 'styled-components'


const Section = styled.div`
  .block-content{
    background-color: #fafafa;
    padding: 15px 0px;
  }  

  .container{
    max-width: 1200px;
    margin: 0px auto;
  }
  .ql-container.ql-snow{ 
    border: none !important;
  }
`
const DataPage = () => {
    const [home, setHome] = useState(homeRu)

  useEffect(() => {
    let currentLang = localStorage.getItem('lang')
    switch (currentLang) {
        case "ru":
            setHome(homeRu)
            break
        case "de":
            setHome(homeDe)
        break
        case "en":
            setHome(homeEn)
        break
        case "es":
            setHome(homeEs)
        break
        case "it":
            setHome(homeIt)
        break
        case "fr":
            setHome(homeFr)
        break
        default:
            setHome(homeRu)
        // return;
    }
  },);
  
  return (
    <>
      <Header data={home} showBanner={false}/>
      <Blog data={home}/>
      <Footer data={home}/> 
    </>
  )
}

export default DataPage;