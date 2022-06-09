import { combineReducers } from "redux";
import { AdminReducer } from "./admin-reducer";
import { modalReducer } from "./modalReducer";
import { usersReducer } from "./usersReducer";
import { toursReducer } from "./toursReducer";
import { loaderReducer } from "./loaderReducer";
import { blogsReducer } from "./blogReducer";
import { categorysReducer } from "./categoryReducer";
import { Bloger } from "./bloger";

// root reducer
export const reducer = combineReducers({
  admin: AdminReducer,
  bloger: Bloger,
  modal: modalReducer,
  users: usersReducer,
  tours: toursReducer,
  blogs: blogsReducer,
  loader: loaderReducer,
  category: categorysReducer,
});
