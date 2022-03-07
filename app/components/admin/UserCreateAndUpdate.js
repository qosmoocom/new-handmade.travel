import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export default function UserCreateAndUpdate({
  setUser,
  user,
  onSave,
  isItCreate,
  onClose,
  onUpdate,
  isItUpdate,
}) {
  const onChange = (event) => {
    const { name, value } = event.target;
    setUser((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  const { username, password } = user;
  return (
    <Wrapper className={isItCreate || isItUpdate ? "active" : ""}>
      <div className="form">
        <AiOutlineClose className="close-btn" onClick={onClose} />
        <div className="input-box">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={onChange}
            value={username}
            placeholder="Enter username"
          />
        </div>
        <div className="input-box">
          <label>Password</label>
          <input
            type="text"
            name="password"
            onChange={onChange}
            value={password}
            placeholder="Enter password"
          />
        </div>

        <div className="input-btn">
          <button
            className="btn btn-primary btn-1"
            disabled={!(username && password)}
            onClick={isItCreate ? onSave : onUpdate}
          >
            save
          </button>
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
