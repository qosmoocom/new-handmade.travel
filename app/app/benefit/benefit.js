import React, { useContext } from "react";
import { AppContext } from "..";
import Image from "../../components/Image";
import Text from "../../components/Text";
export default function Benefit() {
  const { getItem } = useContext(AppContext);
  return (
    <div id="benefit">
      <div className="container">
        <div className="benefit-title">
          <h2>
            <Text name="benefit_title">{getItem("benefit_title")}</Text>
          </h2>
        </div>
      </div>
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
          priority
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
            <button>
              <Text name="benefit_action_btn">
                {getItem("benefit_action_btn")}
              </Text>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
