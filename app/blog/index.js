import React from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import Header from './header'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';

function Index() {
  const state = useSelector((state) => state.bloger);
  const content = state.content
  
  
  return (
    <Section>
      <Header />
      <ReactQuill theme="snow" value={content} onChange={saveContent}/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        // pauseOnHover
      />

    </Section>
  );
}

const Section = styled.div`
  user-select: none;
`

export default Index