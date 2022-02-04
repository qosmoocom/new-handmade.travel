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
    background: #ffffff99;
    padding: 20px;
    border-radius: 4px;
    .input-box {
      border: 1px solid #0a0a0a;
      padding: 4px;
      border-radius: 4px;
      min-width: 200px;
      display: flex;
      align-items: center;
      margin: 10px 0;
      input {
        outline: none;
        width: 100%;
        border: none;
        background: none;
        color: #130b0b;
        font-size: 18px;
        font-weight: 500;
        ::placeholder {
          color: #070707;
          opacity: 1;
        }
        :-ms-input-placeholder {
          color: #070707;
        }
        ::-ms-input-placeholder {
          color: #070707;
        }
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
        box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.2);
      }
    }
  }

  .close-btn {
    position: absolute;
    right: 0;
    top: 0;
    color: #070707;
    font-size: 20px;
    cursor: pointer;
  }
`;
export default function TypographyForModal() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.admin);
  const { open, name } = state.editText;
  const initialValue = state[name]?.value;
  const [value, setValue] = useState(initialValue);
  const closeModal = () => {
    dispatch({ type: types.editText, payload: { open: false } });
  };
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch({
      type: types.editText,
      payload: { isChange: true, newText: value },
    });
  }, [value]);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const saveHandler = () => {
    dispatch({
      type: types.editText,
      payload: {
        isSave: true,
        newText: value,
        open: false,
      },
    });
  };
  return (
    <Wrapper className={open ? "active" : ""}>
      <div className="wrap-container">
        <AiOutlineClose className="close-btn" onClick={closeModal} />
        <div className="input-box">
          <input type="text" onChange={changeHandler} value={value} />
        </div>
        <div className="btn-box">
          <button onClick={saveHandler}>save</button>
        </div>
      </div>
    </Wrapper>
  );
}
