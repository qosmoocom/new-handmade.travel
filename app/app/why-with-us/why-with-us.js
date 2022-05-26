import SectionActive from "../../components/SectionActive";
import { useDispatch, useSelector } from "react-redux";
import React, { useContext } from "react";
import { AppContext } from "..";
import Image from "../../components/Image";
import Text from "../../components/Text";
import Item from "../../components/Item";
export default function WhyWithUs() {
  const { getItem } = useContext(AppContext);

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "why-with-us"
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
      <div id="why-wth-us" style={bgYellow}>
        <div className="container">
          <div className="content">
            <div className="why-wth-us-title">
              <h1>
                <Text
                  name="why_with_title"
                  itIsClassName=".why-wth-us-title h1"
                >
                  {getItem("why_with_title")}
                </Text>
              </h1>
            </div>
            <div className="cards">
              {getItem("whyData", "whyData").map((item, index) => {
                return (
                  <Item
                    className="card"
                    group="whyData"
                    itemId={index}
                    key={index}
                  >
                    <div className="img-card">
                      <div className="image-box">
                        <Image
                          layout="fill"
                          src={item.img.src}
                          alt={item.img.alt}
                          title={item.img.title}
                          group="whyData"
                          id={index}
                          sectionName={val.name}
                        />
                      </div>
                    </div>
                    <div className="text-box">
                      <h1>
                        <Text
                          name="title"
                          id={index}
                          group="whyData"
                          itIsClassName="text-box"
                        >
                          {item.title}
                        </Text>
                      </h1>
                      <h4>
                        <Text name="descript" group="whyData" id={index}>
                          {item.descript}
                        </Text>
                      </h4>
                    </div>
                  </Item>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
