import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import Link from "../../components/Link";

const Section = styled.div`
  .footer{
    border-top: 1px solid #1698A0;
    padding: 30px 0px 20px;
    background-color : #fff;
    li {
      list-style: none;
    }
    a{
      text-decoration: none;
      color: #000;
    }
  }

  .info {
    margin-bottom: 20px;
  }

  .info-text{
    @media (min-width:320px) {
      font-size: 16px;
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
      margin-bottom: 10px;
    }
  }

  .footer-list-item {
    z{
      color: #0645AD;
    }
    @media (min-width:320px) {
      font-size: 16px;
    }
  }

  .contacts-link-item{
    @media (min-width:320px) {
      font-size: 16px;
      margin-right: 5px;
      text-decoration: underline !important;
    }
  }

  .info-block{
    line-height : 1.5;
    @media (min-width:320px) {
      margin-bottom: 20px;
    }
    @media (min-width:576px) {
      max-width: 250px;
    }
    @media (min-width:992px) {
      max-width: 260px;
    }
  }

  .footer-blocks-box{
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
  }

  .copyrigth{
    font-size: 14px;
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
        <li className="footer-list-item"><a href={`telto:${data.footer_contacts_second_phone_number.value}`}><z>{data.footer_contacts_second_phone_number.value}</z> {`- ${data.footer_contacts_second_phone_region.value}`}</a></li>
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
              {data.footer_info_text.arr.map(item => {
                return (
                  <div className="info-text">{item.value}</div>
                )
              })}
            </div>

            <div className="contacts info-block">
              <div className="title">{data.footer_contacts_title.value}</div>
              <ul className="contacts-list footer-list">
                <li className="footer-list-item">
                  <a href={`telto:${data.footer_contacts_first_phone_number.value}`}><z>{data.footer_contacts_first_phone_number.value}</z> {`- ${data.footer_contacts_first_phone_region.value}`}</a>
                </li>
                {secondNumber}
                <li className="footer-list-item">
                  <a href={`telto:${data.footer_contacts_mail.value}`}><z>{data.footer_contacts_mail.value}</z></a>
                </li>
                <li className="footer-list-item">{data.footer_contacts_adress_1.value}</li>
                <li className="footer-list-item">{data.footer_contacts_adress_2.value}</li>
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
                      <Link href={item.link}>{item.name}</Link>
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
                      <Link href={item.link}>{item.name}</Link>
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