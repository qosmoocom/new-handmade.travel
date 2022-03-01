import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast } from "react-toastify";
import toursAction from "../../../../../store/actions/toursAction";

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
  z-index: 2100;
  transition: all 300ms;
  left: 0;
  &.active {
    display: flex;
  }
  .btn_Calendars {
    position: relative;
    display: flex;
    justify-content: space-around;
    @media (min-width: 320px) {
      flex-direction: column;
      row-gap: 6px;
    }
    @media (min-width: 430px) {
      flex-direction: row;
    }
    .btn_calendar {
      border: none;
      outline: none;
      color: #fff;
      border-radius: 3px;
      padding: 5px 10px;
      text-transform: uppercase;
      background: #bf7246;
      font-weight: bold;
    }
  }

  section {
    .exit-btn {
      position: absolute;
      cursor: pointer;
      color: #bf7246;
      @media (min-width: 320px) {
        right: 8px;
        top: 5px;
        z-index: 233;
        width: 20px;
        height: 20px;
      }
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
        margin-top: 10px;
      }
      @media (min-width: 375px) {
        font-weight: 500;
        line-height: 1.3;
        color: #313041;
        margin-bottom: 0;
        &.info_last {
          margin: 20px 0 0;
        }
      }
      @media (min-width: 576px) {
        font-weight: 500;
        line-height: 1;
      }
    }
    .form-box {
      @media (min-width: 320px) {
        margin: 5px 0;
      }
      .input-box {
        position: relative;
        border: 1px solid #d3cece;
        width: 100%;
        border-radius: 4px;
        padding-left: 10px;
        margin-bottom: 5px;
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
          border: 1px solid red;
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
    }
    .flex {
      display: flex;
      column-gap: 15px;
      .input-box {
        input {
          width: 100%;
        }
      }
      > div {
        width: 50%;
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
export default function Modal2() {
  const defaultStyle = {
    padding: "0.3rem",
    width: "23px",
    height: "23px",
    borderRadius: "3px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1px",
    transition: "0.3s",
  };
  const initialState = {
    name: "",
    tel: "+",
    email: "",
    date: "",
    time: "",
    commit: "",
  };
  const { action_id, api } = useSelector((state) => state.tours.modal.gastro);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [calendar, setCalendar] = useState("");
  const [arrow, setArrow] = useState(false);
  const [messanger, setMessanger] = useState("");
  const [form, setForm] = useState(initialState);
  const [messangerStyle, setMessangerStyle] = useState({});
  const btnArrowHandlare = () => setArrow((prev) => !prev);
  const btnArrowHandlareFocus = () => setArrow(true);
  const btnArrowHandlareFocusOut = () => setArrow(false);
  const [errorWorking, setErrorWorking] = useState(false);
  const messGet = (val) => {
    setMessanger(val);
    setArrow(false);
    setForm((prev) => ({ ...prev, messangerTitle: val }));
  };
  const changeHandlar = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    setErrorWorking(true);
    e.preventDefault();
    const { name, tel, email, commit, date, time } = form;
    if (name && tel && email && date && time) {
      const data = {
        tourID: "61695216588504c4560a9342",
        action_id,
        name,
        phone: tel,
        email,
        date,
        time,
        commit,
        calendar,
      };

      fetch(api, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then(() => {
          setModal(false);
          toast.success("Ваша заявка принята!");
          setForm(initialState);
          setMessangerStyle({});
          setMessanger("");
          setArrow(false);
          setErrorWorking(false);
        })
        .catch((e) => {});
    } else {
      e.preventDefault();
      toast.error("Пожалуйста, заполните ваши данные");
    }
  };

  const errorHandle = (value) => {
    if (errorWorking) {
      if (!value || value.length === 1) return "error";
      return "";
    }
    return "";
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        setModal(false);
      }
    });
  }, []);

  useEffect(() => {
    if (action_id === "coach-ru-4" && api) {
      setModal(true);
    }
  }, [action_id, api]);

  useEffect(() => {
    if (!modal) {
      dispatch(toursAction.modal({ api: "", action_id: "" }));
    }
  }, [modal]);

  return (
    <>
      <Wrapper className={modal ? "active" : ""}>
        <div className="span" onClick={() => setModal(false)}></div>
        <section>
          <div className="exit-btn" onClick={() => setModal(false)}>
            <Image
              src="/images/landing/gastro/messengrs/close.webp"
              layout="fill"
            />
          </div>
          <div>
            <h3>Коучинг-тур в Узбекистан</h3>
            {/* <p className="info_one"> */}
            {/* </p> */}

            <form method="POST" onSubmit={submitHandler}>
              <div className="form-box">
                <label htmlFor="name">Имя:</label>
                <div className={`input-box ${errorHandle(form.name)}`}>
                  <input
                    type="text"
                    name="name"
                    onChange={changeHandlar}
                    value={form.name}
                  />
                </div>
              </div>
              <div className="form-box">
                <label htmlFor="tel">Телефон:</label>
                <div className={`input-box ${errorHandle(form.tel)}`}>
                  <input
                    type="tel"
                    value={form.tel}
                    onChange={(e) => {
                      const regex = /^[+\d](?:.*\d)?$/i;
                      setForm((prev) => {
                        if (regex.test(e.target.value)) {
                          const value = e.target.value
                            .split("")
                            .filter((item) => item.trim().length === 1)
                            .join("");
                          return { ...prev, tel: value };
                        } else {
                          return form;
                        }
                      });
                    }}
                  />
                </div>
              </div>
              <div className="form-box">
                <label htmlFor="email">Email:</label>
                <div className={`input-box ${errorHandle(form.email)}`}>
                  <input
                    type="email"
                    name="email"
                    onChange={changeHandlar}
                    value={form.email}
                  />
                </div>
              </div>
              <div className="form-box flex">
                <div>
                  <label htmlFor="date">Дата:</label>
                  <div className={`input-box ${errorHandle(form.date)}`}>
                    <input
                      type="date"
                      name="date"
                      onChange={changeHandlar}
                      value={form.date}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="time">Время:</label>
                  <div className={`input-box ${errorHandle(form.time)}`}>
                    <input
                      type="time"
                      name="time"
                      onChange={changeHandlar}
                      value={form.time}
                    />
                  </div>
                </div>
              </div>

              <div className="form-box">
                <label htmlFor="name">Комментарии:</label>
                <div className={`input-box`}>
                  <textarea
                    name="commit"
                    onChange={changeHandlar}
                    value={form.commit}
                  />
                </div>
              </div>
              <div style={{ paddingBottom: "5px" }}>
                <b>Назначьте мне встречу в:</b>
              </div>
              <div className="btn_Calendars" style={{ textAlign: "center" }}>
                <button
                  className="btn_calendar"
                  type="submit"
                  onClick={() => setCalendar("Google Calendar")}
                >
                  Google Календарь
                </button>
                <button
                  className="btn_calendar"
                  type="submit"
                  onClick={() => setCalendar("Calendly")}
                >
                  Calendly
                </button>
                <button
                  className="btn_calendar"
                  type="submit"
                  onClick={() => setCalendar("Yandex Calendar")}
                >
                  Yandex Календарь
                </button>
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
