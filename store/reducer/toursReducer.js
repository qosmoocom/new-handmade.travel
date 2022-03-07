import Axios from "axios";
import { types } from "../types";
import { loaderOff, loaderOn } from "./loaderReducer";

import { getConfig } from "./usersReducer";

const initialState = {
  tours: [],
  isItCreate: false,
  isItUpdate: false,
  tour: null,
};

// reducer
export const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case toursTypes.getMeTours:
      return {
        ...state,
        tours: action.data,
      };
    case toursTypes.createTour:
      return {
        ...state,
        isItCreate: true,
      };
    case toursTypes.closeModal:
      return {
        ...state,
        isItCreate: false,
        isItUpdate: false,
      };
    case toursTypes.updateTour:
      return {
        ...state,
        isItUpdate: true,
      };

    case toursTypes.getMeOneTour:
      return { ...state, tour: action.data };
    default:
      return state;
  }
};

// tours types
export const toursTypes = {
  createTour: "ADMIN/MY_TOURS/CREATE_NEW_TOUR",
  closeModal: "ADMIN/CLOSE_TOUR_MODAL",
  updateTour: "ADMIN/MY_TOURS/UPDATE_TOUR",
  getMeTours: "ADMIN/MY_TOURS/GET_ME_TOURS",
  getMeOneTour: "ADMIN/GET_ME_ONE_TOUR",
};

// tours actions
export const createNewTour = (newTour) => async (dispatch) => {
  const api = `/api/tour/add`;
  try {
    const res = await Axios.post(api, newTour, getConfig());
    const data = await res.data;
    dispatch(getAllMyTours());
    dispatch(closeCreatTourModal());
    dispatch(loaderOff());
  } catch (error) {
    console.log("error in the createNewTour function", error);
  }
};

export const getAllMyTours = () => async (dispatch) => {
  dispatch(loaderOn());
  const id = JSON.parse(localStorage.getItem("isLoginMe"))._id;
  const api = `/api/tour/byUser/${id}`;
  try {
    const res = await Axios.get(api, getConfig());
    const data = await res.data;
    dispatch({ type: toursTypes.getMeTours, data });
    dispatch(loaderOff());
  } catch (error) {
    dispatch(loaderOn());
    console.log("Error it is Tour all", error);
  }
};

export const updateMyTours = (userId, newTour) => async (dispatch) => {
  const api = `/api/tour/${userId}`;
  try {
    await Axios.put(api, newTour, getConfig());
    // const data = await res.data;

    dispatch(getAllMyTours());
    setTimeout(() => {
      dispatch(closeCreatTourModal());
    }, 500);
  } catch (error) {
    console.log("error in the updateMyTours function", error);
  }
};

export const checkedTourClone = (cloneTour) => async (dispatch) => {
  dispatch(createNewTour(cloneTour));
};

export const getMyOneTour = (id) => async (dispatch) => {
  dispatch(loaderOn());
  const api = `/api/tour/${id}`;
  try {
    const res = await Axios.get(api, getConfig());
    const data = await res.data;
    dispatch(setOneTour(data));
    setTimeout(() => {
      dispatch(loaderOff());
      dispatch({ type: types.editTour, data });
      dispatch({ type: types.editorOn });
    }, 500);
  } catch (error) {
    console.log("error in the getMeOneTour function", error);
  }
};
export const newTourCreatModal = () => ({ type: toursTypes.createTour });
export const closeCreatTourModal = () => ({ type: toursTypes.closeModal });
export const updateTourModal = () => ({ type: toursTypes.updateTour });
export const setOneTour = (data) => ({ type: toursTypes.getMeOneTour, data });
