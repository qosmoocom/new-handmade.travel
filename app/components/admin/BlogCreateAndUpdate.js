import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getConfig } from "../../../store/reducer/categoryReducer";

export default function BlogCreateAndUpdate({
  onCreateClose,
  onChange,
  blog: { blogName, category,date,address },
  onSave,
  onSaveUpdate,
  // categorys
}) {
  const { isItCreate, isItUpdate } = useSelector((state) => state.blogs);
  const isLoginMe = JSON.parse(localStorage.getItem("isLoginMe"));

  const [categorys,setCategorys] = useState([])

  const getAllCategorys = async () => {
    const api = `/api/category/all`;
    // setLoading(true);
    try {
      const res = await axios.get(api, getConfig());
      const data = await res.data;
      if (data) setCategorys(data);
      // setTimeout(() => {
      //   setLoading(false);
      // }, 200);
    } catch (error) {}
  };
  useEffect(() => {
    getAllCategorys()
  
  }, [])
  console.log(category);

  return (
    <Wrapper className={isItCreate || isItUpdate ? "active" : ""}>
      <div className="form">
        <AiOutlineClose className="close-btn" onClick={onCreateClose} />
        <div className="input-box">
          <label>Blog Name:</label>
          <input
            type="text"
            onChange={onChange}
            name="blogName"
            value={blogName}
            placeholder="Enter blog name"
          />
        </div>
        <div className="input-box">
          <label>Category</label>
          <select name="category" onChange={onChange} value={category}>
            <option></option>
            {categorys.map((item, index) => {
              if (isLoginMe.language == "ru") {
                return (
                  <option value={item.name} key={index}>
                    {item.russianName}
                  </option>
                );
              }
              if (isLoginMe.language == "en") {
                return (
                  <option value={item.name} key={index}>
                    {item.englishName}
                  </option>
                );
              }
              if (isLoginMe.language == "es") {
                return (
                  <option value={item.name} key={index}>
                    {item.espanolName}
                  </option>
                );
              }
              if (isLoginMe.language == "fr") {
                return (
                  <option value={item.name} key={index}>
                    {item.frenchName}
                  </option>
                );
              }
              if (isLoginMe.language == "it") {
                return (
                  <option value={item.name} key={index}>
                    {item.italiyName}
                  </option>
                );
              }
              if (isLoginMe.language == "de") {
                return (
                  <option value={item.name} key={index}>
                    {item.deutschName}
                  </option>
                );
              }
              // eslint-disable-next-line react/jsx-key
              return <option value={item.name}>{item.name}</option>;
            })}
          </select>
        </div>
        <div className="input-box">
          <label>Date</label>
          <input
            type="date"
            name="date"
            onChange={onChange}
            value={date}
            placeholder="Enter tour lang"
          />
        </div>
        <div className="input-box">
          <label>Address</label>
          <input
            type="url"
            name="address"
            // onChange={onChange}
            value={`https://handmade.travel/blogs/${isLoginMe.language}/${address}`}
            readOnly
            onClick={() => {
              navigator.clipboard.writeText(
                `https://handmade.travel/blogs/${isLoginMe.language}/${address}`
              );
              alert(
                `copied--   https://handmade.travel/blogs/${isLoginMe.language}/${address}`
              );
            }}
            // placeholder="Enter tour lang"
          />
        </div>

        <div className="input-btn">
          <button
            className="btn btn-primary btn-1"
            onClick={isItCreate ? onSave : onSaveUpdate}
            disabled={!(blogName && category && date)}
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
    label {
      margin-right: 25px;
      font-size: 20px;
      font-weight: 600;
      input {
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
    }
  }
`;
