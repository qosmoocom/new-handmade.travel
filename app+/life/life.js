import SectionActive from "../../components/SectionActive";
import { useDispatch, useSelector } from "react-redux";
import React, { useContext } from "react";
import { AppContext } from "..";
import Image from "../../components/Image";
import Text from "../../components/Text";
import Item from "../../components/Item";
export default function Life() {
  const { getItem } = useContext(AppContext);

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "life"
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
      <div id="life" style={val ? bgYellow : { display: "block" }}>
        <div className="container">
          <div className="content">
            <div className="life-title">
              <h1>
                <Text name="life_title">{getItem("life_title")}</Text>
              </h1>
            </div>
            <div className="cards">
              {getItem("lifeData", "lifeData").map((item, index) => {
                return (
                  <Item
                    className="card"
                    group="lifeData"
                    itemId={index}
                    key={index}
                  >
                    {/* <div className="img-card">
                      <div className="image-box">
                        <Image
                          layout="fill"
                          src={item.img.src}
                          alt={item.img.alt}
                          title={item.img.title}
                          group="lifeData"
                          id={index}
                        />
                      </div>
                    </div> */}
                    <div className="text-box">
                      <h1>
                        <Text
                          name="title"
                          id={index}
                          group="lifeData"
                          itIsClassName="text-box"
                        >
                          {item.title}
                        </Text>
                      </h1>
                      <h4>
                        <Text name="descript" group="lifeData" id={index}>
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
