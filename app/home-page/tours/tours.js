import React from "react";
import styled from "styled-components";
import Onetour from "../components/oneTour";
import Toursgroup from "../components/ToursGroup";

const Tours = () => {
  return (
    <Tourss>
      <div className="title">
        <h3>
          Choose the <span>best</span> tour for vacation
        </h3>
        <p>
          We always our customers happy by providing as many choices as possible
          top tourist destinations for you with advantage.
        </p>
      </div>
      <div className="select">
        <ul>
          <li className="active">Special Deals</li>
          <li>Populer</li>
          <li>Recommendation</li>
          <li>Best Price</li>
        </ul>
      </div>
      <Toursgroup />
      <div className="more">
        <button>Explore More</button>
      </div>
    </Tourss>
  );
};

const Tourss = styled.div`
  * {
    font-family: "Mulish";
  }
  max-width: 1250px;
  margin: 0 auto;
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    /* padding: 0 50px; */
    h3 {
      font-size: 48px;
      font-weight: 700;
      line-height: 60px;
      color: #323232;
      max-width: 40%;
      span {
        color: #f3692e;
      }
    }
    p {
      font-size: 20px;
      line-height: 36px;
      color: #1b1d21;
      max-width: 45%;
    }
  }
  .select {
    margin-bottom: 30px;
    ul {
      display: flex;
      li {
        list-style: none;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #646464;
        margin-right: 40px;

        padding-bottom: 10px;
      }
      .active {
        color: #323232;
        border-bottom: #f58634 2px solid;
      }
    }
  }
  .more {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 70px;
    button {
      width: 188px;
      height: 56px;
      border-radius: 12px;
      border: none;
      color: #fff;
      background-color: #f58634;
      margin: auto;
    }
  }
`;

export default Tours;
