import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "..";
import SectionActive from "../../components/SectionActive";
import Image from "../../components/Image";
import Text from "../../components/Text";
export default function WhoIs() {
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

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "whois"
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
      <div id="whois-wrapper" style={bgYellow}>
        <div className="container">
          <div className="container">
            <div className="whois-content">
              <h1>
                <Text name="whois_title" itIsClassName="#whois-wrapper h1">
                  {getItem("whois_title")}
                </Text>
              </h1>
              <div className="whois-descript">
                <div className="whois-image">
                  <div className="image-content">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={getItem("whois_user_imgUrl")}
                      alt={getItem("whois_user_imgAlt")}
                      title={getItem("whois_user_imgTitle")}
                      srcDataName={"whois_user_imgUrl"}
                      altDataName={"whois_user_imgAlt"}
                      titleDataName={"whois_user_imgTitle"}
                      sectionName={val.name}
                    />
                  </div>
                </div>
                <p>
                  <Text name="whois_info" itIsClassName="#whois-wrapper p">
                    {getItem("whois_info")}
                  </Text>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
