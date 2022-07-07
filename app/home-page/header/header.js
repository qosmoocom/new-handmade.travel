import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { GoCalendar } from "react-icons/go";
import { BsPeople } from "react-icons/bs";

const Section = styled.div`
  background-color: #fff;
  padding: 5px;
  max-width: 1200px;
  margin: auto;
  @media (min-width: 576px) {
    padding: 15px;
  }
  .face {
    background-image: url("./images/home/Bg.png");
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    padding-bottom: 40px;
    .texts {
      text-align: center;
      padding: 70px 0;
      @media (min-width: 576px) {
        padding-bottom: 40px;
      }
      h1 {
        font-family: "Caveat";
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 70px;
        color: #fff;
        text-transform: initial;
        @media (min-width: 576px) {
          font-size: 70px;
        }
        @media (min-width:1300px) {
          font-size: 90px;
        }
        span {
          font-weight: 500;
          font-family: "Caveat";
          font-style: normal;
          font-size: 40px;
          line-height: 70px;
          @media (min-width: 576px) {
            font-size: 70px;
          }
          @media (min-width:1300px) {
          font-size: 90px;
        }
        }
      }
      p {
        font-family: "Caveat";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #fff;
        @media (min-width: 576px) {
          font-size: 30px;
          padding: 0 10%;
        }
        @media (min-width: 768px) {
          font-size: 35px;
          line-height: 30px;
        }
        @media (min-width:996) {
          padding: 0 20%;
        }
        @media (min-width:1300px) {
          padding: 0 22%;
        }
      }
    }
    .buttons {
      margin: 0 20px;
      @media (min-width: 576px) {
        text-align: center;
        margin-bottom: 40px;
      }
      

      button {
        background: #4e8c54;
        border: 1px solid #ffffff;
        border-radius: 5px;
        padding: 8px 17px;
        font-family: "Caveat";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        text-decoration-line: underline;
        color: #ffffff;
        &:nth-child(1){
          display: none;
        }
        @media (min-width: 576px) {
          font-size: 25px;
        }
        @media (min-width: 768px) {
          padding: 10px 40px;
        }
        @media (min-width:996px) {
          padding: 10px;
          width: 240px;
          margin: 0 20px;
          &:nth-child(1){
            display: inline;
          }
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <Section>
      <div className="face">
        <div className="texts">
          <h1>
            Туры в <span>Узбекистан</span>
          </h1>
          <p>
            Мы более 20 лет создаем туры и принимаем гостей. Ждем тебя у нас
          </p>
        </div>
        <div className="buttons">
          <button>Выбрать тур</button>
          <button>Создать тур самому</button>
        </div>
      </div>
    </Section>
  );
};

export default Header;
