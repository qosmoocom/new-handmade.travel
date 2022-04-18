import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { GoCalendar } from "react-icons/go";
import { BsPeople } from "react-icons/bs";

const Section = styled.div`
  max-width: 1250px;
  padding: 20px;
  margin: auto;
  margin-bottom: 20px;
  * {
    font-family: "Mulish";
    font-weight: 600;
    font-size: 16px;
    color: #515151;
  }
  @media (min-width: 1300px) {
    padding: 20px 0;
  }
  .top {
    display: flex;
    position: relative;
    .texts {
      @media (min-width: 768px) {
        width: 50%;
      }
      @media (min-width: 900px) {
        width: 60%;
      }
      h1 {
        font-size: 30px;
        font-weight: 500;
        color: #1b1d21;
        margin-bottom: 16px;
        @media (min-width: 1024px) {
          font-size: 50px;
          font-weight: 600;
        }
        @media (min-width: 1300px) {
          font-size: 62px;
          font-weight: 700;
        }
      }
      p {
        font-size: 12px;
        line-height: 20px;
        font-weight: 600;
        color: #676b76;
        margin-bottom: 20px;
        @media (min-width: 768px) {
          margin-bottom: 50px;
        }
        @media (min-width: 1024px) {
          font-size: 15px;
          font-weight: 500;
        }
        @media (min-width: 1300px) {
          font-size: 18px;
          font-weight: 400;
        }
      }
    }
    .filtr {
      width: 300px;
      background-color: #fff;
      padding: 25px 20px;
      position: absolute;
      right: 5%;
      z-index: 3;
      display: none;
      border: 0.2px solid #00000078;
      box-sizing: border-box;
      @media (min-width: 768px) {
        display: block;
      }
      @media (min-width: 1300px) {
        width: 350px;
      }
      h3 {
        font-size: 15px;
        line-height: 25px;
        font-weight: 600;
        color: #000;
        text-align: center;
        @media (min-width: 1024px) {
          font-size: 18px;
          font-weight: 600;
        }
        @media (min-width: 1300px) {
          font-size: 16px;
        }
      }
      label {
        display: flex;
        flex-flow: column-reverse;
        padding: 10px;
        background-color: #f4f4f4;
        border-radius: 12px;
        margin: 20px 0;
        color: #969696;
        font-size: 13px;
        @media (min-width: 1024px) {
          font-size: 15px;
        }
        @media (min-width: 1300px) {
          font-size: 16px;
        }
        select {
          margin-bottom: 5px;
          background-color: #f4f4f4;
          outline: none;
          width: fit-content;
          border: none;
          font-size: 13px;
          font-weight: 400;
          line-height: 26px;
          color: #323232;
          @media (min-width: 1024px) {
            font-size: 15px;
          }
          @media (min-width: 1300px) {
            font-size: 16px;
            margin-bottom: 10px;
          }
        }
      }
      button {
        width: 100%;
        background-color: #f58634;
        border: none;
        height: 40px;
        border-radius: 12px;
        font-size: 13px;
        font-weight: 500;
        color: #fff;
        @media (min-width: 1024px) {
          font-size: 15px;
        }
        @media (min-width: 1300px) {
          font-size: 16px;
          height: 56px;
        }
      }
    }
  }
  .image {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
  .image-mobi {
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
  }
  .filtr-mobi {
    margin-top: 30px;
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
    form {
      border: 0.5px solid #000000;
      border-radius: 10px;
      padding: 5px;
      .selects {
        display: flex;
        justify-content: space-between;
        div {
          display: flex;
          background: #f4f4f4;
          border-radius: 12px 0 0 12px;
          padding: 8px;
          min-width: 130px;
          width: 49%;
          /* padding-right: 15px; */
          p {
            font-weight: 400;
            font-size: 10px;
            line-height: 13px;

            color: #969696;
            margin-left: 13px;
          }
        }
        .right {
          border-radius: 0 12px 12px 0;
        }
      }
      button {
        background: #f58634;
        border-radius: 12px;
        border: none;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
        line-height: 26px;
        width: 100%;
        padding: 5px 0;
        margin-top: 10px;
      }
    }
  }
`;

const Header = () => {
  return (
    <Section>
      <div className="top">
        <div className="texts">
          <h1>Immersive travel in Uzbekistan</h1>
          <p>
            Discover All destiny around the world. There are many beautiful
            places with their own uniqueness. Choose the best destiny and
            programs for your journey
          </p>
        </div>
        {/* <div className="filtr">
          <h3>Get Your Traveling Now</h3>
          <form action="">
            <label>
              When will it start?
              <select>
                <option value="">Date</option>
              </select>
            </label>
            <label for="select2">
              How many people?
              <select name="select2">
                <option value="">People</option>
              </select>
            </label>
            <button type="submit">Search Now</button>
          </form>
        </div> */}
      </div>
      <div className="image">
        <Image
          src="/images/minora.webp"
          width={1250}
          height={543}
          layout="responsive"
        />
      </div>
      <div className="image-mobi">
        <Image
          src="/images/header-mobi.webp"
          width={317}
          height={214}
          layout="responsive"
        />
      </div>
      {/* <div className="filtr-mobi">
        <form action="">
          <div className="selects">
            <div>
              <GoCalendar />
              <p>When will it start?</p>
            </div>
            <div className="right">
              <BsPeople />
              <p>When will it start?</p>
            </div>
          </div>
          <button type="submit">Search Now</button>
        </form>
      </div> */}
    </Section>
  );
};

export default Header;
