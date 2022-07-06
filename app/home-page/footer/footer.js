import styled from "styled-components";

const Section = styled.div`
  background: rgba(217, 217, 217, 0.2);
  border-top: 1px solid #000000;
  padding: 20px;
  p {
    padding: 0;
  }
  .flex {
    .section {
      margin: 20px 0;
      .logo {
        p {
          font-family: "Caveat";
          font-style: normal;
          font-weight: 700;
          font-size: 35px;
          line-height: 63px;
          span {
            color: #4e8c54;
            font-family: "Caveat";
          }
        }
      }
      .content {
        p {
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 27px;
        }
      }
      .title {
        p {
          font-family: "Oswald";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 39px;
        }
      }
      .texts {
        p {
          font-family: "Oswald";
          font-style: normal;
          font-weight: 300;
          font-size: 20px;
          line-height: 39px;
        }
      }
      .links {
        display: flex;
        justify-content: space-between;
        width: 80%;
        a {
          font-family: "Oswald";
          font-style: normal;
          font-weight: 300;
          font-size: 20px;
          line-height: 39px;
          text-decoration: underline;
        }
      }
      .form {
        form {
          input {
            width: 100%;
            border-radius: 0;
            border: 0.5px solid #193c6e;
            padding: 5px;
            outline: none;
            margin: 3px 0;
            &:nth-child(2) {
              font-family: "Oswald";
              font-style: normal;
              font-weight: 300;
              font-size: 18px;
              line-height: 27px;
              background: rgba(78, 140, 84, 0.7);
              color: #ffffff;
              border: none;
            }
          }
        }
      }
    }
  }
  .bottom {
    p {
      font-family: "Oswald";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 30px;

      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export default function Footer() {
  return (
    <Section>
      <div className="flex">
        <div className="section">
          <div className="logo">
            <p>
              <span>Handmade</span>.travel
            </p>
          </div>
          <div className="content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </p>
          </div>
        </div>
        <div className="section">
          <div className="title">
            <p>Contacts:</p>
          </div>
          <div className="texts">
            <p>+998 66 231 05 48 - Uzbekistan</p>
            <p>info@handmade.travel</p>
            <p>Plaza kus saroy 1, Samarkand 140157</p>
          </div>
          <div className="links">
            <a>telegram</a>
            <a>WhatsApp</a>
            <a>Faceook</a>
          </div>
        </div>
        <div className="section">
          <div className="title">
            <p>Menu:</p>
          </div>
          <div className="links">
            <a>Туры</a>
            <a>Города</a>
            <a>Блог</a>
          </div>
        </div>
        <div className="section">
          <div className="title">
            <p>News, Promotions, Discounts:</p>
          </div>
          <div className="form">
            <form>
              <input type="email" placeholder="E-mail:" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>© 2022 handmade.travel by Silk Road Destinations</p>
      </div>
    </Section>
  );
}
