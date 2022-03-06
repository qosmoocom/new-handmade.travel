import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export default function UserCreateAndUpdate() {
  return (
    <Wrapper className={"active"}>
      <div className="form">
        <AiOutlineClose className="close-btn" />
        <div className="input-box">
          <label>Tourname:</label>
          <input type="text" name="tourName" placeholder="Enter tour name" />
        </div>
        <div className="input-box">
          <label>Tour Id</label>
          <input type="text" name="tour_id" placeholder="Enter tour Id" />
        </div>
        <div className="input-box">
          <label>Tour Lang</label>
          <input type="text" name="language" placeholder="Enter tour lang" />
        </div>

        <div className="input-btn">
          <button className="btn btn-primary btn-1">save</button>
          <button className="btn btn-secondary">cancel</button>
        </div>
      </div>
    </Wrapper>
  );
}

// style
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  /* none active */
  opacity: -4;
  transition: 400ms;
  z-index: -1;
  &.active {
    opacity: 1;
    z-index: 1;
  }
  .form {
    background: rgba(255, 256, 256, 1);
    padding: 20px 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 300px;
    position: relative;
    .close-btn {
      position: absolute;
      right: 5px;
      top: 5px;
      color: #161515;
      font-size: 18px;
      cursor: pointer;
    }
  }
  .input-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 3px;
  }
  .input-box {
    width: 100%;
    input {
      background: none;
      outline: none;
      margin-bottom: 10px;
      border: none;
      box-shadow: none;
      border: 1px solid #201f1f;
      color: #1a1818;
      width: 100%;
      margin-top: 5px;
      padding: 5px;
    }
  }
`;
