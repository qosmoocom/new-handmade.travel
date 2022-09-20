import React, {useEffect, useState} from "react";
import Header from '../../app/home/header'
import Footer from '../../app/home/footer'
import {home as homeRu} from '../../store/data/home/homeRu'
import {home as homeEn} from '../../store/data/home/homeEn'
import {home as homeEs} from '../../store/data/home/homeEs'
import {home as homeDe} from '../../store/data/home/homeDe'
import {home as homeIt} from '../../store/data/home/homeIt'
import {home as homeFr} from '../../store/data/home/homeFr'
import {what as whatDe} from '../../store/data/what/whatDe'
import {what as whatEn} from '../../store/data/what/whatEn'
import {what as whatEs} from '../../store/data/what/whatEs'
import {what as whatRu} from '../../store/data/what/whatRu'
import {what as whatIt} from '../../store/data/what/whatIt'
import {what as whatFr} from '../../store/data/what/whatFr'
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
const WhatPage = () => {
  const router = useRouter();
  const path = router.query;

  let content = ''
  let home = homeRu
  if ((path.all) && (path.all.length > 0)) {
    switch (path.all[0]) {
      case "ru":
        content = whatRu.content
        home = homeRu
        break
      case "de":
        content = whatDe.content
        home = homeDe
        break
      case "en":
        content = whatEn.content
        home = homeEn
        break
      case "es":
        content = whatEs.content
        home = homeEs
        break
      case "it":
        content = whatIt.content
        home = homeIt
        break
      case "fr":
        content = whatFr.content
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

export default WhatPage;