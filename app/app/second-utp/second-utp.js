import React, { useContext } from "react";
import { AppContext } from "..";
import Text from "../../components/Text";
import Image from "../../components/Image";
import Item from "../../components/Item";
export default function SecondUtp() {
  const { getItem } = useContext(AppContext);
  return (
    <div id="second-utp">
      <div className="container">
        <div className="second-utp-title">
          <h2>
            <Text name="second_utp_title" itIsClassName="second-utp-title">
              {getItem("second_utp_title")}
            </Text>
          </h2>
        </div>
        <div className="row">
          {getItem("second_utp", "second_utp_list").map((item, index) => {
            return (
              <Item
                group="second_utp_list"
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
                      group={"second_utp_list"}
                      id={index}
                      priority
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="second-utp-description">
                  <div className="second-utp-text-1">
                    <h3>
                      <Text
                        group="second_utp_list"
                        itIsClassName="second-utp-text-1"
                        name="text1"
                        id={index}
                      >
                        {item.text1}
                      </Text>
                    </h3>
                  </div>
                  <div className="second-utp-text-2">
                    <p>
                      <Text
                        group="second_utp_list"
                        itIsClassName="second-utp-text-2"
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
  );
}
