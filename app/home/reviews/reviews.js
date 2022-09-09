import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player-pfy'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = styled.div`

  .reviews{
    margin: 40px 0px 20px;
  }

  .slick-dots {
  bottom: -40px;
 }

 .video-box{
  height : 250px;
 }

 .content-box{
  margin-top: 20px;
 }

 .reviews-item-title{
  text-align:center;
 }

`

const Reviews = ({data}) => {
 
  const [windowWidth, setWithWindow] = useState()
  const [colslidesToShow, setColslidesToShow] = useState(1)

  let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: colslidesToShow,
      slidesToScroll: 1,
      // fade: true,
    };

  useEffect(() => {
    let width = window.innerWidth
    setWithWindow(width)
    
    if (319 < width && width < 480) {
      setColslidesToShow(1)
    }
    if (480 <= width && width < 992) {
      setColslidesToShow(2)
    }
    
    if (992 <= width && width < 1400) {
      setColslidesToShow(3)
    }
   
    if (1400 <= width ) {
      setColslidesToShow(4)
    }
    
    settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: colslidesToShow,
      slidesToScroll: 1
    };
  },[]);

  const showAuthorLinkBox = (e) => {
    let button = e.target
    button.classList.add('not-visible')
    // let links = button.parentNode.getElementsByClassName('link')
    // console.log(links)
    for (let e of button.parentNode.getElementsByClassName('link')) { e.classList.remove('not-visible') }
  }

  return (
    <Section>
      <div className="container-home">
          <div className="reviews block">
            <div className="title-box">
              <div className="page-title">
                {data.reviews_title.value}
              </div>
              <div className="page-title-comment ">
                {windowWidth>768 ? data.reviews_comment.value : data.reviews_comment_short.value}
              </div>
            </div>
            <div className="list-box">
              <Slider {...settings}>
                {data.reviews_list.arr.map((item,index) => {
                  return (
                    <div className="home-list-item-item" key={index}>
                      <div className="home-list-item" key={index}>
                        {/* <div className="home-img-box">
                          <img src={item.src} alt={item.name} />
                        </div> */}
                        <div className="video-box">
                          <ReactPlayer url={item.src} playing={false} controls={false} width={'100%'} height={'100%'} />
                        </div>
                        
                        <div className="content-box">
                          <div className="home-list-item-title reviews-item-title">{item.name}</div>
                          {/* <div className="home-list-item-text reviews-item-text reviews-item-info">{item.info}</div> */}
                          <div className="home-list-item-text">{item.text}</div>
                        </div>
                        
                      </div>
                    </div>
                    
                  )
                })}
              </Slider> 
              
            </div>
          </div>
        </div>


      
    </Section>
  )
}

export default Reviews