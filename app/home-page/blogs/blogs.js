import styled from "styled-components";
import Blog from "../blog";

const Section = styled.div`
  #blog_home {
    margin-bottom: 50px;
    .title {
      p {
        font-family: "Caveat";
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 60px;
        text-align: center;
      }
    }
    .items{
        padding: 20px;
    }
  }
`;

export default function Blogs() {
  return (
    <Section>
      <div id="blog_home">
        <div className="title">
          <p>Блог</p>
        </div>
        <div className="items">
          <Blog />
        </div>
      </div>
    </Section>
  );
}
