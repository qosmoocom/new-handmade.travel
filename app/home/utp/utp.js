import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const Section = styled.div`
  .utp-box{
    @media (min-width:320px) {
      margin-top: 20px;
    }
    @media (min-width:480px) {
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
    }
    @media (min-width:992px) {
    display: flex;
    }
    @media (min-width:1200px) {
    }
    @media (min-width:1400px) {
    }
  }

  .utp-item{
    @media (min-width:320px) {
      border: 0.5px solid #555555;
      border-radius: 10px;
      margin-bottom: 24px;
      padding: 15px ;
    }
    @media (min-width:480px) {
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
      display: flex;
    }
    @media (min-width:992px) {
      display: block;
      margin: 0px 10px;
    }
    @media (min-width:1200px) {
    }
    @media (min-width:1400px) {
    }
  }

  .img-box{
    display: flex;
    @media (min-width:320px) {
      .utp-item-title{
        display: none;
      }
    }
    @media (min-width:480px) {
      .utp-item-title{
        display: block;
        margin: 10px 5px 0 20px;
      }
      margin-bottom: 15px;
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
      .utp-item-title{
        display: none;
      }
    }
    @media (min-width:992px) {
    .utp-item-title{
        display: block;
      }
    }
    @media (min-width:1200px) {
    }
    @media (min-width:1400px) {
    }
  }

  .content-box{
    @media (min-width:480px) {
      .utp-item-title{
        display: none;
      }
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
    .utp-item-title{
        display: block;
      }
    margin-left: 20px;
    }
    @media (min-width:992px) {
    .utp-item-title{
       display: none;
      }
    margin-left: 0px;
    }
    @media (min-width:1200px) {
    }
    @media (min-width:1400px) {
    }
  }

  .utp-box img{
    @media (min-width:320px) {
      display: none;
    }
    @media (min-width:480px) {
      display: block ;
      width: 50px;
      height: 40px;
    }
    @media (min-width:576px) {
      width: 60px;
      height: 48px;
    }
    @media (min-width:768px) {
      width: 70px;
      height: 56px;
    }
    @media (min-width:992px) {
    }
    @media (min-width:1200px) {
    }
    @media (min-width:1400px) {
    }
  }

  .utp-item-title{
    @media (min-width:320px) {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 10px;
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
      font-size: 18px;
      line-height: 20px;
    }
    @media (min-width:1400px) {
    }
  }

  .utp-item-text{
    @media (min-width:320px) {
      font-weight: 300;
      font-size: 14px;
      line-height: 18px;
    }
    @media (min-width:480px) {
      font-size: 15px;
      line-height: 20px;
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
    }
    @media (min-width:992px) {
    }
    @media (min-width:1200px) {
      font-size: 16px;
      line-height: 22px;
    }
    @media (min-width:1400px) {
    }
  }
`
const Utp = ({data}) => {
  
  const [windowWidth, setWithWindow] = useState()

  useEffect(() => {
    setWithWindow(window.innerWidth)
  },[]);

  return (
    <Section>
      <div className="container-home">
        <div className="utp block">
          <div className="title-box">
            <div className="page-title">
              {data.utp_title.value}
            </div>
            <div className="page-title-comment ">
              {windowWidth>768 ? data.utp_comment.value : data.utp_comment_short.value}
            </div>
          </div>
          <div className="utp-box">
            {data.utp_list.arr.map((item,index) => {
              return (
                <div className="utp-item" key={index}>
                  <div className="img-box">
                    <img src={item.src} alt={item.alt} />
                    <div className="utp-item-title">{item.title}</div>
                  </div>
                  <div className="content-box">
                    <div className="utp-item-title">{item.title}</div>
                    <div className="utp-item-text">{item.comment}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Utp