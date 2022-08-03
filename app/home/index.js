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
      console.log(tours[i])
      if ((tours[i].language == currentlang) && (tours[i].isItActive == "published")) {
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
      <Header data={homeDataRu} />
      <Mission data={homeDataRu} />
      <Tours data={homeDataRu} currentTours={currentTours} />
      <Utp data={homeDataRu} />
      <Authors data={homeDataRu} />
      <Reviews data={homeDataRu} />
      <Blogs data={homeDataRu}/>
      <Footer data={homeDataRu}/>
    </>
    
  )
}

export default HomePage;