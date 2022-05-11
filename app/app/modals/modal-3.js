import { toast } from "react-toastify";
import Axios from "axios";
import { AppContext } from "..";
import { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Text from "../../components/Text";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
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
    years_12_: "",
    years_2_12_: "",
    date: "",
    price: "",
    months_6_years_2: "",
    one_people: "",
    two_people: "",
    three_people: "",
    commit: "",
  },
  error_watch: {
    error_worker: false,
    errors: [
      { type: "name", error: false },
      { type: "phone", error: false },
      { type: "email", error: false },
      { type: "messenger_user", error: false },
      { type: "years_12_", error: false },
      { type: "commit", error: false },
      { type: "date", error: false },
      { type: "price", error: false },
    ],
  },
};
export function Modal3() {
  const { getItem } = useContext(AppContext);
  const [modalState, setModalState] = useState(defaultState);
  const globalState = useSelector((state) => state);
  const [total, setTotal] = useState(0);
  const [priceDiff, setPriceDiff] = useState({ type: "USD", current: 1 });
  const priceType = getItem("app_price_type");
  const globalDispatch = useDispatch();
  const dispatch = useDispatch()
  const { isEdit: isAdmin } = useSelector((st) => st.admin);
  const state = useSelector((state) => state.admin);
  const [checked, setChecked] = useState(state.checkerForModal3);
  console.log(state);
  useEffect(() => {
    setChecked(state.checkerForModal3)
  }, [state])

  useEffect(() => {
    if (priceType && priceType !== "USD") {
      priceConvertNewMoney(priceType);
    }
  }, [priceType]);
  const priceConvertNewMoney = async (val) => {
    const api = `https://api.exchangerate.host/convert?from=${val}&to=USD`;
    try {
      const res = await Axios.get(api);
      const data = await res.data;

      if (data.result) {
        setPriceDiff({ type: val, current: Number(data.result) });
      }
    } catch (error) {}
  };

  // componentDidMount
  useEffect(() => {
    const { isOpen, currentModal } = globalState.modal;
    if (isOpen && currentModal === "MODAL_3") {
      setModalState((prev) => ({ ...prev, isOpen: true }));
    } else {
      setModalState((prev) => ({ ...prev, isOpen: false }));
    }
  }, [globalState.modal]);

  // modal close
  const handleClose = () => {
    globalDispatch({ type: "MODAL_CLOSE" })
    dispatch({
      type: "ADMIN/CHANG__MODAL3__",
      payload: {
        isSave: true,
        newText: checked,
        open: false,
      },
    });
  }


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
      my_messenger: {
        ...prev.my_messenger,
        check_messenger: messenger_name,
        isActive: false,
      },
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

    if (name === "years_12_" || name === "date" || name === "price") {
      isError = !value;
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
    const { value } = e.target;
    const name = e.target.getAttribute("data-name");
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
    if (isError) return "";
    return "";
  };

  // form on submit
  const handleSubmit = async (e) => {
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

    const price =
      getItem("rate_name_data", "rate_name_data")
        .find((i) => i.rate_name_head === form.price)
        .rate_money.replace(/\D/gi, "") *
      (Number(form.years_12_) + Number(form.years_2_12_) * 0.5);
    // qushimcha pulni anqlash = extra money
    let ex_mony_type_name;

    if (
      form.price ===
        getItem("rate_name_data", "rate_name_data")[0].rate_name_head ||
      form.price ===
        getItem("rate_name_data", "rate_name_data")[1].rate_name_head
    ) {
      ex_mony_type_name = "app_extra_money_first";
    }
    if (
      form.price ===
      getItem("rate_name_data", "rate_name_data")[2].rate_name_head
    ) {
      ex_mony_type_name = "app_extra_money_second";
    }

    const extMoney = getItem(ex_mony_type_name) * form.one_people;
    // qushimcha pulni anqlash = extra money
    setTotal(parseInt(price + extMoney) * 100);

    const api = `/api/action_bron/`;
    const {
      tours: {
        tour: { _id },
      },
    } = globalState;
    try {
      const data = {
        tourID: _id,
        action_id: "modal-3",
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.price,
        start_date: form.date,
        age_12_plus: form.years_12_,
        age_2_12: form.years_2_12_,
        age_6_2: form.months_6_years_2,
        home_type: `Одноместное: ${form.one_people}; Двухместное:${form.two_people}; Трехместное:${form.three_people};`,
        komment: form.commit,
        send_email: getItem("footer_col_email"),
        Удобный_мессенджер: `messanger name:${modalState.my_messenger.check_messenger}; messanger username:${form.messenger_user}`,
      };

      const res = await Axios.post(api, data);
      const resData = await res.data;
      toast.success("Ваша информация отправлена.", {
        position: "top-right",
      });
    } catch (error) {
      e.preventDefault();
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
  const handlerCheck = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked)
  }

  //  modalState items
  const { isOpen, my_messenger, form } = modalState;

  const itIsSubmit =
    form.name &&
    form.phone &&
    form.email &&
    form.date &&
    form.price &&
    form.years_12_ &&
    Number(form.years_12_) + Number(form.years_2_12_) <=
      Number(form.one_people) +
        Number(form.two_people) +
        Number(form.three_people);

  //   // component active no active
  //   const { isEdit: thisIsNotClient } = useSelector((st) => st.admin);
  //   const val = useSelector((state) => state.admin.app_sections_active).find(
  //     (i) => i.name === 'prices'
  //   );
  //  if (!thisIsNotClient && !val.isActive) return null;

  //   // component active no active
  return (
    <>
      <Wrapper className={isOpen ? "active" : ""}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          onClick={handleClose}
        />
        <form
          onSubmit={handleSubmit}
            action={`${checked?'':'https://pay.ofb.uz'}`}
            method={`${checked?'':'POST'}`}
          id="FormTarget-3"
        >
          <input
            type="hidden"
            name="merchantId"
            value="666fbf0b490841a5a8a8f4c8ec268d2cSzRkMlYwRTdKUUVnNllvYS80Y2xaTFFJMDNxK3hueitnVUlPUmpEZ3k0azdsVktQZ2lZQWtYNm92SEcwMUM2OQ=="
          />
          <input
            type="hidden"
            name="amount"
            value={(total * priceDiff.current).toFixed(2)}
          />
          <input type="hidden" name="currency" value="USD" />
          <input type="hidden" name="description" value="handmade.travel" />
          <input type="hidden" name="callback" value="http://handmade.travel" />
          <input type="hidden" name="order_id" value={Date.now().toString()} />

          <section>
            <div className="exit-btn" onClick={handleClose}>
              <AiOutlineClose />
            </div>
            <h3 className="title">
              <Text name="modal_3_title">{getItem("modal_3_title")}</Text>
            </h3>

            <div className="form-group">
              <label>
                <Text name="modal_3_username">
                  {getItem("modal_3_username")}
                </Text>
                <div className={`input-box ${classAddError("name")}`}>
                  <input
                    type="text"
                    data-name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className="form-group">
              <label>
                <Text name="modal_3_phone">{getItem("modal_3_phone")}</Text>
                <div className={`input-box ${classAddError("phone")}`}>
                  <input
                    type="tel"
                    className="input-phone"
                    data-name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className="form-group">
              <label>
                <Text name="modal_3_email">{getItem("modal_3_email")}</Text>
                <div className={`input-box  ${classAddError("email")}`}>
                  <input
                    type="text"
                    data-name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className="form-box">
              <label htmlFor="my_messenger">
                <Text name="modal_3_convenient_messenger">
                  {getItem("modal_3_convenient_messenger")}
                </Text>
              </label>
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
                  data-name="messenger_user"
                  value={form.messenger_user}
                  onChange={handleChange}
                />
                <div className="checked_messanger">
                  {my_messenger.check_messenger &&
                    CheckedMessanger(my_messenger.check_messenger)}
                </div>
              </div>
            </div>
            {/* selects */}
            <div className="form-group">
              <label>
                <Text name="modal_3_date">{getItem("modal_3_date")}</Text>
                <div className={`input-box ${classAddError("date")}`}>
                  <select
                    value={form.date}
                    data-name="date"
                    onChange={handleChange}
                  >
                    <option value="" disabled hidden></option>
                    {getItem("prices_data", "prices_data").map(
                      (item, index) => {
                        return <option key={index}>{item?.date}</option>;
                      }
                    )}
                  </select>
                </div>
              </label>
            </div>
            <div className="form-group">
              <label>
                <Text name="modal_3_price">{getItem("modal_3_price")}</Text>
                <div className={`input-box ${classAddError("price")}`}>
                  <select
                    value={form.price}
                    data-name="price"
                    onChange={handleChange}
                  >
                    <option value="" disabled hidden></option>
                    {getItem("rate_name_data", "rate_name_data").map(
                      (item, index) => {
                        return (
                          <option key={index}>{item?.rate_name_head}</option>
                        );
                      }
                    )}
                  </select>
                </div>
              </label>
            </div>

            <div className="form-group">
              <label>
                <Text name="modal_3_participants_title">
                  {getItem("modal_3_participants_title")}
                </Text>
                <div className="inputs-box">
                  <div className="item">
                    <span>
                      <Text name="modal_3_participants_one">
                        {getItem("modal_3_participants_one")}
                      </Text>
                    </span>
                    <div className={`input-box ${classAddError("years_12_")}`}>
                      <input
                        type="number"
                        min={0}
                        max={15}
                        data-name="years_12_"
                        onChange={handleChange}
                        value={form.years_12_}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <span>
                      <Text name="modal_3_participants_two">
                        {getItem("modal_3_participants_two")}
                      </Text>
                    </span>
                    <div className="input-box">
                      <input
                        type="number"
                        min={0}
                        max={15}
                        data-name="years_2_12_"
                        onChange={handleChange}
                        value={form.years_2_12_}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <span>
                      <Text name="modal_3_participants_three">
                        {getItem("modal_3_participants_three")}
                      </Text>
                    </span>
                    <div className="input-box">
                      <input
                        type="number"
                        min={0}
                        max={15}
                        data-name="months_6_years_2"
                        onChange={handleChange}
                        value={form.months_6_years_2}
                      />
                    </div>
                  </div>
                </div>
              </label>
            </div>
            {/* input box two section started */}
            <div className="form-group">
              <label>
                <Text name="modal_3_divide_title">
                  {getItem("modal_3_divide_title")}
                </Text>
                <div className="inputs-box">
                  <div className="item">
                    <span>
                      <Text name="modal_3_divide_one">
                        {getItem("modal_3_divide_one")}
                      </Text>
                    </span>
                    <div className={`input-box`}>
                      <input
                        type="number"
                        min={0}
                        max={15}
                        data-name="one_people"
                        onChange={handleChange}
                        value={form.one_people}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <span>
                      <Text name="modal_3_divide_two">
                        {getItem("modal_3_divide_two")}
                      </Text>
                    </span>
                    <div className={`input-box`}>
                      <input
                        type="number"
                        min={0}
                        max={15}
                        data-name="two_people"
                        onChange={handleChange}
                        value={form.two_people}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <span>
                      <Text name="modal_3_divide_three">
                        {getItem("modal_3_divide_three")}
                      </Text>
                    </span>
                    <div className={`input-box `}>
                      <input
                        type="number"
                        min={0}
                        max={15}
                        data-name="three_people"
                        onChange={handleChange}
                        value={form.three_people}
                      />
                    </div>
                  </div>
                </div>
              </label>
            </div>

            <div className="form-group">
              <label>
                <Text name="modal_3_divide_four">
                  {getItem("modal_3_divide_four")}
                </Text>
                <div className="input-box">
                  <textarea
                    rows={1}
                    data-name="commit"
                    onChange={handleChange}
                    value={form.commit}
                  />
                </div>
              </label>
            </div>
            <div className="form-group" style={{ textAlign: "center" }}>
              <button
                type="submit"
                disabled={!itIsSubmit}
                className={!itIsSubmit ? "disabled" : ""}
              >
                <Text name="modal_3_divide_btn">
                  {getItem("modal_3_divide_btn")}
                </Text>
              </button>
            </div>
            <div className="form-group">
              <p id="warning">
                <Text name="modal_3_divide_description">
                  {getItem("modal_3_divide_description")}
                </Text>
              </p>
              <p>
                {isAdmin && (
                  <label className="checkbox">
                    Запрещается переходить на страницу оплаты
                    <input
                      type="checkbox"
                      name="forOplata"
                      checked={checked}
                      onChange={handlerCheck}
                    />
                  </label>
                )}
              </p>
            </div>
          </section>
        </form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  position: fixed;
  top: 0;
  left: 0;
  transition: all 400ms;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: -23;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.5s;
  display: flex;
  opacity: 0;
  &.active {
    transition: all ease 0.5s;
    opacity: 1;
    z-index: 2222;
  }
  #warning {
    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 12px;
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
      top: -1.5rem;
      width: 1rem;
      height: 1rem;
      cursor: pointer;
      color: #a9a8b6;
      transition: 0.3s;
      left: 7px;
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

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    section {
      position: relative;
      .exit-btn {
        position: absolute;
        cursor: pointer;
        right: 5px;
        top: 5px;
        z-index: 233;
        font-size: 25px;
        @media (min-width: 576px) {
          top: 2px;
        }
      }
      @media (min-width: 320px) {
        max-width: 90%;
        max-height: 95%;
        border-radius: 0px;
        overflow-y: auto;
        background: #ffffff;
        border-radius: 6px;
        padding: 20px 10px 5px;
      }
      @media (min-height: 569px) {
        .form-group p {
          display: block;
        }
      }
      @media (min-height: 600px) {
        .form-group p {
          display: none;
        }
      }
      @media (min-height: 601px) {
        .form-group p {
          display: block;
        }
      }
    }
    @media (min-width: 576px) {
      max-width: 500px;
      border-radius: 6px;
      height: auto;
    }

    @media (min-width: 1400px) {
    }
    position: relative;

    .title {
      font-display: swap;
      font-weight: 500;
      font-size: 20px;
      line-height: 26px;
      text-align: center;
      color: #000000;
      @media (min-width: 320px) {
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
      }
      @media (min-width: 576px) {
        font-weight: 600;
        font-size: 18px;
        line-height: 23px;
      }
    }

    input,
    textarea,
    select {
      outline: none;
      border: none;
      background: none;
      width: 100%;
      resize: none;
      @media (min-width: 992px) {
        font-size: 14px;
      }
    }

    .input-phone {
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
    .form-group {
      margin-bottom: 0px;
      @media (min-width: 320px) {
        margin-bottom: 4px;
      }

      label {
        font-size: 17px;
        font-weight: 400;
        display: block;
        @media (min-width: 320px) {
          min-height: 15.47px;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
        }
        @media (min-width: 576px) {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 3px;
        }
      }
      .checkbox{
        width: 100%;
        padding: 10px;
        border: 1px solid red;
        user-select: none;
        input{
          width: fit-content;
          margin-left: 10px;
        }
      }
      .input-box {
        border: 1px solid #d3cece;
        width: 100%;
        border-radius: 4px;
        padding-left: 10px;
        &.error {
          border: 2px solid red;
        }
        @media (min-width: 320px) {
          border-radius: 4px;
          padding-left: 5px;
          padding: 2px 5px;
        }
        @media (min-width: 576px) {
          border-radius: 4px;
          padding-left: 5px;
          padding: 6px 2px 6px 6px;
        }
        @media (min-width: 768px) {
          padding-left: 10px;
          margin-top: 2px;
        }
        @media (min-width: 992px) {
          padding: 3px;
        }
        input {
          &[type="tel"] {
            padding-left: 4px;
          }
          @media (min-width: 320px) {
            font-size: 10px;
          }
          @media (min-width: 576px) {
            font-size: 14px;
          }
          @media (min-width: 700px) {
          }
        }
        .PhoneInputCountrySelectArrow {
          display: none;
        }
        &.modal-input {
          position: relative;
          border: 1px solid #d3cece;
          width: 100%;
          border-radius: 4px;
          padding-left: 10px;
          margin-bottom: 5px;
          input,
          textarea {
            padding: 4px;
            padding-left: 4px;
            @media (min-width: 320px) {
              padding: 0;
            }
            @media (min-width: 375px) {
              padding: 0px;
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
            padding: 3px 5px;
            height: 27px;
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
      }
      p:nth-child(1) {
        font-size: 13px;
        line-height: 13px;
        padding: 15px;
        padding-left: 25px;
        font-weight: 300;
        position: relative;
        @media (min-width: 320px) {
          font-weight: 500;
          font-size: 8px;
          line-height: 8px;
          color: #3f3d56;
          padding: 0;
          padding-left: 0;
        }
        @media (min-width: 576px) {
          padding: 10px;
          padding-left: 25px;
        }
        @media (min-width: 700px) {
          padding: 2px;
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
          @media (min-width: 320px) {
            margin-top: 4px;
            left: 0;
          }
          @media (min-width: 576px) {
            margin-top: 4px;
            left: 0;
          }
          @media (min-width: 700px) {
            margin-top: 4px;
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
        }
      }
      p:nth-child(2) {
        font-size: 16px;
        font-family: "Akrobat", sans-serif;
        line-height: 20px;
        @media (min-width: 320px) {
          font-size: 12px;
          line-height: 16px;
          letter-spacing: -0.03em;
        }
        @media (min-width: 576px) {
          font-size: 14px;
          line-height: 17px;
        }
        @media (min-width: 700px) {
          font-size: 16px;
          line-height: 20px;
        }
      }

      .inputs-box {
        display: flex;
        align-items: center;
        @media (max-width: 431px) {
          font-size: 12px;
        }
        span {
          display: block;
          margin-top: 2px;
          @media (min-width: 320px) {
            font-size: 10px;
            font-weight: 400;
          }
          @media (min-width: 360px) {
            font-size: 12px;
          }
        }
        input {
          padding: 0px;
        }
        .item {
          margin: 0 5px;
          @media (max-width: 431px) {
            margin: 0 3px;
          }
          .input-box {
            width: 100%;
          }
          &:nth-child(1) {
            width: 30%;
          }
          &:nth-child(2) {
            width: 25%;
          }
          &:nth-child(3) {
            width: 45%;
          }
        }
      }
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
      &.disabled {
        transition: 0.3s;
        opacity: 0.7;
        cursor: not-allowed;
      }
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
        font-size: 17px;
        margin: 7px auto 4px auto;
      }
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
        top: 1.5px;
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
          padding: 0px;
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
        font-weight: 600;
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
`;
