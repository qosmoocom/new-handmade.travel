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

const Tours = ({data}) => {
  const tours = [
    {tourId: 'ssss', tourTitle: 'Вкусный Узбекистан', tourSrc: './images/home/tours/t1.jpg', tourInfo: 'Авторская программа вкусных развлечений, аппетитных экскурсий и уникальных гастрономических открытий', tourPrice: '$ 1100', tourDays: 'Программа тура 1 дней'},
    {tourId: 'aaaa', tourTitle: 'По просторам Узбекистана', tourSrc: './images/home/tours/t2.jpg', tourInfo: 'Просторы Узбекистана вкусных развлечений, аппетитных экскурсий и уникальных гастрономических открытий', tourPrice: '$ 1200', tourDays: 'Программа тура 2 дней'},
    {tourId: 'bbbb', tourTitle: 'Коуч тур в Узбекистан', tourSrc: './images/home/tours/t3.jpg', tourInfo: 'Коуч тур в Узбекистан вкусных развлечений, аппетитных экскурсий и уникальных гастрономических открытий', tourPrice: '$ 1300', tourDays: 'Программа тура 3 дней'},
    {tourId: 'eeee', tourTitle: 'Зиарат тур Узбекистан', tourSrc: './images/home/tours/t4.jpg', tourInfo: 'Зиарат Тура в Узбекистан вкусных развлечений, аппетитных экскурсий и уникальных гастрономических открытий', tourPrice: '$ 1400', tourDays: 'Программа тура 4 дней'},
    {tourId: 'ssss', tourTitle: 'Виза тур Узбекистан', tourSrc: './images/home/tours/t5.jpg', tourInfo: 'Виза тур Узбекистан вкусных развлечений, аппетитных экскурсий и уникальных гастрономических открытий', tourPrice: '$ 1500', tourDays: 'Программа тура 5 дней'},
    {tourId: 'aaaa', tourTitle: 'Древний Самарканд', tourSrc: './images/home/tours/t6.jpg', tourInfo: 'Древний Самарканд вкусных развлечений, аппетитных экскурсий и уникальных гастрономических открытий', tourPrice: '$ 1600', tourDays: 'Программа тура 6 дней'},
    {tourId: 'bbbb', tourTitle: 'Красивый Бухара', tourSrc: './images/home/tours/t7.jpg', tourInfo: 'Красивый Бухара вкусных развлечений, аппетитных экскурсий и уникальных гастрономических открытий', tourPrice: '$ 1700', tourDays: 'Программа тура 7 дней'},
    {tourId: 'eeee', tourTitle: 'Хорезм, Хива. Самарканд', tourSrc: './images/home/tours/t8.jpg', tourInfo: 'Хорезм, Хива. Самарканд вкусных развлечений, аппетитных экскурсий и уникальных гастрономических открытий', tourPrice: '$ 1800', tourDays: 'Программа тура 8 дней'}
  ]

  const [colViewTours, setcolViewTours] = useState(3);

  useEffect(() => {
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
              {data.tours_comment.value}
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