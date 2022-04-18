import Image from "next/image";
import React from "react";
import { BsGeoAlt, BsTwitter, BsYoutube, BsTelegram } from "react-icons/bs";
import { FiPhone, FiInstagram } from "react-icons/fi";
import { TiMail } from "react-icons/ti";
import { ImFacebook2 } from "react-icons/im";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  background: rgba(254, 242, 241, 0.5);
  padding-top: 42px;
  .big {
    max-width: 1250px;
    margin: auto;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    /* grid-template-columns: auto auto auto auto auto; */
    li {
      list-style: none;
      margin-bottom: 22px;
    }
    .container {
      width: fit-content;
      margin: 0;
      form {
        display: flex;
        flex-flow: column;
        input,
        button {
          background: #f4f4f4;
          border-radius: 8px;
          padding: 14px 20px;
          outline: none;
          border: none;
        }
        button {
          background: #f58634;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          text-align: center;
          color: #ffffff;
          margin-top: 12px;
        }
      }
      h4 {
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        color: #1b1d21;
        margin-bottom: 30px;
        padding-top: 10px;
      }
      .logo {
        display: flex;
        margin-bottom: 15px;
        align-items: center;
        h4 {
          font-weight: 700;
          font-size: 18px;
          line-height: 50px;
          color: #f37648;
          margin-left: 7px;
          margin: 0;
          padding: 0;
        }
      }
      .info {
        ul {
          li {
            list-style: none;
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            span {
              margin-right: 8px;
            }
            p {
              font-weight: 400;
              font-size: 14px;
              line-height: 16px;
              letter-spacing: 0.005em;
              color: #1b1d21;
            }
          }
        }
      }
      .icons {
        a {
          margin-right: 30px;
        }
      }
    }
  }
  .small {
    background: rgb(209, 202, 202);
    width: 100%;
    padding: 20px;
    & > div {
      max-width: 1250px;
      margin: auto;
      display: grid;
      grid-template-columns: auto auto;
    }
    .author {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
    .terms {
      display: flex;
      justify-content: space-between;
      div {
        font-weight: 600;
        font-size: 14px;
        line-height: 125%;
        letter-spacing: 0.005em;
        color: #1b1d21;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Section>
      <div className="big">
        <div className="container">
          <div className="logo">
            <Image src="/images/Navbar.png" width={44} height={38} />
            <h4>HANDMADE.TRAVEL</h4>
          </div>
          <div className="info">
            <ul>
              <li>
                <span className="icon">
                  <BsGeoAlt size={24} />
                </span>
                <p>Plaza Kuk Saroy 1, Samarkand 140157</p>
              </li>
              <li>
                <span className="icon">
                  <FiPhone size={24} />
                </span>
                <p>(+33) 422 840 285</p>
              </li>
              <li>
                <span className="icon">
                  <TiMail size={24} />
                </span>
                <p>info@handmade.travel</p>
              </li>
            </ul>
          </div>
          <div className="icons">
            <a href="" style={{ color: "black" }}>
              <ImFacebook2 />
            </a>
            <a href="" style={{ color: "black" }}>
              <BsTwitter />
            </a>
            <a href="" style={{ color: "black" }}>
              <FiInstagram />
            </a>
            <a href="" style={{ color: "black" }}>
              <BsYoutube />
            </a>
            <a href="" style={{ color: "black" }}>
              <BsTelegram />
            </a>
          </div>
        </div>
        <div className="container">
          <h4>Tours</h4>
          <ul>
            <li>Special Deals</li>
            <li>Popular</li>
            <li>Recomendation</li>
            <li>Best price</li>
          </ul>
        </div>
        <div className="container">
          <h4>About</h4>
          <ul>
            <li>How to Book</li>
            <li>Coreers</li>
            <li>About us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="container">
          <h4>Services</h4>
          <ul>
            <li>Flight</li>
            <li>Hotels</li>
            <li>Train</li>
            <li>Guide</li>
          </ul>
        </div>
        <div className="container">
          <h4>Subscribe Us</h4>
          <form action="">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email here..."
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="small">
        <div>
          <div className="author">
            © 2022 handmade.travel by Silk Road Destinations, Plaza Kuk Saroy 1,
            Samarkand 140157, Licence № T-0504-14
          </div>
          <div className="terms">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Lecense</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
