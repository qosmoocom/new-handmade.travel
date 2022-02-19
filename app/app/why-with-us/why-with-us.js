import React, { useContext } from "react";
import { AppContext } from "..";
import Image from "../../components/Image";
import Text from "../../components/Text";
import Item from "../../components/Item";
export default function WhyWithUs() {
  const { getItem } = useContext(AppContext);
  return (
    <div id="why-wth-us">
      <div className="container">
        <div className="content">
          <div className="why-wth-us-title">
            <h1>
              <Text name="why_with_title">{getItem("why_with_title")}</Text>
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
  );
}
