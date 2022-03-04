import Axios from "axios";
const defaultState = {
  users: [],
  isAdmin: false,
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
    default:
      return state;
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:5000/api/user/all");
    const data = await response.json();
    dispatch({ type: "GET_ALL_USERS", data });
  } catch (e) {
    // error
  }
};

export const deleteUserId = (userId, role) => async (dispatch) => {
  try {
    if (role === "admin") {
      const res = await Axios.delete(
        `http://localhost:5000/api/user/${userId}`
      );
      const data = await res.data;
      if (data.success) dispatch(getAllUsers());
    }
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
    const res = await Axios.put(
      `http://localhost:5000/api/user/${userId}`,
      newUser
    );
    const data = await res.data;
    if (data.success) {
      dispatch(getAllUsers());
    }
  } catch (error) {
    console.log("error in the updateUserId function", error);
  }
};

export const createNewUser = () => async (dispatch) => {
  try {
    const newUser = {
      username: "new username",
      password: "new password",
      role: "admin",
    };
    const res = await Axios.post("http://localhost:5000/api/user/", newUser);
    const data = await res.data;
    if (data.success) dispatch(getAllUsers());
  } catch (error) {
    console.log("error in the createNewUser function", error);
  }
};
