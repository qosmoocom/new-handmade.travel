<<<<<<< HEAD
import React, { useContext } from "react";
import { AppContext } from "..";
import { useSelector } from "react-redux";
import SectionActive from "../../components/SectionActive";
import Image from "../../components/Image";
import Text from "../../components/Text";
=======
import React, { useContext } from 'react';
import { AppContext } from '..';
import { useDispatch, useSelector } from "react-redux";
import SectionActive from '../../components/SectionActive';
import Image from '../../components/Image';
import Text from '../../components/Text';
>>>>>>> daf7772dce65925c189c578d3c4d7035b64742b4
export default function Benefit() {
  const { getItem } = useContext(AppContext);
  const dispatch = useDispatch();
  const handleOnModal2 = () => {
    const payload = {
      currentModal: 'MODAL_3',
      actionModal: 'ACTION 2',
    };
    dispatch({ type: 'MODAL_OPEN', payload });
  };

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



  return (
    <>
      <SectionActive name={val.name} />

      <div id="benefit" style={bgYellow}>
        <div className="container">
          <div className="benefit-title">
            <h2>
              <Text name="benefit_title">{getItem("benefit_title")}</Text>
            </h2>
          </div>
        </div>
<<<<<<< HEAD
        <div className="benefit-bg">
          <div className="benefit-wrapper">
            {/* <div className="benefit-image"> */}
            <Image
              objectFit="cover"
              layout="fill"
              src={getItem("benefit_img_url")}
              alt={getItem("benefit_img_alt")}
              title={getItem("benefit_img_title")}
              srcDataName={"benefit_img_url"}
              altDasrcDataName={"benefit_img_alt"}
              titleDasrcDataName={"benefit_img_title"}
              priority={"important"}
            />
            {/* </div> */}

            <div className="benefit-text-section">
              <h1>
                <b>
                  <Text name="benefit_center_title">
                    {getItem("benefit_center_title")}
                  </Text>
                </b>
              </h1>
              <p>
                <Text name="benefit_center_info">
                  {getItem("benefit_center_info")}
                </Text>
              </p>
            </div>
=======
        <div className="benefit-wrapper">
          <Image
            objectFit="cover"
            layout="fill"
            src={getItem("benefit_img_url")}
            alt={getItem("benefit_img_alt")}
            title={getItem("benefit_img_title")}
            srcDataName={"benefit_img_url"}
            altDasrcDataName={"benefit_img_alt"}
            titleDasrcDataName={"benefit_img_title"}
            priority={"important"}
          />

          <div className="benefit-text-section">
            <h1>
              <b>
                <Text name="benefit_center_title">
                  {getItem("benefit_center_title")}
                </Text>
              </b>
            </h1>
            <p>
              <Text name="benefit_center_info">
                {getItem("benefit_center_info")}
              </Text>
            </p>
>>>>>>> daf7772dce65925c189c578d3c4d7035b64742b4
          </div>
        </div>

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
