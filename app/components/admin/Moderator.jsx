import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  createNewTour,
  updateMyTours,
  newTourCreatModal,
  closeCreatTourModal,
  updateTourModal,
  checkedTourClone,
} from "../../../store/reducer/toursReducer";
import styled from "styled-components";
import Link from "next/link";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { FaEdit, FaRegClone } from "react-icons/fa";
import UserCreateAndUpdate from "./TourCreateAndUpdate";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { defaultState } from "./../../../store/defaultData";

export default function Moderator() {
  const toursState = useSelector((state) => state.tours);
  const router = useRouter();
  const defaultTexts = JSON.stringify(defaultState);

  const isLoginMe = JSON.parse(localStorage.getItem("isLoginMe"));

  const dispatch = useDispatch();
  const defaultTour = {
    tourName: "",
    tourTexts: defaultTexts,
    tourStyles: "none",
    tourAuthor: isLoginMe._id,
    tour_id: "",
    language: "",
  };

  const [tour, setTour] = useState(defaultTour);

  const createNewTourHandler = () => {
    dispatch(newTourCreatModal());
  };

  const closeModalCreatorHandler = () => {
    dispatch(closeCreatTourModal());
    setTour(defaultTour);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTour((oldTour) => ({ ...oldTour, [name]: value }));
  };

  const onSaveHandler = () => {
    setTimeout(() => {
      dispatch(createNewTour(tour));
    }, 500);
  };

  const openUdateTourModal = (check_tour) => {
    dispatch(updateTourModal());
    setTour(check_tour);
  };

  const onSaveUpdateTour = () => {
    const {
      tourName,
      tourTexts,
      tourStyles,
      tourAuthor,
      tour_id,
      language,
      _id,
      isItActive,
    } = tour;
    const updateTour = {
      tourName,
      tourTexts,
      tourStyles,
      tourAuthor,
      tour_id,
      language,
      isItActive,
    };
    dispatch(updateMyTours(_id, updateTour));
  };

  const tourActiveOrNoActive = (check_tour) => {
    const {
      tourName,
      tourTexts,
      tourStyles,
      tourAuthor,
      tour_id,
      language,
      _id,
      isItActive,
    } = check_tour;
    const updateTour = {
      tourName,
      tourTexts,
      tourStyles,
      tourAuthor,
      tour_id,
      language,
      isItActive: !isItActive,
    };
    dispatch(updateMyTours(_id, updateTour));
  };

  const onClone = ({
    tourName,
    tourTexts,
    tourStyles,
    tourAuthor,
    tour_id,
    language,
    isItActive,
  }) => {
    dispatch(
      checkedTourClone({
        tourName,
        tourTexts,
        tourStyles,
        tourAuthor,
        tour_id,
        language,
        isItActive,
      })
    );
  };

  const tourPagePath = (path) => {
    router.push(path);
  };
  return (
    <>
      <UserCreateAndUpdate
        tour={tour}
        onCreateClose={closeModalCreatorHandler}
        onChange={onChangeHandler}
        onSave={onSaveHandler}
        onSaveUpdate={onSaveUpdateTour}
      />
      <Wrapper>
        <div className="admin-section" id="super-admin">
          <div className="container">
            <h4>Hello {isLoginMe?.username}</h4>
            <h3>
              tours
              <span
                className="log-out"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                <Link href={"/login"}>log out</Link>
              </span>
            </h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tour Name</th>
                  <th scope="col">Tour Id</th>
                  <th scope="col">Tour Lang</th>
                  <th scope="col">
                    <div className="control-section">
                      <span>Controlls</span>
                      <HiOutlineDocumentAdd
                        className="add-user_icon"
                        onClick={createNewTourHandler}
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {toursState.tours.map((tour, index) => (
                  <tr key={tour._id}>
                    <th scope="row">{index + 1}</th>
                    <td className="item-w-t">{tour.tourName}</td>
                    <td className="item-w-t">
                      <span
                        className="tour-page-path"
                        onClick={() => tourPagePath(`/update/tour/${tour._id}`)}
                      >
                        {tour.tour_id}
                      </span>
                    </td>
                    <td className="item-w-t">{tour.language}</td>
                    <td className="item-w-t">
                      <div className="btn btn-group">
                        <button
                          className={"btn btn-info btn-sm"}
                          onClick={openUdateTourModal.bind(this, tour)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="btn btn-success btn-sm mx-1"
                          onClick={onClone.bind(this, tour)}
                        >
                          <FaRegClone />
                        </button>
                        <button
                          className={`btn btn-${
                            tour.isItActive ? "warning" : "danger"
                          } btn-sm`}
                          onClick={tourActiveOrNoActive.bind(this, tour)}
                        >
                          {tour.isItActive ? (
                            <AiOutlineEye />
                          ) : (
                            <AiOutlineEyeInvisible />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .item-w-t {
    width: 30%;
  }
  .control-section {
    position: relative;
  }
  .add-user_icon {
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: 0.2rem;
    margin-left: 3rem;
    transition: 400ms;
    position: absolute;
    right: 0;
    z-index: 1;
    &:hover {
      color: #696565;
    }
  }
  .log-out {
    font-size: 1rem;
    float: right;
    clear: both;
    margin-top: 0.2rem;
  }

  .tour-page-path {
    color: blue;
    font-size: 16px;
    cursor: pointer;
    transition: 300ms;
    &:hover {
      text-decoration: underline;
    }
  }
`;
