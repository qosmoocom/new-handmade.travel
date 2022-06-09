import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import { getConfig } from "../../../store/reducer/usersReducer";
import {
  createNewTour,
  updateMyTours,
  newTourCreatModal,
  closeCreatTourModal,
  updateTourModal,
  getAllMyTours,
} from "../../../store/reducer/toursReducer";
import styled from "styled-components";
import Link from "next/link";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { FaEdit, FaRegClone } from "react-icons/fa";
import UserCreateAndUpdate from "./TourCreateAndUpdate";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { defaultState } from "../../../store/defaultData";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

export default function Moderator() {
  const toursState = useSelector((state) => state.tours);
  // console.log(toursState);
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
    checkforid: false,
  };

  const [tour, setTour] = useState(defaultTour);
  const defaultCloneTour = { clone: false, tours: [], ct_id: "", cts: {} };
  const [cloneTour, setCloneTour] = useState(defaultCloneTour);

  const createNewTourHandler = () => {
    dispatch(newTourCreatModal());
  };

  const closeModalCreatorHandler = () => {
    dispatch(closeCreatTourModal());
    setTour(defaultTour);
  };

  const onChangeHandler = (event) => {
    if (event.target.name == "checkforid") {
      const { name, checked } = event.target;
      let value = checked
      setTour((oldTour) => ({ ...oldTour, [name]: value }));
      console.log(name, value);
      console.log(tour);
    } else {
      const { name, value } = event.target;
      setTour((oldTour) => ({ ...oldTour, [name]: value }));
      console.log(name, value);
      console.log(event);
    }
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
      checkforid,
    } = tour;
    const updateTour = {
      tourName,
      tourTexts,
      tourStyles,
      tourAuthor,
      tour_id,
      language,
      isItActive,
      checkforid:true,
    };
    dispatch(updateMyTours(_id, updateTour));
  };

  

  const tourActiveOrNoActive = (check_tour, event) => {
    console.log(check_tour, event);
    const {
      tourName,
      tourTexts,
      tourStyles,
      tourAuthor,
      tour_id,
      language,
      _id,
      isItActive,
      checkforid,
    } = check_tour;
    const updateTour = {
      tourName,
      tourTexts,
      tourStyles,
      tourAuthor,
      tour_id,
      language,
      isItActive: event.target.value,
      checkforid,
    };
    dispatch(updateMyTours(_id, updateTour));
  };

  const tourPagePath = (path) => {
    router.push(path);
  };

  const onClone = async () => {
    await getAllTours();
  };

  const getToursStyle = async (id) => {
    const api = `/api/style/${id}`;
    try {
      const res = await Axios.get(api);
      const data = await res.data;
      setCloneTour((prev) => ({ ...prev, cts: data }));
    } catch (error) {}
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    (async () => {
      if (cloneTour.ct_id) {
        await getToursStyle(cloneTour.ct_id);
      }
    })();
  }, [cloneTour.ct_id]);

  const getAllTours = async () => {
    const api = `/api/tour/all/clon`;
    try {
      const res = await Axios.get(api, getConfig());
      const data = await res.data;
      setCloneTour((prev) => ({ ...prev, tours: data, clone: true }));
    } catch (error) {}
  };

  const handleCloneTour = async () => {
    const api1 = `/api/tour/add`;
    const api2 = `/api/style/`;
    const { tours, ct_id, cts } = cloneTour;
    const ct = tours.find((i) => i._id === ct_id);
    try {
      const newTour = {
        language: ct.language,
        tourAuthor: JSON.parse(localStorage.isLoginMe)._id,
        tourName: ct.tourName,
        tourStyles: "none",
        tourTexts: ct.tourTexts,
        tour_id: ct.tour_id,
      };
      const resT = await Axios.post(api1, newTour, getConfig());
      const resD = await resT.data;
      const newTourId = resD._id;

      const newTourStyle = {
        styles: cts.styles,
        tourID: newTourId,
      };
      const resS = await Axios.post(api2, newTourStyle);
      const dataS = await resS.data;
      setTimeout(() => {
        setCloneTour(() => defaultCloneTour);
        dispatch(getAllMyTours());
      }, 200);
    } catch (error) {}
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
        <div className={`clone-tour-page ${cloneTour.clone ? "active" : ""}`}>
          <div className="form">
            <div className="exit-btn">
              <AiOutlineClose
                className="icon"
                onClick={() => setCloneTour(() => defaultCloneTour)}
              />
            </div>
            <p className="title">All tours</p>
            <ul>
              {cloneTour.tours.map((t, index) => {
                return (
                  <li key={t._id}>
                    <label htmlFor={t._id}>
                      handmade.travel/tours/{t.tour_id}/{t.language}
                    </label>
                    <input
                      type="radio"
                      name="clone-tour"
                      id={t._id}
                      onChange={(e) => {
                        setCloneTour((prev) => ({ ...prev, ct_id: t._id }));
                      }}
                    />
                  </li>
                );
              })}
            </ul>
            <button
              onClick={handleCloneTour}
              className="btn btn-danger btn-sm float-end"
              disabled={!cloneTour.ct_id}
            >
              clone
            </button>
          </div>
        </div>
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
                    <div className="control-section d-flex">
                      <span>Controlls</span>
                      <div className="section-icon">
                        <HiOutlineDocumentAdd
                          className="add-user_icon"
                          onClick={createNewTourHandler}
                        />
                        <FaRegClone
                          onClick={onClone}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
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
                          className={"btn btn-info btn-sm mx-1"}
                          onClick={openUdateTourModal.bind(this, tour)}
                        >
                          <FaEdit />
                        </button>

                        <select
                          name="isitActive"
                          defaultValue={tour.isItActive}
                          onChange={tourActiveOrNoActive.bind(this, tour)}
                        >
                          <option value="published">Published</option>
                          <option value="noactive">Noactive</option>
                          <option value="garbage">Garbage</option>
                        </select>
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

    .section-icon {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-left: 10px;
    }
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

  .clone-tour-page {
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    z-index: -212;
    opacity: 0;
    .form {
      background-color: #000;
      padding: 20px;
      border-radius: 5px;
    }
    &.active {
      transition: opacity 1s;
      z-index: 22;
      opacity: 1;
    }
    p {
      text-align: center;
      color: #fff;
      text-transform: uppercase;
      font-size: 2rem;
    }
    ul {
      height: 200px;
      overflow: hidden;
      overflow-y: auto;

      &::-webkit-scrollbar {
        display: none;
      }

      li {
        display: flex;
        align-items: center;
        list-style-type: none;
        color: #eee;
        text-decoration: underline;

        min-width: 300px;
        justify-content: space-between;
        input {
          margin-left: 10px;
          margin-top: 4px;
        }
      }
    }

    .exit-btn {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .icon {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
`;
