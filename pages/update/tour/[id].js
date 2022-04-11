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
import styled from "styled-components";
import Link from "next/link";
import { toast } from "react-toastify";
export default function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const [keywords, setKeywords] = useState({
    meta_key: "",
    meta_des: "",
    yan_met: "",
    title: "",
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
      toast("Ваша информация сохраняется", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };

    return (
      <Wrapper>
        <Head>
          <title>Edit My Tour</title>
        </Head>
        <div className="right-btns">
          <button className="save" onClick={saveHandler}>
            save
          </button>
          <Link href={"/admin"}>
            <button className="back_admin"> back admin</button>
          </Link>{" "}
          <Link href={"/login"}>
            <button className="back_login">back login</button>
          </Link>{" "}
          <Link href={`/update/style/${_id}`}>
            <button className="edit_css">edit css</button>
          </Link>
          <Link href={"/update/style"}>
            <button className="global_css">global css</button>
          </Link>
        </div>

        <App />

        {/* loader */}
        <Loader />
      </Wrapper>
    );
  }
  return (
    <div>
      <Head>
        <title>Loading...</title>
      </Head>
      <Loader />
    </div>
  );
}

const Wrapper = styled.div`
  position: relative;
  .right-btns {
    position: fixed;
    left: 10px;
    bottom: 10px;
    z-index: 222;
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
      letter-spacing: 2px;
      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.2);
      }
    }
    .back_admin {
      background: #73c35f;
    }
    .back_login {
      background: #306280;
    }
    .edit_css {
      background: #5d2f3a;
    }
    .global_css {
      background: #b4c35f;
      color: #7e4e4e;
    }
  }
`;
