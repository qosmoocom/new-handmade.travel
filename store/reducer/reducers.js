import { combineReducers } from "redux";
import { AdminReducer } from "./admin-reducer";
import { modalReducer } from "./modalReducer";
import { usersReducer } from "./usersReducer";
import { toursReducer } from "./toursReducer";

export const reducer = combineReducers({
  admin: AdminReducer,
  modal: modalReducer,
  users: usersReducer,
  tours: toursReducer,
});
