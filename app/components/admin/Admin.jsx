import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteUserId,
  createUser,
  openCreateUserModal,
  closeCreateUserModal,
  updateUserModal,
  updateUserId,
} from "../../../store/reducer/usersReducer";

import UserCreateAndUpdate from "./UserCreateAndUpdate";
export default function Admin() {
  const globalState = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const deleteHandler = (user) => {
    const { role, _id } = user;
    if (role !== "admin") {
      dispatch(deleteUserId(_id));
    }
  };

  const createUserHandler = () => {
    dispatch(openCreateUserModal());
    setUser({ username: "", password: "" });
  };

  const onSaveNewUserHandler = () => {
    const newUser = { ...user, role: "moderator" };
    dispatch(createUser(newUser));
  };

  const onCloseModal = () => {
    dispatch(closeCreateUserModal());
    setUser({ username: "", password: "" });
  };

  const onUpdateUserHandler = (oldUser) => {
    dispatch(updateUserModal());
    setUser((ou) => ({ ...ou, username: oldUser.username, _id: oldUser._id }));
  };
  const onSaveUpdateUser = () => {
    const updateUser = {
      username: user.username,
      password: user.password,
    };
    const _id = user._id;
    dispatch(updateUserId(updateUser, _id));
  };

  const logOutHandler = () => {
    localStorage.clear();
  };
  return (
    <>
      <UserCreateAndUpdate
        user={user}
        setUser={setUser}
        onSave={onSaveNewUserHandler}
        isItCreate={globalState.isCreateUser}
        onClose={onCloseModal}
        onUpdate={onSaveUpdateUser}
        isItUpdate={globalState.isUpdateUser}
      />
      <Wrapper>
        <div className="admin-section" id="super-admin">
          <div className="container">
            <h3>
              users
              <span className="log-out" onClick={logOutHandler}>
                <Link href={"/login"}>log out</Link>
              </span>
            </h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Role</th>
                  <th scope="col">
                    <span>Controlls</span>
                    <AiOutlineUserAdd
                      className="add-user_icon"
                      onClick={createUserHandler}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {globalState?.users.map((user, index) => {
                  return (
                    <tr key={user._id}>
                      <th scope="row">{index + 1}</th>
                      <td className="item-w-t">{user.username}</td>
                      <td className="item-w-t">{user.role}</td>
                      <td className="item-w-t">
                        <span className="w-50 d-inline-block">
                          <button
                            className={"btn btn-info"}
                            onClick={onUpdateUserHandler.bind(this, user)}
                          >
                            edit
                          </button>
                        </span>
                        <span className="w-50">
                          <button
                            className="btn btn-danger"
                            onClick={deleteHandler.bind(this, user)}
                          >
                            delete
                          </button>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  .user-input {
    background: none !important;
    transition: 300ms;
    &.error {
      border: 2px solid red !important;
    }
  }
  .item-w-t {
    width: 30%;
  }
  .add-user_icon {
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: 0.2rem;
    margin-left: 3rem;
    transition: 400ms;
    &:hover {
      color: #696565;
    }
  }
  .log-out {
    font-size: 1rem;
    float: right;
    clear: both;
    margin-top: 0.2rem;
  }
`;
