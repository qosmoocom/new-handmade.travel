import React, { useContext } from "react";
import { AppContext } from "..";
import Image from "../../components/Image";
import Item from "../../components/Item";
import Text from "../../components/Text";
import Link from "next/link";
export default function OtherTour() {
  const { getItem } = useContext(AppContext);
  return (
    <div id="outher-tour">
      <div className="container">
        <h3 className="outer-title">
          <Text name="other_tours_title">{getItem("other_tours_title")}</Text>
        </h3>

        <h4 className="outer-info">
          <Text name="other_tours_info">{getItem("other_tours_info")}</Text>
        </h4>
        <div className="row">
          {getItem("otherData", "otherData").map((item, index) => {
            return (
              <Link key={index} href={item.other_tours_link}>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                  <div className="item">
                    <div className="item-img">
                      <Image
                        layout="fill"
                        src={item.img.src}
                        alt={item.img.alt}
                        title={item.img.title}
                      />
                    </div>

                    <div className="item-title">
                      <h2>
                        <Text
                          group="otherData"
                          id={index}
                          itIsClassName="item-title"
                          name="other_tours_name"
                        >
                          {item.other_tours_name}
                        </Text>
                      </h2>
                    </div>
                    <div className="item-info">
                      <div className="br">
                        <Text
                          group="otherData"
                          id={index}
                          itIsClassName="item-info br"
                          name="other_tours_br1"
                        >
                          {item.other_tours_br1}
                        </Text>
                      </div>
                      <div className="br">
                        <Text
                          group="otherData"
                          id={index}
                          itIsClassName="item-info br"
                          name="other_tours_br2"
                        >
                          {item.other_tours_br2}
                        </Text>
                      </div>
                      <div className="br">
                        <b>
                          <Text
                            group="otherData"
                            id={index}
                            itIsClassName="item-info br"
                            name="other_tours_br3"
                          >
                            {item.other_tours_br3}
                          </Text>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
