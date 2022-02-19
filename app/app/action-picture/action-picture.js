import React, { useContext } from "react";
import Image from "../../components/Image";
import Text from "../../components/Text";
import { AppContext } from "..";
export default function ActionPicture() {
  const { getItem } = useContext(AppContext);
  return (
    <div id="action-picture">
      <div className="container">
        <div className="action-picture-btn">
          <button>
            <Text name="action_picture_btn_bron">
              {getItem("action_picture_btn_bron")}
            </Text>
          </button>
        </div>
      </div>
      <div className="wrapper-content">
        <div className="container">
          <div className="content-left">
            <div className="content">
              <h3 className="content-left-title">
                <Text name="action_picture_head">
                  {getItem("action_picture_head")}
                </Text>
              </h3>
              <p className="content-left-descript">
                <Text name="action_picture_text">
                  {getItem("action_picture_text")}
                </Text>
              </p>
            </div>
          </div>
          <div className="content-right">
            <div className="img-box">
              <Image
                src={getItem("action_picture_imgSrc")}
                title={getItem("action_picture_imgTitle")}
                alt={getItem("action_picture_imgAlt")}
                srcDataName={"action_picture_imgSrc"}
                titleDataName={"action_picture_imgTitle"}
                altDataName={"action_picture_imgAlt"}
                layout="fill"
                objectFit="cover"
                itIsClassName="img-box"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
