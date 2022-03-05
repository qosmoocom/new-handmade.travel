import Axios from "axios";
import { useRouter } from "next/router";
import { getAllTours } from "./userToursReducer";
const defaultState = {
  users: [],
  isAdmin: false,
  role: "",
};

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "THIS_IS_ADMIN":
      return {
        ...state,
        isAdmin: true,
      };
    case "GET_ALL_USERS":
      return {
        ...state,
        isAdmin: true,
        users: action.data.map((user) => {
          return {
            user: user.username,
            password: user.password,
            isUpdate: false,
            error: false,
            role: user.role,
            id: user._id,
          };
        }),
      };
    case "LOG_OUT": {
      return {
        ...state,
        isAdmin: false,
      };
    }
    default:
      return state;
  }
};

export const getAllUsers = (data) => async (dispatch) => {
  try {
    console.log(data);
    dispatch({ type: "GET_ALL_USERS", data });
  } catch (e) {
    // error
  }
};

export const login = (username, password) => async (dispatch) => {
  try {
    const res = await Axios.post("http://localhost:5000/api/user/login", {
      username,
      password,
    });
    console.log(res);
    const { token = "" } = await res.data;
    localStorage.setItem("my-token", JSON.stringify(token));
    // dispatch(updateAllPage());
    dispatch(logMe());
  } catch (error) {}
};
export const updateAllPage = () => async (dispatch) => {
  console.log("salom");
  await Axios.get("http://localhost:5000/api/user/all", {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("my-token")),
    },
  })
    .then((r) => {
      console.log(r.data);
      dispatch(getAllUsers(r.data));
      return r.data;
    })
    .catch((error) => {});
};

export const deleteUserId = (userId) => async (dispatch) => {
  try {
    await Axios.delete(`http://localhost:5000/api/user/${userId}`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("my-token")),
      },
    });
    dispatch(updateAllPage());
  } catch (error) {
    console.log("error in deleteUserId function:", error);
  }
};

export const updateUserId = (user, userId) => async (dispatch) => {
  const newUser = {
    username: user.user,
    password: user.password,
  };
  try {
    const res = await Axios.put(`http://localhost:5000/api/user/${userId}`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("my-token")),
      },
      body: newUser,
    });
    const data = await res.data;
    if (data.success) {
      dispatch(getAllUsers());
    }
  } catch (error) {
    console.log("error in the updateUserId function", error);
  }
};

export const createNewUser = (newUser) => async (dispatch) => {
  try {
    await Axios.post("http://localhost:5000/api/user/", {
      headers: { Authorization: JSON.parse(localStorage.getItem("my-token")) },
      body: { username: "admin3", password: "3", role: "moderator" },
    });
    dispatch(getAllUsers());
  } catch (error) {
    console.log("error in the createNewUser function", error);
  }
};

export const logout = () => ({ type: "LOG_OUT" });

export const logMe = () => async (dispatch) => {
  try {
    const res = await Axios.get("http://localhost:5000/api/user/me", {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("my-token")) || "no",
      },
    });
    const { role } = await res.data;
    console.log("role", role);
    if (role === "admin") {
      dispatch(updateAllPage());
    } else if (role === "moderator") {
      dispatch(getAllTours());
    }
  } catch (error) {}
};
