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
              <div className="lid-box">
                <div className="lid-title"><span>САМАРКАНДСКИЙ ПЛОВ</span> ЗА 10 ШАГОВ В ДОМАШНИХ УСЛОВИЯХ</div>
                <div className="lid-info">Бесплатный PDF рецепт настоящего плова по-самаркандски от ведущего шефа города.</div>
                <ul className="lid-list">
                  <li>-Готовим дома на плите</li>
                  <li>-Плов, который получается всегда</li>
                  <li>-Просто шаг за шагом следуйте инструкции</li>
                </ul>
                <div className="lid-bottom-block">
                  <button onClick={handleOnModal5}>ПОЛУЧИТЬ РЕЦЕПТ</button>
                  <img classname='lid-img' src="/images/cook.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </>
  );
}
