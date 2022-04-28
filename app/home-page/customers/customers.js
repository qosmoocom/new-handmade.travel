import React from "react";
import styled from "styled-components";
import Customer from "../components/customer";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Section = styled.div`
  max-width: 1250px;
  margin: auto;
  margin-bottom: 110px;
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
  .title {
    font-weight: 700;
    font-size: 39px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.005em;
    color: #11142d;
    margin-bottom: 55px;
  }
  .slider {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn {
      width: 56px;
      height: 56px;
      align-items: center;
      padding: 15px;
      background: #ecddd6;
      border-radius: 8px;
      &:hover {
        background-color: #f58434ab;
      }
      &:active {
        background-color: #f58634;
      }
    }
    #items {
      display: flex;
      max-width: 1080px;
      overflow-x: hidden;
      scroll-behavior: smooth;
      animation-duration: 0.2s;
      z-index: 1;
      padding-bottom: 50px;
    }
  }
`;

const Customers = () => {
  const RightBtn = () => {
    document.getElementById("items").scrollBy(515, 0);
  };

  const LeftBtn = () => {
    document.getElementById("items").scrollBy(-515, 0);
  };

  const data = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }];

  const items = data.map((item, index) => {
    return <Customer key={index} name={item.name} />;
  });

  return (
    <Section>
      <div className="title">Overheard from Customers</div>
      <div className="slider">
        <div className="left-btn btn" onClick={LeftBtn}>
          <FiChevronLeft size={26} />
        </div>
        <div id="items">{items}</div>
        <div className="right-btn btn" onClick={RightBtn}>
          <FiChevronRight size={26} />
        </div>
      </div>
    </Section>
  );
};

export default Customers;
