/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { ToastContainer } from "react-toastify";
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
import Life from "./life";
import ActionPicture from "./action-picture";
import Gallery from "./gallery";
import Author from "./author";
import WhoIs from "./whois";
import WhyWithUs from "./why-with-us";
import Samele from "./samele";
import Reviews from "./reviews";
import Benefit from "./benefit";
import BenefitModal from "./benefit-modal";
import BenefitLink from "./benefit-link";
import ThirdUtp from "./third-utp";
import Faq from "./faq";
import OtherTour from "./other-tours";
import Footer from "./footer/index";
import TourTitle from './tour-title'
import { Modal1 } from "./modals/modal-1";
import { Modal5 } from "./modals/modal-5";
import { Modal2 } from "./modals/modal-2";
import { Modal3 } from "./modals/modal-3";

import Lidmagnit from "./lidmagnit";

// components
import ModalForText from "../components/modals/ModalForText";
import ModalForLink from "../components/modals/ModalForLink";
import ModalForImage from "../components/modals/ModalForImage";
import ModalForCheckedIcon from "../components/modals/ModalForCheckedIcon";
import { getMyTourStyle } from "../../store/reducer/toursReducer";
import Keyword from "./keywords";
import { loaderOff } from "../../store/reducer/loaderReducer";

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
    if (1==1) {}
  };
  const defaultValue = { getItem };
  // getItem

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <AppContext.Provider value={defaultValue}>
      <div id="firstLanding">
        {/* modals */}
        <Head>
          <title>Loading..</title>
        </Head>

        {appStyle && (
          <>
            <style global jsx>
              {appStyle}
            </style>

            <Head>
              <title>{getItem("app_title")}</title>
              <meta name="keywords" content={getItem("app_keywords")} />
              <meta name="description" content={getItem("app_description")} />
            </Head>

            <Modal1 />
            <Modal2 />
            <Modal3 />
            <Modal5 />
            {/* ___modals */}
            {/* yandex */}
            <div>
              <img
                src={`https://mc.yandex.ru/watch/91108865`}
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
              <img
                height="1"
                width="1"
                src="https://www.facebook.com/tr?id=4544213979029989&ev=PageView&noscript=1"
              />
            </div>
            {/* yanxdedx */}
            <Header />
            <TourTitle/>
            <FirstUtp />
            <Lidmagnit/>
            <SecondUtp />
            <TourProgram />
            <ActionDetail />
            <Price />
            <Rate />
            <Life />
            <ActionPicture />
            <Gallery />
            <Author />
            <WhoIs />
            <WhyWithUs />
            <Samele />
            <ThirdUtp />
            <Reviews />
            <Benefit />
            <BenefitModal />
            <BenefitLink />
            <Faq />
            <OtherTour />
            <Footer />

            <ModalForText />
            <ModalForLink />
            <ModalForImage />
            <ModalForCheckedIcon />

            {/* keywords */}
            <Keyword />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </>
        )}
      </div>
    </AppContext.Provider>
  );
}
