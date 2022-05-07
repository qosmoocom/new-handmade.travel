import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import Benefits from "../app/home-page/benefits";
// import Customers from "../app/home-page/customers";
// import Footer from "../app/home-page/footer";
// import Navbar from "../app/home-page/navbar";
// import Header from "../app/home-page/header";
// import Tours from "../app/home-page/tours";
// import Video from "../app/home-page/video-area";
// import Residens from "../app/home-page/residens";
// import BenefitsMobi from "../app/home-page/benefits-mobi";
import axios from "axios";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const [tours, setTours] = useState([]);
  const forFs = useSelector((state) => state);
  const itemsru=[]
  const itemses=[]
  const itemsen=[]
  const itemsde=[]
  const [en, setEn] = useState([]);
  const [ru, setRu] = useState([]);
  const [es, setEs] = useState([]);
  const [de, setDe] = useState([]);

  useEffect(() => {
    axios.get("/api/tour/home").then((res) => {
      setTours(res.data);
    });
  }, []);
  console.log(tours);
  const [lang, setLang] = useState("uz");
  const [div, setDiv] = useState("");
  useEffect(() => {
    console.log(window.navigator.language);
    console.log(window);
    if (window.navigator.language == "es") {
      setLang("es");
    }
    if (window.navigator.language == "en-US") {
      setLang("en");
    }
    if (window.navigator.language == "ru") {
      setLang("ru");
    }
  }, []);
  useEffect(() => {
    console.log(lang);
    console.log(div);
    if (lang == "es") {
      setDiv("ispancha");
    } else if (lang == "en") {
      setDiv("inglizcha");
    } else if (lang == "ru") {
      setDiv("ruscha");
    }
  }, [lang]);

  useEffect(() => {
    for (let i = 0; i < tours.length; i++) {
      if (tours[i].language == "ru") {
        itemsru.push(tours[i])
      }
      if (tours[i].language == "de") {
        itemsde.push(tours[i]);
      }
      if (tours[i].language == "en") {
        itemsen.push(tours[i]);
      }
      if (tours[i].language == "es") {
        itemses.push(tours[i]);
      }
    }
    setRu(
      itemsru.map((item, index) => (
        <li key={index}>
          <Link href={`/tours/${item.tour_id}/${item.language}`}>
            <b>
              {item.tourName}----{item.language}
            </b>
          </Link>
        </li>
      ))
    );
    setEn(
      itemsen.map((item, index) => (
        <li key={index}>
          <Link href={`/tours/${item.tour_id}/${item.language}`}>
            <b>
              {item.tourName}----{item.language}
            </b>
          </Link>
        </li>
      ))
    );
    setEs(
      itemses.map((item, index) => (
        <li key={index}>
          <Link href={`/tours/${item.tour_id}/${item.language}`}>
            <b>
              {item.tourName}----{item.language}
            </b>
          </Link>
        </li>
      ))
    );
    setDe(
      itemsde.map((item, index) => (
        <li key={index}>
          <Link href={`/tours/${item.tour_id}/${item.language}`}>
            <b>
              {item.tourName}----{item.language}
            </b>
          </Link>
        </li>
      ))
    );
    // setItems(
    //   tours.map((item, index) => (
    //     <li key={index}>
    //       <Link href={`/tours/${item.tour_id}/${item.language}`}>
    //         <b>
    //           {item.tourName}----{item.language}
    //         </b>
    //       </Link>
    //     </li>
    //   ))
    // );
  }, [tours]);
  return (
    <div>
      <Head>
        <title>welcome to Handmade.travel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Section> */}
      {/* <section>
          <p>Xush kelibsiz Handmade.Travel ga</p>
          <p>Добро пожаловать на Handmade.travel</p>
          <p>Wecome to handmade.travel</p>
        </section> */}

      {/* <Navbar />
        <Header />
        <BenefitsMobi />
        <Tours cards={tours} />
        <Benefits />
        <Video />
        <Customers />
        <Residens />
        <Footer /> */}
      {/* </Section> */}
      <Full_container>
        <div className="container">
          <Container>
            <Header>
              <Logo_Text>
                <Logo_blog>
                  <Image
                    width={180}
                    height={80}
                    layout="intrinsic"
                    src="/images/landing/gastro/header/logo.webp"
                  />
                </Logo_blog>
                <Text>авторские туры в узбекистан</Text>
              </Logo_Text>
              <Img>
                <Image
                  sizes="100vw"
                  // width={100}
                  // height={100}
                  layout="fill"
                  src="/images/landing/gastro/one.webp"
                />
              </Img>
            </Header>
            <div className="toursName">{itemsru && <ul>{ru}{en}{es}{de}</ul>}</div>
          </Container>
        </div>
      </Full_container>
      {div}
    </div>
  );
}

// const Section = styled.div`
//   background-color: #fff;
//   user-select: none;
//   /* height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   user-select: none; */
//   * {
//     font-family: "Mulish";
//     font-style: normal;
//   }
//   /* section {
//     padding: 20px;
//     box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
//   }

//   p {
//     text-transform: capitalize;
//     font-size: 20px;
//     letter-spacing: 0.6px;
//     margin-bottom: 20px;
//   } */
// `;

const Full_container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;
const Container = styled.div`
  position: relative;
  margin-top: 50px;
  width: 100%;
  height: auto;
  .toursName {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 80px;
    ul {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      li {
        /* display: block; */
        /* font-family: Akrobat; */
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 117.6%;
        letter-spacing: 0.005em;
        /* text-decoration-line: none; */
        text-transform: uppercase;
        color: #000000;
        b {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
  a {
    display: block;
    /* font-family: Akrobat; */
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 117.6%;
    letter-spacing: 0.005em;
    /* text-decoration-line: none; */
    text-transform: uppercase;
    color: #000000;
  }
`;
const Header = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  @media (min-width: 320px) {
    flex-direction: column;
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;
const Logo_Text = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  @media (min-width: 320px) {
    width: 100%;
    padding: 10px 0px;
  }
  @media (min-width: 576px) {
    padding: 50px 0px;
  }
  @media (min-width: 992px) {
    width: 30%;
  }
`;

const Logo_blog = styled.div`
  position: relative;
  width: 230px;
  height: 230px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 320px) {
    width: 130px;
    height: 130px;
  }
  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
const Logo = styled.div`
  position: relative;
  width: 211px;
  height: 102px;
  background: url("${(props) => props.img}") center / 90% no-repeat;
`;
const Text = styled.h1`
  position: relative;
  /* font-family: Akrobat; */
  font-style: normal;
  font-weight: 600;
  line-height: 117.6%;
  text-align: center;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: #000000;
  margin-top: 30px;
  @media (min-width: 320px) {
    font-size: 25px;
  }
  @media (min-width: 576px) {
    font-size: 35px;
  }
`;
const Img = styled.div`
  position: relative;
  @media (min-width: 320px) {
    width: 100%;
    height: 250px;
  }
  @media (min-width: 992px) {
    height: auto;
    width: 70%;
    height: auto;
  }
`;
