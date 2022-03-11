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
        </ul>
      </Wrapper>
    );

  return <div />;
}
