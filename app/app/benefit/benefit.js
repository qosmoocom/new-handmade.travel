import React, { useContext } from "react";
import { AppContext } from "..";
import Image from "next/image";
import Text from "../../components/Text";
export default function Benefit() {
  const { getItem } = useContext(AppContext);
  return (
    <div id="benefit">
      <div className="container">
        <div className="benefit-title">
          <h2>{getItem("benefit_title")}</h2>
        </div>
      </div>
      <div className="benefit-wrapper">
        <Image
          objectFit="cover"
          layout="fill"
          src={getItem("benefit_img_url")}
          alt={getItem("benefit_img_alt")}
          title={getItem("benefit_img_title")}
        />

        <div className="benefit-text-section">
          <h1>
            <b>{getItem("benefit_center_title")}</b>
          </h1>
          <p>
            <Text>{getItem("benefit_center_info")}</Text>
          </p>
        </div>
      </div>

      <div className="action-wrapper">
        <div className="container">
          <div className="content">
            <div className="info">
              <p>{getItem("benefit_action_text")}</p>
            </div>
            <button>{getItem("benefit_action_btn")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
