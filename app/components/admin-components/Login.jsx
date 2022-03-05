import React, { useEffect, useReducer } from "react";
import {
  getAllUsers,
  updateAllPage,
} from "../../../store/reducer/loginReducer";
import { useRouter } from "next/router";
import styled from "styled-components";
import { BsFillLockFill, BsUnlockFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/reducer/loginReducer";
const Wrapper = styled.div`
  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
  min-height: 100vh;
  * {
    font-family: "Comfortaa", "cursive", sans-serif;
  }
  .login {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  }

  .form {
    position: relative;
    z-index: 1;
    background: #ffffff;
    border-radius: 10px;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
  }

  .form input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }

  .form input:focus {
    background: #dbdbdb;
  }

  .form button {
    text-transform: uppercase;
    outline: 0;
    background: #4b6cb7;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    &.disabled {
      transition: 0.5s;
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  .form button:active {
    background: #395591;
  }

  .form span {
    font-size: 75px;
    color: #4b6cb7;
  }
`;
const defaultState = {
  form: {
    user: "",
    password: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "changeInput":
      const { name, value } = action;
      return {
        ...state,
        form: {
          ...state.form,
          [name]: value,
        },
      };
    case "SET_VALUE_LOCALSTORAGE":
      return {
        ...state,
        form: {
          ...state.form,
          ...action.user,
        },
      };
    default:
      return state;
  }
}

export default function Login() {
  const [logState, logDispatch] = useReducer(reducer, defaultState);
  const isUserAdmin = useSelector((state) => state.login.isAdmin);
  console.log(isUserAdmin);
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    form: { user, password },
  } = logState;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.user && user.password) {
      logDispatch({ type: "SET_VALUE_LOCALSTORAGE", user });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    logDispatch({ type: "changeInput", name, value });
  };

  useEffect(() => {
    console.log("isUserAdmin", isUserAdmin);
    if (isUserAdmin) {
      router.push("/admin");
    } else {
      router.push("/login");
    }
  }, [isUserAdmin]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(user, password));
    if (isUserAdmin) router.push("/admin");
  };

  useEffect(async () => {
    dispatch(getAllUsers());
  }, []);

  console.log("logState", logState);
  return (
    <Wrapper>
      <div className="login">
        <div className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="material-icons">
              <BsFillLockFill />
            </span>
            <input
              type="text"
              placeholder="User"
              value={user}
              onChange={handleChange}
              name="user"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <button>login</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
