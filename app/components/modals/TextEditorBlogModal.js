import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { BsTextCenter } from "react-icons/bs";
import styled from "styled-components";
import { types } from "../../../store/types";

function TextEditorBlogModal() {
  const state = useSelector((state) => state.bloger);

  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [btns, setBtns] = useState({
    typeText: "p",
    center: false,
    b: false,
    u: false,
    i: false,
  });
  const { open, name, isCreated, header,val } = state.editText;
  useEffect(() => {
    if (header == 'open') {
      setValue(state.header[val])
    }
    if (isCreated) {
      let it, i;
      for (it in state.data) {
        i = state.data[it][0];
        if (it == name) {
          setValue(i.content);
          setBtns({
            ...btns,
            typeText: i.typeText,
            center: i.center,
            u: i.u,
            b: i.b,
            i: i.i,
          });
        }
      }
    }
  }, [state.editText.open]);

  const closeModal = () => {
    dispatch({
      type: types.editTextBlog,
      payload: {
        open: false,
        isCreated: false,
        name: "",
      },
    });
    setValue("");
    setBtns({
      typeText: "p",
      center: false,
      b: false,
      u: false,
      i: false,
    });
  };
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const ChangeBtn = (e) => {
    setBtns({ ...btns, typeText: e.target.value });
  };

  const onSaveHandler = () => {
    const { typeText, center, i, b, u } = btns;
    dispatch({
      type: types.editTextBlog,
      payload: {
        isSave: true,
        type: "text",
        newText: value,
        open: false,
        typeText,
        center,
        u,
        i,
        b,
        isCreated: false,
        name: "",
      },
    });
    setValue("");
    setBtns({
      typeText: "p",
      center: false,
      b: false,
      u: false,
      i: false,
    });
  };
  const onUpdateHandler = () => {
    const { typeText, center, i, b, u } = btns;
    dispatch({
      type: types.editTextBlog,
      payload: {
        isSave: true,
        type: "text",
        newText: value,
        open: false,
        typeText,
        center,
        u,
        i,
        b,
        isCreated: true,
        name,
      },
    });
    setValue("");
    setBtns({
      typeText: "p",
      center: false,
      b: false,
      u: false,
      i: false,
    });
  };


  const onUpdateHandlerHeader = () => {
        const { typeText, center, i, b, u } = btns;
        dispatch({
          type: types.editTextBlog,
          payload: {
            type: "text",
            newText: value,
            header: 'saved',
            open: false,
            val
          },
        });
        setValue("");
        setBtns({
          typeText: "p",
          center: false,
          b: false,
          u: false,
          i: false,
        });
  }

  const setBtnsHandler = (e) => {
    const { i, b, u, center } = btns;
    switch (e) {
      case "u":
        return setBtns({ ...btns, u: !u });
      case "i":
        return setBtns({ ...btns, i: !i });
      case "b":
        return setBtns({ ...btns, b: !b });
      case "center":
        return setBtns({ ...btns, center: !center });
      default:
        return;
    }
  };

  if (header == 'open') {
    return (
      <Section className={open ? "active" : ""}>
        <div className="modal-after-click" onClick={closeModal}></div>
        <div className="wrap-container">
          <AiOutlineClose className="close-btn" onClick={closeModal} />
          <div className="input">
            <textarea onChange={onChangeHandler} value={value || ""} />
          </div>
          <div className="btn-box">
            <button className="cansel" onClick={closeModal}>
              cancel
            </button>
            <button
              className={`${value ? "" : "disable"}`}
              disabled={!value}
              onClick={onUpdateHandlerHeader}
            >
              save
            </button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className={open ? "active" : ""}>
      <div className="modal-after-click" onClick={closeModal}></div>
      <div className="wrap-container">
        <AiOutlineClose className="close-btn" onClick={closeModal} />
        <div className="action-btns">
          {/* <select onChange={ChangeBtn} value={btns.typeText}>
            <option value="p">p</option>
            <option value="h1">h1</option>
            <option value="h2">h2</option>
            <option value="h3">h3</option>
            <option value="h4">h4</option>
          </select>
          <button
            onClick={() => setBtnsHandler("i")}
            className={`${btns.i ? "active" : ""}`}
          >
            I
          </button>
          <button
            onClick={() => setBtnsHandler("u")}
            className={`${btns.u ? "active" : ""}`}
          >
            U
          </button>
          <button
            onClick={() => setBtnsHandler("b")}
            className={`${btns.b ? "active" : ""}`}
          >
            B
          </button> */}
          <button
            onClick={() => setBtnsHandler("center")}
            className={`${btns.center ? "active" : ""}`}
          >
            <BsTextCenter />
          </button>
        </div>
        <div className="input">
          <textarea onChange={onChangeHandler} value={value || ""} />
        </div>
        <div className="btn-box">
          <button className="cansel" onClick={closeModal}>
            cancel
          </button>
          <button
            className={`${value ? "" : "disable"}`}
            disabled={!value}
            onClick={isCreated ? onUpdateHandler : onSaveHandler}
          >
            save
          </button>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.div`
  opacity: -4;
  z-index: -4;
  position: fixed;
  transition-duration: 0.5s;
  top: -100%;

  &.active {
    opacity: 1;
    z-index: 999999;
    top: 0;
  }
  .modal-after-click {
    width: 100vw;
    height: 100vh;
    /* background-color: yellow; */
    z-index: 4;
    opacity: 0.5;
  }
  .wrap-container {
    z-index: 5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: #fff;
    width: 400px;
    min-width: 300px;
    border-radius: 5px;
    border: 2px solid black;
    .close-btn {
      position: relative;
      left: 95%;
      cursor: pointer;
    }
    .action-btns {
      select {
        width: 50px;
      }
      button {
        border: 1px solid black;
        width: 20px;
        height: 30px;
        text-align: center;
        padding: 0 1px;
        border-radius: 5px;
        margin: 0 5px;
      }
      .active {
        background-color: green;
        color: #fff;
      }
    }
    .input {
      width: 100%;
      padding: 20px 0;
      textarea {
        width: 100%;
        border: 2px solid black;
        padding: 5px;
        height: 100px;
      }
    }
    .btn-box {
      display: flex;
      justify-content: flex-end;
      button {
        background-color: blue;
        color: #fff;
        margin: 0 5px;
        padding: 5px 10px;
        border-radius: 5px;
      }
      .cansel {
        background-color: red;
      }
      .disable {
        opacity: 0.5;
      }
    }
  }
`;

export default TextEditorBlogModal;
