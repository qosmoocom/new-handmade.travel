import React, {useEffect, useState} from "react";
import styled from 'styled-components'

const Section = styled.div`
  .blog-box{
    background: rgba(217, 217, 217, 0.1);
    border: 0.01px solid rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    @media (min-width:320px) {
      width: 100%;
      padding: 2px;
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
  }

  .img-box{
    border-radius: 5px 5px 0px 0px;
    @media (min-width:320px) {
      height: auto;
      width: 100%;
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
  }

  .blog-info-box{
    padding: 10px;
  }

  .img-box img{
    @media (min-width:320px) {
      height: auto;
      width: 100%;
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
  }

  .blog-title{
    line-height: 1.1;
    font-weight: 600;
    @media (min-width:320px) {
      font-size: 20px;
      min-height: 44px;
      margin: 0px 0px 10px;
    }
    
    @media (min-width:480px) {
      font-size: 18px;
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
  if (blogInfo.length > 100) blogInfo = blog.blogInfo.substr(0,100)+' ...'
  
  return (
    <Section>
      <div className="blog-box">
        <div className="img-box">
          <img src={blog.blogSrc} alt="" />  
        </div>
        <div className="blog-info-box">
          <div className="blog-title">{blog.blogTitle}</div>
          <div className="blog-info">{blogInfo}</div>
          <div className="blog-date-box">
            <div className="blog-date">{blog.blogDate}</div>
            <div className="blog-read">{read}</div>
          </div>
          {/* <div className="blog-button">{buttonTitle}</div> */}
        </div>
        
      </div>
    </Section>
  )
}

export default BlogItem