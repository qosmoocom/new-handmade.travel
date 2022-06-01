import SectionActive from "../../components/SectionActive";
import { useSelector } from "react-redux";
import React, { useContext } from "react";
import { AppContext } from "..";
import Text from "../../components/Text";
import Image from "../../components/Image";
import Item from "../../components/Item";
export default function ThirdUtp() {
  const { getItem } = useContext(AppContext);

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "third-utp"
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
      <div id="third-utp" style={bgYellow}>
        <div className="container">
          <div className="second-utp-title">
            <h1>
              <Text name="third_utp_title" itIsClassName=".third-utp-title h1">
                {getItem("third_utp_title")}
              </Text>
            </h1>
          </div>
          <div className="row">
            {getItem("third_utp_list", "third_utp_list").map((item, index) => {
              return (
                <Item
                  group="third_utp_list"
                  itemId={index}
                  className="second-utp-item col-md-12 col-lg-6"
                  key={index}
                >
                  <div className="second-utp-item-img">
                    <div className="second-utp-item-img-box">
                      <Image
                        layout="fill"
                        src={item.img.src}
                        alt={item.img.alt}
                        title={item.img.title}
                        itIsClassName="second-utp-item-img-box"
                        group={"third_utp_list"}
                        id={index}
                        priority
                        objectFit="cover"
                        sectionName={val.name}
                      />
                    </div>
                  </div>
                  <div className="second-utp-description">
                    <div className="second-utp-text-1">
                      <h2>
                        <Text
                          group="third_utp_list"
                          itIsClassName="third-utp-text-1"
                          name="text1"
                          id={index}
                        >
                          {item.text1}
                        </Text>
                      </h2>
                    </div>
                    <div className="second-utp-text-2">
                      <p>
                        <Text
                          group="third_utp_list"
                          itIsClassName="third-utp-text-2"
                          name="text2"
                          id={index}
                        >
                          {item.text2}
                        </Text>
                      </p>
                    </div>
                  </div>
                </Item>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
