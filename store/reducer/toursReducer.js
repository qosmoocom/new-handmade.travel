import Axios from "axios";

import { getConfig } from "./usersReducer";

const initialState = {
  tours: [],
  isItCreate: false,
  isItUpdate: false,
};

// reducer
export const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// tours types
export const toursTypes = {
  createTour: "ADMIN/MY_TOURS/CREATE_NEW_TOUR",
  closeModal: "ADMIN/CLOSE_TOUR_MODAL",
  updateTour: "ADMIN/MY_TOURS/UPDATE_TOUR",
};

// tours actions
export const createNewTours = (newTour) => async (dispatch) => {
  const api = `http://localhost:5000/api/tour/add`;
  try {
    const res = await Axios.post(api, newTour, getConfig());
    const data = await res.data;
    console.log("new tour", data);
  } catch (error) {
    console.log("error in the createNewTour function", error);
  }
};

export const getAllMyTours = () => async (dispatch) => {
  const api = `http://localhost:5000/api/`;
};
