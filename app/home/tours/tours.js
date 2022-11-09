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

  .view-more{
    font-weight: 700;
    text-align: center;
    cursor: pointer;
  }

  .element{
    @media (min-width:320px) {
      margin-bottom: 30px;
      width: 100%;
    }
  
    @media (min-width:480px) {
      width : 48%;
    }
    @media (min-width:768px) {
      width : 31%;
    }
  
    @media (min-width:992px) {
      width : 23%;
    }
  }
`

const Tours = ({data, currentTours, full=true}) => {

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

    if (full) setcolViewTours(100)

  },[]);
  

  useEffect(() => {
    let items = []
    currentTours.forEach(item => {
      let tourObject = JSON.parse(item.tourTexts)
      let element = {
        id : item._id,
        tourId: item.tour_id, 
        // tourTitle: tourObject.head_text_2.value,
        tourTitle : tourObject.index_page_tour_title.value,
        tourInfo: tourObject.index_page_tour_text.value,
        tourLang : item.language,
        tourSrc: tourObject.index_page_img_url.value,
        tourImgAlt : tourObject.index_page_img_alt.value,
        tourImgTitle : tourObject.index_page_img_title.value, 
        tourPrice: tourObject.tour_start_price.value,
        tourDays: tourObject.tour_days_col.value,
        tourOrder : +tourObject.index_page_tour_order.value,
      }
      items.push(element)
    });
    let newSortedItems = items.sort((a, b) => a.tourOrder > b.tourOrder ? 1 : -1);

    setTours(newSortedItems)
  },[currentTours]);

  const tourShowMore = (e) => {
    let element = e.target
    element.classList.add('not-visible')
    let tourItems = document.getElementsByClassName('element')

    for (let i=0; i< tourItems.length; i++) {
      tourItems[i].classList.remove('not-visible')
    }

  }
  let tour_show_more_button
  
  !full ? 
    tour_show_more_button = (<div className="view-more" onClick={tourShowMore}>{data.tours_view_more_text.value}</div>) 
    : 
    ''

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
                  <div className="element" key={index}>
                    <TourItem tour={item} buttonTitle = {data.tours_button_title.value}/>
                  </div>
                )
              } else {
                return (
                  <div className="element not-visible" key={index}>
                    <TourItem tour={item} buttonTitle = {data.tours_button_title.value}/>
                  </div>
                )
              }              
            })}
          </div>
          {tour_show_more_button}
        </div>
      </div>
    </Section>
  )
}

export default Tours