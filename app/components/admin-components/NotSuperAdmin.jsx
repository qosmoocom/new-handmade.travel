import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import App from "../../app";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getAllTours } from "../../../store/reducer/userToursReducer";
import Tours from "./Tours";
import ChangeTourModal from "./ChangeTourModal";
export default function NotSuperAdmin({ admin }) {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const [tours, setTours] = useState([]);
  const [changeModalOpen, setChangeModalOpen] = useState({
    isOpen: false,
    tour: {},
  });
  const { userTours } = globalState;

  // component Did Mount
  useEffect(() => {
    dispatch(getAllTours());
  }, []);

  // component did update on userTours.tours
  useEffect(() => {
    setTours(() => {
      return userTours.tours.map((tour) => ({ ...tour, isOn: true }));
    });
  }, [userTours.tours]);

  const theTourActiveOrNoActiveHandler = (id) => {
    // isOn true or false

    setTours((oldTours) =>
      oldTours.map((tour) =>
        tour._id === id ? { ...tour, isOn: !tour.isOn } : tour
      )
    );
  };

  const changeTourHandler = (id) => {
    const getItem = tours.find((item) => item._id === id);
    setChangeModalOpen(() => ({ isOpen: true, tour: getItem }));
  };

  const changeInputHandler = (event) => {
    const { name, value } = event.target;
    setChangeModalOpen((oldState) => ({
      ...oldState,
      tour: { ...oldState.tour, [name]: value },
    }));
  };

  return (
    <Wrapper>
      {changeModalOpen.isOpen && (
        <ChangeTourModal
          changeHandler={changeInputHandler}
          isItOpen={changeModalOpen}
          onCloseModal={() =>
            setChangeModalOpen((oldState) => ({
              ...oldState,
              isOpen: false,
              tour: {},
            }))
          }
          onCancel={changeTourHandler}
        />
      )}

      {/* change modal */}

      <div className="admin-section" id="admin">
        <div className="container">
          <h4 className="text-end">Hello {admin.user}!</h4>
          <h3 className="big-title">Your Tours</h3>
        </div>
        <Tours
          tours={tours}
          onOrOff={theTourActiveOrNoActiveHandler}
          onEdit={changeTourHandler}
        />
      </div>

      <div className="my-app">{/* <App /> */}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .big-title {
    text-decoration: underline;
  }
`;
