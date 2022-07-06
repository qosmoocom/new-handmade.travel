import Image from "next/image";
import styled from "styled-components";

const Section = styled.div`
  background: rgba(78, 140, 84, 0.05);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  .contents {
    .texts {
      p {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        @media screen {
         font-size : 28px;
        }
        &:nth-child(2) {
          font-weight: 300;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
    .btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 10px;
      p {
        font-family: "Oswald";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
        &:nth-child(2) {
          line-height: 27px;
          text-decoration-line: underline;

          color: #4e8c54;
        }
      }
    }
  }
`;

export default function Blog() {
  return (
    <Section>
      <div className="image">
        <Image
          src="/images/home/blog.png"
          width={27}
          height={30}
          alt="blog"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="contents">
        <div className="texts">
          <p>DANCE ADVENTURES IN UZBEKISTAN</p>
          <p>
            Traveling to Uzbekistan is quite a bold act and a sign of good
            taste. What about dancing? Dance, learn to dance, meet other dance
            lovers, explore new destinations where people dance.{" "}
          </p>
        </div>
        <div className="btns">
          <p>04.06.2022</p>
          <p>read more ...</p>
        </div>
      </div>
    </Section>
  );
}
