import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from './header'
import {home as homeDe} from '../../store/data/home/homeDe'
import {home as homeEn} from '../../store/data/home/homeEn'
import {home as homeEs} from '../../store/data/home/homeEs'
import {home as homeFr} from '../../store/data/home/homeFr'
import {home as homeIt} from '../../store/data/home/homeIt'
import {home as homeRu} from '../../store/data/home/homeRu'

import Mission from "./mission"
import Tours from './tours'
import Utp from './utp'
import Authors from './authors'
import Reviews from './reviews'
import Blogs from './blogs'
import Footer from './footer'
import axios from "axios";
import { useRouter } from 'next/router'

const HomePage = () => {
  
  const [tours, setTours] = useState([]);
  const [currentTours, setCurrentTours] = useState([]);
  const [langTours, setLangTours] = useState('ru');
  
  const [home, setHome] = useState(homeEn)

  useEffect(() => {
    
    axios.get("/api/tour/home").then((res) => {
      setTours(res.data);
      // console.log(res.data)
    });
    
  }, []);

  useEffect(() => {
    let currentLang = localStorage.getItem('lang')
    switch (currentLang) {
      case "ru":
        setHome(homeRu)
        setLangTours('ru')
        break
      case "en":
        setHome(homeEn)
        setLangTours('en')
        break
      case "es":
        setHome(homeEs)
        setLangTours('es')
        break  
      case "de":
        setHome(homeDe)
        setLangTours('de')
        break
      case "it":
        setHome(homeIt)
        setLangTours('it')
        break
      case "fr":
        setHome(homeFr)
        setLangTours('fr')
        break
      default : 
      setHome(homeRu)
      setLangTours('ru')
    }
  },);

 useEffect(() => {
    let items = []
    for (let i = 0; i < tours.length; i++) {
      if (tours[i].language == langTours && tours[i].isItActive == "published") {
        items.push(tours[i]);
      }
    }
    setCurrentTours(items)
  }, [tours, langTours]);

  return (
    <>
      <Header data={home} />
      <Mission data={home} />
      <Tours data={home} currentTours={currentTours} />
      <Utp data={home} />
      <Authors data={home} />
      <Reviews data={home} />
      <Blogs data={home}/>
      <Footer data={home}/>
    </>
  )
}

export default HomePage;