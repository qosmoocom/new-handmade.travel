import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Sec_Header = () => {
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
        <div className="filtr">
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
        </div>
      </div>
      <div className="image">
        <Image src="/images/minora.webp" width={1250} height={543} />
      </div>
    </Section>
  );
};

const Section = styled.div`
  max-width: 1250px;
  margin: 50px auto;
  margin-bottom: 150px;
  * {
    font-family: "Mulish";
    font-weight: 600;
    font-size: 16px;
    color: #515151;
  }
  .top {
    display: flex;
    position: relative;
    .texts {
      max-width: 50%;
      h1 {
        font-size: 62px;
        font-weight: 700;
        color: #1b1d21;
        margin-bottom: 16px;
      }
      p {
        font-size: 18px;
        line-height: 20px;
        font-weight: 400;
        color: #676b76;
        margin-bottom: 50px;
      }
    }
    .filtr {
      width: 380px;
      background-color: #fff;
      padding: 25px 20px;
      position: absolute;
      right: 95px;
      z-index: 3;
      h3 {
        font-size: 20px;
        line-height: 25px;
        font-weight: 600;
        color: #000;
        text-align: center;
      }
      label {
        display: flex;
        flex-flow: column-reverse;
        padding: 15px;
        background-color: #f4f4f4;
        border-radius: 12px;
        margin: 25px 0;
        color: #969696;
        select {
          margin-bottom: 15px;
          background-color: #f4f4f4;
          outline: none;
          width: fit-content;
          border: none;
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
          color: #323232;
        }
      }
      button {
        width: 100%;
        background-color: #f58634;
        border: none;
        height: 55px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 500;
        color: #fff;
      }
    }
  }
`;

export default Sec_Header;
