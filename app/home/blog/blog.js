import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import BlogItem from './blog-item'
import axios from "axios";

const Section = styled.div`
  .blogs-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between ;
  }
  
  .view-more{
    font-weight: 700;
    text-align: center;
    cursor: pointer;
  }
  
`

const Blog = ({data, currentBlogs, full=true}) => {

  const [colViewblogs, setcolViewblogs] = useState(3)
  const [windowWidth, setWithWindow] = useState()
  const [blogs, setBlogs] = useState([])

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
    if (full) setcolViewblogs(100)

  },[]);
  
  useEffect(() => {
    let items = []
    currentBlogs.forEach(item => {
      let blogObject = JSON.parse(item.blogTexts)
      let element = {
        id : item._id,
        blogId: item.tour_id, 
        blogTitle:item.blogName,
        blogImgUrl:blogObject.header.imgUrl,  
        blogInfo: blogObject.header.smallText,
        blogDate : item.date,
        blogUrl : `/blogs/${item.language}/${item.address}`
      }
      items.push(element)
    });

    setBlogs(items)
  },[currentBlogs]);

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
                  <BlogItem blog={item} read = {data.blogs_item_read_text.value} key={index}/>
                )
              }               
            })}
          </div>
          {/* <div className="view-more">{data.blogs_view_more_text.value}</div> */}
        </div>
      </div>
    </Section>
  )
}

export default Blog