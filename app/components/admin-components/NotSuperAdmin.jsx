import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Tours from "./Tours";
const Wrapper = styled.div`
  .big-title {
    text-decoration: underline;
  }
`;

const defaultState = {
  tours: [
    { tourId: uuidv4(), tourName: "gastro", tourLang: "ru" },
    { tourId: uuidv4(), tourName: "gastro", tourLang: "es" },
    { tourId: uuidv4(), tourName: "gastro", tourLang: "ru" },
    { tourId: uuidv4(), tourName: "art", tourLang: "ru" },
    { tourId: uuidv4(), tourName: "art", tourLang: "en" },
  ],
};
export default function NotSuperAdmin({ admin }) {
  const [state, setState] = useState(defaultState);

  const { tours } = state;

  return (
    <Wrapper>
      <div className="admin-section" id="admin">
        <div className="container">
          <h4 className="text-end">Hello {admin.user}!</h4>
          <h3 className="big-title">Your Tours</h3>
        </div>

        <Tours tours={tours} />
      </div>
    </Wrapper>
  );
}
