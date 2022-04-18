import React from "react";
import BenefitMobi from "../components/benefit_mobi";
import styled from "styled-components";
import Benefit from "../components/benefit";

const Section = styled.div`
  margin: 50px auto;
  max-width: 1250px;
  @media (min-width: 768px) {
  display: none;    
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

const BenefitsMobi = () => {
  let data = [
    {
      img: "/images/home/benefit1.webp",
      title: "Best Quality",
      disc: "Sometimes features require a short description. This can be detailed description or just a short text",
    },
    {
      img: "/images/home/benefit2.webp",
      title: "Discount trip",
      disc: "Sometimes features require a short description. This can be detailed description or just a short text",
    },
    {
      img: "/images/home/benefit3.webp",
      title: "Excellent Trip",
      disc: "Sometimes features require a short description. This can be detailed description or just a short text",
    },
  ];
  const items = data.map((item, index) => {
    return <BenefitMobi key={index} data={item} />;
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

export default BenefitsMobi;
