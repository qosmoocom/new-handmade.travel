import { combineReducers } from "redux";
import { AdminReducer } from "./admin-reducer";

export const reducer = combineReducers({
  admin: AdminReducer,
});
