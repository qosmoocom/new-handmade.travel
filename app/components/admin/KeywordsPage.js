import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  .form-box {
    padding: 20px;
    background: #cc5b1ab0;
    min-width: 340px;
    border-radius: 4px;
    .input-box {
      display: flex;
      flex-direction: column;

      input {
        padding: 4px 5px;
        outline: none;
        background: none;
        border: 1px solid #fff;
        border-radius: 4px;
        color: #fff;
      }
      label {
        font-size: 16px;
        color: #fff;
      }
    }
  }

  .save {
    color: #fff;
    background: rgb(0, 0, 0);
    padding: 10px 20px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 6px;
    transition: 0.4s;
    margin-left: 10px;
    &:focus {
      box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.2);
    }
  }
`;
export default function KeywordsPage({ onSave, keywords, setKeywords }) {
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setKeywords((oldState) => ({ ...oldState, [name]: value }));
  };
  const { meta_key, meta_des, yan_met } = keywords;
  return (
    <Wrapper>
      <div className="form-box">
        <div className="input-box">
          <label>meta keyword</label>
          <input
            type="text"
            name="meta_key"
            value={meta_key}
            onChange={changeHandler}
          />
        </div>

        <div className="input-box">
          <label>meta description</label>
          <input
            type="text"
            name="meta_des"
            value={meta_des}
            onChange={changeHandler}
          />
        </div>

        <div className="input-box">
          <label>yandex metirka</label>
          <input
            type="text"
            name="yan_met"
            value={yan_met}
            onChange={changeHandler}
          />
        </div>
      </div>
      <button className="save" onClick={onSave}>
        save all changes
      </button>
    </Wrapper>
  );
}
