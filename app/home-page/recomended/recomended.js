import { useEffect, useState } from "react";
import styled from "styled-components";
import Tour from "../tour";

const Section = styled.div`
  /* padding: 20px; */
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
    }
  }
  .btns {
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
    }
    .btn {
      text-align: center;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0px 2px 2px rgba(78, 140, 84, 0.2);
      margin: 10px 20px;
      @media (min-width: 576px) {
        margin: 10px 15%;
      }
      @media (min-width: 768px) {
        margin: 20px 25px;
        width: 200px;
      }
      &.active {
        border: 1px solid #4e8c54;
        p {
          color: #4e8c54;
        }
      }
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
  }
  .section {
    &.active {
      padding: 20px 0;
      .contents {
        height: 100%;
      }
    }
    .contents {
      height: 0;
      overflow: hidden;
      padding: 0 10px;
      @media (min-width: 576px) {
        padding: 0 40px;
      }
      @media (min-width: 768px) {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 50px;
      }
      @media (min-width: 996px) {
        grid-template-columns: auto auto auto;
        grid-column-gap: 50px;
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
      .item {
        margin: 20px 0;
        padding-left: 10px;
        div {
          margin-bottom: 10px;
          p {
            font-family: "Noto Sans";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 25px;
          }
          &:nth-child(2) {
            p {
              font-family: "Noto Sans";
              font-style: normal;
              font-weight: 300;
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
`;

export default function Recomended() {
  const [open, setOpen] = useState({
    item: 1,
    more: 0,
  });
  useEffect(()=>{
    if(window.outerWidth>=996){
      setOpen({...open, more:1})
    }
  }, [])
  return (
    <Section>
      <div className="title">
        <p>Рекомендуемые туры</p>
      </div>
      <div className="btns">
        <div
          className={`btn ${open.item == 1 ? "active" : ""}`}
          onClick={() => {
            setOpen({...open, item: 1 });
          }}
        >
          <p>Авторские туры</p>
        </div>
        <div
          className={`btn ${open.item == 2 ? "active" : ""}`}
          onClick={() => {
            setOpen({...open, item: 2 });
          }}
        >
          <p>Classic Tours</p>
        </div>
      </div>
      <div className="items">
        <div className={`section ${open.item == 1 ? "active" : ""}`}>
          <div className="contents">
            <Tour />
            <Tour />
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
            {open.more == 1 && <Tour />}
            {open.more == 1 && <Tour />}
            {open.more == 1 && <Tour />}
            {open.more == 1 && <Tour />}
          </div>
        </div>
        <div className={`section ${open.item == 2 ? "active" : ""}`}>
          <div className="contents">
            <Tour />
            <Tour />
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
            {open.more == 1 && <Tour />}
            {open.more == 1 && <Tour />}
            {open.more == 1 && <Tour />}
            {open.more == 1 && <Tour />}
          </div>
        </div>
      </div>
    </Section>
  );
}
