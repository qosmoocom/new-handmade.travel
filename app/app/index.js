import { createContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Header from "./header";

export const AppContext = createContext(null);

export default function Index() {
  const state = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const getItem = (name = "", group = "") => {
    if (!group) return state[name]?.value; // value is string
    if (group) return state[group]["data"]; // array
  };

  const defaultValue = { getItem };
  return (
    <AppContext.Provider value={defaultValue}>
      <Header />
    </AppContext.Provider>
  );
}
