import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "..";
import Image from "../../components/Image";
import Text from "../../components/Text";
export default function Author() {
  const { getItem } = useContext(AppContext);
  const dispatch = useDispatch();

  // modal opened
  const handleOnModal = () => {
    const payload = {
      currentModal: "MODAL_1",
      actionModal: "ACTION 5",
    };
    dispatch({ type: "MODAL_OPEN", payload });
  };

  return (
    <div id="author-wrapper">
      <div className="container">
        <div className="container">
          <div className="author-content">
            <div className="author-title">
              <h1>
                <Text name="author_title" itIsClassName="author-title">
                  {getItem("author_title")}
                </Text>
              </h1>
            </div>
            <div className="author-descript">
              <div className="author-image">
                <div className="image-content">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={getItem("author_user_imgUrl")}
                    alt={getItem("author_user_imgAlt")}
                    title={getItem("author_user_imgTitle")}
                    srcDataName={"author_user_imgUrl"}
                    altDataName={"author_user_imgAlt"}
                    titleDataName={"author_user_imgTitle"}
                  />
                </div>
              </div>
              <div className="author-text">
                <p>
                  <Text name="author_info">{getItem("author_info")}</Text>
                </p>
                <button onClick={handleOnModal} style={{ cursor: "pointer" }}>
                  <Text name="author_btn">{getItem("author_btn")}</Text>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
