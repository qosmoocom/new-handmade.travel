import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Section1 = styled.div`
  padding: 20px;
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  @media (min-width: 576px) {
    padding: 15%;
  }
    @media (min-width: 768px) {
    display: none;
  }
  .title {
    margin-bottom: 50px;
    p {
      font-family: "Caveat";
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 50px;
      text-align: center;
      @media (min-width: 576px) {
        font-size: 60px;
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
      p {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: #000;
        padding: 8px;
        @media (min-width: 576px) {
          font-size: 22px;
          padding: 12px;
        }
      }
    }
    .contents {
      height: 0;
      overflow: hidden;
      .more {
        text-align: center;
        margin-bottom: 10px;
        p {
          font-family: "Noto Sans";
          text-decoration: underline;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          @media (min-width: 576px) {
            font-size: 22px;
          }
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
            @media (min-width: 576px) {
              font-size: 22px;
              padding: 5px 0;
            }
          }
          &:nth-child(2) {
            p {
              font-family: "Noto Sans";
              font-style: normal;
              font-weight: 300;
              font-size: 14px;
              line-height: 20px;
              @media (min-width: 576px) {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
`;

const Section2 = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  display: none;
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  @media(min-width:768px){
    display: block;
  }
  .title {
    margin-bottom: 50px;
    p {
      font-family: "Caveat";
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 50px;
      text-align: center;
      @media (min-width: 576px) {
        font-size: 60px;
      }
    }
  }
  .btns {
    display: flex;
    justify-content: space-around;
    max-width: 650px;
    margin: auto;
    .btn {
      width: 200px;
      cursor: pointer;
      text-align: center;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0px 2px 2px rgba(78, 140, 84, 0.2);
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
        /* @media (min-width: 576px) {
          font-size: 22px;
          padding: 12px;
        } */
      }
    }
  }

  .section {
    /* margin: 20px 0; */
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
      .images{
        height: 100%;
        padding: 20px 0;
        div{
          width: 30%;
        }
      }
    }
    .btn {
      text-align: center;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0px 2px 2px rgba(78, 140, 84, 0.2);
      p {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: #000;
        padding: 8px;
        @media (min-width: 576px) {
          font-size: 22px;
          padding: 12px;
        }
      }
    }
    .images {
      display: flex;
      justify-content: space-between;
      
      height: 0;
      div {
        /* width: 30%;
        height: 100%; */
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .contents {
      height: 0;
      overflow: hidden;
      .flex {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 60px;
        @media(min-width:996px){
          grid-template-columns: auto auto auto;
        }
      }
      .more {
        text-align: center;
        margin-bottom: 10px;
        p {
          font-family: "Noto Sans";
          text-decoration: underline;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          @media (min-width: 576px) {
            font-size: 22px;
          }
        }
      }
      .item {
        margin: 20px 0;
        padding-left: 10px;
        display: flex;
        .profile {
          width: 66px;
          position: relative;
          img {
            width: 100%;
          }
        }
        .texts {
          margin-left: 20px;
          div {
            margin-bottom: 10px;
            p {
              font-family: "Noto Sans";
              font-style: normal;
              font-weight: 400;
              font-size: 18px;
              line-height: 25px;
              /* @media (min-width: 576px) {
                font-size: 22px;
                padding: 5px 0;
              } */
            }
            &:nth-child(2) {
              p {
                font-family: "Noto Sans";
                font-style: normal;
                font-weight: 300;
                font-size: 14px;
                line-height: 20px;
                /* @media (min-width: 576px) {
                  font-size: 18px;
                } */
              }
            }
          }
        }
      }
    }
  }
`;

export default function Why() {
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
    <>
      <Section1>
        <div className="title">
          <p>Почему выберают нас</p>
        </div>
        <div className="items">
          <div className={`section ${open.item == 1 ? "active" : ""}`}>
            <div
              className="btn"
              onClick={() => {
                setOpen({ item: 1 });
              }}
            >
              <p>Discovery</p>
            </div>
            <div className="contents">
              <div className="item">
                <div>
                  <p>Talk to human</p>
                </div>
                <div>
                  <p>
                    Your personal travel expert and your guide are always in
                    touch with you.
                  </p>
                </div>
              </div>
              <div className="item">
                <div>
                  <p>Risk-free adventure tour</p>
                </div>
                <div>
                  <p>
                    We work officially. We choose our partners responsibly. We
                    guarantee high level quality services.
                  </p>
                </div>
              </div>
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
              {open.more == 1 && (
                <>
                  <div className="item">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                        Your personal travel expert and your guide are always in
                        touch with you.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <p>Risk-free adventure tour</p>
                    </div>
                    <div>
                      <p>
                        We work officially. We choose our partners responsibly.
                        We guarantee high level quality services.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={`section ${open.item == 2 ? "active" : ""}`}>
            <div
              className="btn"
              onClick={() => {
                setOpen({ item: 2 });
              }}
            >
              <p>Destination Tour</p>
            </div>
            <div className="contents">
              <div className="item">
                <div>
                  <p>Talk to human</p>
                </div>
                <div>
                  <p>
                    Your personal travel expert and your guide are always in
                    touch with you.
                  </p>
                </div>
              </div>
              <div className="item">
                <div>
                  <p>Risk-free adventure tour</p>
                </div>
                <div>
                  <p>
                    We work officially. We choose our partners responsibly. We
                    guarantee high level quality services.
                  </p>
                </div>
              </div>
              {open.more != 2 && (
                <div className="more">
                  <p
                    onClick={() => {
                      setOpen({ ...open, more: 2 });
                    }}
                  >
                    More ...
                  </p>
                </div>
              )}
              {open.more == 2 && (
                <>
                  <div className="item">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                        Your personal travel expert and your guide are always in
                        touch with you.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <p>Risk-free adventure tour</p>
                    </div>
                    <div>
                      <p>
                        We work officially. We choose our partners responsibly.
                        We guarantee high level quality services.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={`section ${open.item == 3 ? "active" : ""}`}>
            <div
              className="btn"
              onClick={() => {
                setOpen({ item: 3 });
              }}
            >
              <p>Adventure</p>
            </div>
            <div className="contents">
              <div className="item">
                <div>
                  <p>Talk to human</p>
                </div>
                <div>
                  <p>
                    Your personal travel expert and your guide are always in
                    touch with you.
                  </p>
                </div>
              </div>
              <div className="item">
                <div>
                  <p>Risk-free adventure tour</p>
                </div>
                <div>
                  <p>
                    We work officially. We choose our partners responsibly. We
                    guarantee high level quality services.
                  </p>
                </div>
              </div>
              {open.more != 3 && (
                <div className="more">
                  <p
                    onClick={() => {
                      setOpen({ ...open, more: 3 });
                    }}
                  >
                    More ...
                  </p>
                </div>
              )}
              {open.more == 3 && (
                <>
                  <div className="item">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                        Your personal travel expert and your guide are always in
                        touch with you.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <p>Risk-free adventure tour</p>
                    </div>
                    <div>
                      <p>
                        We work officially. We choose our partners responsibly.
                        We guarantee high level quality services.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Section1>
      <Section2>
        <div className="title">
          <p>Почему выберают нас</p>
        </div>
        <div className="btns">
          <div
            className={`btn ${open.item == 1 ? "active" : ""}`}
            onClick={() => {
              setOpen({...open,  item: 1 });
            }}
          >
            <p>Discovery</p>
          </div>
          <div
            className={`btn ${open.item == 2 ? "active" : ""}`}
            onClick={() => {
              setOpen({...open, item: 2 });
            }}
          >
            <p>Destination Tour</p>
          </div>
          <div
            className={`btn ${open.item == 3 ? "active" : ""}`}
            onClick={() => {
              setOpen({...open, item: 3 });
            }}
          >
            <p>Adventure</p>
          </div>
        </div>
        <div className="items">
          <div className={`section ${open.item == 1 ? "active" : ""}`}>
            <div className="images">
              <div>
                <Image
                  src="/images/home/discover1.png"
                  width={27}
                  height={17}
                  alt="discover"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div>
                <Image
                  src="/images/home/discover2.png"
                  width={27}
                  height={17}
                  alt="discover"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div>
                <Image
                  src="/images/home/discover3.png"
                  width={27}
                  height={17}
                  alt="discover"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="contents">
              <div className="flex">
                <div className="item">
                  <div className="profile">
                    <Image
                      src="/images/home/Layer.png"
                      width={33}
                      height={41}
                      alt="discover"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="texts">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                      Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="profile">
                    <Image
                      src="/images/home/Layer.png"
                      width={33}
                      height={41}
                      alt="discover"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="texts">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                      Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="profile">
                    <Image
                      src="/images/home/Layer.png"
                      width={33}
                      height={41}
                      alt="discover"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="texts">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                      Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="profile">
                    <Image
                      src="/images/home/Layer.png"
                      width={33}
                      height={41}
                      alt="discover"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="texts">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                      Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                      </p>
                    </div>
                  </div>
                </div>
                {open.more == 1 && (
                  <div className="item">
                    <div className="profile">
                      <Image
                        src="/images/home/Layer.png"
                        width={33}
                        height={41}
                        alt="discover"
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                    <div className="texts">
                      <div>
                        <p>Talk to human</p>
                      </div>
                      <div>
                        <p>
                        Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                        </p>
                      </div>
                    </div>
                  </div>
              )}
              {open.more == 1 && (
                  <div className="item">
                    <div className="profile">
                      <Image
                        src="/images/home/Layer.png"
                        width={33}
                        height={41}
                        alt="discover"
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                    <div className="texts">
                      <div>
                        <p>Talk to human</p>
                      </div>
                      <div>
                        <p>
                        Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                        </p>
                      </div>
                    </div>
                  </div>
              )}
              </div>

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
              
            </div>
          </div>
          <div className={`section ${open.item == 2 ? "active" : ""}`}>
          <div className="images">
              <div>
                <Image
                  src="/images/home/discover2.png"
                  width={27}
                  height={17}
                  alt="discover"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div>
                <Image
                  src="/images/home/discover3.png"
                  width={27}
                  height={17}
                  alt="discover"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div>
                <Image
                  src="/images/home/discover1.png"
                  width={27}
                  height={17}
                  alt="discover"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="contents">
              <div className="flex">
                <div className="item">
                  <div className="profile">
                    <Image
                      src="/images/home/Layer.png"
                      width={33}
                      height={41}
                      alt="discover"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="texts">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                      Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="profile">
                    <Image
                      src="/images/home/Layer.png"
                      width={33}
                      height={41}
                      alt="discover"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="texts">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                      Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="profile">
                    <Image
                      src="/images/home/Layer.png"
                      width={33}
                      height={41}
                      alt="discover"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="texts">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                      Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="profile">
                    <Image
                      src="/images/home/Layer.png"
                      width={33}
                      height={41}
                      alt="discover"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="texts">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                      Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                      </p>
                    </div>
                  </div>
                </div>
                {open.more == 1 && (
                  <div className="item">
                    <div className="profile">
                      <Image
                        src="/images/home/Layer.png"
                        width={33}
                        height={41}
                        alt="discover"
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                    <div className="texts">
                      <div>
                        <p>Talk to human</p>
                      </div>
                      <div>
                        <p>
                        Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                        </p>
                      </div>
                    </div>
                  </div>
              )}
              {open.more == 1 && (
                  <div className="item">
                    <div className="profile">
                      <Image
                        src="/images/home/Layer.png"
                        width={33}
                        height={41}
                        alt="discover"
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                    <div className="texts">
                      <div>
                        <p>Talk to human</p>
                      </div>
                      <div>
                        <p>
                        Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                        </p>
                      </div>
                    </div>
                  </div>
              )}
              </div>

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
              
            </div>
          </div>
          <div className={`section ${open.item == 3 ? "active" : ""}`}>
          <div className="images">
              <div>
                <Image
                  src="/images/home/discover3.png"
                  width={27}
                  height={17}
                  alt="discover"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div>
                <Image
                  src="/images/home/discover2.png"
                  width={27}
                  height={17}
                  alt="discover"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div>
                <Image
                  src="/images/home/discover1.png"
                  width={27}
                  height={17}
                  alt="discover"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="contents">
              <div className="flex">
                <div className="item">
                  <div className="profile">
                    <Image
                      src="/images/home/Layer.png"
                      width={33}
                      height={41}
                      alt="discover"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="texts">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                      Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="profile">
                    <Image
                      src="/images/home/Layer.png"
                      width={33}
                      height={41}
                      alt="discover"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="texts">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                      Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="profile">
                    <Image
                      src="/images/home/Layer.png"
                      width={33}
                      height={41}
                      alt="discover"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="texts">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                      Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="profile">
                    <Image
                      src="/images/home/Layer.png"
                      width={33}
                      height={41}
                      alt="discover"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="texts">
                    <div>
                      <p>Talk to human</p>
                    </div>
                    <div>
                      <p>
                      Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                      </p>
                    </div>
                  </div>
                </div>
                {open.more == 1 && (
                  <div className="item">
                    <div className="profile">
                      <Image
                        src="/images/home/Layer.png"
                        width={33}
                        height={41}
                        alt="discover"
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                    <div className="texts">
                      <div>
                        <p>Talk to human</p>
                      </div>
                      <div>
                        <p>
                        Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                        </p>
                      </div>
                    </div>
                  </div>
              )}
              {open.more == 1 && (
                  <div className="item">
                    <div className="profile">
                      <Image
                        src="/images/home/Layer.png"
                        width={33}
                        height={41}
                        alt="discover"
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                    <div className="texts">
                      <div>
                        <p>Talk to human</p>
                      </div>
                      <div>
                        <p>
                        Your personal travel expert and your guide are always in touch with you. guide are always in touch with you.
                        </p>
                      </div>
                    </div>
                  </div>
              )}
              </div>

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
              
            </div>
          </div>
        </div>
      </Section2>
    </>
  );
}
