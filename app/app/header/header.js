import { useContext } from "react";
import { AppContext } from "..";
import Image from "next/image";
import Text from "../../components/Text";
import { IoMdCall } from "react-icons/io";
import { BsTelegram, BsFacebook, BsTwitter } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const { getItem } = useContext(AppContext);

  return (
    <div id="header" className="header">
      {/* mobile menu  */}
      <AiOutlineMenu className="mobile-menu-icon" />

      <div className="header_nav_menu_mobile">
        {getItem("head_menu_title", "menu").map((menuItem, index) => (
          <div className="header_nav_menu_item" key={index}>
            <Text name={"head_menu_title"} group={"menu"}>
              {menuItem?.head_menu_title}
            </Text>
          </div>
        ))}
      </div>
      {/* mobile menu  */}
      {/* header  */}
      <div className="header_navbar">
        {/* navbar logo */}
        <div className="header_navbar_logo">
          <div className="header_navbar_logo_box">
            <Image
              src={getItem("my_logo_img_url")}
              width={140}
              height={80}
              priority
            />
          </div>
          <div className="header_navbar_logo_text" data-name="my_logo_text">
            <Text name={"my_logo_text"}>{getItem("my_logo_text")}</Text>
          </div>
        </div>
        {/* /navbar logo */}
        <div className="header_navbar">
          <div className="header_nav_box">
            {/* navbar menu */}
            <div className="header_nav_menu">
              {getItem("head_menu_title", "menu").map((menuItem, index) => (
                <div className="header_nav_menu_item" key={index}>
                  <Text name={"head_menu_title"} group={"menu"}>
                    {menuItem?.head_menu_title}
                  </Text>
                </div>
              ))}
            </div>

            {/* /navbar menu */}
            {/* navbar texts box */}
            <div className="header_texts_box">
              <div className="header_middle_text ">
                <Text name={"head_text_1"}>{getItem("head_text_1")}</Text>
              </div>
              <div className="header_big_text">
                <Text name={"head_text_2"}>{getItem("head_text_2")}</Text>
              </div>
              <div className="header_small_text">
                <Text name={"head_text_3"}>{getItem("head_text_3")}</Text>
              </div>
            </div>
            {/* /navbar texts box */}
          </div>
        </div>
        {/* navbar right items */}
        <div className="header_navbar_right-box">
          <div className="header_navbar_phone">
            <IoMdCall className="header_navbar_phone-icon" />
            <a href={`tel:+${getItem("head_phone_href")}`}>
              <Text name={"head_phone_ru"}>{getItem("head_phone_ru")}</Text>
            </a>
          </div>
          <div className="header_navbar_social-m">
            <div className="header_navbar_social-m-item telegram-icon">
              <a href={`tel:+${getItem("head_tg_href")}`}>
                <BsTelegram className="header_navbar_telegram-icon" />
              </a>
            </div>
            {/* BsTwitter */}
            <div className="header_navbar_social-m-item facebook-icon">
              <a href={`tel:+${getItem("head_fc_href")}`}>
                <BsFacebook className="header_navbar_facebook-icon" />
              </a>
            </div>

            <div className="header_navbar_social-m-item twitter-icon">
              <a href={`tel:+${getItem("head_fc_href")}`}>
                <BsTwitter className="header_navbar_twitter-icon" />
              </a>
            </div>
          </div>
        </div>
        {/* /navbar right items */}
      </div>
      <div className="header_main">
        <div className="header_main_bgi">
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
        <div className="header_main_bgi_mobile">
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
