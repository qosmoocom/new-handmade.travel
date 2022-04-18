import React from "react";
import styled from "styled-components";
import Residen from "../components/residen";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Residens = () => {
  const RightBtn = () => {
    document.getElementById("residens").scrollBy(330, 0);
  };

  const LeftBtn = () => {
    document.getElementById("residens").scrollBy(-330, 0);
  };
  const data = [0, 1, 2, 3, 4];
  const items = data.map(() => {
    return <Residen />;
  });
  return (
    <Section>
      <div className="title">
        98% of residens <b>recommend us</b>
      </div>
      <div className="navigate">
        <div className="left-btn btn" onClick={LeftBtn}>
          <FiChevronLeft size={20} style={{ color: "#545961" }} />
        </div>
        <div className="right-btn btn" onClick={RightBtn}>
          <FiChevronRight size={20} style={{ color: "#545961" }} />
        </div>
      </div>
      <div id="residens">{items}</div>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 70px;
  @media (min-width: 360px) {
    padding: 20px;
  }
  @media (min-width: 1200px) {
    display: none;
  }
  .title {
    font-weight: 400;
    font-size: 25px;
    line-height: 35px;
    letter-spacing: 0.2px;
    color: #1b1d21;
    text-align: center;
    padding: 0 20px;
    /* width: 250px; */
    margin: auto;
  }
  .navigate {
    display: flex;
    justify-content: end;
    margin: 25px 40px;
    @media (min-width: 1240px) {
      display: none;
    }
    .btn {
      border-radius: 50%;
      border: 1px solid #545961;
      padding: 8px 10px;
      margin-left: 6px;
    }
  }
  #residens {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-flow: row;
    overflow: hidden;
    scroll-behavior: smooth;
  }
`;

export default Residens;
