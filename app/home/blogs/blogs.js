import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import BlogItem from './blog-item'

const Section = styled.div`
  .blogs-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between ;
  }

  .blog-item{
    @media (min-width:320px) {
      margin-bottom: 30px;
      width: 100%;
    }
    
    @media (min-width:480px) {
      width: 48%;
    }
    @media (min-width:576px) {
      
    }
    @media (min-width:768px) {
      width: 31%;
    }
    @media (min-width:992px) {
      width: 22%;
      
    }
    @media (min-width:1200px) {
      
    }
    @media (min-width:1400px) {
      
    }
  }

  .blogs-box {
    /* margin-bottom: 30px; */
  }

  .view-more{
    font-weight: 700;
    text-align: center;
    cursor: pointer;
  }
  
`

const Blogs = ({data}) => {
  const blogs = [
    {blogId: 'ssss', blogTitle: 'Dance adventures in uzbekistan', blogSrc: './images/home/blogs/blog-1.jpg', blogInfo: 'Авторская программа вкусных развлечений, аппетитных экскурсий и уникальных гастрономических открытий', blogDate: '01.12.22'},
    {blogId: 'ssss', blogTitle: 'Dance adventures in uzbekistan', blogSrc: './images/home/blogs/blog-1.jpg', blogInfo: 'Авторская программа вкусных развлечений, аппетитных экскурсий и уникальных гастрономических открытий', blogDate: '01.12.22'},
    {blogId: 'ssss', blogTitle: 'Dance adventures in uzbekistan', blogSrc: './images/home/blogs/blog-1.jpg', blogInfo: 'Авторская программа вкусных развлечений, аппетитных экскурсий и уникальных гастрономических открытий', blogDate: '01.12.22'},
    {blogId: 'ssss', blogTitle: 'Dance adventures in uzbekistan', blogSrc: './images/home/blogs/blog-1.jpg', blogInfo: 'Авторская программа вкусных развлечений, аппетитных экскурсий и уникальных гастрономических открытий', blogDate: '01.12.22'},
  ]

  const [colViewblogs, setcolViewblogs] = useState(3);
  const [windowWidth, setWithWindow] = useState()

  useEffect(() => {
    setWithWindow(window.innerWidth)

    if (319 < window.innerWidth && window.innerWidth < 479) {
      setcolViewblogs(3)
    }
    if (480 <= window.innerWidth && window.innerWidth < 992) {
      setcolViewblogs(2)
    }
    if (992 <= window.innerWidth && window.innerWidth < 1400) {
      setcolViewblogs(3)
    }
    if (1400 <= window.innerWidth) {
      setcolViewblogs(4)
    }

  },[]);
  
  return(
    <Section>
      <div className="container-home">
        <div className="blogs block">
          <div className="title-box">
            <div className="page-title">
              {data.blogs_title.value}
            </div>
            <div className="page-title-comment">
              {windowWidth>768 ? data.blogs_comment.value : data.blogs_comment_short.value}
            </div>
          </div>
          <div className="blogs-box">
            {blogs.map((item,index) => {
              if (index < colViewblogs) {
                return (
                  <div className="blog-item" key={index}>
                    <BlogItem blog={item} read = {data.blogs_item_read_text.value}/>
                  </div>
                )
              }               
            })}
          </div>
          <div className="view-more">{data.blogs_view_more_text.value}</div>
        </div>
      </div>
    </Section>
  )
}

export default Blogs