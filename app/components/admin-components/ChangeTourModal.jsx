import { updateUserTour } from "../../../store/reducer/userToursReducer";
import { useDispatch } from "react-redux";

import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

// change tour modal
const ModalChangeTour = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 256, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  /* none active */
  opacity: -4;
  transition: opacity 400ms;
  &.active {
    opacity: 2;
  }

  .form {
    background: rgba(0, 0, 256, 0.3);
    padding: 20px 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 300px;
    position: relative;

    .close-btn {
      position: absolute;
      right: 5px;
      top: 5px;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
    }
  }

  .input-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 3px;
  }

  .input-box {
    width: 100%;
    input {
      background: none;
      outline: none;
      margin-bottom: 10px;
      border: none;
      box-shadow: none;
      border-bottom: 1px solid #fff;
      color: #fff;
      width: 100%;
    }
  }
`;

export default function ChangeTourModal({
  isItOpen,
  onCloseModal,
  changeHandler,
  onCancel,
}) {
  const { tourName, type_id, language, _id, userID } = isItOpen.tour;
  const dispatch = useDispatch();

  const saveHandler = () => {
    const newUser = {
      tourName,
      type_id,
      language,
      userID,
    };
    dispatch(updateUserTour(_id, newUser));
    setTimeout(() => {
      onCloseModal();
    }, 1000);
  };
  return (
    <ModalChangeTour className={isItOpen.isOpen ? "active" : "none"}>
      <div className="form">
        <AiOutlineClose className="close-btn" onClick={onCloseModal} />
        <div className="input-box">
          <label>tour name:</label>
          <input
            type="text"
            name="tourName"
            value={tourName || ""}
            onChange={changeHandler}
          />
        </div>
        <div className="input-box">
          <label>tour ID:</label>
          <input
            type="text"
            name="type_id"
            value={type_id || ""}
            onChange={changeHandler}
          />
        </div>
        <div className="input-box">
          <label>tour Language:</label>
          <input
            type="text"
            name="language"
            value={language || ""}
            onChange={changeHandler}
          />
        </div>

        <div className="input-btn">
          <button
            className="btn btn-dark"
            onClick={saveHandler.bind(this, _id)}
          >
            save
          </button>
          <button className="btn btn-dark" onClick={onCancel.bind(this, _id)}>
            cancel
          </button>
        </div>
      </div>
    </ModalChangeTour>
  );
}
