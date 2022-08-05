import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import Link from "next/link";


const Section = styled.div`
  .tour-box{
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
      height: 240px;
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

  .tour-info-box{
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

  .tour-title{
    line-height: 1.1;
    font-weight: 600;
    @media (min-width:320px) {
      font-size: 20px;
      min-height: 66px;
      margin: 0px 0px 10px;
    }
    
    @media (min-width:480px) {
      font-size: 18px;
      line-height : 1.1;
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

  .tour-info{
    
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

  .tour-price{
    font-weight: 600;
    @media (min-width:320px) {
      font-size: 18px;
      line-height: 18px;
    }
    
    @media (min-width:480px) {
    }
    @media (min-width:576px) {
      
    }
    @media (min-width:768px) {
      font-size: 20px;
      line-height: 20px;
    }
    @media (min-width:992px) {
    }
    @media (min-width:1200px) {
      font-size: 22px;
      line-height: 22px;
    }
    @media (min-width:1400px) {
    }
  }

  .tour-days{
    font-weight: 400;
    @media (min-width:320px) {
      font-size: 12px;
      line-height: 18px;
    }
    
    @media (min-width:480px) {
      font-size: 10px;
    }
    @media (min-width:576px) {
      
    }
    @media (min-width:768px) {
      font-size: 12px;
    }
    @media (min-width:992px) {
      font-size: 10px;
    }
    @media (min-width:1200px) {
      font-size: 13px;
    }
    @media (min-width:1400px) {
      font-size: 14px;
    }
  }

  .tour-price-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tour-button{
    text-align:  center;
    
    background-color: #1698A0;
    border-radius: 5px;
    cursor: pointer;
    line-height: 1.2;
    font-weight: 400;
    color: #fff;
    
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

const TourItem = ({tour, buttonTitle}) => {
  
  let tourInfo = tour.tourInfo
  if (tourInfo.length > 100) tourInfo = tour.tourInfo.substr(0,100)+' ...'
  
  return (
    <Section>
      <div className="tour-box">
        <div className="img-box" style={{background: `url(${tour.tourSrc}) no-repeat`, backgroundSize: 'cover'}}></div>
        <div className="tour-info-box">

          <div className="tour-title">{tour.tourTitle}</div>
          <div className="tour-info">{tourInfo}</div>

          <div className="tour-price-box">
            <div className="tour-price">{tour.tourPrice}</div>
            <div className="tour-days">{tour.tourDays}</div>
          </div>

          <Link href={`/tours/${tour.tourId}/${tour.tourLang}`}>
            <div className="tour-button">
              {buttonTitle}
            </div>
          </Link>

        </div>
        
      </div>
    </Section>
  )
}

export default TourItem