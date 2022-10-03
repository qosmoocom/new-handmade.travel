import React, {useEffect, useState} from "react";
import Header from '../app/home/header'
import Footer from '../app/home/footer'
import Tours from '../app/home/tours'
import axios from "axios";

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
  const [currentTours, setCurrentTours] = useState([]);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios.get("/api/tour/home").then((res) => {
      setTours(res.data);
    });
  }, []);

  useEffect(() => {
    let currentLang = localStorage.getItem('lang')
    let items = []
    for (let i = 0; i < tours.length; i++) {
      if (tours[i].language == currentLang && tours[i].isItActive == "published") {
        items.push(tours[i]);
      }
    }
    setCurrentTours(items)
  }, [tours]);


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
      <Tours data={home} currentTours={currentTours}/>
      <Footer data={home}/> 
    </>
  )
}

export default DataPage;