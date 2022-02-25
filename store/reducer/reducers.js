import { combineReducers } from "redux";
import { AdminReducer } from "./admin-reducer";
import { loginReducer } from "./loginReducer";

export const reducer = combineReducers({
  admin: AdminReducer,
  login: loginReducer,
});
