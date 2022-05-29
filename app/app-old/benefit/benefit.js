import React, { useContext } from "react";
import { AppContext } from "..";
import { useDispatch, useSelector } from "react-redux";
import SectionActive from "../../components/SectionActive";
import Image from "../../components/Image";
import Text from "../../components/Text";
import Link from "../../components/Link";

export default function Benefit() {
  const { getItem } = useContext(AppContext);
  // const dispatch = useDispatch();
  // const handleOnModal2 = () => {
  //   const payload = {
  //     currentModal: "MODAL_3",
  //     actionModal: "ACTION 2",
  //   };
  //   dispatch({ type: "MODAL_OPEN", payload });
  // };

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "benefit"
  );

  const { isEdit: thisIsNotClient } = useSelector((st) => st.admin);

  const bgYellow = {
    background: val.isActive ? null : "yellow",
    opacity: val.isActive ? null : "0.2",
    cursor: val.isActive ? null : "not-allowed",
  };

  if (!thisIsNotClient && !val.isActive) return null;
  // component active no active

  console.log(getItem("benefit_img_alt"));
  console.log(getItem("benefit_img_title"));
  return (
    <>
      <SectionActive name={val.name} />
      <div id="benefit" style={bgYellow}>
        <div className="container">
          <h1>
            <Text name="benefit_title" itIsClassName="#benefit h1">
              {getItem("benefit_title")}
            </Text>
          </h1>
        </div>

        <div className="wrapper-content">
          <div className="container">
            <div className="content-left">
              <div className="content">
                <h3 className="content-left-title">
                  <Text name="benefit_center_title">
                    {getItem("benefit_center_title")}
                  </Text>
                </h3>
                <p className="content-left-descript">
                  <Text name="benefit_center_info">
                    {getItem("benefit_center_info")}
                  </Text>
                </p>
              </div>
            </div>
            <div className="content-right">
              <div className="img-box">
                <Image
                  src={getItem("benefit_img_url")}
                  alt={getItem("benefit_img_alt")}
                  title={getItem("benefit_img_title")}
                  srcDataName={"benefit_img_url"}
                  altDataName={"benefit_img_alt"}
                  titleDataName={"benefit_img_title"}
                  layout="fill"
                  objectFit="cover"
                  itIsClassName="img-box99"
                  sectionName={val.name}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="action-wrapper">
          <div className="container">
            <div className="content">
              <div className="info">
                <p>
                  <Text name="benefit_action_text">
                    {getItem("benefit_action_text")}
                  </Text>
                </p>
              </div>
              <button style={{ cursor: "pointer" }} onClick={handleOnModal2}>
                <Text name="benefit_action_btn">
                  {getItem("benefit_action_btn")}
                </Text>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
