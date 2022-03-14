import Axios from 'axios';
import { types } from '../types';
import { loaderOff, loaderOn } from './loaderReducer';
import { getConfig } from './usersReducer';
import { cssText } from './../../app/components/admin/globalCss';

const initialState = {
  tours: [],
  isItCreate: false,
  isItUpdate: false,
  tour: null,
  tourStyle: '',
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
    case toursTypes.setTourStyle:
      return {
        ...state,
        tourStyle: action.style,
      };
    default:
      return state;
  }
};

// tours types
export const toursTypes = {
  createTour: 'ADMIN/MY_TOURS/CREATE_NEW_TOUR',
  closeModal: 'ADMIN/CLOSE_TOUR_MODAL',
  updateTour: 'ADMIN/MY_TOURS/UPDATE_TOUR',
  getMeTours: 'ADMIN/MY_TOURS/GET_ME_TOURS',
  getMeOneTour: 'ADMIN/GET_ME_ONE_TOUR',
  setTourStyle: 'ADMIN/SET_TOUR_STYLE',
};

// tours actions
export const createNewTour = (newTour) => async (dispatch) => {
  const api = `/api/tour/add`;
  const api2 = `/api/style/`;
  try {
    const res = await Axios.post(api, newTour, getConfig());
    const data = await res.data;
    dispatch(getAllMyTours());
    dispatch(closeCreatTourModal());
    dispatch(loaderOff());
    const { _id } = data;
    const my_style_data = {
      tourID: _id,
      styles: cssText,
    };
    await Axios.post(api2, my_style_data)
      .then((res) => res.data)
      .then((data) => {
        console.log('res style created:', data);
        const tourID = data.tourID;
        console.log('new tour', newTour);
      })
      .catch((styleError) => {
        console.log('style is not create, there is a error', styleError);
      });

    console.log('create new tour and style:\n data:');
  } catch (error) {
    console.log('error in the createNewTour function', error);
  }
};

export const getAllMyTours = () => async (dispatch) => {
  dispatch(loaderOn());
  const id = JSON.parse(localStorage.getItem('isLoginMe'))._id;
  const api = `/api/tour/byUser/${id}`;
  try {
    const res = await Axios.get(api, getConfig());
    const data = await res.data;
    dispatch({ type: toursTypes.getMeTours, data });
    dispatch(loaderOff());
    console.log('get my all tours', data);
  } catch (error) {
    dispatch(loaderOn());
    console.log('Error it is Tour all', error);
  }
};

export const updateMyTours = (userId, newTour) => async (dispatch) => {
  const api = `/api/tour/${userId}`;
  try {
    const res = await Axios.put(api, newTour, getConfig());
    const data = await res.data;

    dispatch(getAllMyTours());
    setTimeout(() => {
      dispatch(closeCreatTourModal());
    }, 500);
    console.log(`update my tour\n data:${data}`);
  } catch (error) {
    console.log('error in the updateMyTours function', error);
  }
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

    console.log('get my one tour:');
  } catch (error) {
    console.log('error in the getMeOneTour function', error);
  }
};

export const getMyTourStyle = (id) => async (dispatch) => {
  const api = `/api/style/${id}`;
  console.log('api bu', api);
  dispatch(loaderOn());
  try {
    const res = await Axios.get(api);
    const data = await res.data;
    dispatch(setStyle(data.styles));
    setTimeout(() => {
      dispatch(loaderOff());
    }, 500);
    console.log('get my tour style;');
  } catch (error) {
    dispatch(loaderOn());
    console.log('getMyTourStyle error ', error);
  }
};

export const newTourCreatModal = () => ({ type: toursTypes.createTour });
export const closeCreatTourModal = () => ({ type: toursTypes.closeModal });
export const updateTourModal = () => ({ type: toursTypes.updateTour });
export const setOneTour = (data) => ({ type: toursTypes.getMeOneTour, data });
export const setStyle = (style) => ({ type: toursTypes.setTourStyle, style });
