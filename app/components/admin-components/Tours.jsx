import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .edit-tour {
    background: none !important;
    border: none;
    color: #456bbd;
    text-decoration: underline;
  }

  .my-btns {
    display: flex;
    align-items: center;
    button {
      background: none;
      border: none;
      font-size: 1rem;
      font-weight: 500;
      transition: 300ms;
      min-width: 25px;
      cursor: pointer;
      z-index: 3;
      &:hover {
        color: blue;
      }
    }
  }
`;

function Tours({ tours, onOrOff, onEdit }) {
  return (
    <Wrapper>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tour Name</th>
              <th scope="col">Tour ID</th>
              <th scope="col">Tour Language</th>
              <th scope="col">User ID</th>
              <th scope="col">Control</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((mytour, index) => (
              <tr key={mytour._id}>
                <th scope="row">{index + 1}</th>
                <td>{mytour.tourName}</td>
                <td>{mytour.type_id}</td>
                <td>{mytour.language}</td>
                <td>{mytour.userID}</td>
                <td>
                  <div className="my-btns">
                    <button onClick={() => onEdit(mytour._id)}>
                      <FaEdit />
                    </button>
                    <button>
                      <AiFillDelete />
                    </button>
                    <button onClick={onOrOff.bind(this, mytour._id)}>
                      {mytour.isOn ? "on" : "off"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}

export default Tours;
