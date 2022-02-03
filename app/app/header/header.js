import Img from "../../components/Image";
import Link from "../../components/Link";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "..";
import Image from "next/image";
import Text from "../../components/Text";
import { IoMdCall } from "react-icons/io";
import { BsTelegram, BsFacebook } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const { getItem } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [logoWidth, setLogoWidth] = useState(150);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setLogoWidth(window.outerWidth > 768 ? 200 : 150);
    });
  }, []);

  // componentDidMount
  useEffect(() => {
    if (parseInt(window.scrollY)) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, []);

  // in scrolling
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (parseInt(window.scrollY)) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  const openLeftMenuHandler = () => setIsOpen(true);
  const closeLeftMenuHandler = () => setIsOpen(false);
  return (
    <div id="header" className="header">
      {/* fixed header in scroll */}
      <div className={`header-fixed ${scroll ? " active" : ""}`}>
        <div className="container">
          <div className={`fixed-container`}>
            {/* in mobile*/}
            <div className="menu-icon__in-fixed">
              <AiOutlineMenu
                className="menu-icon"
                onClick={openLeftMenuHandler}
              />
            </div>
            {/* ------ */}

            {/* logo */}
            <div className="logo-section">
              <div className="logo-img">
                <Img
                  src={getItem("logofixed_img")}
                  width={45}
                  height={45}
                  priority
                  objectFit="contain"
                />
              </div>
              <div className="logo-text">{getItem("logofixed_text")}</div>
            </div>
            {/* ---------- */}
            {/* menu */}
            <div className="menu-section">
              {getItem("head_menu_title", "menu").map((menuItem, index) => (
                <div className="header_nav_menu_item_mobile" key={index}>
                  <Text name={"head_menu_title"} group={"menu"} href="#home">
                    {menuItem?.head_menu_title}
                  </Text>
                </div>
              ))}
            </div>
            {/* ---------- */}
            {/* right-section or to-book-btn and tel-me-btn */}
            <button className="to-book-btn">{getItem("to_book_btn")}</button>
            <a
              className="tel-me-btn"
              href={`tel:+${getItem("head_phone_href")}`}
            >
              <IoMdCall className="icon" />{" "}
              <Text name={"head_phone_ru"}>{getItem("head_phone_ru")}</Text>
            </a>
            {/* ---------- */}
          </div>
        </div>
      </div>
      {/* /fixed header in scroll */}

      {/* mobile menu  */}
      <AiOutlineMenu
        className="mobile-menu-icon"
        onClick={openLeftMenuHandler}
      />
      <div className={`mobile-left-menu-wrapper ${isOpen ? "active" : ""}`}>
        <span className="mobile-after-bg" onClick={closeLeftMenuHandler} />

        <div className="mobile-menu-open">
          <div className="btn-logo-and-mobile">
            <div className="close-btn">
              <AiOutlineClose
                className="close-btn-icon"
                onClick={closeLeftMenuHandler}
              />
            </div>

            <div className="header_navbar_logo_mobile">
              <div className="header_navbar_logo_box_mobile">
                <Img
                  src={getItem("my_logo_img_url")}
                  width={150}
                  height={150}
                  priority
                  objectFit="contain"
                />
              </div>
              <div
                className="header_navbar_logo_text_mobile"
                data-name="my_logo_text"
              >
                <Text name={"my_logo_text"}>{getItem("my_logo_text")}</Text>
              </div>
            </div>
          </div>

          <div className="header_nav_menu_mobile">
            {getItem("head_menu_title", "menu").map((menuItem, index) => (
              <div className="header_nav_menu_item_mobile" key={index}>
                <Text name={"head_menu_title"} group={"menu"} href="#home">
                  {menuItem?.head_menu_title}
                </Text>
              </div>
            ))}
          </div>

          <div className="header_navbar_social-m">
            <div className="header_navbar_social-m-item telegram-icon">
              <a href={`${getItem("head_tg_href")}`}>
                <BsTelegram className="header_navbar_telegram-icon" />
              </a>
            </div>
            {/* BsTwitter */}
            <div className="header_navbar_social-m-item whatsapp-icon">
              <a href={`${getItem("head_wt_href")}`}>
                <IoLogoWhatsapp className="header_navbar_whatsapp-icon" />
              </a>
            </div>

            <div className="header_navbar_social-m-item facebook-icon">
              <a href={`${getItem("head_fc_href")}`}>
                <BsFacebook className="header_navbar_facebook-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* header  */}
      <div className="container">
        <div className="header_navbar">
          {/* navbar logo */}
          <div className="header_navbar_logo">
            <div className="header_navbar_logo_box">
              <Img
                src={getItem("my_logo_img_url")}
                width={140}
                height={140}
                priority
                objectFit="contain"
              />
            </div>

            <div className="header_navbar_logo_text" data-name="my_logo_text">
              <Text name={"my_logo_text"}>{getItem("my_logo_text")}</Text>
            </div>
          </div>
          {/* /navbar logo */}

          <div className="header_nav">
            <div className="header_nav_box">
              {/* navbar menu */}
              <div className="header_nav_menu">
                {getItem("head_menu_title", "menu").map((menuItem, index) => (
                  <div className="header_nav_menu_item" key={index}>
                    <Text href="#home" name={"head_menu_title"} group={"menu"}>
                      {menuItem?.head_menu_title}
                    </Text>
                  </div>
                ))}
              </div>

              {/* /navbar menu */}
              {/* navbar texts box */}
              <div className="header_texts_box">
                <h3 className="header_middle_text">
                  <Text name={"head_text_1"}>{getItem("head_text_1")}</Text>
                </h3>
                <h2 className="header_big_text">
                  <Text name={"head_text_2"}>{getItem("head_text_2")}</Text>
                </h2>
                <h4 className="header_small_text">
                  <Text name={"head_text_3"}>{getItem("head_text_3")}</Text>
                </h4>
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
                <a href={`${getItem("head_tg_href")}`}>
                  <BsTelegram className="header_navbar_telegram-icon" />
                </a>
              </div>
              {/* BsTwitter */}
              <div className="header_navbar_social-m-item whatsapp-icon">
                <a href={`${getItem("head_wt_href")}`}>
                  <IoLogoWhatsapp className="header_navbar_whatsapp-icon" />
                </a>
              </div>

              <div className="header_navbar_social-m-item facebook-icon">
                <a href={`${getItem("head_fc_href")}`}>
                  <BsFacebook className="header_navbar_facebook-icon" />
                </a>
              </div>
            </div>
          </div>
          {/* /navbar right items */}

          {/* btn-logo-mobile */}
          <div className="btn-logo-and-mobile">
            <div className="header_navbar_btn_mobile">
              <button>Заказать звонок</button>
            </div>
            <div className="header_navbar_logo_mobile">
              <div className="header_navbar_logo_box">
                <Img
                  src={getItem("my_logo_img_url")}
                  width={logoWidth}
                  height={logoWidth}
                  priority
                  objectFit="contain"
                />
              </div>
              <div className="header_navbar_logo_text" data-name="my_logo_text">
                <Text name={"my_logo_text"}>{getItem("my_logo_text")}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_main">
        <div className="header_main_bgi">
          <Img
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
          <Img
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
      <div className="header_footer">
        <div className="container">
          {/* getItem("head_img_url") */}
          <div className="header_bread">
            <Link href={"/"}>{getItem("bread_crumbs")}</Link>

            <Link href={"/gastro"}>{getItem("bread_crumbs_gastro")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
