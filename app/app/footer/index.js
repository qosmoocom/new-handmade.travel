/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect, useContext } from "react";
import SectionActive from "../../components/SectionActive";
import { useSelector } from "react-redux";
import { AppContext } from "..";
import styled from "styled-components";
import Link from "../../components/Link";
import { Pdf1 } from "./pdf-1";
import { Pdf2 } from "./pdf-2";
import Text from "../../components/Text";
import Image from "../../components/Image";
import Script from "next/script";
const Full_screen = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  * {
    box-sizing: border-box;
    transition: all 0.3s;
  }
  h1,
  h2,
  h3,
  p,
  span {
    margin: 0;
    padding: 0;
  }
  .jivo {
    @media (min-width: 320px) {
      display: none;
    }
    @media (min-width: 768px) {
      display: block;
    }
  }
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 40px;
  display: flex;
  @media (min-width: 320px) {
    flex-direction: column;
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;
const Logo_icons = styled.div`
  position: relative;
  height: auto;
  background: #f8f0f0;
  :before {
    position: absolute;
    width: 350%;
    height: 100%;
    content: "";
    top: 0;
    left: -130%;
    background: #f8f0f0;
  }
  @media (min-width: 320px) {
  }
  @media (min-width: 992px) {
    padding: 0 30px;
  }
  @media (min-width: 1200px) {
    padding: 0 50px;
  }
`;
const Logo_blog = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: 320px) {
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 992px) {
    justify-content: center;
  }
