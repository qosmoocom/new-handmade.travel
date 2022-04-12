import React from "react";
import styled from "styled-components";
import { AiOutlineLike } from "react-icons/ai";

const Benefit = () => {
  return (
    <BeneFit>
      <div className="image">
        <img src="/images/like.svg" alt="" />
      </div>
      <div className="texts">
        <p className="title">Excellent Trip</p>
        <p className="text">
          Sometimes features require a short description. This can be detailed
          description or just a short text.
        </p>
        <a href="#">Learn More ></a>
      </div>
    </BeneFit>
  );
};

const BeneFit = styled.div`
  * {
    font-family: "Mulish";
    box-sizing: border-box;
    font-style: normal;
  }
  width: 356px;
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
    }
    .text {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: #1b1d21;
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

export default Benefit;
