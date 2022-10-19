import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player-pfy'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "../../components/Link";
import ReviewItem from './review-item'

const Section = styled.div`

  .reviews{
    margin: 40px 0px 20px;
  }

  .slick-dots {
  bottom: -40px;
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


  return (
    <Section>
      <div className="container-home" id='reviews'>
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
                    <ReviewItem item={item} index={index}/>                    
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