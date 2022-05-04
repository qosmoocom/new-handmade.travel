import React, { useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AppContext } from ".";
import Text from "../components/Text";
const Wrapper = styled.div`
  padding: 20px;
  padding-bottom: 10rem;
`;

export default function Keyword() {
  const { getItem } = useContext(AppContext);
  const { isEdit: isAdmin } = useSelector((st) => st.admin);
  if (isAdmin)
    return (
      <Wrapper>
        <ul>
          <li>
            title: <Text name="app_title">{getItem("app_title")}</Text>
          </li>
          <li>
            description:{" "}
            <Text name="app_description">{getItem("app_description")}</Text>
          </li>
          <li>
            keywords: <Text name="app_keywords">{getItem("app_keywords")}</Text>
          </li>
          <li>
            yandex metirka ID:{" "}
            <Text name="app_yandex_metirka_id">
              {getItem("app_yandex_metirka_id")}
            </Text>
          </li>
          <li>
            extra money:{" "}
            <ul style={{ paddingLeft: "1rem" }}>
              {getItem("rate_name_data", "rate_name_data").map(
                (item, index) => {
                  if (index <= 1) {
                    return (
                      <li key={index}>
                        {item.rate_name_head}:{" "}
                        <Text name="app_extra_money_first">
                          {getItem("app_extra_money_first")}
                        </Text>
                      </li>
                    );
                  }
                  return (
                    <li key={index}>
                      {item.rate_name_head}:{" "}
                      <Text name="app_extra_money_second">
                        {getItem("app_extra_money_second")}
                      </Text>
                    </li>
                  );
                }
              )}
            </ul>
          </li>
          <li>
            {" "}
            price type:{" "}
            <b>
              <Text name="app_price_type">{getItem("app_price_type")}</Text>
            </b>{" "}
            <br />
            example {"=>  "}
            {["EUR", "USD", "RUB"].map((val, index) =>
              getItem("app_price_type") === val ? (
                <b key={index}>
                  {val}
                  {"  "}
                </b>
              ) : (
                <s key={index}>
                  {val}
                  {"  "}
                </s>
              )
            )}
          </li>
        </ul>
      </Wrapper>
    );

  return <div />;
}
