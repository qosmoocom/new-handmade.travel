import styled from "styled-components";
import "video-react/dist/video-react.css";
import { Player } from "video-react";

const Section = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  @media (min-width: 996px) {
    display: flex;
  }
  .section {
    margin: 20px 0;
    .line-div {
      border-left: 7px solid #4e8c54;
      padding: 15px;
      margin-bottom: 20px;
      height: 80%;
      @media (min-width: 576px) {
        padding: 5px 15px;
      }
      @media (min-width: 996px) {
        padding-right: 0;
        width: 100%;
      }
      p {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        padding: 0;
        @media (min-width: 576px) {
          font-size: 20px;
          line-height: 30px;
        }
      }
    }
    .btm {
      @media (min-width: 576px) {
        margin: 20px 0;
      }
      p {
        &:nth-child(1) {
          font-family: "Caveat";
          font-style: normal;
          font-weight: 400;
          font-size: 32px;
          line-height: 40px;
        }
        &:nth-child(2) {
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
  }
  .section2 {
    display: flex;
    justify-content: space-between;
    margin: 0;
    @media (min-width: 996px) {
      padding: 20px;
    }
    .text {
      width: 50%;
      padding: 20px;
      display: none;
      @media (min-width: 768px) {
          display: block;
        }
      @media (min-width: 996px) {
        padding: 0;
        padding-right: 20px;
      }
      p {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 25px;
        @media (min-width: 996px) {
          line-height: 20px;
        }
        @media (min-width: 1200px) {
          font-size: 17px;
          line-height: 25px;
        }
      }
    }
    .video {
      border: 10px solid #e5e5e5;
      width: 100%;
      height: fit-content;
      @media (min-width: 576px) {
        margin: 20px;
      }
      @media (min-width: 768px) {
        margin: 0;
        width: 50%;
      }
    }
  }
`;

export default function Chief() {
  return (
    <Section>
      <div className="section">
        <div className="line-div">
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry
          </p>
        </div>
        <div className="btm">
          <p>Ravshan Turakulov</p>
          <p>CEO handmade.travel</p>
        </div>
      </div>
      <div className="section2">
        <div className="text">
          <p>
            Наша миссия – знакомить путешественников с многовековым культурным
            наследием, прекрасными пейзажами и народа Узбекистана. Мы верим, что
            путешествия способствуют лучшему изучению культуры и самобытности
            страны. Для нас путешествия – это мост дружбы и взаимопонимания
            между путешественниками и местными жителями.
          </p>
        </div>
        <div className="video">
          <Player>
            <source src="./images/home/video1.mp4" />
          </Player>
        </div>
      </div>
    </Section>
  );
}
