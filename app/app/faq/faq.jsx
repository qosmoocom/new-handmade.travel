import React, { useContext } from "react";
import { useState } from "react";
import { AppContext } from "..";
import Image from "../../components/Image";
import Text from "../../components/Text";
import Item from "../../components/Item";
export default function Faq() {
  const { getItem } = useContext(AppContext);
  const [state, setState] = useState({
    currentItem: null,
    height: null,
    isToggle: false,
  });

  const toggleHandler = (event, id) => {
    let height = document.querySelectorAll("#faq .list-item-texts")[id]
      .scrollHeight;
    setState((prevState) => ({
      ...prevState,
      height: !prevState.isToggle
        ? height
        : prevState.currentItem !== id
        ? height
        : null,
      currentItem: id,
      isToggle: prevState.currentItem !== id ? true : !prevState.isToggle,
    }));
  };

  const btnLength = parseInt(getItem("faqData", "faqData").length / 5);

  const [btnActive, setBtnActive] = useState(
    "_"
      .repeat(btnLength)
      .split("")
      .map((_, index) => index === 0)
  );

  const pageDownHandler = (id) => {
    setBtnActive((prev) => prev.map((_, index) => id + 1 >= index));
  };
  return (
    <div id="faq">
      <div className="container">
        <div className="faq-title">
          <h2>
            <Text name="faq_title">{getItem("faq_title")}</Text>
          </h2>
        </div>

        <div className="faq-list">
          {getItem("faqData", "faqData").map((item, index) => {
            if (btnActive[parseInt(index / 5)]) {
              return (
                <Item group="faqData" itemId={index} key={index}>
                  <div className="list-item">
                    <h3
                      className="list-item-title"
                      onClick={(event) => toggleHandler(event, index)}
                    >
                      <Text group="faqData" id={index} name="title">
                        {item?.title}
                      </Text>
                    </h3>
                    <div
                      className="list-item-texts"
                      style={{
                        height: state.currentItem === index && state.height,
                      }}
                    >
                      {item?.texts.map((textItem, textIndex) => {
                        return (
                          <div key={textIndex}>
                            <p>
                              <Text
                                list="faqData"
                                parentId={index}
                                name={"texts"}
                                childId={textIndex}
                                itIsClassName="list-item-texts p"
                              >
                                {textItem.value}
                              </Text>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {(index + 1) % 5 === 0 && index !== 0 && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {btnActive.filter((i) => i).length ===
                        parseInt(index / 5) + 1 &&
                        !btnActive.every((i) => i) && (
                          <button
                            onClick={() => pageDownHandler(parseInt(index / 5))}
                          >
                            <Text name="faq_more_btn">
                              {getItem("faq_more_btn")}
                            </Text>
                          </button>
                        )}
                    </div>
                  )}
                </Item>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
