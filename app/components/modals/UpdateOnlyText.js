import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { types } from "../../../store/types";
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);

  opacity: 0;
  z-index: -32;
  transition: all 0.4s;
  &.active {
    opacity: 1;
    z-index: 2311;
    transition: all 0.4s;
  }
  .wrap-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .input-box {
      border: 1px solid #eee;
      padding: 4px;
      border-radius: 4px;
      min-width: 200px;
      display: flex;
      align-items: center;
      input {
        outline: none;
        width: 100%;
        border: none;
        background: none;
        color: #fff;
        font-size: 18px;
      }
    }

    .btn-box {
      padding-top: 20px;
      button {
        color: #000;
        background: yellow;
        padding: 5px 12px;
        border-radius: 4px;
        font-size: 16px;
        border: none;
        cursor: pointer;
      }
    }
  }

  .close-btn {
    position: absolute;
    right: 40px;
    top: 40px;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
  }
`;
export default function UpdateOnlyText() {
  const { open, clickText } = useSelector((state) => state.admin.updateText);
  const [value, setValue] = useState(clickText ? clickText : "");
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setValue(e.target.value);
    dispatch({
      type: types.updateText,
      payload: { open: true, isChanging: true, newText: e.target.value },
    });
  };

  const closeModal = () => {
    dispatch({
      type: types.updateText,
      payload: { opan: false, clickText: "" },
    });
  };

  const saveText = () => {
    dispatch({ type: types.updateText, payload: { isSave: true, open: true } });
  };

  useEffect(() => {
    setValue(clickText);
  }, [clickText]);
  return (
    <Wrapper className={open ? "active" : ""}>
      <AiOutlineClose className="close-btn" onClick={closeModal} />
      <div className="wrap-container">
        <div className="input-box">
          <input type="text" value={value} onChange={changeHandler} />
        </div>
        <div className="btn-box">
          <button onClick={saveText}>save</button>
        </div>
      </div>
    </Wrapper>
  );
}
