import React from "react";
import styled from "styled-components";
import { TiStarFullOutline } from "react-icons/ti";
import Image from "next/image";

const Section = styled.div`
  background: #ffffff;
  border: 0.3px solid #00000047;
  border-radius: 8px;
  padding: 40px;
  min-width: 300px;
  width: 100%;
  max-width: 360px;
  margin-right: 10px;

  .text {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #1b1d21;
    margin-bottom: 70px;
    margin-top: 10px;
  }
  .user {
    display: flex;
    .image {
      margin-right: 15px;
    }
    .name {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      .f-name {
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
        color: #1b1d21;
      }
      .job {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #7c818c;
      }
    }
  }
`;
const Residen = () => {
  return (
    <Section>
      <div className="stars" style={{ color: "#f58634" }}>
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
      </div>
      <div className="text">
        Sinnce I move to new home with elemnte, i feel like this my dream come
        true, i would like to live here
      </div>
      <div className="user">
        <div className="image">
          <Image src="/images/residen.webp" width={48} height={48} />
        </div>
        <div className="name">
          <div className="f-name">Angela Karamoy</div>
          <div className="job">CEO at Designspace</div>
        </div>
      </div>
    </Section>
  );
};

export default Residen;
