import React, {useEffect, useState} from "react";
import Constructor from '../app/constructor'
import axios from "axios";
import styled from 'styled-components'
import {home as homeRu} from '../store/data/home/homeRu'
import {home as homeEn} from '../store/data/home/homeEn'
import {home as homeEs} from '../store/data/home/homeEs'
import {home as homeDe} from '../store/data/home/homeDe'
import {home as homeIt} from '../store/data/home/homeIt'
import {home as homeFr} from '../store/data/home/homeFr'

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
const ConstructorPage = () => {
  const [home, setHome] = useState(homeRu)
  
  useEffect(() => {
    // axios.get("/api/tour/home").then((res) => {
    //   setTours(res.data);
    // });
  }, []);

  
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
      <Constructor data={home}/>
    </>
  )
}

export default ConstructorPage;