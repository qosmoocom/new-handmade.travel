import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const Handler = () => {
    if (active) {
      setActive(false);
    }
    if (!active) {
      setActive(true);
    }
  };
  return (
    <Section>
      <div className="head">
        <div className="section">
          <a href="tel:+78123095211">+78123095211</a>
        </div>
        <div className="section">
          <a>Войти</a>
          <a>Регистрация</a>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <div>
            <p>
              <span>Handmade</span>.travel
            </p>
          </div>
          <div className="burger" onClick={Handler}>
            <AiOutlineMenu />
          </div>
          <ul>
            <li>
              <a>Главная</a>
            </li>
            <li>
              <a>Туры</a>
            </li>
            <li>
              <a>Города</a>
            </li>
            <li>
              <a>Блог</a>
            </li>
            <li>
              <a>Контакты</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`navbar-mobi ${active ? "active" : ""}`}>
        <div className="back">
          <AiOutlineClose onClick={Handler} />
        </div>
        <ul>
          <li>
            <a>Главная</a>
          </li>
          <li>
            <a>Туры</a>
          </li>
          <li>
            <a>Города</a>
          </li>
          <li>
            <a>Блог</a>
          </li>
          <li>
            <a>Контакты</a>
          </li>
        </ul>
      </div>
    </Section>
  );
};

const Section = styled.div`
max-width: 1200px;
margin: auto;
  * {
  }
  .head {
    padding: 10px;
    background-color: rgba(217, 217, 217, 0.5);
    display: flex;
    justify-content: space-between;
    @media (min-width:1200px) {
          background-color: #fff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.5);
      font-family: Noto Sans;
      font-size: 12px;
      font-weight: 400;
      &:nth-child(2) {
        margin-left: 20px;
      }
      @media (min-width: 576px) {
        font-size: 16px;
      }
    }
  }
  .navbar {
    padding: 20px;
    .logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-family: Caveat;
        padding: 0;
        span {
          color: #4e8c54;
          font-family: Caveat;
        }
        @media (min-width: 576px) {
          font-size: 30px;
        }
      }
      & > div {
        font-size: 25px;
        @media (min-width: 576px) {
          font-size: 30px;
        }
      }
      .burger{
        @media (min-width:996px) {
          display: none;
        }
      }
      ul {
        display: none;
        li {
          list-style: none;
          padding: 0 20px;
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 17px;
          line-height: 25px;
        }
        @media (min-width:996px) {
          display: flex;
        }
      }
    }
  }
  .navbar-mobi {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    top: 50%;
    opacity: -1;
    z-index: -1;
    transition: all ease-in-out 0.2s;
    &.active {
      top: 0;
      opacity: 1;
      z-index: 5;
    }
    .back {
      padding: 20px;
      font-size: 25px;
      display: flex;
      justify-content: flex-end;
      @media (min-width: 576px) {
        font-size: 30px;
      }
    }
    ul {
      display: flex;
      flex-flow: column;
      li {
        padding: 10px 20px;
        list-style: none;
        transition: all ease-in-out 0.15s;
        &:hover {
          background-color: rgba(217, 217, 217, 0.5);
        }
        a {
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 25px;
          @media (min-width: 576px) {
            font-size: 18px;
          }
        }
      }
    }
  }
`;

export default Navbar;
