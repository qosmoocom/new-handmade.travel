import Axios from "axios";
const defaultState = {
  categorys: [],
  isCreateCategory: false,
  isUpdateCategory: false,
};

export const categorysReducer = (state = defaultState, action) => {
  switch (action.type) {
      case categorysTypes.getAllCategorys:
      return {
        ...state,
        categorys: action.data,
      };
    case categorysTypes.createNewCategory:
      return {
        ...state,
        isCreateCategory: true,
      };
    case categorysTypes.closeNewCategory:
      return {
        ...state,
        isCreateCategory: false,
        isUpdateCategory: false,
      };

    case categorysTypes.updateCategory:
      return {
        ...state,
        isUpdateCategory: true,
      };
    default:
      return state;
  }
};

// types
export const categorysTypes = {
  getAllCategorys: "ADMIN/GET_ALL_CATEGORYS",
  createNewCategory: "ADMIN/CREATE_NEW_CATEGORY",
  closeNewCategory: "ADMIN/CREATE_NEW_CATEGORY_MODAL_CLOSE",
  updateCategory: "ADMIN/UPDATE_CATEGORY",
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

// export const getUser = () => async (dispatch) => {
//   const api = `/api/user/me`;
//   try {
//     const res = await Axios.get(api, getConfig());
//     const data = await res.data;
//     // username and role on save in the localStorage
//     localStorage.setItem("isLoginMe", JSON.stringify(data));
//   } catch (error) {}
// };

export const getAllCategorys = () => async (dispatch) => {
  const api = `/api/category/all`;
  try {
    const res = await Axios.get(api, getConfig());
    const data = await res.data;
    dispatch({ type: categorysTypes.getAllCategorys, data });
  } catch (error) {}
};

export const deleteCategoryId = (categoryId) => async (dispatch) => {
  const api = `/api/category/${categoryId}`;
  try {
    const res = await Axios.delete(api, getConfig());
    const data = await res.data;
    if (data.success) dispatch(getAllCategorys());
  } catch (error) {}
};

export const createCategory = (newCategory) => async (dispatch) => {
  const api = `/api/category/`;
  try {
    const res = await Axios.post(api, newCategory, getConfig());
      const data = await res.data;
    if (res.status==200) {
      dispatch(getAllCategorys());
      dispatch(closeCreatecategoryModal());
    }
  } catch (error) {}
};

export const updateCategoryId = (newCategory, _id) => async (dispatch) => {
    const api = `/api/category/${_id}`;
  try {
      const res = await Axios.put(api, newCategory, getConfig());
    const data = await res.data;
    if (res.status==200) {
      dispatch(getAllCategorys());
      dispatch(closeCreatecategoryModal());
    }
  } catch (error) {console.log(error);}
};

export const openCreatecategoryModal = () => ({ type: categorysTypes.createNewCategory });
export const closeCreatecategoryModal = () => ({ type: categorysTypes.closeNewCategory });
export const updateCategoryModal = () => ({ type: categorysTypes.updateCategory  });
