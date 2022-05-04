import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Section = styled.div`
  position: relative;
  width: 505px;
  min-width: 505px;
  height: 300px;
  padding: 24px;
  transition-duration: 0.2s;
  margin: 0 10px;
  z-index: 5;

  &:hover {
    background: #ffffff;
    box-shadow: 0px 15px 50px rgba(162, 162, 162, 0.2);
    border-radius: 16px;
  }
  .head {
    display: flex;
    margin-bottom: 25px;
    .image {
      margin-right: 15px;
    }
    .text {
      .position {
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
        letter-spacing: 0.003em;
        color: #11142d;
        margin-bottom: 15px;
        margin-top: 10px;
      }
      .name {
        font-weight: 600;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 0.005em;
        font-feature-settings: "liga" off;
        color: #9a9ab0;
      }
    }
  }
  .body {
    .info {
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      letter-spacing: 0.005em;
      color: #515151;
    }
  }
`;

const Customer = ({ key, name }) => {
  return (
    <Section id={"customer" + key}>
      <div className="head">
        <div
          className="image"
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            width: "88px",
            height: "88px",
          }}
        >
          <Image src="/images/said.webp" width={88} height={88} />
        </div>
        <div className="text">
          <div className="position">Hogwarts Luxury Hotel</div>
          <div className="name">{name}</div>
        </div>
      </div>
      <div className="body">
        <div className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit
          sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut
          scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin
          semper aliquam in ultricies. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames
          tincidunt rhoncus viverra eu ut scelerisque.
        </div>
      </div>
    </Section>
  );
};

export default Customer;
