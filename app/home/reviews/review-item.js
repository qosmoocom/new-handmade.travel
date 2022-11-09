import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player-pfy'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "../../components/Link";

const Section = styled.div`
  
  @media (min-width:320px) {
    padding : 5px;
  }

  @media (min-width:768px) {
    padding : 15px;
  }
    
 .video-box{
    height : 250px;
 }

 .box{
    height : 250px;
    width : 100%;
    position : relative;
    .img-box{
        width : 100%;
        height : 250px;
        object-fit: cover;
    }
    .youtube-ico{
      position : absolute;
      left : 40%;
      top: 38%;
      width : 60px;
    }
 }

 .content-box{
  margin-top: 20px;
 }

 .reviews-item-title{
    text-align:center;
    @media (min-width:480px) {
      min-height: 40px;
    }

    @media (min-width:1200px) {
      font-size: 18px;
      line-height: 20px;
      min-height: 40px;
    }

    .not-visible{
      display : none;
    }
 }

`

const ReviewItem = ({item, index}) => {
 
  const [playing, setPlaying] = useState(false)

  const visibleVideoBox = (e) => {
    let parentDiv
    parentDiv = e.target.parentNode.parentNode
    let videoBoxs = parentDiv.getElementsByClassName('video-box')
    let imgBoxs = parentDiv.getElementsByClassName('box')
    videoBoxs[0].classList.remove('not-visible')
    imgBoxs[0].classList.add('not-visible')
    setPlaying(true)
  }


  return (
    <Section key={index}>
      <div className="video-box not-visible">
          <ReactPlayer url={item.src} playing={playing} controls={false} width={'100%'} height={'100%'} />
      </div>

      {/* <div onClick={visibleVideoBox} className='img-box' style={{background: `url(${item.img}) no-repeat`, backgroundSize: 'cover'}}> */}
      <div onClick={visibleVideoBox} className='box'>
          <img src={item.img} className='img-box'/>
          <img src='/images/home/reviews/youtube.png' className='youtube-ico'/>

      </div>
      
      <div className="content-box">
          <div className="home-list-item-title reviews-item-title">{item.name}</div>
          <div className="home-list-item-text">{item.text}</div>
      </div>
    </Section>
  )
}

export default ReviewItem