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
    console.log(name, value);
    setUser((oldState) => ({
      ...oldState,
      [name]: value,
    }));
    console.log(user);
  };

  const { username, password, role, language } = user;
  return (
    <Wrapper className={isItCreate || isItUpdate ? "active" : ""}>
      <div className="form">
        <AiOutlineClose className="close-btn" onClick={onClose} />
        <div className="input-box">
          {!isItUpdate && (
            <div className="input-box">
              <label>Role:</label>
              <select name="role" onChange={onChange} value={role}>
                <option value=""></option>
                <option value="bloger">Bloger</option>
                <option value="moderator">Moderator</option>
              </select>
            </div>
          )}
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
        {!isItUpdate && (
          <div className="input-box">
            <label>Language</label>
            <select name="language" onChange={onChange} value={language}>
              <option value=""></option>
              <option value="ru">ru</option>
              <option value="en">en</option>
              <option value="es">es</option>
              <option value="it">it</option>
              <option value="fr">fr</option>
              <option value="de">de</option>
            </select>
          </div>
        )}

        <div className="input-btn">
          <button
            className="btn btn-primary btn-1"
            disabled={!(username && password && role && language)}
            onClick={isItCreate ? onSave : onUpdate}
          >
            save
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            cancel
          </button>
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
    display: flex !important;
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
    display: flex;
    flex-flow: column;
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
    select {
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
      /* margin-left: 10px; */
    }
  }
`;
