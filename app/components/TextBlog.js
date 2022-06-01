import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { types } from "../../store/types";
import { AiFillEdit } from "react-icons/ai";

function TextBlog({ data, headContent }) {
  const state = useSelector((state) => state.bloger);
  const {isEdit:isAdmin} = useSelector(st=>st.bloger)
  const dispatch = useDispatch();

  const openModalHeader = () => {
    let j;
    for (j in state.header) {
      if (state.header[j] == headContent) {
        dispatch({
          type: types.editTextBlog,
          payload: {
            header: "open",
            open: true,
            name,
            isCreated: true,
            val: j,
          },
        });
      }
    }
  };

  if (headContent) {
    return (
      <Wrapper>
        {headContent}
        <div onClick={openModalHeader}>
          <AiFillEdit />
        </div>
      </Wrapper>
    );
  }
  const { content, name, center, i, u, b } = data;
  const openModal = () => {
    dispatch({
      type: types.editTextBlog,
      payload: {
        open: true,
        name,
        isCreated: true,
      },
    });
  };
  if (isAdmin) {
    return (
      <Wrapper
        className={`${center ? "center" : ""} ${u ? "u" : ""} ${i ? "i" : ""} ${
          b ? "b" : ""
        }`}
        style={{ fontFamily: '"Fira Sans", sans-serif' }}
      >
        {content}
        <div onClick={openModal}>
          <AiFillEdit />
        </div>
      </Wrapper>
    );
    
  }
  return (
    <Wrapper
      className={`${center ? "center" : ""} ${u ? "u" : ""} ${i ? "i" : ""} ${
        b ? "b" : ""
      }`}
      style={{ fontFamily: '"Fira Sans", sans-serif' }}
    >
      {content}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  &.u {
    text-decoration: underline;
  }
  &.b {
    font-weight: bold;
  }
  &.i {
    font-style: italic;
  }
  &.center {
    text-align: center;
  }
  &:hover {
    div {
      opacity: 1;
      z-index: 1;
    }
  }
  div {
    font-size: 20px;
    width: 20px;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    margin-left: 10px;
    top: 5px;
    position: absolute;
    opacity: -1;
    z-index: -1;
    cursor: pointer;
  }
`;

export default TextBlog;