`;
const Logo = styled.div`
  position: relative;
  width: 192px;
  height: 192px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Images = styled.div`
  position: relative;
  width: 167px;
  height: 81px;
  /* background: url("${(props) => props.img}") center / cover no-repeat; */
`;
const Text_name = styled.div`
  position: relative;
  margin-top: 15px;
  text-align: center;
  h1 {
    /* font-family: "Akrobat";
    font-display:swap; */
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 25px;
    text-transform: uppercase;
    color: #f2764b;
  }
`;
const Icons = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  @media (min-width: 320px) {
    justify-content: center;
    column-gap: 25px;
  }
  @media (min-width: 992px) {
    justify-content: space-evenly;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  span {
    position: relative;
    width: 30px;
    height: 30px;
    color: #fff;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }
  i {
    display: block;
  }
`;
const Contact_pay = styled.div`
  position: relative;
  background: #1e272e;
  display: flex;
  flex-direction: column;
  :before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    top: 0;
    right: -80%;
    background: #1e272e;
    @media (min-width: 320px) {
      width: 200%;
      right: -50%;
    }
    @media (min-width: 992px) {
      width: 100%;
      right: -80%;
    }
  }
`;
const Blog_top = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  @media (min-width: 320px) {
    flex-direction: column;
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;
const Email_blog = styled.div`
  position: relative;
  margin-top: 30px;
  padding-left: 50px;
  padding-right: 70px;
  @media (min-width: 320px) {
    padding: 0 15px;
  }
  @media (min-width: 576px) {
    padding: 0 80px;
  }
  @media (min-width: 992px) {
    padding: 0 30px;
  }
  @media (min-width: 1200px) {
    padding-left: 40px;
    padding-right: 70px;
  }
`;
const Blog = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  h1 {
    /* font-family: "Akrobat", sans-serif;
    font-display:swap; */
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 117.6%;
    letter-spacing: 0.005em;
    color: #ffffff;
  }
  > form input {
    margin-top: 20px;
    outline: none;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    background: transparent;
    /* font-family: "Akrobat", sans-serif;
    font-display:swap; */
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 117.6%;
    letter-spacing: 0.005em;
    color: #ffffff;
    width: 293px;
    height: 42px;
    padding: 5px 10px;
    ::placeholder {
      /* font-family: "Akrobat", sans-serif;
      font-display:swap;
      font-display:swap; */
      font-style: normal;
      font-weight: 500;
      font-size: 25px;
      line-height: 117.6%;
      letter-spacing: 0.005em;
      color: #ffffff;
    }
  }
  form button {
    margin-top: 30px;
    border: none;
    outline: none;
    width: 293px;
    height: 42px;
    cursor: pointer;
    background: #bf7246;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    /* font-family: "Akrobat", sans-serif;
    font-display:swap; */
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 117.6%;
    letter-spacing: 0.005em;
    color: #ffffff;
  }
  @media (min-width: 320px) {
    > form input {
      width: 233px;
      height: 42px;
      font-size: 20px;
    }
    form button {
      width: 233px;
      height: 42px;
      font-size: 20px;
    }
  }
  @media (min-width: 400px) {
    > form input {
      width: 293px;
      height: 42px;
      font-size: 25px;
    }
    form button {
      width: 293px;
      height: 42px;
    }
  }
  .section-p {
    margin-top: 25px;
    position: relative;
    display: flex;
    /* align-items: center; */
    row-gap: 10px;
    flex-direction: column;
    .check {
      width: 15px;
      height: 15px;
      border: none;
      outline: none;
      border: 1px solid #ffffff;
      box-sizing: border-box;
    }
    span {
      padding: 0 5px;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 117.6%;
      letter-spacing: 0.005em;
      text-decoration-line: underline;
      cursor: pointer;
      color: #ffffff;
      :nth-child(1) {
        border-left: 0;
      }
    }
    label {
      margin-left: 10px;
      font-family: "DM Sans", sans-serif;
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 13px;
      color: #ffffff;
      @media (min-width: 320px) {
        max-width: 200px;
        margin-top: 10px;
      }
      @media (min-width: 567px) {
        margin-top: 0px;
        max-width: 250px;
      }
    }
  }
`;
const Contact_blog = styled.div`
  position: relative;
  margin-top: 30px;
  padding: 0 80px;
  @media (min-width: 320px) {
    padding: 0 15px;
    padding-top: 30px;
    border-top: 2px solid #fff;
  }
  @media (min-width: 576px) {
    padding: 0 80px;
    padding-top: 30px;
  }
  @media (min-width: 992px) {
    padding: 0 30px;
    border-top: 0;
    border-left: 2px solid #fff;
  }
  @media (min-width: 1200px) {
    padding: 0 75px;
  }
`;
const Con_blog = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  h1 {
    /* font-family: "Akrobat", sans-serif;
    font-display:swap; */
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 117.6%;
    letter-spacing: 0.005em;
    text-transform: uppercase;
    color: #ffffff;
  }
  p {
    margin-top: 20px;
    /* font-family: "Akrobat", sans-serif;
    font-display:swap; */
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 117.6%;
    letter-spacing: 0.005em;
    color: #ffffff;
    min-width: 350px;
    a {
      /* font-family: "Akrobat", sans-serif;
      font-display:swap; */
      font-style: normal;
      font-weight: 500;
      font-size: 22px;

      line-height: 117.6%;
      letter-spacing: 0.005em;
      color: #ffffff;
      text-decoration: none;
      cursor: pointer;
      @media (min-width: 576px) {
        font-size: 25px;
      }
    }
  }
`;
const Icons_contact = styled.div`
  position: relative;
  margin-top: 20px;
  row-gap: 5px;
  display: flex;
  flex-direction: column;
  span {
    position: relative;
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;
    a {
      position: relative;
      display: flex;
      align-items: center;
      color: #fff;
      cursor: pointer;
    }
  }
`;
const Pay_pal = styled.div`
  position: relative;
  display: flex;
  margin-top: 20px;
  column-gap: 15px;
`;
const Pay = styled.div`
  position: relative;
  width: 60px;
  object-fit: cover;
  height: 40px;
`;
const Blog_bottom = styled.div`
  position: relative;
  margin-top: 15px;
  padding: 10px;
  justify-content: space-between;
  display: flex;
  border-top: 2px solid #fff;
  @media (min-width: 320px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 567px) {
    flex-direction: row;
    /* align-items: center; */
  }
  :before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    top: -2px;
    right: -90%;
    border-top: 2px solid #fff;
    @media (min-width: 320px) {
      width: 200%;
      right: -50%;
    }
    @media (min-width: 992px) {
      width: 100%;
      right: -90%;
    }
  }
