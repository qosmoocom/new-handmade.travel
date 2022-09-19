import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = styled.div`

  .authors{
    margin-bottom: 20px ;
  }

  .slick-dots {
  bottom: -40px;
 }

 .authors-title {
  @media (min-width:320px) {
    min-height : 40px;
  }

  @media (min-width:1200px) {
   
    min-height : 44px;
  }

}

`

const Authors = ({data}) => {
 
  const [windowWidth, setWithWindow] = useState()
  const [colslidesToShow, setColslidesToShow] = useState(1)

  let settings = {
      dots: true,
      infinite: false,
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
    for (let e of button.parentNode.getElementsByClassName('link')) { e.classList.remove('not-visible') }
  }

  return (
    <Section>
      <div className="container-home">
          <div className="authors block">
            <div className="title-box">
              <div className="page-title">
                {data.authors_title.value}
              </div>
              <div className="page-title-comment ">
                {windowWidth>768 ? data.authors_comment.value : data.authors_comment_short.value}
              </div>
            </div>
            <div className="list-box">
              <Slider {...settings}>
                {data.authors_list.arr.map((item,index) => {
                  return (
                    <div className="home-list-item-item" key={index}>
                      <div className="home-list-item" key={index}>
                        <div className="home-img-box">
                          <img src={item.src} alt={item.alt} />
                        </div>
                        
                        <div className="content-box">
                          <div className="home-list-item-title authors-title">{item.name}</div>
                          <div className="home-list-item-text">{item.info}</div>
                        </div>
                        <div className="action_box">
                          <div className="home-list-item-button" onClick={showAuthorLinkBox}>{data.authors_button_link.value}</div>
                          <div className="home-link-box">
                            <a href={item.facebook} className='link not-visible'><img src="./images/home/header/ico/facebook.svg" alt="facebook"/></a>
                            <a href={item.telegram} className='link not-visible'><img src="./images/home/header/ico/telegram.svg" alt="telegram"/></a>
                            <a href={item.whatsapp} className='link not-visible'><img src="./images/home/header/ico/whatsapp.svg" alt="whatsapp"/></a>
                          </div>
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

export default Authors