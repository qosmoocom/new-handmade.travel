import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Onetour from "../components/oneTour";
import Toursgroup from "../components/ToursGroup";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Section = styled.div`
  * {
    font-family: "Mulish";
  }
  max-width: 1250px;
  margin: 0 auto;
  /* padding: 0 10px; */

  .title {
    display: flex;
    flex-flow: column;
    margin-bottom: 50px;
    padding: 0 20px;
    @media (min-width: 1024px) {
      flex-flow: row;
      justify-content: space-between;
    }
    h3 {
      font-size: 25px;
      font-weight: 700;
      line-height: 35px;
      color: #323232;
      margin-bottom: 15px;
      /* max-width: 40%; */
      @media (min-width: 1024px) {
        font-size: 40px;
        line-height: 50px;
        width: 40%;
      }
      @media (min-width: 1300px) {
        font-size: 48px;
        line-height: 60px;
      }
      span {
        color: #f3692e;
      }
    }
    p {
      font-size: 12px;
      line-height: 14px;
      color: #1b1d21;
      /* max-width: 45%; */
      @media (min-width: 1024px) {
        font-size: 17px;
        line-height: 30px;
        width: 50%;
      }
      @media (min-width: 1300px) {
        font-size: 20px;
        line-height: 36px;
      }
    }
  }
  .select {
    margin-bottom: 30px;
    padding: 0 20px;
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
    ul {
      display: flex;
      li {
        list-style: none;
        font-weight: 400;
        font-size: 15px;
        line-height: 25px;
        color: #646464;
        margin-right: 40px;

        padding-bottom: 10px;
        @media (min-width: 1300px) {
          font-size: 20px;
        }
      }
      .active {
        color: #323232;
        border-bottom: #f58634 2px solid;
      }
    }
  }
  .navigate {
    display: flex;
    justify-content: end;
    @media (min-width: 1240px) {
      display: none;
    }
    .btn {
      border-radius: 50%;
      border: 1px solid #545961;
      padding: 8px 10px;
      margin-left: 6px;
    }
  }
  #tours {
    display: flex;
    flex-flow: row wrap;
    /* grid-column: auto; */
    /* grid-gap: 30px; */
    /* height: 930px; */
    width: 100%;
    margin: auto;
    overflow: hidden;
    scroll-behavior: smooth;
  }
  .more {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 70px;
    /* display: none; */
    button {
      width: 188px;
      height: 56px;
      border-radius: 12px;
      border: none;
      color: #fff;
      background-color: #f58634;
      margin: auto;
    }
  }
  .none {
    display: none;
  }
`;

const Tours = () => {
  const [count, setCount] = useState(4);
  const [tours, setTours] = useState(false);
  const [btn, setBtn] = useState(false);
  // const RightBtn = () => {
  //   document.getElementById("tours").scrollBy(310, 0);
  // };

  // const LeftBtn = () => {
  //   document.getElementById("tours").scrollBy(-310, 0);
  // };
  const data = [
    {
      img: "/images/home/tour1.webp",
      title: "Art tour in Uzbekistan",
      author: "Husnora",
    },
    {
      img: "/images/home/tour2.webp",
      title: "Gastronomic tour",
      author: "Husnora",
    },
    {
      img: "/images/home/tour3.png",
      title: "Ziarat tour in Uzbekistan",
      author: "Husnora",
    },
    {
      img: "/images/home/tour4.png",
      title: "Art tour in Uzbekistan",
      author: "Husnora",
    },
    {
      img: "/images/home/tour1.webp",
      title: "Navruz tour in 2022",
      author: "Husnora",
    },
    {
      img: "/images/home/tour2.webp",
      title: "Gastronomic tour",
      author: "Husnora",
    },
    {
      img: "/images/home/tour3.png",
      title: "Navruz tour in 2022",
      author: "Husnora",
    },
    {
      img: "/images/home/tour4.png",
      title: "Gastronomic tour",
      author: "Husnora",
    },
  ];
  let arr = [];
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      arr.push(data[i]);
    }
    console.log(arr);
    setTours(
      arr?.map((tour, index) => {
        return <Onetour data={tour} key={index} />;
      })
    );
    console.log(tours);
  }, [count]);

  const handlerMore = () => {
    console.log(count);
    console.log(data.length);
    if (count < data.length - 2) {
      setCount(count + 2);
    }
    if (count == data.length - 2) {
      setCount(count + 2);
      setBtn(true);
    }
  };

  return (
    <Section>
      <div className="title">
        <h3>
          Choose the <span>best</span> tour for vacation
        </h3>
        <p>
          We always our customers happy by providing as many choices as possible
          top tourist destinations for you with advantage.
        </p>
      </div>
      <div className="select">
        <ul>
          <li className="active">Special Deals</li>
          <li>Populer</li>
          <li>Recommendation</li>
          <li>Best Price</li>
        </ul>
      </div>
      {/* <div className="navigate">
        <div className="left-btn btn" onClick={LeftBtn}>
          <FiChevronLeft size={20} style={{ color: "#545961" }} />
        </div>
        <div className="right-btn btn" onClick={RightBtn}>
          <FiChevronRight size={20} style={{ color: "#545961" }} />
        </div>
      </div> */}
      <div id="tours">{tours}</div>
      <div className={`${btn ? "none" : ""} more`} onClick={handlerMore}>
        <button>Explore More</button>.
      </div>
    </Section>
  );
};

export default Tours;
