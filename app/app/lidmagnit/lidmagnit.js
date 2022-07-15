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

export default function Lidmagnit() {
  const { getItem } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [logoWidth, setLogoWidth] = useState(150);
  const [scroll, setScroll] = useState(false);

  const dispatch = useDispatch();

  // modal 1 opened
  const handleOnModal5 = () => {
    const payload = {
      currentModal: "MODAL_5",
      actionModal: "ACTION 1",
    };
    dispatch({ type: "MODAL_OPEN", payload });
  };

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "lidmagnit"
  );

  // const { isEdit: thisIsNotClient } = useSelector((st) => st.admin);

  const { isEdit: thisIsNotClient } = useSelector((st) => st.admin);

  const bgYellow = {
    background: val.isActive ? null : "yellow",
    opacity: val.isActive ? null : "0.2",
    cursor: val.isActive ? null : "not-allowed",
  };

  if (!thisIsNotClient && !val.isActive) return null;
  
  return (
    <>
      <SectionActive name={val ? val.name : "true"} />
      {/* <div id="header" className="header" style={bgYellow}></div> */}
      <div id='lidmagnit' className="lidmagnit" style={val ? bgYellow : { display: "block" }}>
        <div className="container">
          <div className={`fixed-container`}>
            <div className="lid-container">
              <div className="lid-content-box">
                <div className="lid-title">
                  <span className="lid-title-big">
                    <Text name="lid_title_span">{getItem("lid_title_span")}</Text>
                  </span>
                    <Text name="lid_title_text">{getItem("lid_title_text")}</Text>
                </div>
                <div className="lid-info"><Text name="lid_info">{getItem("lid_info")}</Text></div>
                <ul className="lid-list">
                  <li>
                    <div className="lid-li-pin">
                      <Image
                        src={getItem("lid_list_pin_url")}
                        title={getItem("lid_list_pin_title")}
                        alt={getItem("lid_list_pin_alt")}
                        srcDataName={"lid_list_pin_url"}
                        titleDataName={"lid_list_pin_title"}
                        altDataName={"lid_list_pin_alt"}
                        layout="fill"
                        objectFit="cover"
                        itIsClassName="lid-li-pin"
                        sectionName={val.name}
                      />
                    </div>
                    <Text name="lid_list_1">{getItem("lid_list_1")}</Text>
                  </li>
                  <li>
                    <div className="lid-li-pin">
                      <Image
                        src={getItem("lid_list_pin_url")}
                        title={getItem("lid_list_pin_title")}
                        alt={getItem("lid_list_pin_alt")}
                        srcDataName={"lid_list_pin_url"}
                        titleDataName={"lid_list_pin_title"}
                        altDataName={"lid_list_pin_alt"}
                        layout="fill"
                        objectFit="cover"
                        itIsClassName="lid-li-pin"
                        sectionName={val.name}
                      />
                    </div>
                    <Text name="lid_list_2">{getItem("lid_list_2")}</Text></li>
                  <li>
                    <div className="lid-li-pin">
                      <Image
                        src={getItem("lid_list_pin_url")}
                        title={getItem("lid_list_pin_title")}
                        alt={getItem("lid_list_pin_alt")}
                        srcDataName={"lid_list_pin_url"}
                        titleDataName={"lid_list_pin_title"}
                        altDataName={"lid_list_pin_alt"}
                        layout="fill"
                        objectFit="cover"
                        itIsClassName="lid-li-pin"
                        sectionName={val.name}
                      />
                    </div>
                    <Text name="lid_list_3">{getItem("lid_list_3")}</Text></li>
                </ul>
                <div className="lid-bottom-block">
                  <button onClick={handleOnModal5}><Text name="lid_button">{getItem("lid_button")}</Text></button>
                </div>
              </div>
              <div className="lid-img-box">
                  <div className="img-box">
                    <Image
                      src={getItem("lid_img_url")}
                      title={getItem("lid_img_title")}
                      alt={getItem("lid_img_alt")}
                      srcDataName={"lid_img_url"}
                      titleDataName={"lid_img_title"}
                      altDataName={"lid_img_alt"}
                      layout="fill"
                      objectFit="cover"
                      itIsClassName="img-box"
                      sectionName={val.name}
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>

      </div>
      
    </>
  );
}
