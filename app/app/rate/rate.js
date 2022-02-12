import { BsExclamationCircle, BsCheck2 } from "react-icons/bs";
import { IoIosMail, IoMdCall } from "react-icons/io";
import { RiMessageFill } from "react-icons/ri";
import React, { useContext, useState } from "react";

import Text from "../../components/Text";
import Item from "../../components/Item";

import { AppContext } from "..";

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
            >
              {item.rate_head}
              <BsExclamationCircle className="excl" />
            </Text>

            {index === sizeData - 1 ? (
              <div className="last-icons">
                <IoIosMail className="icon active" />
                <RiMessageFill className="icon active" />
                <IoMdCall
                  className={`icon ${tariffNum === 2 ? "active" : ""}`}
                />
              </div>
            ) : (
              <BsCheck2 className="bs_check" />
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
  const handleToggle = (index) => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      index,
      isOpen: prevToggle.index === index ? !prevToggle.isOpen : true,
    }));
  };

  return (
    <div id="rate">
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
                        <Text name="rate_ot" itIsClassName="btn-item btn-right">
                          {getItem("rate_ot")}{" "}
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
            <div className="list-table-tr">
              <div className="list-table-th">{getItem("rate_name")}</div>
              {getItem("rate-header-list", "rate_name_data").map(
                (item, index) => {
                  return (
                    <div className="list-table-th">
                      <Text
                        name="rate_name_head"
                        group="rate_name_data"
                        id={index}
                        itIsClassName="btn-item btn-left"
                      >
                        {item.rate_name_head}
                      </Text>
                      <Text name="rate_ot" itIsClassName="btn-item btn-right">
                        {getItem("rate_ot")}{" "}
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
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
