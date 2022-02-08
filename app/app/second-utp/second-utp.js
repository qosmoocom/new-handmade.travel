import React, { useContext } from "react";
import { AppContext } from "..";
import Text from "../../components/Text";
import Image from "../../components/Image";
export default function SecondUtp() {
  const { getItem } = useContext(AppContext);
  return (
    <div id="second-utp">
      <div className="container">
        <div className="second-utp__title">
          <h2>
            <Text name="second_utp_title" itIsClassName="second-utp__title">
              {getItem("second_utp_title")}
            </Text>
          </h2>
        </div>
        <div className="row">
          {getItem("second_utp", "second_utp_list").map((item, index) => {
            return (
              <div className="second-utp__item col-md-12 col-lg-6" key={index}>
                <div className="second-utp__item-img">
                  <div className="second-utp__item-img-box">
                    <Image
                      layout="fill"
                      src={item.img.src}
                      alt={item.img.alt}
                      title={item.img.title}
                      itIsClassName="second-utp__item-img-box"
                      group={"second_utp_list"}
                      id={item.id}
                      priority
                    />
                  </div>
                </div>
                <div className="second-utp__description">
                  <div className="second-utp__text-1">
                    <h3>
                      <Text
                        group="second_utp_list"
                        itIsClassName="second-utp__text-1"
                        name="text1"
                        id={item.id}
                      >
                        {item.text1}
                      </Text>
                    </h3>
                  </div>
                  <div className="second-utp__text-2">
                    <p>
                      <Text
                        group="second_utp_list"
                        itIsClassName="second-utp__text-2"
                        name="text2"
                        id={item.id}
                      >
                        {item.text2}
                      </Text>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
