import React, {useEffect, useState} from "react";
import Header from '../../app/home/header'
import Footer from '../../app/home/footer'
import {home as homeRu} from '../../store/data/home/homeRu'
import {home as homeEn} from '../../store/data/home/homeEn'
import {home as homeEs} from '../../store/data/home/homeEs'
import {home as homeDe} from '../../store/data/home/homeDe'
import {home as homeIt} from '../../store/data/home/homeIt'
import {home as homeFr} from '../../store/data/home/homeFr'
import {offer as offerDe} from '../../store/data/offer/offerDe'
import {offer as offerEn} from '../../store/data/offer/offerEn'
import {offer as offerEs} from '../../store/data/offer/offerEs'
import {offer as offerRu} from '../../store/data/offer/offerRu'
import {offer as offerIt} from '../../store/data/offer/offerIt'
import {offer as offerFr} from '../../store/data/offer/offerFr'
import { useRouter } from "next/router";

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
  const router = useRouter();
  const path = router.query;

  let content = ''
  let home = homeRu
  if ((path.all) && (path.all.length > 0)) {
    switch (path.all[0]) {
      case "ru":
        content = offerRu.content
        home = homeRu
        break
      case "de":
        content = offerDe.content
        home = homeDe
        break
      case "en":
        content = offerEn.content
        home = homeEn
        break
      case "es":
        content = offerEs.content
        home = homeEs
        break
      case "it":
        content = offerIt.content
        home = homeIt
        break
      case "fr":
        content = offerFr.content
        home = homeFr
        break
      default:
        setTimeout(() => {router.push("/404")})
        // return;
    }
  }
  
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