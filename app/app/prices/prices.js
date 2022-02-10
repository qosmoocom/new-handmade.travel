import React, { useContext } from "react";
import { AppContext } from "..";
import Item from "../../components/Item";
import Text from "../../components/Text";
import { FaPlane } from "react-icons/fa";
export default function Price() {
  const { getItem } = useContext(AppContext);
  return (
    <div id="price">
      <div className="container">
        <div className="content">
          <h3 className="price-title">
            <Text name="prices_title" itIsClassName="price-title">
              {getItem("prices_title")}
            </Text>
          </h3>
          <p className="price-info">
            <Text name="prices_info" itIsClassName="prices_info">
              {getItem("prices_info")}
            </Text>
          </p>
          <div className="price-list">
            {getItem("prices_data", "prices_data").map((item, index) => {
              return (
                <Item key={index} className="price-list-item">
                  <p>
                    <b>
                      <Text>{item.date}</Text>
                    </b>
                    <Text>{item.plice}</Text>
                  </p>
                </Item>
              );
            })}
          </div>
          <div className="plane">
            <FaPlane className="plane-btn" />
          </div>
        </div>
      </div>
    </div>
  );
}
