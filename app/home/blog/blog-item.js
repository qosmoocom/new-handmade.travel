import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import Image from 'next/image'
import Link from "../../components/Link";

const Section = styled.div`
  @media (min-width:320px) {
    margin-bottom: 30px;
    width: 100%;
  }

  @media (min-width:480px) {
    width: 48%;
  }
  
  @media (min-width:768px) {
    width: 31%;
  }
  @media (min-width:992px) {
    width: 23%;
  }

  a{
    text-decoration : none;
    font-weigth : 300;
  }
  .ql-container.ql-snow{
    border : none;
  }

  .img-box{
    @media (min-width:320px) {
      height: 280px;
      // width: 290px;
      width : 100%;
      
    }
    @media (min-width:480px) {
    }
    @media (min-width:576px) {
      
    }
    @media (min-width:768px) {
    }
    @media (min-width:992px) {
    }
    @media (min-width:1200px) {
    }
    @media (min-width:1400px) {
    }
    img{
      width : 100%;
      height : 100%;
      object-fit : cover;
    }
  }

  .blog-info-box{
    padding: 10px;
  }

  .blog-title{
    line-height: 1.1;
    font-weight: 400;
    @media (min-width:320px) {
      font-size: 16px;
      min-height: 54px;
      margin: 0px 0px 10px;
    }
    
    @media (min-width:480px) {
      font-size: 16px;
    }
    @media (min-width:576px) {
      
    }
    @media (min-width:768px) {
    }
    @media (min-width:992px) {
    }
    @media (min-width:1200px) {
    }
    @media (min-width:1400px) {
    }
  }

  .blog-info{
    
    font-weight: 300;
    text-align: justify;
    @media (min-width:320px) {
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 12px;
    }
    
    @media (min-width:480px) {
    }
    @media (min-width:576px) {
      
    }
    @media (min-width:768px) {
    }
    @media (min-width:992px) {
      min-height: 100px;
    }
    @media (min-width:1200px) {
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 10px;
    }
    @media (min-width:1400px) {
    }
  }

  .blog-date{
    font-weight: 400;
    @media (min-width:320px) {
      font-size: 14px;
      line-height: 16px;
    }
    
  }

  .blog-read{
    cursor: pointer;
    font-weight: 500;
    color: #333;
    @media (min-width:320px) {
      font-size: 14px;
      line-height: 16px;
    }
  }

  .blog-date-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .blog-button{
    text-align:  center;
    line-height: 1.2;
    font-weight: 400;
    color: #fff;
    background-color: #1698A0;
    border-radius: 5px;
    cursor: pointer;
    @media (min-width:320px) {
      height: 40px;
      font-size: 16px;
      margin-top: 27px;
      padding: 10px 0px 8px;
    }
    
    @media (min-width:480px) {
      font-size: 14px;
      padding: 10px 0px 8px;
    }
    @media (min-width:576px) {
      
    }
    @media (min-width:768px) {
    }
    @media (min-width:992px) {
    }
    @media (min-width:1200px) {
    }
    @media (min-width:1400px) {
    }
  }
`

const BlogItem = ({blog, read}) => {
  
  let blogInfo = blog.blogInfo
  // let blogInfo = ''
  if (blogInfo.length > 120) blogInfo = blog.blogInfo.substr(0,120)+' ...'
  
  return (
    <Section>
      <div className="img-box">
        <img src={blog.blogImgUrl}/>
      </div>
      <div className="blog-info-box">
        <div className="blog-title">{blog.blogTitle}</div>
        <div className="blog-info">{blogInfo}</div>
        <div className="blog-date-box">
          <div className="blog-date">{blog.blogDate}</div>
          <Link href={blog.blogUrl} className="blog-read">{read}</Link>
        </div>
        {/* <div className="blog-button">{buttonTitle}</div> */}
      </div>
    </Section>
  )
}

export default BlogItem