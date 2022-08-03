import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import TourItem from './tour-item'

const Section = styled.div`
  .tours-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between ;
  }

  .tour-item{
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

  .tours-box {
    /* margin-bottom: 30px; */
  }

  .view-more{
    font-weight: 700;
    text-align: center;
    cursor: pointer;
  }
  
`

const Tours = ({data, currentTours}) => {

  const [colViewTours, setcolViewTours] = useState(3);
  const [windowWidth, setWithWindow] = useState()
  const [tours, setTours] = useState([])

  useEffect(() => {
    setWithWindow(window.innerWidth)

    if (319 < window.innerWidth && window.innerWidth < 479) {
      setcolViewTours(3)
    }
    if (480 <= window.innerWidth && window.innerWidth < 768) {
      setcolViewTours(4)
    }
    if (768 <= window.innerWidth && window.innerWidth < 992) {
      setcolViewTours(6)
    }
    if (992 <= window.innerWidth) {
      setcolViewTours(8)
    }

    let items = []
    currentTours.forEach(item => {
      let element = {
      tourId: item._id, 
      tourTitle: item.tourName, 
      tourInfo: item.tour_id,
      // tourSrc: item.head_img_Mobile_url, 
      // tourInfo: item.head_text_3, 
      // tourPrice: '$ 1100', 
      // tourDays: 'Программа тура 1 дней'  
      }
      items.push(element)
    });
    setTours(items)
    // console.log('currentTours', currentTours)


  },[]);
  
  return(
    <Section>
      <div className="container-home">
        <div className="tours block">
          <div className="title-box">
            <div className="page-title">
              {data.tours_title.value}
            </div>
            <div className="page-title-comment">
              {windowWidth>768 ? data.tours_comment.value : data.tours_comment_short.value}
            </div>
          </div>
          <div className="tours-box">
            {tours.map((item,index) => {
              if (index < colViewTours) {
                return (
                  <div className="tour-item" key={index}>
                    <TourItem tour={item} buttonTitle = {data.tours_button_title.value}/>
                  </div>
                )
              }               
            })}
          </div>
          <div className="view-more">{data.tours_view_more_text.value}</div>
        </div>
      </div>
    </Section>
  )
}

export default Tours