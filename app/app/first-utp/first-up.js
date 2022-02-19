import React, { useContext } from "react";
import { AppContext } from "..";

import Text from "../../components/Text";
import Image from "../../components/Image";
import Item from "../../components/Item";
export default function FirstUtp() {
  const { getItem } = useContext(AppContext);
  return (
    <div id="first-utp">
      <div className="container">
        <div className="row">
          {getItem("first_utp_item", "first_utp").map((item, index) => {
            return (
              <Item
                key={index}
                className="first-utp-item col-12 col-sm-12 col-md-6"
                group="first_utp"
                itemId={index}
              >
                <div className="first-utp-img">
                  <div className="first-utp-img-box">
                    <Image
                      src={item.img.src}
                      priority
                      itIsClassName="first-utp-img-box"
                      objectFit="contain"
                      layout="fill"
                      alt={item.img.alt}
                      title={item.img.title}
                      group={"first_utp"}
                      id={index}
                    />
                  </div>
                </div>
                <div className="first-utp-text">
                  <h2>
                    <Text
                      group="first_utp"
                      name="text1"
                      itIsClassName="first-utp-text"
                      id={index}
                    >
                      {item.text1}
                    </Text>
                  </h2>
                </div>
              </Item>
            );
          })}
        </div>
      </div>
    </div>
  );
}
