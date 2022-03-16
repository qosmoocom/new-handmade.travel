import Axios from 'axios';
import { AppContext } from '..';
import { useReducer, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import Text from '../../components/Text';
const initialState = {
  isOpen: false,
  form: {
    name: '',
    phone: '',
    date: '',
    time: '',
  },
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'MODAL_THE_OPEN': {
      return {
        ...state,
        isOpen: true,
      };
    }

    case 'MODAL_THE_CLOSE': {
      return {
        ...state,
        isOpen: false,
      };
    }

    case 'FORM_CHANGE': {
      const { name, value } = payload;

      return {
        ...state,
        form: {
          ...state.form,
          [name]: value,
        },
      };
    }

    case 'FORM_CLEAR': {
      return initialState;
    }

    default:
      return state;
  }
};
export const Modal1 = () => {
  const { getItem } = useContext(AppContext);
  const [modalState, modalDispatch] = useReducer(reducer, initialState);
  const [errorWorker, setErrorWorker] = useState({
    error_worker: false,
    errors: [
      { type: 'name', error: false },
      { type: 'phone', error: false },
      { type: 'date', error: false },
      { type: 'time', error: false },
    ],
  });
  const globalState = useSelector((state) => state);
  const globalDispatch = useDispatch();
  const { modal } = globalState;
  const { isOpen, form } = modalState;

  // componentDidUpdate in modal update
  useEffect(() => {
    // there is "modal" in modalReducer
    const { isOpen, currentModal } = modal;

    if (isOpen && currentModal === 'MODAL_1') {
      modalDispatch({
        type: 'MODAL_THE_OPEN',
      });
    }

    if (!isOpen && !currentModal) {
      modalDispatch({ type: 'MODAL_THE_CLOSE' });
    }
  }, [modal]);

  // modal close
  const handleClose = () => globalDispatch({ type: 'MODAL_CLOSE' });

  // form change
  const handleChange = (event) => {
    const { name, value } = event.target;
    handleErrorlistener(name, value);
    const payload = {
      name,
      value,
    };
    modalDispatch({ type: 'FORM_CHANGE', payload });
  };

  // error listener
  const handleErrorlistener = (name, value) => {
    let isError = true;
    if (name === 'name') {
      isError = !(value.length > 2 && value.length < 20);
    }
    if (name === 'phone') {
      isError = !(value.length > 8 && value.length < 20);
    }
    if (name === 'date' || name === 'time') {
      isError = !value;
    }

    setErrorWorker((prev) => ({
      ...prev,
      errors: prev.errors.map((item) =>
        item.type === name ? { ...item, error: isError } : item
      ),
    }));
  };

  // form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorWorker((prev) => ({ ...prev, error_worker: true }));
    const { form } = modalState;
    for (let keyName in form) {
      handleErrorlistener(keyName, form[keyName]);
    }

    const {
      tours: {
        tour: { _id },
      },
    } = globalState;
    try {
      const api = `/api/action_phone/`;
      const data = {
        action_id: '1',
        tourID: _id,
        name: form.name,
        phone: form.phone,
        send_email: getItem('footer_col_email'),
        date: form.date,
        time: form.time,
      };
      const res = await Axios.post(api, data);
      const resD = await res.data;
      if (resD.success) {
        handleClose();
        modalDispatch({ type: 'FORM_CLEAR' });
      }
    } catch (error) {}
  };

  const classAddError = (name) => {
    const { errors, error_worker } = errorWorker;
    const isError =
      errors.find((item) => item.type === name).error && error_worker;
    if (isError) return '';
    return '';
  };

  const itIsActive = Object.values(form).every((value) => value);
  return (
    <>
      <Wrapper className={isOpen ? 'active' : ''}>
        <span className="span" onClick={handleClose} />
        <form onSubmit={handleSubmit} id="form-1">
          <div className="exit-btn" onClick={handleClose}>
            <AiOutlineClose />
          </div>
          <div className="title">
            <h3>
              <Text name="modal_1_title">{getItem('modal_1_title')}</Text>
            </h3>
          </div>
          <div className="input-box">
            <label>
              <Text name="modal_1_username">{getItem('modal_1_username')}</Text>
              <div className={`input ${classAddError('name')}`}>
                <input
                  type="text"
                  name="name"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  value={form.name}
                />
              </div>
            </label>
          </div>
          <div className="input-box">
            <label>
              <Text name="modal_1_phone">{getItem('modal_1_phone')}</Text>
              <div className={`input ${classAddError('phone')}`}>
                <input
                  type="number"
                  name="phone"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  value={form.phone}
                />
              </div>
            </label>
          </div>
          <div className="input-box cuset-data">
            <label>
              <Text name="modal_1_date">{getItem('modal_1_date')}</Text>
              <div
                className={`input ${classAddError('date')}`}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <input
                  type="date"
                  name="date"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  value={form.date}
                />
              </div>
            </label>
            <label>
              <Text name="modal_1_time">{getItem('modal_1_time')}</Text>
              <div
                className={`input ${classAddError('time')}`}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <input
                  type="time"
                  name="time"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  value={form.time}
                />
              </div>
            </label>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              className={!itIsActive ? 'disabled' : ''}
              disabled={!itIsActive}
            >
              <Text name="modal_1_btn">{getItem('modal_1_btn')}</Text>
            </button>
          </div>
          <div className="error-commet">
            <p>
              <Text name="modal_1_description_1">
                {getItem('modal_1_description_1')}
              </Text>
            </p>
            <div className="text_two">
              <Text style={{ left: 0 }} name="modal_1_description_2">
                {getItem('modal_1_description_2')}
              </Text>
            </div>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default Modal1;

// modal styles
const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all ease 0.5s;
  }

  .cuset-data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 320px) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      label {
        width: 100%;
        input {
          width: 100%;
        }
      }
    }
    @media (min-width: 576px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      label {
        width: 49%;
      }
    }
  }
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -20;
  transition: all 300ms;
  left: 0;
  display: flex;
  transition: all ease 0.5s;
  opacity: 0;
  &.active {
    transition: all ease 0.5s;
    display: flex;
    opacity: 1;
    z-index: 2222;
  }

  .span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
  }

  form {
    width: 470px;
    min-height: 356px;
    background: #eee;
    border-radius: 4px;
    padding: 5px 15px;
    position: relative;
    @media (min-width: 320px) {
      width: 80%;
    }
    @media (min-width: 576px) {
      width: 420px;
    }
    .exit-btn {
      position: absolute;
      cursor: pointer;
      right: 8px;
      top: 5px;
      z-index: 233;
      font-size: 25px;
      @media (min-width: 576px) {
        top: 2px;
      }
    }

    input {
      outline: none;
      border: none;
      background: none;
      &[type='text'] {
        width: 90%;
      }

      &[type='number'] {
        width: 90%;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        &[type='number'] {
          -moz-appearance: textfield;
        }
      }
    }

    .title {
      h3 {
        font-size: 25px;
        text-align: center;
        font-weight: 600;
        margin-bottom: 20px;
        margin-top: 10px;
        @media (min-width: 320px) {
          font-size: 18px;
          font-weight: 600;
        }
        @media (min-width: 576px) {
          font-size: 20px;
        }
        @media (min-width: 768px) {
          font-size: 22px;
        }
      }
    }

    .input-box {
      label {
        font-size: 20px;
        font-weight: 500;
        display: block;
        @media (min-width: 320px) {
          font-size: 15px;
          font-weight: 400;
          margin-bottom: 5px;
        }
        @media (min-width: 576px) {
          font-size: 18px;
          font-weight: 500;
        }
        @media (min-width: 768px) {
        }
      }
      .input {
        @media (min-width: 320px) {
          border: 1px solid #d3cece;
          width: 100%;
          border-radius: 4px;
          padding-left: 10px;
          margin-bottom: 0px;
          margin-top: 3px;
        }
        @media (min-width: 576px) {
          margin-bottom: 10px;
        }
        &.error {
          border: 2px solid red;
        }
        input {
          padding: 4px;
          padding-left: 4px;
          font-size: 17px;
        }
        .PhoneInputCountrySelectArrow {
          display: none;
        }
      }
    }

    button[type='submit'] {
      padding: 8px 30px;
      border: none;
      outline: none;
      background: none;
      color: #fff;
      background: #bf7246;
      border-radius: 5px;
      margin-top: 20px;
      width: 350px;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 18px;
      &.disabled {
        transition: 0.3s;
        opacity: 0.7;
        cursor: not-allowed;
      }
      @media (min-width: 320px) {
        margin-top: 10px;
        padding: 4px 30px;
        width: 100%;
        font-size: 15px;
      }
      @media (min-width: 576px) {
        padding: 8px 30px;
        border: none;
        outline: none;
        background: none;
        color: #fff;
        background: #bf7246;
        border-radius: 5px;
        margin-top: 20px;
        width: 350px;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 18px;
      }
    }

    .error-commet {
      p:nth-child(1) {
        line-height: 13px;
        padding: 15px;
        padding-left: 25px;
        font-weight: 300;
        position: relative;
        @media (min-width: 320px) {
          font-size: 9px;
        }
        @media (min-width: 576px) {
          font-size: 11px;
        }
        i {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          color: #bf7246;
          border: 1px solid #bf7246;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          left: 0;
          font-size: 12px;
        }
      }
      .text_two {
        text-align: center;
        margin: 10px 0;
        @media (min-width: 320px) {
          margin-top: 0;
          font-size: 13px;
          line-height: 1;
          font-weight: 300;
        }
        @media (min-width: 576px) {
          text-align: center;
          margin: 10px 0;
          font-size: 15px;
          line-height: 20px;
        }
      }
    }
  }
`;
