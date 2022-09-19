import React, {useEffect, useState} from "react";
import Header from '../app/home/header'
import Footer from '../app/home/footer'

import { useDispatch, useSelector } from "react-redux";

import {home as homeDe} from '../store/data/home/homeDe'
import {home as homeEn} from '../store/data/home/homeEn'
import {home as homeEs} from '../store/data/home/homeEs'
import {home as homeFr} from '../store/data/home/homeFr'
import {home as homeIt} from '../store/data/home/homeIt'
import {home as homeRu} from '../store/data/home/homeRu'

import {offer} from '../store/data/offer/offer'
// import {offer as offerEn} from '../store/data/offer/offerEn'
// import {offer as offerEs} from '../store/data/offer/offerEs'
// import {offer as offerFr} from '../store/data/offer/offerFr'
// import {offer as offerIt} from '../store/data/offer/offerIt'
// import {offer as offerRu} from '../store/data/offer/offerRu'


import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
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
const OfferPage = () => {
  
  const currentLang = useSelector((state) => state.lang.currentLang)
  const [home, setHome] = useState(homeEn)
  const [content, setOffer] = useState(offer.contentRu)

  useEffect(() => {
    switch (currentLang) {
      case "Ru":
        setHome(homeRu)
        setOffer(offer.contentRu)
        break
      case "En":
        setHome(homeEn)
        setOffer(offer.contentEn)
        break
      case "Es":
        setHome(homeEs)
        setOffer(offer.contentEs)
        break  
      case "De":
        setHome(homeDe)
        setOffer(offer.contentDe)
        break
      case "It":
        setHome(homeIt)
        setOffer(offer.contentIt)
        break
      case "Fr":
        setHome(homeFr)
        setOffer(offer.contentFr)
        break
      default : 
      setHome(homeDe)
      setOffer(offer.contentDe)
    }
  }, [currentLang]);

  const modules = {
    toolbar: false
    }
    
  return (
    <>
      <Header data={home} showBanner={false}/>
      <Section>
        <div className="block-content">
          <div className="container">
            <ReactQuill theme="snow" value={content} modules={modules} readOnly/>
          </div>
        </div>
      </Section>
      <Footer data={home}/> 
    </>
  )
}

export default OfferPage;