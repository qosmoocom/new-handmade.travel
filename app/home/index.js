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
  const currentLang = useSelector((state) => state.lang.currentLang)
  const [home, setHome] = useState(homeEn)

  useEffect(() => {
    axios.get("/api/tour/home").then((res) => {
      setTours(res.data);
      // console.log(res.data)
    });
    
  }, []);

  useEffect(() => {
    switch (currentLang) {
      case "Ru":
        setHome(homeRu)
        setLangTours('ru')
        break
      case "En":
        setHome(homeEn)
        setLangTours('en')
        break
      case "Es":
        setHome(homeEs)
        setLangTours('es')
        break  
      case "De":
        setHome(homeDe)
        setLangTours('de')
        break
      case "It":
        setHome(homeIt)
        setLangTours('it')
        break
      case "Fr":
        setHome(homeFr)
        setLangTours('fr')
        break
      default : 
      setHome(homeDe)
      setLangTours('de')
    }
  }, [currentLang]);

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