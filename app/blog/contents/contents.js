import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { types } from "../../../store/types";
import ImageBlog from "../../components/ImageBlog";
import TextBlog from "../../components/TextBlog";
import Item from "../item/item";

const Wrapper = styled.div`
  padding: 50px 0;
  max-width: 1200px;
  margin: auto;
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 40px;
  }
  h3 {
    font-size: 30px;
  }
  h4 {
    font-size: 20px;
  }
  .content-item {
  }
  .text {
    max-width: 700px;
    margin: 20px auto;
    text-align: justify;
    
  }
  .image {
    display: flex;
    .img-half {
      width: 50%;
    }
    .img {
      width: 100%;
    }
    .double {
      width: 50%;
    }
    img {
      margin: 10px !important;
    }
  }
`;

function Contents() {
  const state = useSelector((state) => state.bloger);

  
  let content = [];
  let index;
  for (index in state.data) {
    let item = state.data[index][0];

    if (item.type == "text") {
      content.push(
        <Item item={item} key={index}>
        <div className="content-item text">
          <item.typeText>
              <TextBlog data={item} />
            </item.typeText>
        </div>
          </Item>
      );
    }
    if (item.type == "image") {
      if (item.url2 && item.url3) {
        content.push(
          <Item item={item} key={index}>
            <div className="content-item image">
              <div className="img-half">
                <ImageBlog
                  item={item}
                  src={item.url1}
                  width={50}
                  height={50}
                  layout="responsive"
                  alt={item.alt1}
                  title={item.title1}
                  objectFit="cover"
                />
              </div>
              <div className="double">
                {item.url2 && (
                  <ImageBlog
                    item={item}
                    src={item.url2}
                    width={50}
                    height={25}
                    layout="responsive"
                    alt={item.alt2}
                    title={item.title2}
                    objectFit="cover"
                  />
                )}
                {item.url3 && (
                  <ImageBlog
                    item={item}
                    src={item.url3}
                    width={50}
                    height={25}
                    layout="responsive"
                    alt={item.alt3}
                    title={item.title3}
                    objectFit="cover"
                  />
                )}
              </div>
            </div>
          </Item>
        );
      } else if (item.url2 && !item.url3) {
        content.push(
          <Item item={item} key={index}>
            <div className="content-item image" >
              <div className="img-half">
                <ImageBlog
                  item={item}
                  src={item.url1}
                  width={50}
                  height={50}
                  layout="responsive"
                  alt={item.alt1}
                  title={item.title1}
                  objectFit="cover"
                />
              </div>
              <div className="img-half">
                <ImageBlog
                  item={item}
                  src={item.url2}
                  width={50}
                  height={50}
                  layout="responsive"
                  alt={item.alt2}
                  title={item.title2}
                  objectFit="cover"
                />
              </div>
            </div>
          </Item>
        );
      } 
      else {
        content.push(
          <Item item={item} key={index}>
            <div className="content-item image">
              <div className="img">
                <ImageBlog
                  item={item}
                  src={item.url1}
                  width={50}
                  height={25}
                  layout="responsive"
                  alt={item.alt1}
                  title={item.title1}
                  objectFit="cover"
                />
              </div>
            </div>
          </Item>
        );
      }
    }

  }
  return <Wrapper id="wrapper">{content}</Wrapper>;
}

export default Contents;
