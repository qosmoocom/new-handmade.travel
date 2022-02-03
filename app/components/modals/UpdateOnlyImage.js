import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      margin: 10px 0;
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
export default function UpdateOnlyImage() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    newSrc: "",
    newTitle: "",
    newAlt: "",
    newSrc: "",
  });
  const { open } = useSelector((state) => state.admin.updateImage);

  const closeModalHandler = () => {
    dispatch({
      type: types.updateImage,
      payload: {
        open: false,
        isSave: false,
        src: "",
        title: "",
        alt: "",
        newSrc: "",
        newTitle: "",
        newAlt: "",
      },
    });
  };

  const isSaving = () => {
    dispatch({ type: types.updateImage, payload: { isSave: true } });
  };

  // componentDidMount
  useEffect(() => {
    console.log(state);
    dispatch({ type: types.updateImage, payload: { ...state } });
  }, [state]);
  return (
    <Wrapper className={open ? "active" : ""}>
      <AiOutlineClose className="close-btn" onClick={closeModalHandler} />
      <div className="wrap-container">
        <div className="input-box">
          <input
            type="text"
            placeholder="image alt"
            onChange={(e) =>
              setState((prev) => ({ ...prev, newAlt: e.target.value }))
            }
            value={state.newAlt}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="image title"
            onChange={(e) =>
              setState((prev) => ({ ...prev, newTitle: e.target.value }))
            }
            value={state.newTitle}
          />
        </div>
        <div className="input-box">
          <input
            type="file"
            onChange={(e) =>
              setState((prev) => ({ ...prev, newSrc: e.target.value }))
            }
            value={state.newSrc}
          />
        </div>
        <div className="btn-box">
          <button onClick={isSaving}>save</button>
        </div>
      </div>
    </Wrapper>
  );
}
