import React, { useContext } from "react";
import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import SectionActive from "../../components/SectionActive";
import { AppContext } from "..";
import Image from "../../components/Image";
import Text from "../../components/Text";
import Item from "../../components/Item";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
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

  const btnLength = parseInt(getItem("faqData", "faqData").length / 5)+1;
 

  const [btnActive, setBtnActive] = useState(
    "_"
      .repeat(btnLength)
      .split("")
      .map((_, index) => index === 0)
  );
  
  // const [faqData, setFaqData] = useState('');
  
  useEffect(() => {
    const btnL = parseInt(getItem("faqData", "faqData").length / 5)+1;
    setBtnActive(
      "_"
        .repeat(btnL)
        .split("")
        .map((_, index) => index === 0)
    );
  }, [getItem("faqData", "faqData")]);

  console.log('BtnActive - ',btnActive)
  console.log("Savol soni= ", getItem("faqData", "faqData").length);
  console.log("btnLength = ", btnLength);

  const pageDownHandler = (id) => {
    setBtnActive((prev) => prev.map((_, index) => id + 1 >= index));
  };

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "faq"
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
      <div style={bgYellow} id="faq">
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
                    <div className="list-item" style={{ position: "relative" }}>
                      <h3
                        className="list-item-title"
                        onClick={(event) => toggleHandler(event, index)}
                      >
                        <Text group="faqData" id={index} name="title">
                          {item?.title}
                        </Text>
                      </h3>
                      <div
                        className="icons"
                        style={{
                          position: "absolute",
                          right: "5px",
                          top: "12px",
                          fontSize: "20px",
                        }}
                      >
                        {!(state.currentItem === index && state.height) ? (
                          <AiOutlinePlus className="icon" />
                        ) : (
                          <AiOutlineMinus className="icon" />
                        )}
                      </div>
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
                              onClick={() =>
                                pageDownHandler(parseInt(index / 5))
                              }
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
    </>
  );
}
