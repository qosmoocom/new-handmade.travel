import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { AppContext } from "..";
import Image from "../../components/Image";
import Text from "../../components/Text";
export default function OtherTour() {
  const { getItem } = useContext(AppContext);
  const { asPath } = useRouter();
  const isAdmin = asPath.includes("admin/create-tour");

  const [editItems, setEditItems] = useState(
    "_"
      .repeat(getItem("otherData", "otherData").length)
      .split("")
      .map((_) => false)
  );

  const changeHandler = (event, id) => {
    setEditItems((prev) =>
      prev.map((_, index) => id === index && event.target.checked)
    );
  };

  console.log(editItems);
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
            if (!editItems[index]) {
              return (
                <a
                  key={index}
                  href={item.other_tours_link}
                  className="col-12 col-sm-12 col-md-6 col-lg-3"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <div className={`item ${isAdmin ? "admin" : ""}`}>
                    <div className="item-img">
                      <Image
                        layout="fill"
                        src={item.img.src}
                        alt={item.img.alt}
                        title={item.img.title}
                        group={"otherData"}
                        id={index}
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
                    <article className="checked">
                      <input
                        type="checkbox"
                        checked={editItems[index]}
                        onChange={(event) => changeHandler(event, index)}
                      />
                    </article>
                  </div>
                </a>
              );
            } else {
              return (
                <div
                  key={index}
                  href={item.other_tours_link}
                  className="col-12 col-sm-12 col-md-6 col-lg-3"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <div className={`item ${isAdmin ? "admin" : ""}`}>
                    <div className="item-img">
                      <Image
                        layout="fill"
                        src={item.img.src}
                        alt={item.img.alt}
                        title={item.img.title}
                        group={"otherData"}
                        id={index}
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
                    <article className="checked">
                      <input
                        type="checkbox"
                        checked={editItems[index]}
                        onChange={(event) => changeHandler(event, index)}
                      />
                      <Text
                        group="otherData"
                        id={index}
                        itIsClassName="item-info br"
                        name="other_tours_link"
                      >
                        link
                      </Text>
                    </article>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
