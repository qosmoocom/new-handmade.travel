import { createContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Header from "./header";
import FirstUtp from "./first-utp";
import SecondUtp from "./second-utp";

// components
import ModalForText from "../components/modals/ModalForText";
import ModalForLink from "../components/modals/ModalForLink";
import ModalForImage from "../components/modals/ModalForImage";

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
      <FirstUtp />
      <SecondUtp />
      {/* these are refreshing components */}
      <ModalForText />
      <ModalForLink />
      <ModalForImage />
      {/* -------------- */}
    </AppContext.Provider>
  );
}
