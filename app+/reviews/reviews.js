import SectionActive from "../../components/SectionActive";
import { useSelector } from "react-redux";
import React, { useContext } from "react";
import { AppContext } from "..";
import Image from "../../components/Image";
import Text from "../../components/Text";
import Item from "../../components/Item";
import { IoIosAirplane } from "react-icons/io";
export default function Reviews() {
  const { getItem } = useContext(AppContext);
  const handleTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "action-detail"
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
      <div id="reviews" style={bgYellow}>
        <div className="container" id="coment">
          <div className="content">
            <div className="reviews-title">
              <h1>
                <Text itIsClassName="reviews-title" name="reviews_title">
                  {getItem("reviews_title")}
                </Text>
              </h1>
            </div>
            <div className="cards">
              {getItem("reviewsData", "reviewsData").map((item, index) => {
                return (
                  <Item
                    group="reviewsData"
                    itemId={index}
                    target="_blank"
                    key={index}
                    href={item.link}
                  >
                    <div className="card">
                      <div className="reviews-image ">
                        <div className="image-box">
                          <Image
                            layout="fill"
                            title={item.img.title}
                            alt={item.img.alt}
                            src={item.img.src}
                            id={index}
                            group="reviewsData"
                            sectionName={val.name}
                          />
                        </div>
                      </div>
                      <div className="reviews-text ">
                        <h1>
                          <Text name="title" group="reviewsData" id={index}>
                            {item.title}
                          </Text>
                        </h1>
                        <h4>
                          <Text
                            name="description"
                            group="reviewsData"
                            id={index}
                          >
                            {item.description}
                          </Text>
                        </h4>
                      </div>
                    </div>
                  </Item>
                );
              })}
            </div>
            <div className="plane" style={{ paddingTop: "1rem" }}>
              <article onClick={handleTop}>
                <IoIosAirplane className="plane-btn" />
                <p>
                  <Text name="prices_top_btn">{getItem("prices_top_btn")}</Text>
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
