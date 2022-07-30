import React from "react";
import styled from "styled-components";
import {useEffect, useState} from "react";
import Image from "next/image";

const Section = styled.div`

  .container-home-no-padding{
    margin:0 auto ;
    width: 100%;

    @media (min-width:1400px) {
      max-width: 1400px;
    }
  }

  .navbar{
    padding: 15px 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo{
    display: flex;
    align-items: center;
    img{
      width: 36px;
      height: 30px;
      margin-right: 10px;
      @media (min-width:768px) {
       width: 42px;
       height: 35px;
      }
    }
  }

  .logo-text{
    font-family: 'Oswald';
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    color: #F27648;
    width: 80px;
    @media (min-width:1400px) {
      font-size: 25px;
      line-height: 30px;
    }
  }

  .menu-mobile{
    width: 30px;
    height: 25px;
    position: relative;
    cursor: pointer;
    div{
      width: 100%;
      border: 1px solid #000;
    }
    .middle-div{
      margin: 10px 0px;
    }
    @media (min-width:768px) {
      display: none;
    }
  }

  .menu-box{
    display: flex;
    position: relative;
  }

  .menu{
    list-style: none;
    display: none;
    @media (min-width:768px) {
      display: flex;
    }
  }

  .menu-item {
    cursor: pointer;
    padding: 10px 20px;
    :hover{
      background-color: rgba(240,118,72,0.03);
      transform: translateY(-1px);
    }
    @media (min-width:768px) {
      font-size: 14px;
      line-height: 20px;
    }
    @media (min-width:1200px) {
      font-size: 20px;
      line-height: 25px;
    }
    
    a{
      text-decoration: none;
      color: #333;
    }
  }

  .menu-item-lang{
    display: flex;
    .ico{
      margin-left: 5px;
    }
   :hover {
    .menu-lang {
      display: block;
    }
   } 
  }

  .menu-lang {
    position: absolute;
    z-index:100;
    display: none;
    right: 20px;
    top: 40px;
    text-align: center;
    list-style: none;
    li {
      padding: 5px 30px;
      margin-bottom: 2px ;
      :hover{
        background-color: rgba(240,118,72,0.03);
        transform: translateY(-1px);
      }
    }
  }

  .left-panel{
    width: 80vw;
    height: 100vh;
    background-color: #f8f9fa;
    position: absolute ;
    z-index : 20;
    top: 0;
    left: -100vw;
    transition: all 1s ease 0s;
    padding: 20px 20px;
    .logo{
      margin-bottom: 20px;
    }
    .menu-item-lang{
      justify-content: space-between ;
    }
    
  }

  .link-box{
    display: flex;
    align-items: center;
    margin-top: 30px;
    img{
      width: 23px;
      height: 23px;
      margin-right: 10px;
    }
    .whatsapp{
      width: 20px;
      height: 20px;
    }
  }

  .left-menu{
    list-style: none;
    li{
      border-bottom: 1px solid #222;
      margin: 10px 0px;
      padding: 5px 5px 10px;
      width: 100%;
      cursor: pointer;
      :hover {
        background-color: #fff;
      }
    }
  }

  .left-menu-lang{
    list-style: none;
    li{
      border-bottom: 1px solid #222;
      margin: 10px 0px;
      padding: 5px 5px 10px;
      width: 100%;
      cursor: pointer;
      :hover {
        background-color: #fff;
      }
      a{
        text-decoration: none;
        color: #000 ;
      }
    }
  }

  .left-menu-lang{
    display: none;
    li{
      font-size: 15px;
      font-weight: 500;
    }
  }

  .left-panel-visible{
    left: 0;
    translate: transformX(-800px);
    transition: all 0.3s ease 0s;
    @media (min-width:768px) {
      display: -100vw;
    }
  }

  .box-visible{
    display: block ;
    transition: all 3s ease 0s;
  }

  .link-box{
    display: inline-block ;
    margin: 5px 0px ;
    height: 30px;
  }

  .header-box{
    /* display: none ; */
    @media (min-width:320px) {
      height: 200px;
    }
    @media (min-width:480px) {
      height: 225px;
    }
    @media (min-width:576px) {
      height: 255px;
    }
    @media (min-width:768px) {
      height: 287px;
    }
    @media (min-width:992px) {
      height: 299px;
    }
    @media (min-width:1200px) {
      height: 370px;
    }
    @media (min-width:1400px) {
      height: 495px;
    }
    width: auto;
    position: relative;
    img{
      position: absolute ;
      left: 0 ;
      top : 0;
      z-index : -1;   
      width: 100%;
      @media (min-width:320px) {
        height: 200px;
      }
      @media (min-width:480px) {
        height: 225px;
      }
      @media (min-width:576px) {
        height: 255px;
      }
      @media (min-width:768px) {
        height: 287px;
      }
      @media (min-width:992px) {
        height: 299px;
      }
      @media (min-width:1200px) {
        height: 370px;
      }
      @media (min-width:1400px) {
        height: 495px;
      }
    }
  }

  .header-general-title{
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 auto;

    @media (min-width:320px) {
      width: 300px;
      font-size: 26px;
      line-height: 30px;
      margin-bottom: 21px;
    }
    @media (min-width:480px) {
      width: 350px;
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 26px;
    }
    @media (min-width:576px) {
      width: 400px;
      font-size: 40px;
      line-height: 50px;
    }
    @media (min-width:768px) {
      margin-bottom: 30px;
    }
    @media (min-width:992px) {
    }
    @media (min-width:1200px) {
      width: 650px;
      font-size: 60px;
      line-height: 70px;
      margin-bottom: 56px;
    }
    @media (min-width:1400px) {
      width: 850px;
      font-size: 90px;
      line-height: 100px;
      margin-bottom: 56px;
    }
  }

  .header-button{
    background: #F37732;
    display: block;
    border-radius: 10px;
    border: none ;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-weight: 500;
    color: #FFFFFF;
    margin: 0 auto;
    cursor: pointer;
    
    @media (min-width:320px) {
      padding: 5px 10px;
      font-size: 15px;
      line-height: 22px;
    }
    @media (min-width:480px) {
      font-size: 20px;
      line-height: 22px;
    }
    @media (min-width:576px) {
      padding: 7px 15px;
    }
    @media (min-width:768px) {
    }
    @media (min-width:992px) {
      padding: 10px 20px;
    }
    @media (min-width:1200px) {
      font-size: 22px;
      line-height: 27px;
    }
    @media (min-width:1400px) {
      font-size: 30px;
      line-height: 40px;
    }
  }

  .header-content{
    @media (min-width:320px) {
      padding-top: 39px ;
    }
    @media (min-width:480px) {
      padding-top: 63px ;
    }
    @media (min-width:576px) {
      padding-top: 27px ;
    }
    @media (min-width:768px) {
      padding-top: 37px ;
    }
    @media (min-width:992px) {
    }
    @media (min-width:1200px) {
      padding-top: 50px ;
    }
    @media (min-width:1400px) {
      padding-top: 85px ;
    }
  }

`
export default function Header({data}) {
  
  const showLeftPanel = () =>{
    let leftPanel = document.getElementsByClassName('left-panel')[0]
    leftPanel.classList.contains('left-panel-visible') ? leftPanel.classList.remove('left-panel-visible') : leftPanel.classList.add('left-panel-visible') 
  }
  
  const showLeftPanelLang = () => {
    let leftPanelLang = document.getElementsByClassName('left-menu-lang')[0]
    leftPanelLang.classList.contains('box-visible') ? leftPanelLang.classList.remove('box-visible') : leftPanelLang.classList.add('box-visible') 
  }

  const leftPanelOnClick = (e) => {
    let target = e.target
    let leftPanel = document.getElementsByClassName('left-panel')[0]
    if (target.classList.contains('left-panel-visible')) leftPanel.classList.remove('left-panel-visible')
  }

  const [imgsrc, setImgSrc] = useState('320');

  useEffect(() => {
    
    if (319 < window.innerWidth && window.innerWidth < 576) {
      setImgSrc('320')
    }
    if (576 <= window.innerWidth && window.innerWidth < 768) {
      setImgSrc('576')
    }
    if (768 <= window.innerWidth && window.innerWidth < 992) {
      setImgSrc('768')
    }
    if (992 <= window.innerWidth && window.innerWidth < 1200) {
      setImgSrc('992')
    }
    if (1200 <= window.innerWidth && window.innerWidth < 1400) {
      setImgSrc('1200')
    }
    if (1400 <= window.innerWidth ) {
      setImgSrc('1400')
    }
  },[]);

  return (
    <Section>
      <div className="container-home">
        <div className="navbar">
          <a className="logo">
            <img src='./images/home/header/logo.png' alt='Logo'/>
            <div className="logo-text">Handmade travel</div>
          </a>
          <div className="menu-box">
            <ul className="menu">
              {
                data.menu.arr.map((item, index) => {
                    if (item.link != 'lang') {
                      return (
                        <li className="menu-item" key={index}>
                          <a href={item.link}>{item.title}</a>
                        </li>      
                      )
                    } else {
                      return (
                        <li className="menu-item menu-item-lang" key={index} >
                          <div className="text">{item.title}</div>
                          <div className="ico">
                            <img src='./images/home/header/bottom.png' alt='Logo'/>  
                          </div>
                          <ul className="menu-lang">
                            {
                              data.menu_lang.arr.map((item, index) => {
                                return (
                                  <li className="menu-lang-item" key={index}>
                                    <a href={item.link}>{item.title}</a>
                                  </li>      
                                )
                              })
                            }
                          </ul>             
                        </li>
                      )  
                    }
                })
              }
            </ul>
            
            <div className="menu-mobile" onClick={showLeftPanel}>
              <div></div>
              <div className="middle-div"></div>
              <div></div>
            </div>
            
          </div>
        </div>
        <div className="left-panel" onClick ={leftPanelOnClick}>
          <a className="logo">
            <img src='./images/home/header/logo.png' alt='Logo'/>
            <div className="logo-text">Handmade travel</div>
          </a>
          <ul className="left-menu">
              {
                data.menu.arr.map((item, index) => {
                    if (item.link != 'lang') {
                      return (
                        <li className="menu-item" key={index}>
                          <a href={item.link}>{item.title}</a>
                        </li>     
                      )
                    } else {
                      return (
                        <li className="menu-item menu-item-lang" onClick={showLeftPanelLang} key={index}>
                          <div className="text">{item.title}</div>
                          <div className="ico">
                            <img src='./images/home/header/bottom.png' alt='Logo'/>  
                          </div>   
                          <ul className="left-menu-lang">
                            {
                              data.menu_lang.arr.map((item, index) => {
                                return (
                                  <li className="left-menu-lang-item" key ={index}>
                                    <a href={item.link}>{item.title}</a>
                                  </li>      
                                )
                              })
                            }
                          </ul>          
                        </li>
                      )  
                    }
                })
              }
            </ul>
            {/* <ul className="left-menu-lang">
              {
                data.menu_lang.arr.map((item, index) => {
                  return (
                    <li className="left-menu-lang-item" key ={index}>
                      <a href={item.link}>{item.title}</a>
                    </li>      
                  )
                })
              }
            </ul> */}
            <div className="link-box">
              {
                data.link_for_contact_me.arr.map((item, index) => {
                  return (
                    <a href={item.link} key={index}>
                      <img src={item.src} alt={item.alt} />
                    </a>      
                  )
                })
              }
              
            </div>
        </div>
      </div>
      <div className="header-box">
        <img src={`/images/home/header/img${imgsrc}.jpg`} alt="" />
        <div className="container-home">
          <div className="header-content">
            <div className="header-general-title">
              {data.header_general_title.value}
            </div>
            <button className="header-button">
              {data.header_button_title.value}
            </button>
          </div>
        </div>
      </div>
      
    </Section>
  )
}

// export default Header;