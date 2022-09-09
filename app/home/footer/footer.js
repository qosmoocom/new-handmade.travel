import React, {useEffect, useState} from "react";
import styled from 'styled-components'

const Section = styled.div`
  .footer{
    margin-top: 20px;
    border-top: 1px solid #1698A0;
    padding: 30px 0px 20px;
    li {
      list-style: none;
    }
    a{
      text-decoration: none;
      color: #333;
    }
  }

  .info {
    margin-bottom: 20px;
  }

  

  .info-text{
    font-weight: 300;
    
    @media (min-width:320px) {
      font-size: 16px;
      line-height: 22px;
      text-align: justify;
    }
    
  }

  .payment{
    @media (min-width:320px) {
      display: flex;
      align-items: center ;
    }

    width: 250px;

    img{
      margin-right: 10px;
    }
    
  }

  .title {
    @media (min-width:320px) {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      margin-bottom: 10px;
    }
    
  }

  .footer-list-item {
    @media (min-width:320px) {
      font-weight: 300;
      font-size: 16px;
      line-height: 22px;
    }
  }

  .contacts-link-item{
    @media (min-width:320px) {
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      margin-right: 5px;
      text-decoration: underline !important;
    }
  }

  .info-block{
    @media (min-width:320px) {
      margin-bottom: 20px;
    }

    @media (min-width:480px) {
      
    }
    @media (min-width:576px) {
      max-width: 250px;
    }
  }

  

  .footer-blocks-box{
    @media (min-width:320px) {
    }

    @media (min-width:480px) {
      display: flex;
      flex-wrap: wrap ;
      justify-content: space-between ;
    }
  }

  .footer-bottom-box{
    display: flex;
    justify-content: space-between ;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .footer-bottom-item{
    @media (min-width:320px) {
      margin: 10px 0px;
    }

    @media (min-width:576px) {
    }
  }

  .copyrigth{
    font-size: 14px;
    font-weight: 300;
  }

  .links-item{
    margin-right: 10px;
  }

  .first-co{
    display: none;
    @media (min-width:880px) {
      display: block;
    }
  }

  .second-co{
    @media (min-width:880px) {
      display: none;
    }
  }
`

const Footer = ({data }) => {

  let secondNumber

  if (data.footer_contacts_second_phone_number.value != '') {
    secondNumber = (
      <>
        <li className="footer-list-item"><a href={`telto:${data.footer_contacts_second_phone_number.value}`}>{`${data.footer_contacts_second_phone_number.value} - ${data.footer_contacts_second_phone_region.value}`}</a></li>
      </>
    )
  } else secondNumber = null

  return (
    <Section>
      <div className="footer">
        <div className="container-home">
          <div className="footer-blocks-box">
            <div className="info info-block">
              <div className="info-title title">{data.footer_info_title.value}</div>
              <div className="info-text">{data.footer_info_text.value}</div>
              
            </div>

            <div className="contacts info-block">
              <div className="title">{data.footer_contacts_title.value}</div>
              <ul className="contacts-list footer-list">
                <li className="footer-list-item">
                  <a href={`telto:${data.footer_contacts_first_phone_number.value}`}>{`${data.footer_contacts_first_phone_number.value} - ${data.footer_contacts_first_phone_region.value}`}</a>
                </li>
                {secondNumber}
                <li className="footer-list-item">
                  <a href={`telto:${data.footer_contacts_mail.value}`}>{data.footer_contacts_mail.value}</a>
                </li>
                <li className="footer-list-item">{data.footer_contacts_adress.value}</li>
                <li className="contacts_links-box">
                  {data.footer_contats_links.arr.map((item, index) => {
                    return(
                        <a href={item.link} className="contacts-link-item" key={index}>{item.title}</a>
                      )
                  })}
                </li>
              </ul>
            </div>
            
            <div className="service info-block">
              <div className="title">{data.footer_service_title.value}</div>
              <ul className="service-list footer-list">
                {data.footer_service_list.arr.map((item, index) => {
                  return(
                    <li className="footer-list-item" key ={index}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            
            <div className="company info-block">
              <div className="title">{data.footer_company_title.value}</div>
              <ul className="company-list footer-list">
                {data.footer_company_list.arr.map((item, index) => {
                  return(
                    <li className="footer-list-item" key ={index}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  )
                })}
              </ul>
              
            </div>
          </div>
    
          <div className="footer-bottom-box">
            <div className="links footer-bottom-item">
                {data.footer_links.arr.map((item, index) => {
                  return(
                    <a href={item.link}> 
                      <img className="links-item" src={item.src} alt={item.alt} key ={index} />
                    </a>
                    
                  )
                })}
            </div>

            <div className="copyrigth footer-bottom-item first-co">© 2022 handmade.travel by Silk Road Destinations</div>

            <div className="payment footer-bottom-item">
              {data.footer_payment.arr.map((item, index) => {
                return(
                  <img className="payment-item mastercard" src={item.src} alt = {item.alt} key ={index}/>
                )
              })}
            </div>

            <div className="copyrigth footer-bottom-item second-co">© 2022 handmade.travel by Silk Road Destinations</div>

          </div>
        </div>
      </div>
      
    </Section>
  )
}

export default Footer