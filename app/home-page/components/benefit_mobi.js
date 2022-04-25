import React from "react";
import styled from "styled-components";

const Section = styled.div`
  max-width: 357px;
  padding: 20px;
  transition-duration: 0.1s;
  * {
    font-family: "Mulish";
    box-sizing: border-box;
    font-style: normal;
  }
  &:hover {
    background: #ffffff;
    box-shadow: 0px 15px 50px rgba(162, 162, 162, 0.2);
    border-radius: 16px;
    transform: translateY(-5px);
  }
  /* width: 356px; */
  display: flex;
  .image {
    min-width: 80px;
    height: 80px;
    border-radius: 16px;
    background: #efeeee;
    /* opacity: 0.1; */
    align-items: center;
    padding: 20px;
    margin-right: 20px;
    color: #2e2e2e;
    z-index: 2;
    /* display: none; */
    img {
      color: #2e2e2e;
      z-index: 3;
    }
  }

  .texts {
    .title {
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      color: #1b1d21;
      margin-bottom: 10px;
    }
    .text {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #1b1d21;
      margin-bottom: 20px;
    }
    a {
      font-weight: 700;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      color: #1b1d21;
    }
  }
`;

const BenefitMobi = ({ data }) => {
  return (
    <Section>
      <div className="image">
        <img src={data.img} alt="" />
      </div>
      <div className="texts">
        <p className="title">{data.title}</p>
        <p className="text">{data.disc}</p>
      </div>
    </Section>
  );
};

export default BenefitMobi;