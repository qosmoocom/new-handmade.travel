import Axios from "axios";
const initialState = {
  tours: [],
  isLoading: null,
};

// reducer
export const userToursReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTourTypes.getAllTours:
      return {
        ...state,
        tours: action.tours,
      };
    default:
      return state;
  }
};

// types
export const userTourTypes = {
  getAllTours: "USER_TOURS/GET_ALL_TOURS",
  updateTour: "USER_TOURS/UPDATE_TOUR",
};

// actions
export const getAllTours = () => async (dispatch) => {
  try {
    const res = await Axios.get("http://localhost:5000/api/tour/all", {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("my-token")),
      },
    });
    const data = await res.data;
    dispatch({ type: userTourTypes.getAllTours, tours: data });
  } catch (error) {
    console.log("error in the getAllTours function");
  }
};

export const updateUserTour = (tourId, tour) => async (dispatch) => {
  try {
    const res = await Axios.put(
      `http://localhost:5000/api/tour/${tourId}`,
      tour
    );
    const data = await res.data;
    dispatch(getAllTours());
  } catch (error) {
    console.log("error in the updateUserTour function", error);
  }
};
