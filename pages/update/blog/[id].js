import React, { useEffect, useState } from "react";
import App from "../../../app/blog";

import Head from "next/head";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../../../app/components/Loader/index";
import styled from "styled-components";
import Link from "next/link";
import { getMyOneBlog, updateMyBlogs } from "../../../store/reducer/blogReducer";

export default function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const [keywords, setKeywords] = useState({
    meta_key: "",
    meta_des: "",
    yan_met: "",
    title: "",
  });
  useEffect(() => {
    if (router.query.id) {
      dispatch(getMyOneBlog(router.query.id.toString()));
    }
  }, [router]);
  
  if (globalState.blogs.blog) {
    const updateTexts = JSON.stringify({
      ...globalState.bloger,
      isEdit: false,
      keywords,
    });


    const blog = globalState.blogs.blog;
    const {
      isItActive,
      language,
      blogAuthor,
      blogName,
      _id,
      address,
      date
    } = blog;

    const saveHandler = () => {
      
      const updateTexts = JSON.stringify({
        ...globalState.bloger,
        isEdit: false,
        keywords,
      });

      const updateBlog = {
        blogName,
        blogAuthor,
        address,
        date,
        _id,
        language,
        isItActive,
        blogTexts: updateTexts,
      };
      console.log(updateTexts)
      dispatch(updateMyBlogs(_id, updateBlog));

    };

    return (
      <Wrapper>
        <Head>
          <title>Edit My Tour</title>
        </Head>
        <div className="right-btns">
          <button className="save" onClick={saveHandler}>
            save
          </button>
          <Link href={"/admin"}>
            <button className="back_admin"> back</button>
          </Link>
        </div>
        <App editBlog={true}/>
        <Loader />
      </Wrapper>
    );
  }
  
  return (
    <div>
      <Head>
        <title>Loading...</title>
      </Head>
      <Loader />
    </div>
  );
}

const Wrapper = styled.div`
  position: relative;
  .right-btns {
    position: fixed;
    left: 10px;
    bottom: 10px;
    z-index: 222;
    button {
      color: #fff;
      background: rgb(0, 0, 0);
      padding: 10px 20px;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      border-radius: 6px;
      transition: 0.4s;
      margin-right: 10px;
      letter-spacing: 2px;
      font-weight: 600;
      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.2);
      }
    }
    .back_admin {
      background: rgb(255, 14, 14);
    }
    .back_login {
      background: #306280;
    }
    .edit_css {
      background: #5d2f3a;
    }
    .global_css {
      background: #b4c35f;
      color: #7e4e4e;
    }
  }
`;
