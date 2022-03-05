import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
// change tour modal
const ModalChangeTour = styled.div`
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
export default function Index({
  modalState: {
    isActive = false,
    user: { username, password },
  },
  setModalState,
  onSave,
}) {
  const closeHandler = () => {
    setModalState((oldState) => ({ ...oldState, isActive: false }));
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setModalState((prev) => ({
      ...prev,
      user: { ...prev.user, [name]: value },
    }));
  };
  return (
    <ModalChangeTour className={isActive ? "active" : "none"}>
      <div className="form">
        <AiOutlineClose className="close-btn" onClick={closeHandler} />
        <div className="input-box">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={onChangeHandler}
            value={username}
          />
        </div>
        <div className="input-box">
          <label>Password</label>
          <input
            type="text"
            name="password"
            onChange={onChangeHandler}
            value={password}
          />
        </div>

        <div className="input-btn">
          <button className="btn btn-primary btn-1" onClick={onSave}>
            save
          </button>
          <button className="btn btn-secondary">cancel</button>
        </div>
      </div>
    </ModalChangeTour>
  );
}
