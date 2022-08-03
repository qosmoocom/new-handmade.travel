import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player-pfy'
import YouTube from "react-youtube";

const Section = styled.div`
  .mission{
    @media (min-width:768px) {
      display: flex;
      justify-content: space-between;
      padding: 40px 0px;
    }
  }
  .mission-content{
    font-weight: 300 ;
    @media (min-width:320px) {
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 20px;
      text-align: justify;
    }
    @media (min-width:480px) {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 22px;
    }
    @media (min-width:576px) {
      
    }
    @media (min-width:768px) {
    }
    @media (min-width:992px) {
      font-size: 18px;
      line-height: 22px;
    }
    @media (min-width:1200px) {
      font-size: 22px;
      line-height: 26px;
    }
    @media (min-width:1400px) {
      margin-bottom: 40px;
    }
  }

  .ceo-box-bottom {
    @media (min-width:768px) {
      display: none;
    }
  }

  .ceo-box-top {
    display: none;
    @media (min-width:768px) {
      display: block;
    }
  }

  .ceo{
    font-family: 'Caveat';
    line-height: 1.2;
    @media (min-width:320px) {
      font-size: 20px;
    }
    @media (min-width:480px) {
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
    }
    @media (min-width:992px) {
      font-size: 24px;
    }
    @media (min-width:1200px) {
      font-size: 30px;
    }
    @media (min-width:1400px) {
      font-size: 35px;
    }
  }
  
  .ceo-prof{
    font-weight: 300;
    line-height: 1.2;
    @media (min-width:320px) {
      font-size: 12px;
    }
    @media (min-width:480px) {
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
    }
    @media (min-width:992px) {
      font-size: 14px;
    }
    @media (min-width:1200px) {
      font-size: 18px;
    }
    @media (min-width:1400px) {
    }
  }

  .video-box{
    @media (min-width:320px) {
      margin: 0px 0px 18px 0px;
    }
    @media (min-width:480px) {
      margin: 0px 0px 22px 0px;
    }
    @media (min-width:576px) {
      margin: 0px 0px 32px 0px;
    }
    @media (min-width:768px) {
      margin: 30px 0px 0px 20px;
    }
    @media (min-width:992px) {
      margin: 0px 0px 0px 25px;
    }
    @media (min-width:1200px) {
      margin: 0px 0px 0px 30px;
    }
    @media (min-width:1400px) {
      margin: 0px 0px 0px 35px;
    }
  }
`

const Mission = ({data}) => {

  const [play, setPlay] = useState(false)
  const [videoBoxWidth, setVideoBoxWidth] = useState(0)
  const [windowWidth, setWithWindow] = useState()

  useEffect(() => {
    let width = window.innerWidth
    setWithWindow(width)
    
    if (width >=768 & width <1300) { setVideoBoxWidth(width/2.3)} else { setVideoBoxWidth(width-50)}
    if (width < 768) setVideoBoxWidth(width-50)
    if (width >=768 & width <1400) setVideoBoxWidth(width/2.4)
    if (width >= 1400) setVideoBoxWidth(1400/2.3)
  },[]);
  
  return (
    <Section>
      <div className="container-home">
        <div className="mission block">
          <div className="mission-content-box">
            <div className="mission-info-box">
              <div className="page-title">
                {data.mission_title.value}
              </div>
              <div className="page-title-comment ">
                {windowWidth>768 ? data.mission_comment.value : data.mission_comment_short.value}
              </div>
              <div className="mission-content">
                {data.mission_text.value}
              </div>
            </div>
            <div className="ceo-box-top">
              <div className="ceo">
                {data.mission_ceo.value}
              </div>
              <div className="ceo-prof">
                {data.mission_ceo_prof.value}
              </div>
            </div>
          </div>

          <div className="video-box">
            <ReactPlayer url='https://www.youtube.com/watch?v=hzpo4QrmBL8' playing={play} controls={false} width={videoBoxWidth} height={videoBoxWidth/16*9} />
          </div>
          <div className="ceo-box-bottom">
            <div className="ceo">
              {data.mission_ceo.value}
            </div>
            <div className="ceo-prof">
              {data.mission_ceo_prof.value}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Mission
