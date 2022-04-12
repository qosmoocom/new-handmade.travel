import React from "react";
import styled from "styled-components";
import Onetour from "./oneTour";

const Toursgroup = () => {
  let data = [1, 2, 3, 4, 5, 6];
  const tours = data.map(() => {
    return <Onetour />;
  });
  return <Group>{tours}</Group>;
};

const Group = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 30px;
`;

export default Toursgroup;
