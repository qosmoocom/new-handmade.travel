import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import Footer from "./footer/index";
import { Modal1 } from "./modals/modal-1";
import { Modal2 } from "./modals/modal-2";
import { Modal3 } from "./modals/modal-3";

// components
import ModalForText from "../components/modals/ModalForText";
import ModalForLink from "../components/modals/ModalForLink";
import ModalForImage from "../components/modals/ModalForImage";
import ModalForCheckedIcon from "../components/modals/ModalForCheckedIcon";
import { getMyTourStyle } from "../../store/reducer/toursReducer";

export const AppContext = createContext(null);

export default function Index() {
  const state = useSelector((state) => state.admin);
  const modalOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const router = useRouter();
  const appStyle = useSelector((state) => state.tours.tourStyle);
  const getItem = (name = "", group = "") => {
    if (!group) return state[name]?.value; // value is string
    if (group) return state[group]["data"]; // array
  };
  const defaultValue = { getItem };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.cssText = `
        height:100vh;
        overflow: hidden;
      `;
    } else {
      document.body.style.cssText = `
        height:auto;
        overflow-y: auto;
      `;
    }
  }, [modalOpen]);

  useEffect(() => {
    if (router?.query?.id) {
      dispatch(getMyTourStyle(router.query.id));
    }
  }, [router]);

  return (
    <AppContext.Provider value={defaultValue}>
      {/* modals */}

      <style global jsx>
        {appStyle}
      </style>

      <Modal1 />
      <Modal2 />
      <Modal3 />
      {/* ___modals */}
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
      <Footer />

      {/* these are refreshing components */}
      <ModalForText />
      <ModalForLink />
      <ModalForImage />
      <ModalForCheckedIcon />
      {/* -------------- */}
    </AppContext.Provider>
  );
}
