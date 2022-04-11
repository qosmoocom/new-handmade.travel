// import data from "../../../styles/globals.scss";

import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Loader from "../../../app/components/Loader";

function Index() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("/api/global/get").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <Wrapper>
      <textarea
        value={data}
        // onChange={(e) => setCssCode(e.target.value)}
        className="textarea"
        readOnly
      />
      {/* <div className="left-btns">
        <button onClick={onSave}>save</button>
      </div> */}
      <Loader />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  .textarea {
    width: 100%;
    height: 100vh;
    font-size: 18px;
    outline: none;
    border: none;
    padding: 0 0 10px 10px;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .left-btns {
    position: fixed;
    right: 10px;
    bottom: 50px;
    z-index: 22;
    button {
      color: #fff;
      background: rgb(0, 0, 0);
      padding: 10px 20px;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      border-radius: 6px;
      transition: 0.4s;
      margin-right: 10px;
      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.2);
      }
    }
  }

  overflow: hidden;
  height: 100vh;
`;

export default Index;
