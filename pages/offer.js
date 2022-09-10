import React, {useEffect, useState} from "react";
import Header from '../app/home/header'
import {dataRu} from '../store/data/offer/offerRu'
import Footer from '../app/home/footer'
import dynamic from 'next/dynamic';
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
  
  // const [currentlang, setCurrentLang] = useState("ru");
  // const data = dataRu.content.value
  // const [value, setValue] = useState(data);
  // const modules = {
  //   toolbar: false
  //   }
  
  // const showData = () => {
  //   console.log(value)
  // }
  
  return (
    <>
      {/* <Header data={homeDataRu} />
      <Section>
        <div className="container">
          <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules}/>
          <button onClick={showData}>Show Data</button>
        </div>
        
      </Section>
      <Footer data={homeDataRu}/> */}
    </>
    
  )
}

export default OfferPage;