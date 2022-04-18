import React from "react";
import styled from "styled-components";
import Onetour from "./oneTour";

const Section = styled.div`
  #tours {
    display: flex;
    flex-flow: column wrap;
    /* grid-column: auto; */
    /* grid-gap: 30px; */
    height: 930px;
    width: 100%;
    margin: auto;
    overflow: hidden;
    scroll-behavior: smooth;
  }
`;

const Toursgroup = () => {
  let data = [1, 2, 3, 4, 5, 6];
  const tours = data.map(() => {
    return <Onetour />;
  });
  return (
    <Section>
      <div id="tours">{tours}</div>
    </Section>
  );
};

export default Toursgroup;
