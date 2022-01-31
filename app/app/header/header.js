import { useContext } from "react";
import { AppContext } from "..";
import Image from "next/image";
import Text from "../../components/Text";
import { IoMdCall } from "react-icons/io";
import { BsTelegram, BsFacebook, BsTwitter } from "react-icons/bs";
export default function Header() {
  const { getItem } = useContext(AppContext);

  return (
    <div id="header" className="header">
      {/* mobile menu items */}
      <div className="header_nav__menu_mobile">
        {getItem("head_menu_title", "menu").map((menuItem, index) => (
          <div className="header_nav__menu_item" key={index}>
            <Text name={"head_menu_title"} group={"menu"}>
              {menuItem?.head_menu_title}
            </Text>
          </div>
        ))}
      </div>
      {/* header  */}
      <div className="header_navbar">
        {/* navbar logo */}
        <div className="header_navbar__logo">
          <div className="header_navbar__logo_box">
            <Image
              src={getItem("my_logo_img_url")}
              width={140}
              height={80}
              priority
            />
          </div>
          <div className="header_navbar__logo_text" data-name="my_logo_text">
            <Text name={"my_logo_text"}>{getItem("my_logo_text")}</Text>
          </div>
        </div>
        {/* /navbar logo */}
        <div className="header_navbar__nav">
          <div className="header_nav__box">
            {/* navbar menu */}
            <div className="header_nav__menu">
              {getItem("head_menu_title", "menu").map((menuItem, index) => (
                <div className="header_nav__menu_item" key={index}>
                  <Text name={"head_menu_title"} group={"menu"}>
                    {menuItem?.head_menu_title}
                  </Text>
                </div>
              ))}
            </div>

            {/* /navbar menu */}
            {/* navbar texts box */}
            <div className="header_nav__texts_box">
              <div className="header_nav__middle_text ">
                <Text name={"head_text_1"}>{getItem("head_text_1")}</Text>
              </div>
              <div className="header_nav__big_text">
                <Text name={"head_text_2"}>{getItem("head_text_2")}</Text>
              </div>
              <div className="header_nav__small_text">
                <Text name={"head_text_3"}>{getItem("head_text_3")}</Text>
              </div>
            </div>
            {/* /navbar texts box */}
          </div>
        </div>
        <div className="header_navbar__right-box">
          <div className="header_navbar__phone">
            <IoMdCall className="header_navbar__phone-icon" />
            <a href={`tel:+${getItem("head_phone_href")}`}>
              <Text name={"head_phone_ru"}>{getItem("head_phone_ru")}</Text>
            </a>
          </div>
          <div className="header_navbar__social-m">
            <div className="header_navbar__social-m-item telegram-icon">
              <a href={`tel:+${getItem("head_tg_href")}`}>
                <BsTelegram className="header_navbar__telegram-icon" />
              </a>
            </div>
            {/* BsTwitter */}
            <div className="header_navbar__social-m-item facebook-icon">
              <a href={`tel:+${getItem("head_fc_href")}`}>
                <BsFacebook className="header_navbar__facebook-icon" />
              </a>
            </div>

            <div className="header_navbar__social-m-item twitter-icon">
              <a href={`tel:+${getItem("head_fc_href")}`}>
                <BsTwitter className="header_navbar__twitter-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header_main">
        <div className="header_main__BGI">
          <Image
            width={1200}
            height={500}
            layout="responsive"
            objectFit="cover"
            src={getItem("head_img_url")}
            alt={getItem("head_img_alt")}
            title={getItem("head_img_title")}
            priority
          />
        </div>
        <div className="header_main__BGI_mobile">
          <Image
            width={350}
            height={290}
            layout="responsive"
            objectFit="cover"
            src={getItem("head_img_Mobile_url")}
            alt={getItem("head_img_alt")}
            title={getItem("head_img_title")}
            priority
          />
        </div>
      </div>
    </div>
  );
}
