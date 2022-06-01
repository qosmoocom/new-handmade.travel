

import React, { useState } from 'react'
import styled from 'styled-components'
import {
  AiOutlinePlusCircle,
  AiOutlineFileText,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import {MdOutlineAddPhotoAlternate} from 'react-icons/md'
import { types } from '../../../store/types';
import { useDispatch, useSelector } from 'react-redux';

function Adder() {
    const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const {isEdit:isAdmin}= useSelector(st=>st.bloger)
    const openModalText = () => {
    dispatch({
        type: types.editTextBlog,
        payload: {
        open: true,
        },
    });
    };
  const openModalImage = () => {
    dispatch({
      type: types.editImageBlog,
      payload: {
        open: true,
      },
    });
  };
  return (
    <Section className={`${isAdmin?'active':''}`}>
      <button
        className={` plus ${open ? "noactive" : ""}`}
        onClick={() => setOpen(true)}
      >
        <AiOutlinePlusCircle />
      </button>
      <div className={`${open ? "active" : ""} section`}>
        <button onClick={() => setOpen(false)}>
          <AiOutlineArrowLeft />
        </button>
        <button onClick={openModalText}>
          <AiOutlineFileText />
        </button>
        <button onClick={openModalImage}>
          <MdOutlineAddPhotoAlternate />
        </button>
      </div>
    </Section>
  );
}


const Section = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 50px;
  align-items: center;
  text-align: center;
  display: none;
  &.active{
    display: block
  }
  .plus {
    font-size: 30px;
    padding: 5px 15px;
    border: 1px solid black;
    border-radius: 7px;
    background-color: #dcdcdc;
    display: block;
  }
  .section {
    display: none;
    button {
      font-size: 20px;
      padding: 5px 15px;
      border: 1px solid black;
      border-radius: 7px;
      background-color: #dcdcdc;
      margin: 10px;
    }
  }
  .active{
    display: block;
  }
  .noactive{
    display:none;
  }
`;

export default Adder