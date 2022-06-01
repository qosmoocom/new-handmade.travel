import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  deleteUserId,
  createUser,
  openCreateUserModal,
  closeCreateUserModal,
  updateUserModal,
  updateUserId,
} from '../../../store/reducer/usersReducer';

import UserCreateAndUpdate from './UserCreateAndUpdate';
import AllTours from './AllTours';
import Users from './Users';
import Categorys from './Categorys';
import AllBlogs from './AllBlogs';
export default function Admin() {
  const [open,setOpen] = useState('users')
  const logOutHandler = () => {
    localStorage.clear();
  };
  return (
    <>
      <Wrapper>
        <span className="log-out" onClick={logOutHandler}>
          <Link href={"/login"}>log out</Link>
        </span>
        <div className="buttons">
          <button onClick={() => setOpen("users")}>Users</button>
          <button onClick={() => setOpen("tours")}>Tours</button>
          <button onClick={() => setOpen("blogss")}>Blogs</button>
          <button onClick={() => setOpen("categorys")}>Categorys</button>
        </div>
        <div className="containers">
          <div className={`${open == "users" ? "active" : ""} item`}>
            <Users />
          </div>
          <div className={`${open == "tours" ? "active" : ""} item`}>
            <AllTours />
          </div>
          <div className={`${open == "blogss" ? "active" : ""} item`}>
            <AllBlogs />
          </div>
          <div className={`${open == "categorys" ? "active" : ""} item`}>
            <Categorys />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
.log-out{
  display: flex;
  justify-content: end;
  padding: 10px 10%;
}
  .buttons {
    width: 70%;
    margin: auto;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black;
    button {
      background-color: rgb(19, 55, 102);
      padding: 7px 20px;
      border-radius: 7px;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
    }
  }
  .containers{
    .item{
      display: none;
    }
    .active{
      display: block;
    }
  }
  
`;
