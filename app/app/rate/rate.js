import SectionActive from "../../components/SectionActive";
import { BsExclamationCircle, BsCheck2 } from "react-icons/bs";
import parse from "html-react-parser";
import { IoIosMail, IoMdCall } from "react-icons/io";
import { IoIosAirplane } from "react-icons/io";
import { RiMessageFill } from "react-icons/ri";
import React, { useContext, useState } from "react";

import Text from "../../components/Text";
import Item from "../../components/Item";

import { AppContext } from "..";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../../store/types";
import Image from "next/image";

function DataIs({ isOpen = false, tariffNum = "" }) {
  const { getItem } = useContext(AppContext);

  return (
    isOpen &&
    getItem("rateData", "rateData").map((item, index) => {
      const sizeData = getItem("rateData", "rateData").length;
      return (
        <Item
          key={index}
          itemId={index}
          group="rateData"
          className="rate-list-item"
        >
          <h3 className="rate-list-item-title">
            <Text
              name="rate_head"
              group="rateData"
              id={index}
              itIsClassName="rate-list-item-title"
              type="important"
            >
              {parse(item.rate_head)}
              <BsExclamationCircle className="excl" />
            </Text>

            {index === sizeData - 1 ? (
              <div className="last-icons">
                <IoIosMail className="icon active" />
                <RiMessageFill className="icon active" />
                <IoMdCall
                  style={{ background: "#686868b0" }}
                  className={`icon ${tariffNum === 2 ? "active" : ""}`}
                />
              </div>
            ) : (
              item.actives[tariffNum] && <BsCheck2 className="bs_check" />
            )}

            <p className="rate-list-item-descript">
              <Text
                name="rate_title"
                group="rateData"
                id={index}
                itIsClassName="rate-list-item-descript"
              >
                {item.rate_title}
              </Text>
            </p>
          </h3>
        </Item>
      );
    })
  );
}
export default function Rate() {
  const { getItem } = useContext(AppContext);
  const [toggle, setToggle] = useState({ isOpen: true, index: 1 });
  const { isEdit: isAdmin } = useSelector((st) => st.admin);
  const dispatch = useDispatch();
  const handleToggle = (index) => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      index,
      isOpen: prevToggle.index === index ? !prevToggle.isOpen : true,
    }));
  };
  const checkendHandler = (group, name, id, index) => {
    if (isAdmin) {
      dispatch({
        type: types.checkEdit,
        payload: { group, name, id, index, isCheckEdit: true },
      });
    }
  };
  const handleTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "rate"
  );

  const { isEdit: thisIsNotClient } = useSelector((st) => st.admin);

  const bgYellow = {
    background: val.isActive ? null : "yellow",
    opacity: val.isActive ? null : "0.2",
    cursor: val.isActive ? null : "not-allowed",
  };

  if (!thisIsNotClient && !val.isActive) return null;
  // component active no active

  return (
    <>
      <SectionActive name={val.name} />
      <section>
        <div id="rate" style={bgYellow}>
          <div className="container">
            <div className="content">
              <div className="rate-header-list">
                {getItem("rate-header-list", "rate_name_data").map(
                  (item, index) => {
                    return (
                      <div className="header-list" key={index}>
                        <div
                          className="header-list-btn"
                          onClick={() => handleToggle(index)}
                        >
                          <span className="btn-item btn-left">
                            <Text
                              name="rate_name_head"
                              group="rate_name_data"
                              id={index}
                              itIsClassName="btn-item btn-left"
                            >
                              {item.rate_name_head}
                            </Text>
                          </span>
                          <span className="btn-item btn-right">
                            <Text
                              name="rate_ot"
                              itIsClassName="btn-item btn-right"
                            >
                              {getItem("rate_ot")}
                            </Text>
                            <Text
                              name="rate_money"
                              group="rate_name_data"
                              id={index}
                              itIsClassName="btn-item btn-right"
                            >
                              {item.rate_money}
                            </Text>
                          </span>
                        </div>
                        <div className="header-list-modal">
                          <DataIs
                            isOpen={toggle.isOpen && index === toggle.index}
                            tariffNum={index}
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>

              {/* --------- */}
              <div className="rate-header-list-table">
                <div className="list-table-tr fist-item">
                  <div className="list-table-th">
                    <b>
                      <Text name="rate_name">{getItem("rate_name")}</Text>
                    </b>
                  </div>
                  {getItem("rate-header-list", "rate_name_data").map(
                    (item, index) => {
                      return (
                        <div key={index} className="list-table-th">
                          <Text
                            name="rate_name_head"
                            group="rate_name_data"
                            id={index}
                            itIsClassName="btn-item btn-left"
                          >
                            {item.rate_name_head}
                          </Text>
                          <div>
                            <Text
                              name="rate_ot"
                              itIsClassName="btn-item btn-right"
                            >
                              {getItem("rate_ot")}
                            </Text>
                            <Text
                              name="rate_money"
                              group="rate_name_data"
                              id={index}
                              itIsClassName="btn-item btn-right"
                            >
                              {item.rate_money}
                            </Text>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
                {getItem("rateData", "rateData").map((item, index) => {
                  const sizeData = getItem("rateData", "rateData").length;

                  return (
                    <Item
                      key={index}
                      itemId={index}
                      group="rateData"
                      className="list-table-tr"
                    >
                      <div className="list-table-th title">
                        <Text
                          name="rate_head"
                          group="rateData"
                          id={index}
                          type="important"
                          itIsClassName="rate-list-item-title"
                        >
                          {parse(item.rate_head)}
                          {/* <BsExclamationCircle className="excl" /> */}
                          <div className="excl-div">
                            <BsExclamationCircle className="excl"/>
                            <p className="rate-list-item-descript">
                              <Text
                                name="rate_title"
                                group="rateData"
                                id={index}
                                itIsClassName="rate-list-item-descript"
                              >
                                {item.rate_title}
                              </Text>
                            </p>
                          </div>
                        </Text>
                      </div>
                      <div className="list-table-th jcc">
                        {index === sizeData - 1 ? (
                          <div className="last-icons">
                            <Image
                              src="/images/phone1.jpg"
                              width={80}
                              height={20}
                            />
                          </div>
                        ) : (
                          item.actives[0] && (
                            <BsCheck2
                              onClick={() =>
                                checkendHandler(
                                  "rateData",
                                  "actives",
                                  "0",
                                  index
                                )
                              }
                              className="bs_check"
                            />
                          )
                        )}
                      </div>
                      <div className="list-table-th jcc">
                        {index === sizeData - 1 ? (
                          <div className="last-icons">
                            <Image
                              src="/images/phone1.jpg"
                              width={80}
                              height={20}
                            />
                          </div>
                        ) : (
                          item.actives[1] && (
                            <BsCheck2
                              onClick={() =>
                                checkendHandler(
                                  "rateData",
                                  "actives",
                                  "1",
                                  index
                                )
                              }
                              className="bs_check"
                            />
                          )
                        )}
                      </div>
                      <div className="list-table-th jcc">
                        {index === sizeData - 1 ? (
                          <div className="last-icons">
                            <Image
                              src="/images/phone3.jpg"
                              width={80}
                              height={20}
                            />
                          </div>
                        ) : (
                          item.actives[2] && (
                            <><BsCheck2
                                className="bs_check"
                                onClick={() => checkendHandler(
                                  "rateData",
                                  "actives",
                                  "2",
                                  index
                                )} />{index == 0 && <div className="excl-div">
                                  <BsExclamationCircle className="excl" />
                                  <p className="rate-list-item-descript">
                                    <Text
                                      name="rate_title_two"
                                      group="rateData"
                                      id={index}
                                      itIsClassName="rate-list-item-descript_two"
                                    >
                                      {item.rate_title_two == undefined ? `Alloggeremo in hotel di fiducia e in accoglienti boutique hotel a 4* e trascorreremo una notte in un'autentica yurta nomade. Gli hotel sono situati nei centri storici. Supplemento per sistemazione singola supplementare $ 594.`: item.rate_title_two }
                                      {/* {item.rate_title_two} */}
                                    </Text>
                                  </p>
                                </div>}</>
                          )
                        )}
                      </div>
                    </Item>
                  );
                })}
              </div>
            </div>

            <div className="content-2">
              <p className="prices_footer">
                <Text name="prices_footer" itIsClassName="prices_footer">
                  {getItem("prices_footer")}
                </Text>
              </p>
              <div className="plane">
                <article onClick={handleTop}>
                  <IoIosAirplane className="plane-btn" />
                  <p>
                    <Text name="prices_top_btn">
                      {getItem("prices_top_btn")}
                    </Text>
                  </p>
                </article>
              </div>
              <p className="rate_footer_head">
                <b>
                  <Text
                    name="rate_footer_head"
                    itIsClassName="rate_footer_head"
                  >
                    {getItem("rate_footer_head")}
                  </Text>
                </b>
              </p>
              <h3 className="rate_footer_title">
                <b>
                  <Text
                    name="rate_footer_title"
                    itIsClassName="rate_footer_title"
                  >
                    {getItem("rate_footer_title")}
                  </Text>
                </b>
              </h3>
              <ul className="rate_footer_list">
                {getItem("rate_footer_list", "rate_footer_list").map(
                  (item, index) => {
                    return (
                      <Item
                        key={index}
                        itemId={index}
                        group="rate_footer_list"
                        className="rate_footer_list_item"
                      >
                        <Text
                          group="rate_footer_list"
                          name="text"
                          itIsClassName="rate_footer_list"
                          id={index}
                        >
                          {item.text}
                        </Text>
                      </Item>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
