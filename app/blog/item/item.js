import {BsFillTrashFill} from 'react-icons/bs'

import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { types } from '../../../store/types'

function Item({ children, item }) {
  const dispatch = useDispatch()
  const { isEdit: isAdmin } = useSelector((st) => st.bloger);
    
    const deleteHandler = () => {
        dispatch({
            type: types.deleteBlog, payload: {
            name:item.name
        } } )
    }

  if (isAdmin) {
    return (
      <Wrapper>
        <div className="icon" onClick={deleteHandler}>
          <BsFillTrashFill />
        </div>
  
        <div className="item">{children}</div>
      </Wrapper>
    );
    
  }
  return (
    <Wrapper>

      <div>{children}</div>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: auto;
  height: auto;
  /* position: relative; */
  .icon {
    position: relative;
    opacity: -1;
    padding: 10px;
    font-size: 20px;
    border: 1px solid red;
    height: 40px;
    width: fit-content;
    text-align: center;
    top: 20px;
    left: 98%;
    z-index: 5;
    background-color: #fff;
    cursor: pointer;
    transition-delay: 0.1s;
    color: red;
  }
  &:hover {
    .icon {
      opacity: 1;
    }
    .item {
      border: 1px solid blue;
      transition-delay: 0.05s;
    }
  }
`;

export default Item