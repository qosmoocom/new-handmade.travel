import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import City from "../city";
import Tour from "../tour";

const Section = styled.div`
  /* padding: 20px; */
  margin-top: 50px;
  scroll-behavior: smooth;
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
  .grid{
    @media (min-width:996px) {
     display: flex; 
     padding: 15px;
     &>div{
      width: 50%;
     }
    }
  }
  .images {
    padding: 35px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    padding-bottom: 0;
    @media (min-width: 996px) {
      padding: 0 15px;
    }
  }
  .items {
    display: flex;
    overflow: hidden;
    scroll-behavior: smooth;
  }
  .section {
    padding: 10px;
    min-width: 100vw;
    @media (min-width: 768px) {
      padding: 10px 35px;
    }
    @media (min-width: 996px) {
      min-width: 100%;
      padding: 10px 15px;
    }
    
    .image {
      padding: 10px;
    }
    .content {
      background: rgba(78, 140, 84, 0.03);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 10px 25px;
      margin-top: 30px;
      padding-bottom: 20px;
      @media (min-width: 996px) {
      margin-top:0;
    }
      .texts {
        p {
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          margin-bottom: 6px;
          &:nth-child(2) {
            font-family: "Noto Sans";
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 16px;
          }
          &:nth-child(3) {
            font-family: "Caveat";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
      .buttons {
        font-size: 30px;
        color: #4e8c54;
        display: flex;
        justify-content: flex-end;
        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;

export default function Reviews() {
  const [open, setOpen] = useState({
    more: 0,
    width: 320,
    screen:320,
  });
  useEffect(() => {
    if(window.outerWidth>=996){
      setOpen({ ...open, width: window.outerWidth/2,screen: window.outerWidth });
    }else{
      setOpen({ ...open, width: window.outerWidth,screen: window.outerWidth });
    }
  }, []);

  const handlerScroll = (x, y) => {
    document.getElementById("reviews-carusel").scrollBy(x, y);
  };
  if (open.screen >= 768) {
    return (
      <Section>
        <div className="title">
          <p>Отзывы наших гостей</p>
        </div>
        <div className="grid">
          <div>
            {" "}
            <div className="images">
              <div className="image">
                <Image
                  src="/images/home/reviews.png"
                  alt="review"
                  width={24}
                  height={21}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="image">
                <Image
                  src="/images/home/reviews.png"
                  alt="review"
                  width={24}
                  height={21}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="items" id="reviews-carusel">
              <div className="section">
                <div className="content">
                  <div className="texts">
                    <p>Sarah James</p>
                    <p>England 21-02-2022</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic
                    </p>
                  </div>
                  <div className="buttons">
                    <FiArrowLeftCircle
                      onClick={() => {
                        handlerScroll(-open.width, 0);
                      }}
                    />
                    <FiArrowRightCircle
                      onClick={() => {
                        handlerScroll(open.width, 0);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="content">
                  <div className="texts">
                    <p>Sarah James2</p>
                    <p>England 21-02-2022</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic
                    </p>
                  </div>
                  <div className="buttons">
                    <FiArrowLeftCircle
                      onClick={() => {
                        handlerScroll(-open.width, 0);
                      }}
                    />
                    <FiArrowRightCircle
                      onClick={() => {
                        handlerScroll(open.width, 0);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="content">
                  <div className="texts">
                    <p>Sarah James3</p>
                    <p>England 21-02-2022</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic
                    </p>
                  </div>
                  <div className="buttons">
                    <FiArrowLeftCircle
                      onClick={() => {
                        handlerScroll(-open.width, 0);
                      }}
                    />
                    <FiArrowRightCircle
                      onClick={() => {
                        handlerScroll(open.width, 0);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bigScreen">
            <div className="image">
              <Image
                src="/images/home/reviews.png"
                alt="review"
                width={24}
                height={21}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </Section>
    );
  }
  return (
    <Section>
      <div className="title">
        <p>Отзывы наших гостей</p>
      </div>
      <div className="items" id="reviews-carusel">
        <div className="section">
          <div className="image">
            <Image
              src="/images/home/reviews.png"
              alt="review"
              width={24}
              height={21}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="content">
            <div className="texts">
              <p>Sarah James</p>
              <p>England 21-02-2022</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </p>
            </div>
            <div className="buttons">
              <FiArrowLeftCircle
                onClick={() => {
                  handlerScroll(-open.width, 0);
                }}
              />
              <FiArrowRightCircle
                onClick={() => {
                  handlerScroll(open.width, 0);
                }}
              />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="image">
            <Image
              src="/images/home/reviews.png"
              alt="review"
              width={24}
              height={21}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="content">
            <div className="texts">
              <p>Sarah James2</p>
              <p>England 21-02-2022</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </p>
            </div>
            <div className="buttons">
              <FiArrowLeftCircle
                onClick={() => {
                  handlerScroll(-open.width, 0);
                }}
              />
              <FiArrowRightCircle
                onClick={() => {
                  handlerScroll(open.width, 0);
                }}
              />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="image">
            <Image
              src="/images/home/reviews.png"
              alt="review"
              width={24}
              height={21}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="content">
            <div className="texts">
              <p>Sarah James3</p>
              <p>England 21-02-2022</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </p>
            </div>
            <div className="buttons">
              <FiArrowLeftCircle
                onClick={() => {
                  handlerScroll(-open.width, 0);
                }}
              />
              <FiArrowRightCircle
                onClick={() => {
                  handlerScroll(open.width, 0);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
