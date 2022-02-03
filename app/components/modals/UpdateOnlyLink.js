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
      margin: 5px 0;
      input {
        outline: none;
        width: 100%;
        border: none;
        background: none;
        color: #fff;
        font-size: 18px;
        &::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: #ffffff;
          opacity: 1; /* Firefox */
        }

        &:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #ffffff;
        }

        &::-ms-input-placeholder {
          /* Microsoft Edge */
          color: #ffffff;
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
export default function UpdateOnlyLink() {
  /*
      updateLink: {
        open: false,
        isSave: false,
        isChanging: false,
        href: "",
        title: "",
        newHref: "",
        newTitle: "",
    }
    */
  const { open } = useSelector((state) => state.admin.updateLink);
  const [state, setState] = useState({
    title: "",
    href: "",
  });

  return (
    <Wrapper className={open ? "active" : ""}>
      <AiOutlineClose className="close-btn" />
      <div className="wrap-container">
        <div className="input-box">
          <input
            type="text"
            value={state.title}
            placeholder="Enter title"
            onChange={(e) => {
              setState((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            value={state.href}
            placeholder="Enter href"
            onChange={(e) => {
              setState((prev) => ({ ...prev, href: e.target.value }));
            }}
          />
        </div>
        <div className="btn-box">
          <button>save</button>
        </div>
      </div>
    </Wrapper>
  );
}
