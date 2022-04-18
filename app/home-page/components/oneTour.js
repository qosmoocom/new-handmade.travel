import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { TiStarFullOutline } from "react-icons/ti";

const Section = styled.div`
  width: 47%;
  max-width: 290px;
  border-radius: 12px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition-duration: 0.1s;
  margin: 10px 4px;
  @media (min-width: 768px) {
    margin: 15px 9px;
  }
  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
    background: #ffffff;
    box-shadow: 0px 15px 50px rgba(162, 162, 162, 0.2);
    border-radius: 16px;
    transform: translateY(-5px);
  }
  * {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 500;
  }
  .image {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .price-day {
    display: flex;
    justify-content: space-between;
    margin: 10px 5px;
    .price {
      font-size: 14px;
      line-height: 18px;
      font-weight: 600;
      color: #f58634;
    }
    .day {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #1b1d21;
    }
  }
  .name {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #1b1d21;
    margin: 0 5px;
  }
  .author-rate {
    display: flex;
    justify-content: space-between;
    margin: 20px 5px 5px;
    .author {
      font-weight: 400;
      font-size: 12px;
      line-height: 28px;
      color: #1b1d21;
    }
    .stars {
      margin-top: 5px;
    }
  }
`;

const Onetour = ({ data }) => {
  return (
    <Section>
      <div
        className="image"
        style={{ borderTopRadius: "12px", overflow: "hidden" }}
      >
        <Image src={data.img} width={290} height={280} />
      </div>
      <div className="price-day">
        <p className="price">$ 1510</p>
        <p className="day">8 days</p>
      </div>
      <div className="name">{data.title}</div>
      <div className="author-rate">
        <p className="author">{data.author}</p>
        <div className="stars" style={{ color: "#f58634" }}>
          <TiStarFullOutline size={12} />
          <TiStarFullOutline size={12} />
          <TiStarFullOutline size={12} />
          <TiStarFullOutline size={12} />
          <TiStarFullOutline size={12} />
        </div>
      </div>
    </Section>
  );
};

export default Onetour;
