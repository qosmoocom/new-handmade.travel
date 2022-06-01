import React, { useContext } from "react";
import { AppContext } from "..";
import { useDispatch, useSelector } from "react-redux";
import SectionActive from "../../components/SectionActive";
import Image from "../../components/Image";
import Text from "../../components/Text";
import Link from "../../components/Link";

export default function BenefitLink() {
  const { getItem } = useContext(AppContext);

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "benefit-link"
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
        <div className="action-wrapper">
          <div className="container">
            <div className="content">
              <div className="info">
                <p>
                  <Text name="coach_meeting_link_info">
                    {getItem("coach_meeting_link_info")}
                  </Text>
                </p>
              </div>
              <button style={{ cursor: "pointer" }}>
                <Link
                  hrefName={"coach_meeting_link_href"}
                  target="_blank"
                  href={getItem("coach_meeting_link_href")}
                  name="coach_meeting_link_text"
                >
                  {getItem("coach_meeting_link_text")}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
