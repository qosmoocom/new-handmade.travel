import { useEffect, useState } from "react";
import styled from "styled-components";
import City from "../city";
import Tour from "../tour";

const Section = styled.div`
  /* padding: 20px; */
  margin-top: 50px;
  max-width: 1200px;
  margin: auto;
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .title {
    margin-bottom: 50px;
    margin: 0 20px;
    p {
      font-family: "Caveat";
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 50px;
      text-align: center;
      @media (min-width: 576px) {
        font-size: 60px;
        padding: 0 20%;
      }
    }
  }
  .section {
    margin: 20px 0;
    &.active {
      .btn {
        border: 1px solid #4e8c54;
        p {
          color: #4e8c54;
        }
      }
      .contents {
        height: 100%;
      }
    }
    .btn {
      text-align: center;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0px 2px 2px rgba(78, 140, 84, 0.2);
      margin: 0 20px;
      p {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: #000;
        padding: 8px;
      }
    }
    .contents {
      height: 0;
      overflow: hidden;
      padding: 0 10px;
      @media (min-width: 576px) {
        padding: 30px;
      }
      @media (min-width: 768px) {
        display: grid;
        flex-flow: row wrap;
        height: 125vw !important;
        grid-gap: 10px;
      }
      @media (min-width: 1300px) {
          height: 1200px !important;
        }
      .more {
        text-align: center;
        p {
          font-family: "Noto Sans";
          text-decoration: underline;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
        }
      }
      .city0 {
        width: 100%;
        @media (min-width: 768px) {
          grid-column: 1;
          grid-row: 1 / span 2;
        }
        @media (min-width: 996px) {
          grid-column: 1;
          grid-row: 1;
        }
        @media (min-width: 1300px) {
          grid-column: 1;
          grid-row: 1/span 2;
        }
      }
      .city1 {
        @media (min-width: 768px) {
          grid-column: 2;
          grid-row: 1 / span 2;
        }
        @media (min-width: 996px) {
          grid-column: 2/ span 2;
          grid-row: 1 ;
        }
        @media (min-width: 1300px) {
          grid-column: 3;
          grid-row: 1/span 2;
        }
        
      }
      .city2 {
        @media (min-width: 768px) {
          grid-column: 1;
          grid-row: 3;
        }
        @media (min-width: 996px) {
          grid-column: 1 /span 2;
          grid-row: 2;
        }
        @media (min-width: 1300px) {
          grid-column: 2;
          grid-row: 1;
        }
      }
      .city3 {
        @media (min-width: 768px) {
          grid-column: 2;
          grid-row: 3;
        }
        @media (min-width: 996px) {
          grid-column: 3;
          grid-row: 2;
        }
        @media (min-width: 1300px) {
          grid-column: 2;
          grid-row: 2;
        }
      }
      .city4 {
        @media (min-width: 768px) {
          grid-column: 1 / span 2;
          grid-row: 4;
        }
        @media (min-width: 996px) {
          grid-column: 1 /span 3;
          grid-row: 3;
        }
      }
    }
  }
`;

let citys = [
  {
    name: "Toshkent",
    image: "/images/home/city1.png",
    count: "7",
  },
  {
    name: "Bukhara",
    image: "/images/home/city2.png",
    count: "6",
  },
  {
    name: "Samarkand",
    image: "/images/home/city3.png",
    count: "9",
  },
  {
    name: "Mitan",
    image: "/images/home/city4.png",
    count: "8",
  },
  {
    name: "Khiva",
    image: "/images/home/city5.png",
    count: "10",
  },
];

export default function Citys() {
  const [open, setOpen] = useState({
    more: 0,
    width: 0,
  });
  useEffect(() => {
    if (window.outerWidth >= 768) {
      setOpen({ ...open, more: 1, width: window.outerWidth });
    }
  }, []);

  const Citys = citys.map((city, index) => {
    return <City className={"city" + index} key={index} city={city} />;
  });
  if (open.width >= 768) {
    return (
      <Section>
        <div className="title">
          <p>Города Узбекистана</p>
        </div>
        <div className="items">
          <div className="section active">
            <div className="contents">{Citys}</div>
          </div>
        </div>
      </Section>
    );
  }
  return (
    <Section>
      <div className="title">
        <p>Города Узбекистана</p>
      </div>
      <div className="items">
        <div className="section active">
          <div className="contents">
            <City className="city0" city={citys[0]} />
            <City className="city1" city={citys[1]}/>
            {open.more != 1 && (
              <div className="more">
                <p
                  onClick={() => {
                    setOpen({ ...open, more: 1 });
                  }}
                >
                  More ...
                </p>
              </div>
            )}
            {open.more == 1 && <City className="city2" city={citys[2]}/>}
            {open.more == 1 && <City className="city3" city={citys[3]}/>}
            {open.more == 1 && <City className="city4" city={citys[4]}/>}
          </div>
        </div>
      </div>
    </Section>
  );
}
