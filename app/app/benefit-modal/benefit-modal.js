import React, { useContext } from "react";
import { AppContext } from "..";
import { useDispatch, useSelector } from "react-redux";
import SectionActive from "../../components/SectionActive";
import Image from "../../components/Image";
import Text from "../../components/Text";
import Link from "../../components/Link";

export default function BenefitModal() {
  const { getItem } = useContext(AppContext);
  const dispatch = useDispatch();
  const handleOnModal2 = () => {
    const payload = {
      currentModal: "MODAL_3",
      actionModal: "ACTION 2",
    };
    dispatch({ type: "MODAL_OPEN", payload });
  };

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "benefit-modal"
  );

  const { isEdit: thisIsNotClient } = useSelector((st) => st.admin);

  const bgYellow = {
    background: (val ? val.isActive : true) ? null : "yellow",
    opacity: (val ? val.isActive : true) ? null : "0.2",
    cursor: (val ? val.isActive : true) ? null : "not-allowed",
  };

  if (!thisIsNotClient && (val ? !val.isActive : false)) return null;
  // component active no active

  return (
    <>
      <SectionActive name={val ? val.name : "true"} />
      <div id="benefit" style={val ? bgYellow : { display: "block" }}>
        {/* <div className="container">
          <div className="benefit-title">
            <h2>
              <Text name="benefit_title">{getItem("benefit_title")}</Text>
            </h2>
          </div>
        </div> */}

        {/* <div className="wrapper-content">
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
                  altDasrcDataName={"benefit_img_alt"}
                  titleDasrcDataName={"benefit_img_title"}
                  layout="fill"
                  objectFit="cover"
                  itIsClassName="img-box"
                />
              </div>
            </div>
          </div>
        </div> */}

        <div className="action-wrapper">
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
        </div>
      </div>
    </>
  );
}
