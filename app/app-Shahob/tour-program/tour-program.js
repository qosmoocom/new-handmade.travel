import SectionActive from "../../components/SectionActive";
import { useSelector } from "react-redux";
import React, { useContext, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AppContext } from "..";
import Text from "../../components/Text";
import Image from "../../components/Image";
import Item from "../../components/Item";
// import Image from "next/image";
import { useState } from "react";
export default function TourProgram() {
  const { getItem } = useContext(AppContext);
  const [toggle, setToggle] = useState({
    count: 1,
    isOpen: true,
    maxHeight: 0,
  });

  const toogleHandler = (e, id) => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      count: id,
      isOpen: id === prevToggle.count ? !prevToggle.isOpen : true,
    }));
  };

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "tour-program"
  );

  const { isEdit: thisIsNotClient } = useSelector((st) => st.admin);

  const bgYellow = {
    background: val.isActive ? null : "yellow",
    opacity: val.isActive ? null : "0.2",
    cursor: val.isActive ? null : "not-allowed",
  };
  useEffect(() => {
    if (val.isActive) {
      setToggle((prev) => ({
        ...prev,
        maxHeight: document.querySelectorAll(".tour-program-list-description")[
          toggle.count
        ].scrollHeight,
      }));
    }
  }, [toggle.count, val.isActive]);

  if (!thisIsNotClient && !val.isActive) return null;
  // component active no active

  return (
    <>
      <SectionActive name={val.name} />
      <div id="tour-program" style={bgYellow}>
        <div className="container">
          <div className="tour-program-title">
            <h2>
              <Text name="tour_program_title">
                {getItem("tour_program_title")}
              </Text>
            </h2>
          </div>
          {/* tour-program-list */}
          <div className="tour-program-list">
            {getItem("tour_program", "tour_program_list").map((tour, index) => {
              return (
                <Item
                  group="tour_program_list"
                  itemId={index}
                  className="tour-program-list-item"
                  key={index}
                >
                  {/* tour-program-list-title section */}
                  <div
                    className={`tour-program-list-title tour-program-list-title-id-${index}`}
                    onClick={(e) => toogleHandler(e, index)}
                  >
                    <label>
                      <b>
                        <Text
                          list="tour_program_list"
                          parentId={index}
                          name="titleLabel"
                        >
                          {tour?.titleLabel}
                        </Text>
                      </b>
                    </label>
                    <Text
                      list="tour_program_list"
                      parentId={index}
                      name={"title"}
                    >
                      {tour?.title}
                    </Text>
                    <IoIosArrowDown
                      className={`arrow-btn ${
                        index === toggle.count && toggle.isOpen ? "active" : ""
                      }`}
                    />
                  </div>
                  {/* --------------------------------- */}
                  {/* tour-program-list-description section */}
                  <div
                    className={`tour-program-list-description ${
                      index === toggle.count && toggle.isOpen ? "active" : ""
                    } tour-program-list-description-id-${index}`}
                    style={{
                      maxHeight:
                        index === toggle.count && toggle.isOpen
                          ? toggle.maxHeight + "px"
                          : null,
                      transition: `all 0.5s`,
                    }}
                  >
                    <ul className="tour-program-list-texts">
                      {tour?.textList?.map((textItem, childIndex) => {
                        return (
                          <li
                            key={textItem.id}
                            className={`tour-program-list-text-id-${index}-${textItem.id}`}
                          >
                            <Text
                              list="tour_program_list"
                              parentId={index}
                              name={"textList"}
                              childId={childIndex}
                              itIsClassName="tour-program-list-texts"
                            >
                              {textItem?.value}
                            </Text>
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="tour-program-list-images">
                      {tour?.imageList?.map((img) => {
                        return (
                          <li
                            key={img.id}
                            className={`tour-program-list-image-id-${index}-${img.id}`}
                          >
                            <Image
                              objectFit="cover"
                              src={img?.src}
                              alt={img?.alt}
                              layout="fill"
                              parentId={index}
                              childId={img.id}
                              name={"imageList"}
                              list={"tour_program_list"}
                              title={img?.title}
                              itIsClassName={"tour-program-list-images"}
                              sectionName={val.name}
                            />
                          </li>
                        );
                      })}
                    </ul>
                    {tour?.footerTextLabel && tour?.footerText && (
                      <div
                        className={`tour-program-list-footer tour-program-list-footer-id-${index+1}`}
                      >
                        <p>
                          <label>
                            <Text
                              list="tour_program_list"
                              parentId={index}
                              name="footerTextLabel"
                            >
                              {tour?.footerTextLabel}
                            </Text>
                          </label>
                          <Text
                            list="tour_program_list"
                            parentId={index}
                            name="footerText"
                          >
                            {tour?.footerText}
                          </Text>
                        </p>
                      </div>
                    )}
                  </div>
                  {/* --------------------------------- */}
                </Item>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
