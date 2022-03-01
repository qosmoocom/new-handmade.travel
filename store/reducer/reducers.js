import { combineReducers } from "redux";
import { AdminReducer } from "./admin-reducer";
import { loginReducer } from "./loginReducer";
import { modalReducer } from "./modalReducer";

export const reducer = combineReducers({
  admin: AdminReducer,
  login: loginReducer,
  modal: modalReducer,
});
