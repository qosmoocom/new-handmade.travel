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
import Blog from './blog'
import Footer from './footer'
import axios from "axios";
import { useRouter } from 'next/router'

const HomePage = () => {
  
  const [tours, setTours] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [currentTours, setCurrentTours] = useState([]);
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [home, setHome] = useState(homeEn)

  useEffect(() => {
    
    axios.get("/api/tour/home").then((res) => {
      setTours(res.data);
    });

    axios.get("/api/blog/home").then((res) => {
      setBlogs(res.data);
    });
    
  }, []);

  useEffect(() => {
    let currentLang = localStorage.getItem('lang')
    switch (currentLang) {
      case "ru":
        setHome(homeRu)
        break
      case "en":
        setHome(homeEn)
        break
      case "es":
        setHome(homeEs)
        break  
      case "de":
        setHome(homeDe)
        break
      case "it":
        setHome(homeIt)
        break
      case "fr":
        setHome(homeFr)
        break
      default : 
      setHome(homeRu)
    }
  },);

 useEffect(() => {
    
    let currentLang = localStorage.getItem('lang')
    if (currentLang == undefined) {
      localStorage.setItem('lang', 'ru')
      currentLang = localStorage.getItem('lang')
    }

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
  if (currentLang == undefined) {
    localStorage.setItem('lang', 'ru')
    currentLang = localStorage.getItem('lang')
  }

  let items = []
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].language == currentLang && blogs[i].isItActive == "published") {
      items.push(blogs[i]);
    }
  }
  setCurrentBlogs(items)
}, [blogs]);

  return (
    <>
      <Header data={home} />
      <Mission data={home} />
      <Tours data={home} currentTours={currentTours} full={false} />
      <Utp data={home} />
      <Authors data={home} />
      <Reviews data={home} />
      <Blog data={home} currentBlogs={currentBlogs} full={false}/>
      <Footer data={home}/>
    </>
  )
}

export default HomePage;