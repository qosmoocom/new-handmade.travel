import Axios from "axios";
import { toast } from "react-toastify";
import { types } from "../types";
import { loaderOff, loaderOn } from "./loaderReducer";
import { closeCreatTourModal, getAllMyTours } from "./toursReducer";
import { getConfig } from "./usersReducer";

const initialState = {
    blogs: [],
    isItCreate: false,
    isItUpdate: false,
    blog: null,
}

export const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case blogsTypes.getMeBlogs:
      return {
        ...state,
        blogs: action.data,
      };
    case blogsTypes.createBlog:
      return {
        ...state,
        isItCreate: true,
      };
    case blogsTypes.closeModal:
      return {
        ...state,
        isItCreate: false,
        isItUpdate: false,
      };
    case blogsTypes.updateBlog:
      return {
        ...state,
        isItUpdate: true,
      };
    case blogsTypes.getMeOneBlog:
      return { ...state, blog: action.data };
    case blogsTypes.setBlogStyle:
      return {
        ...state,
        blogStyle: action.style,
      };
    case blogsTypes.logOutBlogPage:
      return {
        ...initialState,
        isItCreate: false,
        isItUpdate: false,
      };
    default:
      return state;
  }
};

// blogs types
export const blogsTypes = {
  createBlog: "ADMIN/MY_BLOGS/CREATE_NEW_BLOG",
  closeModal: "ADMIN/CLOSE_TOUR_MODAL",
  updateBlog: "ADMIN/MY_TOURS/UPDATE_BLOG",
  getMeBlogs: "ADMIN/MY_TOURS/GET_ME_BLOGS",
  getMeOneBlog: "ADMIN/GET_ME_ONE_BLOG",
  setBlogStyle: "ADMIN/SET_BLOG_STYLE",
  logOutBlogPage: "ADMIN/CLOSE_BLOG_PAGE_WITH_CLEAR_REDUX",
};

// reducer
export const createNewBlog =(newBlog)=> async(dispatch) => {
    const api = '/api/blog/add'
    try {
        const res = await Axios.post(api, newBlog, getConfig())
        const data = await res.data;
        dispatch(getAllMyBlogs())
        dispatch(closeCreatTourModal())
        dispatch(loaderOff())
    } catch (error) {}
}

export const getAllMyBlogs = () => async (dispatch) => {
  dispatch(loaderOn());
  const id = JSON.parse(localStorage.getItem("isLoginMe"))._id;
  const api = `/api/blog/byUser/${id}`;
  try {
    const res = await Axios.get(api, getConfig());
    const data = await res.data;
    dispatch({ type: blogsTypes.getMeBlogs, data });
    dispatch(loaderOff());
  } catch (error) {
    dispatch(loaderOn());
  }
};

export const getMyOneBlog = (id) => async (dispatch) => {
  dispatch(loaderOn());
  const api = `/api/blog/${id}`;
  try {
    const res = await Axios.get(api, getConfig());
    const data = await res.data[0];
    dispatch(setOneBlog(data));
    setTimeout(() => {
      dispatch(loaderOff());
      // console.log('kelgan data -',data)
      dispatch({ type: types.editBlog, data });
      // dispatch({ type: types.editorOn });
    }, 500);
  } catch (error) {}
};

export const updateMyBlogs = (userId, newBlog) => async (dispatch) => {
  const api = `/api/blog/${userId}`
  try {
    const res = await Axios.put(api, newBlog, getConfig())
    const data = res.data
    toast("OK", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      dispatch(closeCreatTourModal());
    }, 500);
  } catch (error) { }
}


export const newBlogrCreatModal = () => ({ type: blogsTypes.createBlog });
export const setOneBlog = (data) => ({ type: blogsTypes.getMeOneBlog, data });
export const updateBlogModal = () => ({ type: blogsTypes.updateBlog });

export const logOutBlogPage = () => ({type : blogsTypes.logOutBlogPage})