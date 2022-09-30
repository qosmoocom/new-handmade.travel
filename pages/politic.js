import React, {useEffect, useState} from "react";
import Header from '../app/home/header'
import Footer from '../app/home/footer'
import {home as homeRu} from '../store/data/home/homeRu'
import {home as homeEn} from '../store/data/home/homeEn'
import {home as homeEs} from '../store/data/home/homeEs'
import {home as homeDe} from '../store/data/home/homeDe'
import {home as homeIt} from '../store/data/home/homeIt'
import {home as homeFr} from '../store/data/home/homeFr'
import {data as dataDe} from '../store/data/politic/politicDe'
import {data as dataEn} from '../store/data/politic/politicEn'
import {data as dataEs} from '../store/data/politic/politicEs'
import {data as dataRu} from '../store/data/politic/politicRu'
import {data as dataIt} from '../store/data/politic/politicIt'
import {data as dataFr} from '../store/data/politic/politicFr'
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
const DataPage = () => {
    const [home, setHome] = useState(homeRu)
    const [content, setContent] = useState('')

  useEffect(() => {
    let currentLang = localStorage.getItem('lang')
    switch (currentLang) {
        case "ru":
            setContent(dataRu.content)
            setHome(homeRu)
            break
        case "de":
            setContent(dataDe.content)
            setHome(homeDe)
        break
        case "en":
            setContent(dataEn.content)
            setHome(homeEn)
        break
        case "es":
            setContent(dataEs.content)
            setHome(homeEs)
        break
        case "it":
            setContent(dataIt.content)
            setHome(homeIt)
        break
        case "fr":
            setContent(dataFr.content)
            setHome(homeFr)
        break
        default:
            setContent(dataRu.content)
            setHome(homeRu)
        // return;
    }
  },);
  
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

export default DataPage;