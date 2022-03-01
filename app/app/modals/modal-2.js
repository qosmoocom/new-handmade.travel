import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import styled from "styled-components";

const defaultState = {
  isOpen: false,
  my_messenger: {
    isActive: false,
    check_messenger: "",
  },
  form: {
    name: "",
    phone: "",
    email: "",
    messenger_user: "",
    commit: "",
  },
  error_watch: {
    error_worker: false,
    errors: [
      { type: "name", error: false },
      { type: "phone", error: false },
      { type: "email", error: false },
      { type: "messenger_user", error: false },
      { type: "commit", error: false },
    ],
  },
};
export function Modal2() {
  const [modalState, setModalState] = useState(defaultState);
  const globalState = useSelector((state) => state);
  const globalDispatch = useDispatch();

  // componentDidMount
  useEffect(() => {
    const { isOpen, currentModal } = globalState.modal;
    if (isOpen && currentModal === "MODAL_2") {
      setModalState((prev) => ({ ...prev, isOpen: true }));
    } else {
      setModalState((prev) => ({ ...prev, isOpen: false }));
    }
  }, [globalState.modal]);

  // modal close
  const handleClose = () => globalDispatch({ type: "MODAL_CLOSE" });

  // handleToggleMessenger
  const handleToggleMessenger = () => {
    setModalState((prev) => ({
      ...prev,
      my_messenger: {
        ...prev.my_messenger,
        isActive: !prev.my_messenger.isActive,
      },
    }));
  };

  const handleClickMessengerItem = (messenger_name) => {
    setModalState((prev) => ({
      ...prev,
      my_messenger: { ...prev, check_messenger: messenger_name },
    }));
  };

  // error listener
  const handleErrorlistener = (name, value) => {
    let isError = true;
    if (name === "name") {
      isError = !(value.length > 2 && value.length < 20);
    }

    if (name === "phone") {
      isError = !(value.length > 8 && value.length < 20);
    }

    if (name === "email") {
      isError = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi.test(value);
    }

    if (name === "messenger_user" || name === "commit") {
      isError = false;
    }

    setModalState((prev) => ({
      ...prev,
      error_watch: {
        ...prev.error_watch,
        errors: prev.error_watch.errors.map((item) =>
          item.type === name ? { ...item, error: isError } : item
        ),
      },
    }));
  };

  // change Input element
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleErrorlistener(name, value);
    setModalState((prev) => ({
      ...prev,
      form: {
        ...prev.form,
        [name]: value,
      },
    }));
  };

  const classAddError = (name) => {
    const { errors, error_worker } = modalState.error_watch;
    const isError =
      errors.find((item) => item.type === name).error && error_worker;
    if (isError) return "error";
    return "";
  };

  // form on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setModalState((prev) => ({
      ...prev,
      error_watch: {
        ...prev.error_watch,
        error_worker: true,
      },
    }));
    const { form } = modalState;
    for (let keyName in form) {
      handleErrorlistener(keyName, form[keyName]);
    }
  };

  const CheckedMessanger = (messanger_name) => {
    switch (messanger_name) {
      case "facebook":
        return <FaFacebookF className="item facebook" />;
      case "whatsapp":
        return <FaWhatsapp className="item whatsapp" />;
      case "telegram":
        return <FaTelegramPlane className="item telegram" />;
      case "instagram":
        return <FaInstagram className="item instagram" />;
      default:
        return "";
    }
  };

  //  modalState items
  const { isOpen, my_messenger, form, error_watch } = modalState;
  return (
    <>
      <Wrapper className={isOpen ? "active" : ""}>
        <div className="span" onClick={handleClose} />
        <section>
          <div className="exit-btn" onClick={handleClose}>
            <AiOutlineClose />
          </div>
          <div>
            <h3>Хотите узнать больше о коуч-туре?</h3>
            <p className="info_one">
              Наш travel-эксперт свяжется с вами в удобное время и любым удобным
              для вас способом связи, чтобы рассказать все детали нашего
              предложения.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-box">
                <label htmlFor="name">Имя:</label>
                <div className={`input-box ${classAddError("name")}`}>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                  />
                </div>
              </div>

              <div className="form-box">
                <label htmlFor="tel">Телефон:</label>
                <div className={`input-box ${classAddError("phone")}`}>
                  <input
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value={form.phone}
                  />
                </div>
              </div>

              <div className="form-box">
                <label htmlFor="email">Email:</label>
                <div className={`input-box ${classAddError("email")}`}>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                  />
                </div>
              </div>

              <div className="form-box">
                <label htmlFor="my_messenger">Удобный мессенджер:</label>
                <div className={`input-box`}>
                  <button
                    type="button"
                    className={`my_messenger_btn ${
                      my_messenger.isActive ? "active" : ""
                    }`}
                    onClick={handleToggleMessenger}
                  >
                    <MdOutlineArrowForwardIos />
                  </button>
                  <div
                    className={`my_messenger__modal ${
                      my_messenger.isActive ? "active" : ""
                    }`}
                  >
                    <FaFacebookF
                      className="item facebook"
                      onClick={handleClickMessengerItem.bind(this, "facebook")}
                    />
                    <FaInstagram
                      className="item instagram"
                      onClick={handleClickMessengerItem.bind(this, "instagram")}
                    />
                    <FaWhatsapp
                      className="item whatsapp"
                      onClick={handleClickMessengerItem.bind(this, "whatsapp")}
                    />
                    <FaTelegramPlane
                      className="item telegram"
                      onClick={handleClickMessengerItem.bind(this, "telegram")}
                    />
                  </div>
                  <input
                    type="text"
                    name="messenger_user"
                    onChange={handleChange}
                  />
                  <div className="checked_messanger">
                    {my_messenger.check_messenger &&
                      CheckedMessanger(my_messenger.check_messenger)}
                  </div>
                </div>
              </div>

              <div className="form-box">
                <label htmlFor="name">Комментарии:</label>
                <div className={`input-box`}>
                  <textarea name="commit" onChange={handleChange} />
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <button type="submit">ЖДУ ОТВЕТА!</button>
              </div>
            </form>
            <p className="info_last">
              Ваши данные будут использованы исключительно для связи с вами по
              вопросу коуч-тура и не будут переданы третьим лицам.
            </p>
          </div>
        </section>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .span {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
  span {
    position: absolute;
    right: 0px;
    transform: translateX(-50%);
    top: 10px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  background: rgba(1, 1, 1, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: -20;
  left: 0;
  transition: all ease 0.5s;
  display: flex;
  opacity: 0;
  &.active {
    transition: all ease 0.5s;
    opacity: 1;
    z-index: 2222;
  }

  button[type="submit"] {
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
    @media (min-width: 320px) {
      padding: 4px 30px;
      width: 100%;
      font-size: 13px;
      margin: 5px 0;
    }
    @media (min-width: 375px) {
      font-size: 15px;
    }
    @media (min-width: 576px) {
      margin-top: 10px;
      padding: 6px 30px;
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
      font-size: 12px;
      margin: 0 auto;
    }
    @media (min-width: 576px) {
      font-size: 16px;
      margin-top: 5px;
    }
  }

  section {
    .exit-btn {
      position: absolute;
      cursor: pointer;
      right: 8px;
      top: 5px;
      z-index: 233;
      font-size: 20px;
      @media (min-width: 576px) {
        top: 2px;
      }
    }
    background: #fff;
    border-radius: 4px;
    padding: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    position: relative;
    @media (min-width: 320px) {
      max-width: 90%;
      max-height: 90%;
    }
    @media (min-width: 576px) {
      max-width: 420px;
      height: auto;
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1400px) {
    }
    .info_one {
      @media (min-width: 320px) {
        font-size: 12px;
        line-height: 1;
        margin: 0;
        padding: 0;
        text-align: center;
      }
      @media (min-width: 375px) {
        font-weight: 500;
        font-size: 14px;
        line-height: 1.3;
        color: #313041;
        margin-bottom: 0;
      }
      @media (min-width: 576px) {
        font-size: 13px;
        line-height: 1;
        margin: 0;
      }
    }
    h3 {
      /* font-family: "DM Sans", sans-serif; */
      font-display: swap;
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.8rem;
      @media (min-width: 320px) {
        font-weight: 600;
        font-size: 16px;
        line-height: 1;
        text-align: center;
        color: #000000;
        margin-bottom: 10px;
      }

      @media (min-width: 576px) {
        font-size: 20px;
        line-height: 1.2;
      }
    }
    p {
      /* font-family: "DM Sans", sans-serif; */
      font-display: swap;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.2rem;
      color: #313041;
      position: relative;
      padding-left: 12px;

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
        left: -5px;
        font-size: 12px;
      }
      @media (min-width: 320px) {
        font-weight: 500;
        font-size: 10px;
        line-height: 1;
        color: #313041;
        margin-bottom: 0;
      }
      @media (min-width: 375px) {
        font-weight: 500;
        line-height: 1.3;
        color: #313041;
        margin-bottom: 0;
        &.info_last {
          margin: 10px 0;
        }
      }
      @media (min-width: 576px) {
        font-weight: 500;
        line-height: 1;
      }
    }
    .form-box {
      position: relative;
      @media (min-width: 320px) {
        margin: 10px 0;
      }
      .my_messenger__modal {
        position: absolute;
        left: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        z-index: -20;
        gap: 1px;
        transition: all 0.4s;
        opacity: 0;
        &.active {
          transition: all 0.4s;
          opacity: 1;
          z-index: 4;
        }
        .item {
          color: #fff;
          background: #000;
          width: 23px;
          height: 23px;
          border-radius: 3px;
          padding: 3px;
          cursor: pointer;
          &.facebook {
            background-color: rgb(24, 119, 242);
            border-radius: 2px;
          }
          &.instagram {
            background: #f09433;
            background: -moz-linear-gradient(
              45deg,
              #f09433 0%,
              #e6683c 25%,
              #dc2743 50%,
              #cc2366 75%,
              #bc1888 100%
            );
            background: -webkit-linear-gradient(
              45deg,
              #f09433 0%,
              #e6683c 25%,
              #dc2743 50%,
              #cc2366 75%,
              #bc1888 100%
            );
            background: linear-gradient(
              45deg,
              #f09433 0%,
              #e6683c 25%,
              #dc2743 50%,
              #cc2366 75%,
              #bc1888 100%
            );
          }
          &.whatsapp {
            background-color: #25d366;
          }
          &.telegram {
            background: #0088cc;
          }
        }
      }
      .input-box {
        position: relative;
        border: 1px solid #d3cece;
        width: 100%;
        border-radius: 4px;
        padding-left: 10px;
        margin-bottom: 5px;
        .my_messenger_btn {
          /* my messenger style */
          position: relative;
          cursor: pointer;
          background: none;
          border: none;
          transform: rotate(90deg);
          transition: all 0.4s;
          &.active {
            transform: rotate(-90deg);
          }
        }

        .checked_messanger {
          .item {
            color: #fff;
            background: #000;
            width: 23px;
            height: 23px;
            border-radius: 3px;
            padding: 3px;
            cursor: pointer;
            &.facebook {
              background-color: rgb(24, 119, 242);
              border-radius: 2px;
            }
            &.instagram {
              background: #f09433;
              background: -moz-linear-gradient(
                45deg,
                #f09433 0%,
                #e6683c 25%,
                #dc2743 50%,
                #cc2366 75%,
                #bc1888 100%
              );
              background: -webkit-linear-gradient(
                45deg,
                #f09433 0%,
                #e6683c 25%,
                #dc2743 50%,
                #cc2366 75%,
                #bc1888 100%
              );
              background: linear-gradient(
                45deg,
                #f09433 0%,
                #e6683c 25%,
                #dc2743 50%,
                #cc2366 75%,
                #bc1888 100%
              );
            }
            &.whatsapp {
              background-color: #25d366;
            }
            &.telegram {
              background: #0088cc;
            }
          }
          position: absolute;
          right: 3px;
          top: 3px;
        }

        &.error {
          border: 2px solid red;
        }
        input,
        textarea {
          padding: 4px;
          padding-left: 4px;
          @media (min-width: 320px) {
            padding: 0;
          }
          @media (min-width: 375px) {
            padding: 3px;
            font-size: 14px;
          }
          @media (min-width: 576px) {
            padding: 0 auto;
            padding-left: 4px;
            font-size: 14px;
          }
        }
        .PhoneInputCountrySelectArrow {
          display: none;
        }
        @media (min-width: 320px) {
          background: #ffffff;
          border: 1px solid #c4c4c4;
          box-sizing: border-box;
          border-radius: 4px;
          padding: 3.77px 5px;
        }
        &.error {
          border: 2px solid red;
        }
        .check-btn {
          position: absolute;
          right: 1px;
          top: 2.5px;
          border: none;
          outline: none;
          cursor: default;
          article {
            width: 24px;
            height: 24px;
            display: none;
            position: relative;
            &.active {
              display: block;
            }
          }
        }
      }
      label {
        /* font-family: "DM Sans", sans-serif; */
        font-display: swap;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.2rem;
        color: #313041;
        @media (min-width: 320px) {
          font-weight: 500;
          font-size: 12px;
          line-height: 1;
          color: #313041;
          margin-bottom: 5px;
        }
        @media (min-width: 576px) {
          font-size: 14px;
        }
        @media (min-width: 768px) {
          font-size: 15px;
        }
      }
      input,
      textarea {
        width: 70%;
        border: none;
        outline: none;
        font-size: 1rem;
        padding: 4px 4px;
        color: #555151;
        resize: none;
        @media (min-width: 320px) {
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          margin: 0;
          padding: 0;
        }
        @media (min-width: 576px) {
          font-size: 1rem;
          padding: 0;
        }
        &::placeholder {
          color: #c4c4c4;
        }
      }

      input {
        &[type="text"] {
          width: 90%;
        }

        &[type="number"] {
          width: 90%;

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          &[type="number"] {
            -moz-appearance: textfield;
          }
        }
      }
    }
    .modal-a {
      position: absolute;
      top: 30px;
      left: 0;
      z-index: 2;
      button {
        border: none;
        outline: none;
        background: none;
      }
      .btn {
        position: absolute;
        top: -1.3rem;
        width: 9px;
        height: 9px;
        cursor: pointer;
        color: #a9a8b6;
        transition: 0.3s;
        left: 7px;
        img {
          object-fit: cover;
          transform: scale(0.8);
        }
        &:focus {
          box-shadow: none;
        }
        &.btn-active {
          transition: 0.3s;
          transform: rotate(180deg);
        }
      }
      .btn-group {
        width: 54px;
        flex-direction: row;
        flex-wrap: wrap;
        display: none;
        img {
          object-fit: cover;
        }
        &.btn-group-active {
          display: flex;
        }
        button {
          width: 23px;
          height: 23px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 1px;
          position: relative;
          &:nth-child(1) {
            background: #1877f2;
          }
        }
      }
    }
  }
`;

/*
head_btn_bron
to_book_btn
included_btn
action_picture_btn_bron

*/
