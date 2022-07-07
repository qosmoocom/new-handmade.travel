import Image from "next/image";
import styled from "styled-components";

const Section = styled.div`
  background: rgba(217, 217, 217, 0.1);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  border-radius: 5px;
  padding: 5px !important;
  margin: 20px 0 !important;
  .image {
    width: 100%;
    height: auto;
    border-radius: 5px;
    img {
      border-radius: 5px;
    }
  }
  .contents {
    margin: 0 !important;
    padding: 0 !important;
    display: block !important;
    .title {
      margin: 10px;
      p {
        text-align: start;
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
      }
    }
    .discr {
      margin: 30px 10px;
      p {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 14px;
      }
    }
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px;
      .price {
        p {
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 600;
          font-size: 25px;
          line-height: 34px;
          color: #111111;
        }
      }
      .duration {
        p {
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 16px;
          color: #111111;
        }
      }
    }
    .button {
      margin-bottom: 5px;
      button {
        background: #4e8c54;
        border-radius: 5px;
        border: none;
        width: 100%;
        padding: 10px;
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;

        color: #ffffff;
      }
    }
  }
`;

export default function Tour() {
  return (
    <Section>
      <div className="image">
        <Image
          src="/images/home/tour.png"
          width={30}
          height={20}
          alt="tour"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="contents">
        <div className="title">
          <p>“Вкусный Узбекистан”</p>
        </div>
        <div className="discr">
          <p>
            Авторская программа вкусных развлечений, аппетитных экскурсий и
            уникальных гастрономических открытий
          </p>
        </div>
        <div className="flex">
          <div className="price">
            <p>$ 1200</p>
          </div>
          <div className="duration">
            <p>Программа тура 8 дней</p>
          </div>
        </div>
        <div className="button">
          <button>Показать программу</button>
        </div>
      </div>
    </Section>
  );
}
