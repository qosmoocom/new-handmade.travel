import Axios from "axios";
const defaultState = {
  users: [],
  isCreateUser: false,
  isUpdateUser: false,
};

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case usersTypes.getAllUsers:
      return {
        ...state,
        users: action.data,
      };
    case usersTypes.createNewUser:
      return {
        ...state,
        isCreateUser: true,
      };
    case usersTypes.closeNewUser:
      return {
        ...state,
        isCreateUser: false,
        isUpdateUser: false,
      };

    case usersTypes.updateUser:
      return {
        ...state,
        isUpdateUser: true,
      };
    default:
      return state;
  }
};

// types
export const usersTypes = {
  getAllUsers: "ADMIN/GET_ALL_USERS",
  createNewUser: "ADMIN/CREATE_NEW_USER",
  closeNewUser: "ADMIN/CREATE_NEW_USER_MODAL_CLOSE",
  updateUser: "ADMIN/UPDATE_USER",
};

// actions
export const userLogin = (values) => async (dispatch) => {
  const api = `/api/user/login`;

  try {
    const res = await Axios.post(api, values);
    const data = await res.data;

    // token on save in the localstorage
    const token = data.token;
    localStorage.setItem("token", token);
    dispatch(getUser());
  } catch (error) {
    localStorage.clear();
    console.log("error in the userLogin function", error);
  }
};

export const getConfig = () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };

  return config;
};

export const getUser = () => async (dispatch) => {
  const api = `/api/user/me`;
  try {
    const res = await Axios.get(api, getConfig());
    const data = await res.data;
    // username and role on save in the localStorage
    localStorage.setItem("isLoginMe", JSON.stringify(data));
  } catch (error) {
    console.log("error in the getUser", error);
  }
};

export const getAllUsers = () => async (dispatch) => {
  const api = `/api/user/all`;
  try {
    const res = await Axios.get(api, getConfig());
    const data = await res.data;
    dispatch({ type: usersTypes.getAllUsers, data });
  } catch (error) {
    console.log("error in the getAllUsers", error);
  }
};

export const deleteUserId = (userId) => async (dispatch) => {
  const api = `/api/user/${userId}`;
  try {
    const res = await Axios.delete(api, getConfig());
    const data = await res.data;
    if (data.success) dispatch(getAllUsers());
  } catch (error) {
    console.log("error in the deleteUserId function", error);
  }
};

export const createUser = (newUser) => async (dispatch) => {
  const api = `/api/user/`;
  try {
    const res = await Axios.post(api, newUser, getConfig());
    const data = await res.data;
    if (data.success) {
      dispatch(getAllUsers());
      dispatch(closeCreateUserModal());
    }
  } catch (error) {
    console.log("error in the createUser", error);
  }
};

export const updateUserId = (newUser, _id) => async (dispatch) => {
  const api = `/api/user/${_id}`;
  try {
    const res = await Axios.put(api, newUser, getConfig());
    const data = await res.data;
    if (data.success) {
      dispatch(getAllUsers());
      dispatch(closeCreateUserModal());
    }
  } catch (error) {
    console.log("error in the updateUserId", error);
  }
};

export const openCreateUserModal = () => ({ type: usersTypes.createNewUser });
export const closeCreateUserModal = () => ({ type: usersTypes.closeNewUser });
export const updateUserModal = () => ({ type: usersTypes.updateUser });
