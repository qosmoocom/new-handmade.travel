import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
const Wrapper = styled.div`
  .user-input {
    background: none;
  }

  .item-w-t {
    width: 30%;
  }
`;
export default function SuperAdmin() {
  const logStateUsers = useSelector((state) => state.login.users);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(logStateUsers);
  }, [logStateUsers]);

  const updateInputHandler = (id) =>
    setUsers((prev) =>
      prev.map((user, index) =>
        index === id
          ? { ...user, isUpdate: true }
          : { ...user, isUpdate: false }
      )
    );

  const changeInputHandler = (id, { target: { name, value } }) =>
    setUsers((prev) =>
      prev.map((user, index) =>
        index === id ? { ...user, [name]: value } : user
      )
    );

  const deleteInputHandler = (id) =>
    setUsers((prev) =>
      prev.filter((_, index) => (id === 0 ? true : id !== index))
    );

  const cancelInputHandler = (id) => {
    setUsers((prev) =>
      prev.map((user, index) =>
        index === id ? { ...logStateUsers[index] } : user
      )
    );
  };

  const saveInputHandler = (id, user) => {
    dispatch({ type: "ADMIN_USER_UPDATE", id, user });
  };

  return (
    <Wrapper>
      <div className="admin-section" id="super-admin">
        <div className="container">
          <h3>users</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Controlls</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td className="item-w-t">
                      <input
                        type="text"
                        disabled={!user.isUpdate}
                        style={{ border: !user.isUpdate ? "none" : null }}
                        className="form-control user-input"
                        value={user.user}
                        name="user"
                        onChange={(e) => changeInputHandler(index, e)}
                      />
                    </td>
                    <td className="item-w-t">
                      <input
                        type="text"
                        disabled={!user.isUpdate}
                        style={{ border: !user.isUpdate ? "none" : null }}
                        className="form-control user-input"
                        value={user.password}
                        name="password"
                        onChange={(e) => changeInputHandler(index, e)}
                      />
                    </td>
                    <td className="item-w-t">
                      <span className="w-50 d-inline-block">
                        <button
                          className={"btn btn-info"}
                          onClick={() => {
                            if (
                              logStateUsers.some(
                                (i) =>
                                  i.user === user.user &&
                                  i.password === user.password
                              )
                            ) {
                              // update item function working
                              updateInputHandler(index);
                            } else {
                              // save item function working
                              saveInputHandler(index, user);
                            }
                          }}
                        >
                          {logStateUsers.some(
                            (i) =>
                              i.user === user.user &&
                              i.password === user.password
                          )
                            ? "update"
                            : "save"}
                        </button>
                      </span>
                      <span className="w-50 d-inline-block">
                        <button
                          className="btn mx-2 btn-danger"
                          onClick={() => {
                            if (
                              logStateUsers.some(
                                (i) =>
                                  i.user === user.user &&
                                  i.password === user.password
                              )
                            ) {
                              // delete item function working
                              deleteInputHandler(index);
                            } else {
                              // cancel item function working
                              cancelInputHandler(index);
                            }
                          }}
                        >
                          {logStateUsers.some(
                            (i) =>
                              i.user === user.user &&
                              i.password === user.password
                          )
                            ? "delete"
                            : "cancel"}
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
  );
}
