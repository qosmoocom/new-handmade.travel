import React, {useEffect, useState} from "react";
import Header from './header'
import {homeRu} from '../../store/data/home/homeRu'
import Mission from "./mission"
import Tours from './tours'
import Utp from './utp'
import Authors from './authors'
import Reviews from './reviews'
import Blogs from './blogs'
import Footer from './footer'
import axios from "axios";


const HomePage = () => {
  
  const [tours, setTours] = useState([]);
  const [currentlang, setCurrentLang] = useState("ru");
  
  const [currentTours, setCurrentTours] = useState([]);
  // const [en, setEn] = useState([]);
  
  useEffect(() => {
    axios.get("/api/tour/home").then((res) => {
      setTours(res.data);
    });
  }, []);

 useEffect(() => {
    let items = []
    for (let i = 0; i < tours.length; i++) {
      if (tours[i].language == 'ru' && tours[i].isItActive == "published") {
        items.push(tours[i]);
      }
    }
    setCurrentTours(items)
  }, [tours]);

  // useEffect(() => {
  //   console.log(window.navigator.language);
  //   console.log(window);
  //   if (window.navigator.language == "es") {
  //     setLang("es");
  //   }
  //   if (window.navigator.language == "en-US") {
  //     setLang("en");
  //   }
  //   if (window.navigator.language == "ru") {
  //     setLang("ru");
  //   }
  // }, []);
  
  return (
    <>
      <Header data={homeRu} />
      <Mission data={homeRu} />
      <Tours data={homeRu} currentTours={currentTours} />
      <Utp data={homeRu} />
      <Authors data={homeRu} />
      <Reviews data={homeRu} />
      <Blogs data={homeRu}/>
      <Footer data={homeRu}/>
    </>
    
  )
}

export default HomePage;