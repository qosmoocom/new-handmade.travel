import React from "react";
import styled from "styled-components";
import Benefit from "../components/benefit";

const Section = styled.div`
  display: none;
  margin: auto;
  margin-top: 90px;
  max-width: 1250px;
  @media (min-width: 768px) {
    display: block;
  }

  .benefit-title {
    /* width: 1250px; */
    align-items: center;
    text-align: center;
    p {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 600;
      font-size: 25px;
      line-height: 35px;
      /* text-align: center; */
      letter-spacing: 0.2px;
      color: #1b1d21;
      margin: auto;
      margin-bottom: 20px;
      /* width: 550px; */
    }
  }
  .benefit-items {
    display: flex;
    margin: auto;
    width: fit-content;
    justify-content: space-around;
    flex-flow: row wrap;
    /* grid-gap: 60px; */
  }
`;

const Benefits = () => {
  let data = [0, 1, 2, 3, 4, 5];
  const items = data.map((item, index) => {
    return <Benefit data={item} key={index} />;
  });
  return (
    <Section>
      <div className="benefit-title">
        <p>The Benefit That Will Make you Comfort</p>
      </div>
      <div className="benefit-items">{items}</div>
    </Section>
  );
};

export default Benefits;
