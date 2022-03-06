import React from "react";
import { createNewTours } from "../../../store/reducer/toursReducer";
import styled from "styled-components";
import Link from "next/link";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { FaEdit, FaRegClone } from "react-icons/fa";
import UserCreateAndUpdate from "./TourCreateAndUpdate";
import {
  AiFillDelete,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";

export default function Moderator() {
  const isLoginMe = JSON.parse(localStorage.getItem("isLoginMe"));

  return (
    <>
      <UserCreateAndUpdate />
      <Wrapper>
        <div className="admin-section" id="super-admin">
          <div className="container">
            <h4>Hello {isLoginMe?.username}</h4>
            <h3>
              tours
              <span className="log-out">
                <Link href={"/login"}>log out</Link>
              </span>
            </h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tour Name</th>
                  <th scope="col">Tour Id</th>
                  <th scope="col">Tour Lang</th>
                  <th scope="col">
                    <div className="control-section">
                      <span>Controlls</span>
                      <HiOutlineDocumentAdd className="add-user_icon" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td className="item-w-t">Вкусный Узбекистан</td>
                  <td className="item-w-t">
                    <Link href={"/"}>gastro</Link>
                  </td>
                  <td className="item-w-t">ru</td>
                  <td className="item-w-t">
                    <div className="btn btn-group">
                      <button className={"btn btn-info btn-sm"}>
                        <FaEdit />
                      </button>
                      <button className="btn btn-success btn-sm mx-1">
                        <FaRegClone />
                      </button>
                      <button className="btn btn-danger btn-sm">
                        <AiOutlineEye />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .item-w-t {
    width: 30%;
  }
  .control-section {
    position: relative;
  }
  .add-user_icon {
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: 0.2rem;
    margin-left: 3rem;
    transition: 400ms;
    position: absolute;
    right: 0;
    z-index: 1;
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
