import React, {useEffect, useState} from "react";
import Header from '../../app/home/header'
import Footer from '../../app/home/footer'
import {home} from '../../store/data/home/homeRu'
import {offer} from '../../store/data/offer/offerDe'

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
  const content = offer.content
  
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