`;
const Blog_Head = styled.div`
  position: relative;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 5px;
  h1 {
    text-align: center;
    /* font-family: "Akrobat", sans-serif;
    font-display:swap; */
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 117.6%;
    letter-spacing: 0.005em;
    color: #ffffff;
  }
  @media (min-width: 320px) {
    h1 {
      font-size: 18px;
    }
    text-align: center;
    margin-left: 10px;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 19px;
    }
    margin-left: 20px;
  }
  @media (min-width: 992px) {
    text-align: left;
    margin-left: 30px;
  }
`;
const Modal_text = styled.div`
  position: relative;
  display: flex;
  margin-left: 70px;
  margin-bottom: 5px;
  text-align: center;
  & > span {
    padding: 0 5px;
    border-left: 2px solid #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 117.6%;
    letter-spacing: 0.005em;
    text-decoration-line: underline;
    cursor: pointer;
    color: #ffffff;
    :nth-child(1) {
      border-left: 0;
    }
  }
  @media (min-width: 320px) {
    & > span {
      border-left: none;
      font-size: 15px;
    }
    text-align: center;
    margin-top: 15px;
    justify-content: center;
    flex-direction: column;
    row-gap: 10px;
    margin-left: 0px;
  }
  @media (min-width: 576px) {
    flex-direction: row;
    & > span {
      border-left: 2px solid #ffffff;
    }
    margin-top: 0px;
    justify-content: center;
  }
  @media (min-width: 768px) {
    & > span {
      font-size: 15px;
    }
    margin-left: 40px;
  }
  @media (min-width: 992px) {
  }
