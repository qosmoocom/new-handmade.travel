import Image from "next/image";
import styled from "styled-components";

const Section = styled.div`
  border-radius: 5px;
  position: relative;
  /* width: 100%; */
    img {
      border-radius: 10px;
    }
  .texts {
    background: rgba(78, 140, 84, 0.5);
    width: 150px;
    position: absolute;
    bottom: 3%;
    left: 3%;
    padding: 5px;
    p {
      font-family: "Oswald";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 44px;
      color: #fff;
      &:nth-child(2) {
        font-family: "Oswald";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
`;

function City({className, city}) {
  return (
    <Section className={className}>
      <Image
        src={city?.image ||'/images/home/city1.png'}
        width={30}
        height={30}
        layout="fill"
        alt="city"
        objectFit="cover"
        className={className}
      />
      <div className="texts">
        <p>{city?.name||''} </p>
        <p>{city?.count||''} Tours</p>
      </div>
    </Section>
  );
}

export default City;
