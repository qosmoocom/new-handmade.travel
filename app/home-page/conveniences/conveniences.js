import React from "react";
import styled from "styled-components";
import Benefit from "../components/benefit";

const Conveniences = () => {
  let data = [0, 1, 2, 3, 4, 5];
  const items = data.map(() => {
    return <Benefit />;
  });
  return (
    <ConvenIences>
      <div className="benefit-title">
        The Benefit That Will Make you Comfort
      </div>
      <div className="benefit-items">{items}</div>
    </ConvenIences>
  );
};

const ConvenIences = styled.div`
  margin: auto;
  margin-top: 110px;
  max-width: 1250px;

  .benefit-title {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 52px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #1b1d21;
    margin-bottom: 70px;
  }
  .benefit-items {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 60px;
  }
`;

export default Conveniences;
