import SectionActive from "../../components/SectionActive";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "..";
import { IoMdCall } from "react-icons/io";
import { BsTelegram, BsFacebook } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

// components
import Text from "../../components/Text";
import Link from "../../components/Link";
import Image from "../../components/Image";

export default function Header() {
  const { getItem } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [logoWidth, setLogoWidth] = useState(150);
  const [scroll, setScroll] = useState(false);

  const dispatch = useDispatch();

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

  // modal 1 opened
  const handleOnModal1 = () => {
    const payload = {
      currentModal: "MODAL_1",
      actionModal: "ACTION 1",
    };
    dispatch({ type: "MODAL_OPEN", payload });
  };

  // modal 2 opened
  const handleOnModal2 = () => {
    const payload = {
      currentModal: "MODAL_3",
      actionModal: "ACTION 2",
    };
    dispatch({ type: "MODAL_OPEN", payload });
  };

  const openLeftMenuHandler = () => setIsOpen(true);
  const closeLeftMenuHandler = () => setIsOpen(false);

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "header"
  );

  const bronBtnActive = useSelector(
    (state) => state.admin.app_sections_active
  ).find((i) => i.name === "rate").isActive;
  const { isEdit: thisIsNotClient } = useSelector((st) => st.admin);

  const bgYellow = {
    background: val.isActive ? null : "yellow",
    opacity: val.isActive ? null : "0.2",
    cursor: val.isActive ? null : "not-allowed",
  };

  if (!thisIsNotClient && !val.isActive) return null;
  // component active no active
  useEffect(() => {
    let text1 = document.getElementById("header_middle_text");
    let text2 = document.getElementById("header_big_text");
    let text3 = document.getElementById("header_small_text");
    if (319 < window.innerWidth && window.innerWidth < 576) {
      text1.style.fontSize = (18 / getItem("head_text_1").length) * 10 + "vw";
      text2.style.fontSize = (18 / getItem("head_text_2").length) * 10 + "vw";
      text3.style.fontSize = (18 / getItem("head_text_3").length) * 20 + "vw";
    }
    if (576 <= window.innerWidth && window.innerWidth < 700) {
      text1.style.fontSize = (18 / getItem("head_text_1").length) * 8 + "vw";
      text2.style.fontSize = (18 / getItem("head_text_2").length) * 8 + "vw";
      text3.style.fontSize = (18 / getItem("head_text_3").length) * 17 + "vw";
    }
    if (700 <= window.innerWidth && window.innerWidth < 992) {
      text1.style.fontSize = (18 / getItem("head_text_1").length) * 7 + "vw";
      text2.style.fontSize = (18 / getItem("head_text_2").length) * 7 + "vw";
      text3.style.fontSize = (18 / getItem("head_text_3").length) * 15 + "vw";
    }
    if (992 <= window.innerWidth && window.innerWidth < 1100) {
      text1.style.fontSize = (18 / getItem("head_text_1").length) * 3 + "vw";
      text1.style.color = "black";
      text2.style.fontSize = `${(18 / getItem("head_text_2").length) * 9}vw`;
    }
    if (1100 <= window.innerWidth && window.innerWidth < 1650) {
      text1.style.fontSize = (18 / getItem("head_text_1").length) * 5.5 + "vw";
      text2.style.fontSize = (18 / getItem("head_text_2").length) * 5 + "vw";
    }
    if (1650 <= window.innerWidth && window.innerWidth < 1900) {
      text1.style.fontSize = (18 / getItem("head_text_1").length) * 4.6 + "vw";
      text2.style.fontSize = (18 / getItem("head_text_2").length) * 4.6 + "vw";
    }
    if (1900 <= window.innerWidth && window.innerWidth < 2300) {
      text1.style.fontSize = (18 / getItem("head_text_1").length) * 4 + "vw";
      text2.style.fontSize = (18 / getItem("head_text_2").length) * 4 + "vw";
    }
    if (2300 <= window.innerWidth) {
      text1.style.fontSize = (18 / getItem("head_text_1").length) * 3 + "vw";
      text2.style.fontSize = (18 / getItem("head_text_2").length) * 3.2 + "vw";
    }
    console.log(text1);
    console.log(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <>
      <SectionActive name={val.name} />
      <div id="header" className="header" style={bgYellow}>
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
                  <Image
                    priority
                    // width={45}
                    // height={45}
                    layout="fill"
                    objectFit="contain"
                    itIsClassName="logo-img"
                    src={getItem("logofixed_img_src")}
                    srcDataName="logofixed_img_src"
                    alt={getItem("logofixed_img_src")}
                    altDataName="logofixed_img_alt"
                    title={getItem("logofixed_img_title")}
                    titleDataName="logofixed_img_title"
                    sectionName={val.name}
                  />
                </div>
                <div className="logo-text">
                  <Text name="logofixed_text" itIsClassName="logo-text">
                    {getItem("logofixed_text")}
                  </Text>
                </div>
              </div>
              {/* ---------- */}
              {/* menu */}
              <div className="menu-section">
                {getItem("head_menu_title", "menu").map((menuItem, index) => (
                  <div className="header_nav_menu_item_mobile" key={index}>
                    <Link
                      group={"menu"}
                      index={index}
                      name={"head_menu_title"}
                      href={menuItem.head_menu_href}
                      hrefName={"head_menu_href"}
                      itIsClassName="header_nav_menu_item_mobile"
                    >
                      {menuItem?.head_menu_title}
                    </Link>
                  </div>
                ))}
              </div>
              {/* ---------- */}
              {/* right-section or to-book-btn and tel-me-btn */}
              {bronBtnActive && (
                <button
                  style={{ cursor: "pointer" }}
                  className="to-book-btn"
                  onClick={handleOnModal2}
                >
                  <Text name="to_book_btn" itIsClassName="to-book-btn">
                    {getItem("to_book_btn")}
                  </Text>
                </button>
              )}

              <Link
                className="tel-me-btn"
                href={getItem("head_phone_href")}
                hrefName="head_phone_href"
                name="head_phone_ru"
                itIsClassName="tel-me-btn"
              >
                <IoMdCall className="icon" /> {getItem("head_phone_ru")}
              </Link>
              {/* ---------- */}
            </div>
          </div>
        </div>
        {/* /fixed header in scroll */}

        {/* mobile menu  */}
        <div className="header_btns">
          <AiOutlineMenu
            className="mobile-menu-icon"
            onClick={openLeftMenuHandler}
          />
          <div className="header_navbar_social-m">
            <div className="header_navbar_social-m-item telegram-icon">
              <Link
                href={`${getItem("head_tg_href")}`}
                hrefName="head_tg_href"
                itIsClassName="header_navbar_social-m-item telegram-icon"
              >
                <BsTelegram className="header_navbar_telegram-icon" />
              </Link>
            </div>
            {/* BsTwitter */}
            <div className="header_navbar_social-m-item whatsapp-icon">
              <Link
                href={`${getItem("head_wt_href")}`}
                hrefName="head_wt_href"
                itIsClassName="header_navbar_social-m-item whatsapp-icon"
              >
                <IoLogoWhatsapp className="header_navbar_whatsapp-icon" />
              </Link>
            </div>

            <div className="header_navbar_social-m-item facebook-icon">
              <Link
                href={`${getItem("head_fc_href")}`}
                hrefName="head_fc_href"
                itIsClassName="header_navbar_social-m-item facebook-icon"
              >
                <BsFacebook className="header_navbar_facebook-icon" />
              </Link>
            </div>
          </div>
        </div>
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
                  <Image
                    priority
                    // width={150}
                    // height={150}
                    objectFit="contain"
                    layout="fill"
                    itIsClassName="header_navbar_logo_box_mobile"
                    src={getItem("my_logo_img_url")}
                    srcDataName="my_logo_img_url"
                    alt={getItem("logofixed_img_alt")}
                    altDataName={"logofixed_img_alt"}
                    title={getItem("logofixed_img_title")}
                    titleDataName={"logofixed_img_title"}
                    sectionName={val.name}
                  />
                </div>
                <div
                  className="header_navbar_logo_text_mobile"
                  data-name="my_logo_text"
                >
                  <Text
                    name={"my_logo_text"}
                    itIsClassName="header_navbar_logo_text_mobile"
                  >
                    {getItem("my_logo_text")}
                  </Text>
                </div>
              </div>
            </div>

            <div className="header_nav_menu_mobile">
              {getItem("head_menu_title", "menu").map((menuItem, index) => (
                <div className="header_nav_menu_item_mobile" key={index}>
                  <Link
                    group={"menu"}
                    index={index}
                    href={menuItem.head_menu_href}
                    hrefName={"head_menu_href"}
                    name={"head_menu_title"}
                    itIsClassName="header_nav_menu_item_mobile"
                  >
                    {menuItem?.head_menu_title}
                  </Link>
                </div>
              ))}
            </div>

            <div className="header_navbar_social-m">
              <div className="header_navbar_social-m-item telegram-icon">
                <Link
                  href={`${getItem("head_tg_href")}`}
                  hrefName={"head_tg_href"}
                  itIsClassName="header_navbar_social-m-item telegram-icon"
                >
                  <BsTelegram className="header_navbar_telegram-icon" />
                </Link>
              </div>
              {/* BsTwitter */}
              <div className="header_navbar_social-m-item whatsapp-icon">
                <Link
                  href={`${getItem("head_wt_href")}`}
                  hrefName="head_wt_href"
                  itIsClassName="header_navbar_social-m-item whatsapp-icon"
                >
                  <IoLogoWhatsapp className="header_navbar_whatsapp-icon" />
                </Link>
              </div>

              <div className="header_navbar_social-m-item facebook-icon">
                <Link
                  href={`${getItem("head_fc_href")}`}
                  hrefName="head_fc_href"
                  itIsClassName="header_navbar_social-m-item facebook-icon"
                >
                  <BsFacebook className="header_navbar_facebook-icon" />
                </Link>
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
                <Image
                  priority
                  // width={140}
                  // height={140}
                  layout="fill"
                  objectFit="contain"
                  itIsClassName="header_navbar_logo_box"
                  src={getItem("my_logo_img_url")}
                  srcDataName={"my_logo_img_url"}
                  title={getItem("logofixed_img_title")}
                  titleDataName={"logofixed_img_title"}
                  alt={getItem("logofixed_img_alt")}
                  altDataName={"logofixed_img_alt"}
                  sectionName={val.name}
                />
              </div>

              <div className="header_navbar_logo_text" data-name="my_logo_text">
                <Text
                  name={"my_logo_text"}
                  itIsClassName="header_navbar_logo_text"
                >
                  {getItem("my_logo_text")}
                </Text>
              </div>
            </div>
            {/* /navbar logo */}

            <div className="header_nav">
              <div className="header_nav_box">
                {/* navbar menu */}
                <div className="header_nav_menu">
                  {getItem("head_menu_title", "menu").map((menuItem, index) => (
                    <div className="header_nav_menu_item" key={index}>
                      <Link
                        index={index}
                        group={"menu"}
                        href={menuItem?.head_menu_href}
                        hrefName={"head_menu_href"}
                        name={"head_menu_title"}
                        itIsClassName="header_nav_menu_item"
                      >
                        {menuItem?.head_menu_title}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* /navbar menu */}
                {/* navbar texts box */}
                <div className="header_texts_box">
                  <h3 className="header_middle_text" id="header_middle_text">
                    <Text
                      name={"head_text_1"}
                      itIsClassName="header_middle_text"
                    >
                      {getItem("head_text_1")}
                    </Text>
                  </h3>
                  <h2 className="header_big_text" id="header_big_text">
                    <Text name={"head_text_2"} itIsClassName="header_big_text">
                      {getItem("head_text_2")}
                    </Text>
                  </h2>
                  <h4 className="header_small_text" id="header_small_text">
                    <Text
                      name={"head_text_3"}
                      itIsClassName="header_small_text"
                    >
                      {getItem("head_text_3")}
                    </Text>
                  </h4>
                </div>
                {/* /navbar texts box */}
              </div>
            </div>
            <div className="header_icons_and_btns">
              {/* navbar right items */}
              <div className="header_navbar_right-box">
                <div className="header_navbar_phone">
                  <IoMdCall className="header_navbar_phone-icon" />
                  <Link
                    name="head_phone_ru"
                    href={`${getItem("head_phone_href")}`}
                    hrefName={"head_phone_href"}
                    itIsClassName="header_navbar_phone"
                  >
                    {getItem("head_phone_ru")}
                  </Link>
                </div>
                <div className="header_navbar_social-m big">
                  <div className="header_navbar_social-m-item telegram-icon">
                    <Link
                      href={`${getItem("head_tg_href")}`}
                      hrefName="head_tg_href"
                      itIsClassName="header_navbar_social-m-item telegram-icon"
                    >
                      <BsTelegram className="header_navbar_telegram-icon" />
                    </Link>
                  </div>
                  {/* BsTwitter */}
                  <div className="header_navbar_social-m-item whatsapp-icon">
                    <Link
                      href={`${getItem("head_wt_href")}`}
                      hrefName="head_wt_href"
                      itIsClassName="header_navbar_social-m-item whatsapp-icon"
                    >
                      <IoLogoWhatsapp className="header_navbar_whatsapp-icon" />
                    </Link>
                  </div>

                  <div className="header_navbar_social-m-item facebook-icon">
                    <Link
                      href={`${getItem("head_fc_href")}`}
                      hrefName="head_fc_href"
                      itIsClassName="header_navbar_social-m-item facebook-icon"
                    >
                      <BsFacebook className="header_navbar_facebook-icon" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* /navbar right items */}

              {/* btn-logo-mobile */}
              <div className="btn-logo-and-mobile">
                <div className="header_navbar_btn_mobile">
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={handleOnModal1}
                  >
                    <Text
                      name="head_btn_call"
                      itIsClassName="header_navbar_btn_mobile"
                    >
                      {getItem("head_btn_call")}
                    </Text>
                  </button>
                </div>
                <div className="header_navbar_logo_mobile">
                  <div className="header_navbar_logo_box">
                    <Image
                      priority
                      // width={logoWidth}
                      // height={logoWidth}
                      objectFit="contain"
                      layout="fill"
                      itIsClassName="header_navbar_logo_box"
                      srcDataName={"my_logo_img_url"}
                      src={getItem("my_logo_img_url")}
                      altDataName={"logofixed_img_alt"}
                      alt={getItem("logofixed_img_alt")}
                      titleDataName={"logofixed_img_title"}
                      title={getItem("logofixed_img_title")}
                      sectionName={val.name}
                    />
                  </div>
                  <div
                    className="header_navbar_logo_text"
                    data-name="my_logo_text"
                  >
                    <Text
                      name={"my_logo_text"}
                      itIsClassName="header_navbar_logo_text"
                    >
                      {getItem("my_logo_text")}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_main">
          <div className="header_main_bgi">
            <Image
              priority
              width={1200}
              height={500}
              objectFit="cover"
              layout="responsive"
              itIsClassName="header_main_bgi"
              src={getItem("head_img_url")}
              srcDataName={"head_img_url"}
              alt={getItem("head_img_alt")}
              altDataName={"head_img_alt"}
              title={getItem("head_img_title")}
              titleDataName={"head_img_title"}
              sectionName={val.name}
            />
          </div>
          <div className="header_main_bgi_mobile">
            <Image
              priority
              width={350}
              height={290}
              objectFit="cover"
              layout="responsive"
              itIsClassName="header_main_bgi_mobile"
              src={getItem("head_img_Mobile_url")}
              srcDataName={"head_img_Mobile_url"}
              alt={getItem("head_img_alt")}
              altDataName={"head_img_alt"}
              title={getItem("head_img_title")}
              titleDataName={"head_img_title"}
              sectionName={val.name}
            />
          </div>
        </div>
        <div className="header_footer">
          <div className="container">
            {/* getItem("head_img_url") */}
            <div className="header_bread">
              <Link
                name="bread_crumbs"
                itIsClassName="header_bread"
                hrefName={"bread_crumbs_href"}
                href={getItem("bread_crumbs_href")}
              >
                {getItem("bread_crumbs")}
              </Link>

              <Link
                name="bread_crumbs_gastro"
                itIsClassName="header_bread"
                href={getItem("bread_crumbs_gastro_href")}
                hrefName="bread_crumbs_gastro_href"
              >
                {getItem("bread_crumbs_gastro")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
