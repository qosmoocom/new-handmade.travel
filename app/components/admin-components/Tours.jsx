import { HiDocumentAdd } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

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

      &.no-active {
        opacity: 0.3;
        cursor: not-allowed;
        &:hover {
          color: #000;
        }
      }
    }
  }

  .add-tour {
    margin-left: 10px;
    font-size: 20px;
    cursor: pointer;
  }

  .create-tour-modal {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 222;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    background: rgba(0, 0, 256, 0.2);
    .modal-content-form {
      padding: 20px;
    }
  }
`;

function Tours({ tours, onOrOff, onEdit, addTour }) {
  const addTourHandler = () => {
    // addTour();
  };

  const [modal, setModal] = useState({
    isOpen: false,
    values: {
      tourName: "",
      tourLanguage: "",
    },
  });
  return (
    <>
      <Wrapper>
        {/* <div className="create-tour-modal">
          <div className="modal-content-form">
            <p>Are you create Tour?</p>
            <div className="input-box">
              <input type="text" />
            </div>
            <div className="input-box">
              <input type="text" />
            </div>
            <div className="input-box">
              <input type="text" />
            </div>
            <div className="btn-box">
              <button>save</button>
              <button>cancel</button>
            </div>
          </div>
        </div> */}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tour Name</th>
                <th scope="col">Tour ID</th>
                <th scope="col">Tour Language</th>
                <th scope="col">User ID</th>
                <th scope="col">
                  Control{" "}
                  <HiDocumentAdd
                    className="add-tour"
                    onClick={addTourHandler}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {tours.map((mytour, index) => (
                <tr key={mytour._id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <Link href={"/"}>{mytour.tourName}</Link>
                  </td>
                  <td>{mytour.type_id}</td>
                  <td>{mytour.language}</td>
                  <td>{mytour.userID}</td>
                  <td>
                    <div className="my-btns">
                      <button onClick={() => onEdit(mytour._id)}>
                        <FaEdit />
                      </button>
                      <button className="no-active">
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
    </>
  );
}

export default Tours;
