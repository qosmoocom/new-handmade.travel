import React, { useEffect, useState } from "react";
import App from "../../../app/app";

import Head from "next/head";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyOneTour,
  updateMyTours,
} from "../../../store/reducer/toursReducer";

import Loader from "./../../../app/components/Loader/index";
import KeywordsPage from "../../../app/components/admin/KeywordsPage";
import Error404 from "./../../../app/components/Error";
import styled from "styled-components";
import Link from "next/link";
export default function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const [keywords, setKeywords] = useState({
    meta_key: "",
    meta_des: "",
    yan_met: "",
  });
  useEffect(() => {
    if (router.query.id) {
      dispatch(getMyOneTour(router.query.id.toString()));
    }
  }, [router]);

  if (globalState.tours.tour) {
    const updateTexts = JSON.stringify({
      ...globalState.admin,
      isEdit: false,
      keywords,
    });
    const tour = globalState.tours.tour;
    const {
      isItActive,
      language,
      tourAuthor,
      tourName,
      tourStyles,
      tour_id,
      _id,
    } = tour;

    const saveHandler = () => {
      const updateTour = {
        tourName,
        tourAuthor,
        tourStyles,
        tour_id,
        language,
        isItActive,
        tourTexts: updateTexts,
      };
      dispatch(updateMyTours(_id, updateTour));
    };

    return (
      <Wrapper>
        <Head>
          <title>Edit My Tour</title>
        </Head>
        <div className="right-btns">
          <button onClick={saveHandler}>save</button>
          <Link href={"/admin"}>back admin</Link>{" "}
          <Link href={"/login"}>back login</Link>
        </div>
        <App />
        <KeywordsPage
          keywords={keywords}
          setKeywords={setKeywords}
          onSave={saveHandler}
        />

        {/* loader */}
        <Loader />
      </Wrapper>
    );
  }
  return (
    <div>
      <Head>
        <title>sorry you are not an admin</title>
      </Head>
      <Error404 />
    </div>
  );
}

const Wrapper = styled.div`
  position: relative;
  .right-btns {
    position: fixed;
    left: 10px;
    bottom: 10px;
    z-index: 22;
    button {
      color: #fff;
      background: rgb(0, 0, 0);
      padding: 10px 20px;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      border-radius: 6px;
      transition: 0.4s;
      margin-right: 10px;
      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.2);
      }
    }
  }
`;