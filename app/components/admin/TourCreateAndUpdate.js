import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function UserCreateAndUpdate({
  onCreateClose,
  onChange,
  tour: { tourName, tour_id, language, checkforid },
  onSave,
  onSaveUpdate,
}) {
  const { isItCreate, isItUpdate } = useSelector((state) => state.tours);
  return (
    <Wrapper className={isItCreate || isItUpdate ? "active" : ""}>
      <div className="form">
        <AiOutlineClose className="close-btn" onClick={onCreateClose} />
        <div className="input-box">
          <label>Tourname:</label>
          <input
            type="text"
            onChange={onChange}
            name="tourName"
            value={tourName}
            placeholder="Enter tour name"
          />
        </div>
        <div className="input-box">
          <label>Tour Id</label>
          <input
            type="text"
            name="tour_id"
            onChange={onChange}
            value={tour_id}
            placeholder="Enter tour Id"
            readOnly={checkforid}
          />
        </div>
        <div className="input-box">
          <label>Tour Lang</label>
          <input
            type="text"
            name="language"
            onChange={onChange}
            value={language}
            placeholder="Enter tour lang"
          />
        </div>

        <div className="input-btn">
          <label>
            <input
              type="checkbox"
              name="checkforid"
              onChange={onChange}
              checked={checkforid}
            />
            id
          </label>
          <button
            className="btn btn-primary btn-1"
            onClick={isItCreate ? onSave : onSaveUpdate}
            disabled={!(tourName && tour_id && language)}
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
    label{
      margin-right: 25px;
      font-size: 20px;
      font-weight: 600;
      input{
        margin-right: 5px;
      }
    }
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
