import React, { useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AppContext } from ".";
import Text from "../components/Text";
import Image from "../components/Image";
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
            link for Privacy Policy:{" "}
            <Text name="footer_col_srteficat_href">
              {getItem("footer_col_srteficat_href")}
            </Text>
          </li>
          <li>
            link for Public Offering:{" "}
            <Text name="footer_modal_1_href">
              {getItem("footer_modal_1_href")}
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
        <div className="footer-lid-info">
          <div>Информации для Лид-магнита </div>
          <ul>
              <li>
                Ссылка на файл: <Text name="lid_file_url">{getItem("lid_file_url")}</Text>
              </li>
              <li>
                Текст окна оповещния после скачивания файла: <Text name="lid_file_thank">{getItem("lid_file_thank")}</Text>
              </li>
              <li>
                Заголовок окна: <Text name="modal_5_title">{getItem("modal_5_title")}</Text>
              </li>
              <li>
                Поля имя: <Text name="modal_5_name">{getItem("modal_5_name")}</Text>
              </li>
              <li>
                Поля e-mail: <Text name="modal_5_mail">{getItem("modal_5_mail")}</Text>
              </li>
              <li>
                Поля телефон: <Text name="modal_5_phone">{getItem("modal_5_phone")}</Text>
              </li>
              <li>
                Заголовок кнопки: <Text name="modal_5_btn">{getItem("modal_5_btn")}</Text>
              </li>
              <li>
                Текст о соглашение: <Text name="modal_5_description_1">{getItem("modal_5_description_1")}</Text>
              </li>
              <li>
                Информация для главной страницы - "для каталога"
              </li>
              <li>
                Заголовок тура: <Text name="index_page_tour_title">{getItem("index_page_tour_title")}</Text>
              </li>
              <li>
                Описание тура: <Text name="index_page_tour_text">{getItem("index_page_tour_text")}</Text>
              </li>
              <li>
                Цена тура - от: <Text name="tour_start_price">{getItem("tour_start_price")}</Text>
              </li>
              <li>
                Количество дней в туре : <Text name="tour_days_col">{getItem("tour_days_col")}</Text>
              </li>
              <li>
                <div>Изображение тура для главной страницы</div>
                <div className="constructor_img_box">
                  <Image
                      layout="fill"
                      objectFit="cover"
                      src={getItem("index_page_img_url")}
                      alt={getItem("index_page_img_alt")}
                      title={getItem("index_page_img_title")}
                      srcDataName={"index_page_img_url"}
                      altDataName={"index_page_img_alt"}
                      titleDataName={"index_page_img_title"}
                      // itIsClassName="image-blog"
                      // sectionName={val.name}
                    />
                </div>
                  
              </li>
          </ul>
        </div>
          {/* <li></li> */}
        {/* <div className="footer-lid-info">Информация для лид магнита</div>
        <div className="footer-lid-box"> 
          <ul>
              <li>
                Лид жирный заголовок: <Text name="lid_title_span">{getItem("lid_title_span")}</Text>
              </li>
              <li>
                Лид простой заголовок: <Text name="lid_title_text">{getItem("lid_title_text")}</Text>
              </li>
              <li>
                Лид второй заголовок: <Text name="lid_info">{getItem("lid_info")}</Text>
              </li>
              <li>
                Лид первый текст в списке: <Text name="lid_list_1">{getItem("lid_list_1")}</Text>
              </li>
              <li>
                Лид второй текст в списке: <Text name="lid_list_2">{getItem("lid_list_2")}</Text>
              </li>
              <li>
                Лид третий текст в списке: <Text name="lid_list_2">{getItem("lid_list_3")}</Text>
              </li>
          </ul>
          <ul>
              <li>
                Заголовок окна: <Text name="modal_5_title">{getItem("modal_5_title")}</Text>
              </li>
              <li>
                Поля имя: <Text name="modal_5_name">{getItem("modal_5_name")}</Text>
              </li>
              <li>
                Поля e-mail: <Text name="modal_5_mail">{getItem("modal_5_mail")}</Text>
              </li>
              <li>
                Поля телефон: <Text name="modal_5_phone">{getItem("modal_5_phone")}</Text>
              </li>
              <li>
                Заголовок кнопки: <Text name="modal_5_btn">{getItem("modal_5_btn")}</Text>
              </li>
              <li>
                Текст о соглашение: <Text name="modal_5_description_1">{getItem("modal_5_description_1")}</Text>
              </li>
          </ul>
        </div> */}


          
        
      </Wrapper>
    );

  return <div />;
}
