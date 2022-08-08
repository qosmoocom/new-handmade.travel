import { useDispatch, useSelector } from "react-redux";
import React, { useContext } from "react";
import Text from "../../components/Text";
import { AppContext } from "..";
import SectionActive from "../../components/SectionActive";

function TourTitle() {
  const { getItem } = useContext(AppContext);

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "tour-title"
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
      <div id="tour-title" style={bgYellow}>
        <div className="container">
          <div className="content">
            <div className="header_texts_box">
              <h4 className="header_middle_text" id="header_middle_text">
                <Text
                  name={"title_head_text_1"}
                  itIsClassName="header_middle_text"
                >
                  {getItem("title_head_text_1")}
                </Text>
              </h4>
              <h2 className="header_big_text" id="header_big_text">
                <Text name={"title_head_text_2"} itIsClassName="header_big_text">
                  {getItem("title_head_text_2")}
                </Text>
              </h2>
              <h4 className="header_small_text" id="header_small_text">
                <Text
                  name={"title_head_text_3"}
                  itIsClassName="header_small_text"
                >
                  {getItem("title_head_text_3")}
                </Text>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourTitle;
