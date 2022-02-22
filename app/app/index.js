import { createContext } from "react";
import { useSelector } from "react-redux";

import Header from "./header";
import FirstUtp from "./first-utp";
import SecondUtp from "./second-utp";
import TourProgram from "./tour-program";
import ActionDetail from "./action-detail";
import Price from "./prices";
import Rate from "./rate";
import ActionPicture from "./action-picture";
import Gallery from "./gallery";
import Author from "./author";
import WhyWithUs from "./why-with-us";
import Samele from "./samele";
import Reviews from "./reviews";
import Benefit from "./benefit";
import Faq from "./faq";
import OtherTour from "./other-tours";

// components
import ModalForText from "../components/modals/ModalForText";
import ModalForLink from "../components/modals/ModalForLink";
import ModalForImage from "../components/modals/ModalForImage";
import ModalForCheckedIcon from "../components/modals/ModalForCheckedIcon";

export const AppContext = createContext(null);

export default function Index() {
  const state = useSelector((state) => state.admin);

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
      <TourProgram />
      <ActionDetail />
      <Price />
      <Rate />
      <ActionPicture />
      <Gallery />
      <Author />
      <WhyWithUs />
      <Samele />
      <Reviews />
      <Benefit />
      <Faq />
      <OtherTour />
      {/* these are refreshing components */}
      <ModalForText />
      <ModalForLink />
      <ModalForImage />
      <ModalForCheckedIcon />
      {/* -------------- */}
    </AppContext.Provider>
  );
}
