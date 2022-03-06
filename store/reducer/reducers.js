import { combineReducers } from "redux";
import { AdminReducer } from "./admin-reducer";
import { modalReducer } from "./modalReducer";
import { usersReducer } from "./usersReducer";
import { toursReducer } from "./toursReducer";
import { loaderReducer } from "./loaderReducer";

// root reducer
export const reducer = combineReducers({
  admin: AdminReducer,
  modal: modalReducer,
  users: usersReducer,
  tours: toursReducer,
  loader: loaderReducer,
});
