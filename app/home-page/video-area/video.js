import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: none;
  max-width: 1250px;
  margin: auto;
  margin-bottom: 120px;
  @media (min-width: 1200px) {
    display: block;
  }
  .title {
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    margin: 130px 0 60px;
    text-align: center;
  }
  .video {
    width: 1200px;
    margin: auto;
  }
`;

const Video = () => {
  return (
    <Section>
      <div className="title">Let’s take your journey with us</div>
      <div className="video">
        <iframe
          width="1200"
          height="675"
          // style={{ width: "100%", height: "auto" }}
          src="https://www.youtube.com/embed/wtHZ803VE-w?start=4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
    </Section>
  );
};

export default Video;
