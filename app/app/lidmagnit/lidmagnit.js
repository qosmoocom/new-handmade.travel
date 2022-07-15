import { useDispatch, useSelector } from "react-redux";
import React, { useContext } from "react";
import Text from "../../components/Text";
import { AppContext } from "..";
import SectionActive from "../../components/SectionActive";
function ActionDetail() {
  const { getItem } = useContext(AppContext);

  const dispatch = useDispatch();

  // modal opened
  const handleOnModal = () => {
    const payload = {
      currentModal: "MODAL_5",
      actionModal: "ACTION_3",
    };
    dispatch({ type: "MODAL_OPEN", payload });
  };

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "lidmagnit"
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
      <div id="lidmagnit" style={bgYellow}>
        <div className="container">
          <div className="content">
            <div className="content-left">
              <h2>
                <span className="lid-title-big">
                  <Text name="lid_title_span">{getItem("lid_title_span")}</Text>
                </span>
                <Text
                  name="lid_title_text"
                  itIsClassName="#action-detail h2"
                >
                  {getItem("lid_title_text")}
                </Text>
              </h2>
              <p className="action_detail_info">
                <Text
                  name="lid_info"
                  itIsClassName="action_detail_info"
                >
                  {getItem("lid_info")}
                </Text>
              </p>
            </div>
            <div className="content-right">
              <button className="action_detail_btn" onClick={handleOnModal}>
                <Text
                  name="lid_button"
                  itIsClassName="action_detail_btn"
                >
                  {getItem("lid_button")}
                </Text>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActionDetail;
