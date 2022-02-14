import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "..";
export default function ActionPicture() {
  const { getItem } = useContext(AppContext);
  return (
    <div id="action-picture">
      <div className="container">
        <div className="action-picture-btn">
          <button>{getItem("action_picture_btn_bron")}</button>
        </div>
      </div>
      <div className="wrapper-content">
        <div className="container">
          <div className="content-left">
            <div className="content">
              <h3 className="content-left-title">
                {getItem("action_picture_head")}
              </h3>
              <p className="content-left-descript">
                {getItem("action_picture_text")}
              </p>
            </div>
          </div>
          <div className="content-right">
            <div className="img-box">
              <Image
                src={getItem("action_picture_imgSrc")}
                title={getItem("action_picture_imgTitle")}
                alt={getItem("action_picture_imgAlt")}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
