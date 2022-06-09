


import React from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import styled from 'styled-components'
import ImageEditorBlogModal from '../components/modals/ImageEditorBlogModal'
import TextEditorBlogModal from '../components/modals/TextEditorBlogModal'
import Adder from './adder'
import Contents from './contents'
import Header from './header'

function Index() {
  return (
    <Section>
      <Header />
      <Contents />
      <Adder />
      <TextEditorBlogModal />
      <ImageEditorBlogModal />
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