`;
const MyModal = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 22222;
  display: none;
  transition: all 300ms;
  .span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &.active {
    display: block;
  }
  .modal-container {
    width: 500px;
    height: 650px;
    position: absolute;
    top: 50%;
    left: 50%;
    @media (min-width: 576px) {
      transform: scale(0.8) translate(-60%, -60%);
    }
    @media (min-width: 1400px) {
      transform: scale(1) translate(-50%, -50%);
    }
    .exit-btn {
      position: absolute;
      z-index: 222;
      background: none;
      color: #fff;
      border: none;
      font-size: 30px;
      cursor: pointer;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 300ms ease-in;
      right: -60px;
      top: -60px;
      @media (min-width: 320px) {
        right: -10px;
      }
      @media (min-width: 450px) {
        right: -60px;
      }
    }
    @media (min-width: 320px) {
      width: 300px;
      height: 400px;
    }
    @media (min-width: 576px) {
      width: 400px;
      height: 550px;
    }
    @media (min-width: 768px) {
      width: 500px;
      height: 650px;
    }
    transform: translate(-50%, -50%);
    img {
      width: 500px;
      height: 650px;
      object-fit: cover;
      @media (min-width: 320px) {
        width: 300px;
        height: 400px;
      }
      @media (min-width: 576px) {
        width: 400px;
        height: 550px;
      }
      @media (min-width: 768px) {
        width: 500px;
        height: 650px;
      }
    }
    .arrow-left-btn {
      position: absolute;
      top: 50%;
      z-index: 222;
      left: -75px;
      background: none;
      color: #fff;
      border: none;
      font-size: 30px;
      cursor: pointer;
      border: 1px solid #fff;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 300ms ease-in;
      transform: translateY(-50%);
      @media (min-width: 320px) {
        font-size: 20px;
        width: 30px;
        height: 30px;
        top: 107%;
        left: 75%;
      }
      @media (min-width: 450px) {
        font-size: 20px;
        width: 30px;
        height: 30px;
        left: -55px;
        top: 50%;
      }
      @media (min-width: 576px) {
        font-size: 25px;
        width: 40px;
        height: 40px;
        left: -65px;
      }
      @media (min-width: 768px) {
        font-size: 30px;
        width: 50px;
        height: 50px;
        left: -75px;
      }
    }
    .arrow-right-btn {
      position: absolute;
      top: 50%;
      z-index: 222;
      right: -75px;
      transform: translateY(-50%);
      background: none;
      color: #fff;
      border: none;
      font-size: 30px;
      cursor: pointer;
      border: 1px solid #fff;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 300ms ease-in;
      @media (min-width: 320px) {
        font-size: 20px;
        width: 30px;
        height: 30px;
        right: 0px;
        top: 107%;
      }
      @media (min-width: 450px) {
        font-size: 20px;
        width: 30px;
        height: 30px;
        right: -55px;
        top: 50%;
      }
      @media (min-width: 576px) {
        font-size: 25px;
        width: 40px;
        height: 40px;
        right: -65px;
      }
      @media (min-width: 768px) {
        font-size: 30px;
        width: 50px;
        height: 50px;
        right: -75px;
      }
    }
  }
  .img-slide {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .slide-container {
      position: relative;
      height: 100%;
      width: 200%;
      display: flex;
      align-items: center;
      transition: all 300ms;
      transform: translateX(${({ x50 }) => (x50 ? "0" : "-50%")});
    }
  }
`;
const PDF_MODAL = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000000;
  top: 0;
  left: 0;
  display: none;
  &.active {
    display: flex;
  }
  span.exit_modal {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .modal_content {
    height: 80%;
    width: 800px;
    position: relative;
    iframe {
      border: none !important;
    }
    @media (min-width: 320px) {
      width: 80%;
    }
    @media (min-width: 576px) {
      width: 400px;
    }
    @media (min-width: 768px) {
      width: 500px;
    }
    @media (min-width: 992px) {
      width: 700px;
    }
    @media (min-width: 1200px) {
      width: 800px;
    }
    @media (min-width: 1400px) {
      width: 800px;
    }
    .exit-btn {
      position: absolute;
      z-index: 222;
      background: none;
      color: #fff;
      border: none;
      font-size: 30px;
      cursor: pointer;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 300ms ease-in;
      right: -60px;
      top: -60px;
      @media (min-width: 320px) {
        right: -10px;
      }
      @media (min-width: 450px) {
        right: -60px;
      }
    }
  }
`;
const IconT = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  display: block;
`;
const Seal = styled.div`
  position: absolute;
  right: 0;
  bottom: 0%;
  width: 220px;
  height: 220px;
  display: block;
  z-index: 10;
  @media (min-width: 320px) {
    right: 0;
    display: block;
    bottom: 0%;
    width: 160px;
    height: 160px;
  }
  @media (min-width: 992px) {
    right: 0;
    bottom: 0%;
    display: none;
    width: 220px;
    height: 220px;
  }
`;
const Fotter_Left = styled.div`
  position: relative;
  margin-left: 30px;
  @media (min-width: 320px) {
    margin-left: 0px;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 100%;
  }
  @media (min-width: 567px) {
    margin-left: 30px;
    width: 30%;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li a {
      position: relative;
      display: block;
      min-width: 200px;
      padding: 8px 18px;
      /* font-family: "Akrobat", sans-serif;
      font-display:swap; */
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 177.7%;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      overflow: hidden;
      color: #fff;
    }
  }
`;
const Fotter_Right = styled.div`
  position: relative;
  width: 50%;
  @media (min-width: 320px) {
    border: none;
    border-top: 2px solid #fff;
    width: 100%;
  }
  @media (min-width: 567px) {
    width: 60%;
    border: none;
    border-left: 2px solid #fff;
  }
  @media (min-width: 992px) {
    width: 54%;
    border: none;
    border-left: 2px solid #fff;
  }
`;
const Text_new = styled.div`
  position: relative;
  p {
    margin-bottom: 0px;
    /* font-family: "Akrobat", sans-serif;
    font-display:swap; */
    font-style: normal;
    font-weight: 500;
    text-align: center;
    font-size: 17px;
    margin-bottom: 5px;
    line-height: 117.6%;
    letter-spacing: 0.005em;
    color: #bf7246;
    :nth-child(4) {
      margin-bottom: 20px;
    }
  }
`;

export default function index({ footer }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getItem } = useContext(AppContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [x50, setX50] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [m1, setM1] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [checkPdf, setCheckPdf] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [checkForm, setCheckForm] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [windowSize, setWindowSize] = useState({ width: undefined });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const exitBtnHandle = () => setCheckPdf(null);
  const openCheckPdf = (id) => setCheckPdf(id);

  const pdf = !checkPdf ? (
    ""
  ) : checkPdf === "pdf_1" ? (
    <Pdf1 link={getItem("footer_modal_1_href")} />
  ) : (
    <Pdf2 link={getItem("footer_col_srteficat_href")} />
  );

  // component active no active
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === "footer"
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isEdit: thisIsNotClient } = useSelector((st) => st.admin);

  const bgYellow = {
    background: val.isActive ? null : "yellow",
    opacity: val.isActive ? null : "0.2",
    cursor: val.isActive ? null : "not-allowed",
  };

  if (!thisIsNotClient && !val.isActive) return null;
  // component active no active
  return (
    <>
      <SectionActive name={val.name} />
      <div style={bgYellow}>
        <PDF_MODAL className={checkPdf ? "active" : ""}>
          <span className="exit_modal" onClick={exitBtnHandle} />
          <div className="modal_content">
            <div className="exit-btn" onClick={exitBtnHandle}>
              x
            </div>
            {pdf}
          </div>
        </PDF_MODAL>
        <MyModal x50={x50} className={m1 ? "active" : ""}>
          <div className="span" onClick={() => setM1(false)}></div>
          <div className="modal-container">
            <button
              className="arrow-right-btn"
              onClick={() => setX50((prev) => !prev)}
            >
              <Image
                src="/images/landing/gastro/footer/arrow-right.webp"
                alt="Arrow right"
                layout="fill"
                sectionName={val.name}
              />
            </button>
            <button
              className="arrow-left-btn"
              onClick={() => setX50((prev) => !prev)}
            >
              <Image
                src="/images/landing/gastro/footer/arrow-left.webp"
                layout="fill"
                sectionName={val.name}
              />
            </button>
            <button className="exit-btn" onClick={() => setM1(false)}>
              x
            </button>
            <div className="img-slide">
              <div className="slide-container">
                {getItem("footer_letsinze_imgs", "footer_letsinze_imgs").map(
                  (item, index) => (
                    <Image
                      src={item.img.src}
                      alt={item.img.alt}
                      title={item.img.title}
                      objectFit={"cover"}
                      group="footer_letsinze_imgs"
                      id={index}
                      width={500}
                      height={650}
                      key={index}
                      sectionName={val.name}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </MyModal>
        <Full_screen id="contact">
          <div className="container">
            <Container>
              <Logo_icons>
                <Logo_blog>
                  <Logo>
                    <Images>
                      <Image
                        layout="fill"
                        src={getItem("footer_logo_img_src")}
                        srcDataName={"footer_logo_img_src"}
                        alt={getItem("footer_logo_img_alt")}
                        altDataName={"footer_logo_img_alt"}
                        title={getItem("footer_logo_img_title")}
                        titleDataName={"footer_logo_img_title"}
                        sectionName={val.name}
                      />
                    </Images>
                  </Logo>
                  <Text_name>
                    <h1>
                      <Text name="footer_name">{getItem("footer_name")}</Text>
                    </h1>
                  </Text_name>
                  <Icons>
                    <span>
                      <Link
                        hrefName={"footer_fc_url"}
                        href={getItem("footer_fc_url")}
                        target="_blank"
                      >
                        <IconT>
                          <Image
                            layout="fill"
                            src="/images/landing/gastro/messengrs/face.webp"
                            alt="Facebook"
                            sectionName={val.name}
                          />
                        </IconT>
                      </Link>
                    </span>
                    <span>
                      <Link
                        hrefName={"footer_in_url"}
                        href={getItem("footer_in_url")}
                        target="_blank"
                      >
                        <IconT>
                          <Image
                            layout="fill"
                            src="/images/landing/gastro/messengrs/insta.webp"
                            alt="Instagram"
                            sectionName={val.name}
                          />
                        </IconT>
                      </Link>
                    </span>
                    <span>
                      <Link
                        hrefName={"footer_yt_url"}
                        href={getItem("footer_yt_url")}
                        target="_blank"
                      >
                        <IconT>
                          <Image
                            layout="fill"
                            src="/images/landing/gastro/messengrs/youtube.webp"
                            alt="Youtube"
                            sectionName={val.name}
                          />
                        </IconT>
                      </Link>
                    </span>
                    <span>
                      <Link
                        hrefName={"footer_vk_url"}
                        href={getItem("footer_vk_url")}
                        target="_blank"
                      >
                        <IconT>
                          <Image
                            layout="fill"
                            src="/images/landing/gastro/messengrs/vk.webp"
                            alt="VKontakte"
                            sectionName={val.name}
                          />
                        </IconT>
                      </Link>
                    </span>
                    <span>
                      <Link
                        hrefName="footer_tg_url"
                        href={getItem("footer_tg_url")}
                        target="_blank"
                      >
                        <IconT>
                          <Image
                            layout="fill"
                            src="/images/landing/gastro/messengrs/teleg.webp"
                            alt="Telegram"
                            sectionName={val.name}
                          />
                        </IconT>
                      </Link>
                    </span>
                  </Icons>
                  <Text_new>
                    <p>
                      <Text name="footer_title_1">
                        {getItem("footer_title_1")}
                      </Text>
                    </p>
                    <p>
                      <Text name="footer_title_2">
                        {getItem("footer_title_2")}
                      </Text>
                    </p>
                    <p>
                      <Text name="footer_title_3">
                        {getItem("footer_title_3")}
                      </Text>
                    </p>
                    <p>
                      <Text name="footer_title_4">
                        {getItem("footer_title_4")}
                      </Text>
                    </p>
                  </Text_new>
                </Logo_blog>
              </Logo_icons>
              <Contact_pay>
                <Blog_top>
                  <Email_blog>
                    <Blog>
                      <h1>
                        <Text name="footer_col_name">
                          {getItem("footer_col_name")}
                        </Text>
                      </h1>
                      <form
                        action="https://protosender.silkroaddestinations.uz/lists/gl344gvkd65c4/subscribe"
                        method="post"
                        acceptCharset="utf-8"
                        target="_blank"
                      >
                        <div className="form-group">
                          <Text
                            type="important"
                            name="footer_input_placeholder"
                          >
                            <input
                              type="text"
                              className=""
                              name="EMAIL"
                              placeholder={getItem("footer_input_placeholder")}
                              required
                            />
                          </Text>
                        </div>
                        <div className="clearfix"></div>
                        <div className="actions">
                          <button
                            type="submit"
                            className=""
                            disabled={!checkForm}
                            style={{
                              cursor: !checkForm ? "default" : "pointer",
                              opacity: !checkForm ? "0.5" : "1",
                            }}
                          >
                            <Text name="footer_want_btn">
                              {getItem("footer_want_btn")}
                            </Text>
                          </button>
                        </div>

                        <div className="clearfix"></div>
                      </form>
                      <section className="section-p">
                        <span onClick={() => openCheckPdf("pdf_2")}>
                          <Text name="footer_col_srteficat">
                            {getItem("footer_col_srteficat")}
                          </Text>
                          {/* <Link
                            hrefName={"footer_col_srteficat_href"}
                            target="_blank"
                            href={getItem("footer_col_srteficat_href")}
                            name="footer_col_srteficat"
                          >
                            {getItem("footer_col_srteficat")}
                          </Link> */}
                        </span>
                        <div>
                          <input
                            className="check"
                            type="checkbox"
                            id="checkId"
                            onChange={(e) => setCheckForm(e.target.checked)}
                            value={checkForm}
                          />
                          <label htmlFor="checkId" className="checkbox_info">
                            <Text name="footer_col_check">
                              {getItem("footer_col_check")}
                            </Text>
                          </label>
                        </div>
                      </section>
                    </Blog>
                  </Email_blog>
                  <Contact_blog>
                    <Con_blog>
                      <h1>
                        <Text name="footer_col_name_contact">
                          {getItem("footer_col_name_contact")}
                        </Text>
                      </h1>
                      <p>
                        <Link
                          hrefName={"footer_col_phone_hrefRU"}
                          href={getItem("footer_col_phone_hrefRU")}
                          name="footer_col_phone_ru"
                        >
                          {getItem("footer_col_phone_ru")}
                        </Link>
                      </p>
                      <p>
                        <Link
                          name="footer_col_phone_uzb"
                          hrefName={"footer_col_phone_hrefUZ"}
                          href={getItem("footer_col_phone_hrefUZ")}
                        >
                          {getItem("footer_col_phone_uzb")}
                        </Link>
                      </p>
                      <p>
                        <Link
                          hrefName={"footer_email_url"}
                          href={getItem("footer_email_url")}
                          name="footer_col_email"
                        >
                          {getItem("footer_col_email")}
                        </Link>
                      </p>
                      <Icons_contact>
                        <span>
                          <Link
                            hrefName={"footer_col_tg_href"}
                            target="_blank"
                            href={getItem("footer_col_tg_href")}
                            name="footer_col_tg"
                          >
                            {getItem("footer_col_tg")}
                          </Link>
                        </span>
                        <span>
                          <Link
                            hrefName={"footer_col_wa_href"}
                            target="_blank"
                            href={getItem("footer_col_wa_href")}
                            name="footer_col_wh"
                          >
                            {getItem("footer_col_wh")}
                          </Link>
                        </span>
                        <span>
                          <Link
                            hrefName={"footer_col_fa_href"}
                            target="_blank"
                            href={getItem("footer_col_fa_href")}
                            name="footer_col_fa"
                          >
                            {getItem("footer_col_fa")}
                          </Link>
                        </span>
                      </Icons_contact>
                      <Pay_pal>
                        <Pay>
                          <Image
                            layout="responsive"
                            width={100}
                            height={100}
                            src="/images/landing/gastro/footer/visa.png"
                            alt="Visa Crad"
                            sectionName={val.name}
                          />
                        </Pay>
                        <Pay>
                          <Image
                            layout="responsive"
                            width={100}
                            height={90}
                            src="/images/landing/gastro/footer/master.png"
                            alt="MasterCard"
                            sectionName={val.name}
                          />
                        </Pay>
                        <Pay>
                          <Image
                            layout="responsive"
                            width={100}
                            height={70}
                            src="/images/landing/gastro/footer/union.png"
                            alt="UnionPay Card"
                            sectionName={val.name}
                          />
                        </Pay>
                      </Pay_pal>
                    </Con_blog>
                  </Contact_blog>
                  <Seal>
                    <Image
                      layout="fill"
                      src="/images/landing/gastro/footer/seal.webp"
                      alt="Вкусный Узбекистан"
                      title="Вкусный Узбекистан"
                      sectionName={val.name}
                    />
                  </Seal>
                </Blog_top>
                <Blog_bottom>
                  <Fotter_Left>
                    <ul>
                      {getItem("footer_menu", "footer_menu").map(
                        (link, linkIndex) => {
                          if (
                            getItem("footer_menu", "footer_menu").length - 1 >
                            linkIndex
                          ) {
                            return (
                              <li key={linkIndex}>
                                <Link
                                  index={linkIndex}
                                  group="footer_menu"
                                  hrefName={"head_menu_href"}
                                  href={link.head_menu_href}
                                  name={"head_menu_title"}
                                >
                                  {link.head_menu_title}
                                </Link>
                              </li>
                            );
                          }
                        }
                      )}
                    </ul>
                  </Fotter_Left>
                  <Fotter_Right>
                    <Blog_Head>
                      <h1>
                        <Text name="footer_col_copy">
                          {getItem("footer_col_copy")}
                        </Text>
                        <br />
                        <Text name="footer_col_copy_code">
                          {getItem("footer_col_copy_code")}
                        </Text>
                        <br />
                        <Text name="footer_col_copy_let">
                          {getItem("footer_col_copy_let")}
                        </Text>
                      </h1>
                    </Blog_Head>
                    <Modal_text>
                      <span onClick={() => openCheckPdf("pdf_1")}>
                        <Text name="footer_modal_1">
                          {getItem("footer_modal_1")}
                        </Text>
                        {/* <Link
                          hrefName={"footer_modal_1_href"}
                          target="_blank"
                          href={getItem("footer_modal_1_href")}
                          name="footer_modal_1"
                        >
                          {getItem("footer_modal_1")}
                        </Link> */}
                      </span>
                      <span onClick={() => setM1(true)}>
                        <Text name="footer_modal_2">
                          {getItem("footer_modal_2")}
                        </Text>
                      </span>
                    </Modal_text>
                  </Fotter_Right>
                </Blog_bottom>
              </Contact_pay>
            </Container>
          </div>
        </Full_screen>
      </div>

      <Script
        id="yandexx"
        // strategy="afterInteractive"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
                (function () {
              'use strict';

              // Флаг, что Метрика уже загрузилась.
              var loadedMetrica = false,

                  // Переменная для хранения таймера.
                  timerId;

              // Для бота Яндекса грузим Метрику сразу без "отложки",
              // чтобы в панели Метрики были зелёные кружочки
              // при проверке корректности установки счётчика.
              if (navigator.userAgent.indexOf('YandexMetrika') > -1) {
                  loadMetrica();
              } else {
                  window.addEventListener('scroll', loadMetrica, { passive: true });

                  window.addEventListener('touchstart', loadMetrica);

                  document.addEventListener('mouseenter', loadMetrica);

                  document.addEventListener('click', loadMetrica);

                  document.addEventListener('DOMContentLoaded', loadFallback);
              }

              function loadFallback() {
                  timerId = setTimeout(loadMetrica, 1000);
              }

              function loadMetrica(e) {

                  if (e && e.type) {
                    console.log(e.type);
                  } else {
                    console.log('DOMContentLoaded');
                  }

                  if (loadedMetrica) {
                    return;
                  }

                  (function (m, e, t, r, i, k, a) {
                    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
                    m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
                  })
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                  ym(${getItem("app_yandex_metirka_id")}, "init", {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true
                  });


              
            {/* <noscript><div><img src="https://mc.yandex.ru/watch/86955280" style="position:absolute; left:-9999px;" alt="" /></div></noscript> */}


                  !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '4544213979029989'); fbq('track', 'PageView');

                  // (function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'}); 
                  //       var f = d.getElementsByTagName(s)[0],
                  //           j = d.createElement(s),
                  //           dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                  // })(window, document, 'script', 'dataLayer', 'GTM-MX4JKC7')


                  loadedMetrica = true;

                  clearTimeout(timerId);

                  window.removeEventListener('scroll', loadMetrica);
                  window.removeEventListener('touchstart', loadMetrica);
                  document.removeEventListener('mouseenter', loadMetrica);
                  document.removeEventListener('click', loadMetrica);
                  document.removeEventListener('DOMContentLoaded', loadFallback);
              }
            })()
              `,
        }}
      />
    </>
  );
}
