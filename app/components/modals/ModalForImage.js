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
  height: 0;

  &.active {
    opacity: 1;
    z-index: 2311;
    transition: all 0.4s;
    height: 100vh;
  }

  .modal-after-click {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .wrap-container {
    position: absolute;
    left: 50%;
    top: 50%;
    min-width: 400px;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.91);
    border: 2px solid #000;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
    padding: 40px 20px 20px;
    border-radius: 4px;
    z-index: 3;
    .input-box {
      border: 1px solid #0a0a0a;
      padding: 4px;
      border-radius: 4px;
      min-width: 200px;
      display: flex;
      align-items: center;
      margin: 10px 0;
      .update-img-btn {
        color: #ffffff;
        padding: 5px 12px;
        border-radius: 4px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        transition: 0.4s;
        background: #5a0808c9;
      }
      input {
        outline: none;
        width: 100%;
        border: none;
        background: none;
        color: #130b0b;
        font-size: 18px;
        font-weight: 500;
        ::placeholder {
          color: #07070786;
          opacity: 1;
        }
        :-ms-input-placeholder {
          color: #07070786;
        }
        ::-ms-input-placeholder {
          color: #07070786;
        }
      }
    }

    .btn-box {
      padding-top: 20px;
      button {
        color: #ffffff;
        padding: 5px 12px;
        border-radius: 4px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        transition: 0.4s;
        &.disabled-btn {
          opacity: 0.5;
          cursor: not-allowed;
        }
        &.save-btn {
          background: #5c5cdc;
          &:focus {
            box-shadow: 0 0 0 0.25rem rgba(92, 92, 220, 0.267);
          }
        }
        &.cancellation-btn {
          background: #f78256;
          margin: 0 10px;
          &:focus {
            box-shadow: 0 0 0 0.25rem rgba(247, 129, 86, 0.267);
          }
        }
      }
    }
  }

  .close-btn {
    position: absolute;
    right: 3px;
    top: 3px;
    color: #070707;
    font-size: 15px;
    cursor: pointer;
  }
`;
export default function ImageForModal() {
  const dispatch = useDispatch();
  const bigState = useSelector((state) => state.admin);
  const { editImage } = bigState;
  const {
    open = false,
    itIsClassName = "",
    group = "",
    href = "",
    alt = "",
    title = "",
    id = "",
  } = editImage;

  const [state, setState] = useState({
    href: "",
    alt: "",
    title: "",
  });

  const changeHandler = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const closeModalHandler = () => {
    dispatch({
      type: types.editImage,
      payload: {
        open: false,
        isSave: false,
        href: "",
        newHref: "",
        alt: "",
        newAlt: "",
        title: "",
        newTitle: "",
      },
    });
  };

  useEffect(() => {
    // when the editImage.open is updated
    if (open) {
      setState({ href, alt, title });
    } else {
      setState({ href: "", alt: "", title: "" });
    }
  }, [open]);

  const onSaveHandler = () => {
    dispatch({
      type: types.editImage,
      payload: {
        isSave: true,
        newAlt: state.alt,
        newHref: state.href,
        newTitle: state.title,
      },
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        closeModalHandler();
      }
    });
  }, []);

  return (
    <Wrapper className={open ? "active" : ""}>
      <div className="modal-after-click" onClick={closeModalHandler} />
      <div className="wrap-container">
        <AiOutlineClose className="close-btn" onClick={closeModalHandler} />
        <div className="input-box">
          <input
            type="text"
            placeholder="Link href"
            name="href"
            onChange={changeHandler}
            value={state.href}
          />
        </div>

        <div className="input-box">
          <label htmlFor="file" className="update-img-btn">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={changeHandler}
              name="href"
            />
            обновить изображение
          </label>
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Link title"
            name="title"
            onChange={changeHandler}
            value={state.title}
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Link alt"
            name="alt"
            onChange={changeHandler}
            value={state.alt}
          />
        </div>

        <div className="btn-box">
          <button onClick={onSaveHandler} className="save-btn">
            сохранить
          </button>
          <button onClick={closeModalHandler} className="cancellation-btn">
            отмена
          </button>
          <span className="className-is">{itIsClassName}</span>
        </div>
      </div>
    </Wrapper>
  );
}
