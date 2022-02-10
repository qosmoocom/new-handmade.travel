import React, { useContext } from "react";
import { AppContext } from "..";
// import Image from "next/image";
import Text from "../../components/Text";
import Image from "../../components/Image";
export default function FirstUtp() {
  const { getItem } = useContext(AppContext);
  return (
    <div id="first-utp">
      <div className="container">
        <div className="row">
          {getItem("first_utp_item", "first_utp").map((item) => {
            return (
              <div
                key={item.id}
                className="first-utp-item col-12 col-sm-12 col-md-6"
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
                      id={item.id}
                    />
                  </div>
                </div>
                <div className="first-utp-text">
                  <h2>
                    <Text
                      group="first_utp"
                      name="text1"
                      itIsClassName="first-utp-text"
                      id={item.id}
                    >
                      {item.text1}
                    </Text>
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
