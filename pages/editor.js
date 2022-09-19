import React, {useEffect, useState} from "react";
import Header from '../app/home/header'
import Footer from '../app/home/footer'
import dynamic from 'next/dynamic';
import {homeRu} from '../store/data/home/homeRu'
// import {offerRu} from '../store/data/offer/offerRu'
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components'

const Section = styled.div`
  .container{
    max-width: 1200px;
    margin: 0 auto;
  }
`
const OfferPage = () => {
  
  const [currentlang, setCurrentLang] = useState("ru");
  // const d = offerRu.content
  const [value, setValue] = useState('');
  const modules = {
    toolbar: true
    }
  
  const showData = () => {
    console.log(value)
  }
  

  return (
    <>
      <Header data={homeRu} />
      <Section>
        <div className="container">
          <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules}/>
          <button onClick={showData}>Show Data</button>
        </div>
        
      </Section>
      <Footer data={homeRu}/>
    </>
    
  )
}

export default OfferPage;