import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import Header from './header'
import ImageEditorBlogModal from '../components/modals/ImageEditorBlogModal'
import TextEditorBlogModal from '../components/modals/TextEditorBlogModal'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { types } from "../../store/types";
import axios from "axios";
import { useRouter } from "next/router";

function Index({editBlog=false}) {
  const router = useRouter();

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const [contentBlog, setContentBlog] = useState('');

  useEffect(() => {
    const fetchData = async (id) => {
      const api = `/api/blog/${id}`;
      try {
        const res = await axios.get(api);
        const data = await res.data;
        setContentBlog(JSON.parse(data[0].blogTexts).content)
      } catch (error) {
        setTimeout(() => {
          router.push("/404");
        });
      }
    };
  
    fetchData(`${blogs.blog.language}/${blogs.blog.address}`);
  
  }, [router.asPath]);
  
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"]
      // ["link", "image"]
    ]
  }

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
  ]

  const handleProcedureContentChange = (content, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    //console.log(has_attribues);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
    // console.log(content)
    setContentBlog(content)
    dispatch({
      type: types.editTextBlog,
      payload: {
        saveContent: true,
        content,
      },
    });
    // console.log(delta, source, editor)
  };

  return (
    <Section toolbarVisible={editBlog}>
      <Header />
      <div className="block-content">
        <div className="container">
          <ReactQuill theme="snow" value={contentBlog} modules={modules} formats={formats} onChange={handleProcedureContentChange}> 
          {/*  */}
            <div className="my-editing-area" />
          </ReactQuill>
        </div>
      </div>
      <TextEditorBlogModal />
      <div>{''}</div>
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
  .ql-toolbar {
    display: ${props => props.toolbarVisible ? "block" : "none"}
  }
  
  .block-content{
    background-color: #fafafa;
    padding: 15px 0px;
  }  

  .ql-container.ql-snow{
    border : none;
  }

  .container{
    max-width: 1200px;
    margin: 0px auto;
  }
    
`

export default Index