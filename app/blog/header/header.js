

import Image from 'next/image';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { types } from '../../../store/types';
import TextBlog from '../../components/TextBlog';

function Header() {
  const { header } = useSelector(state => state.bloger)
  const { blog } = useSelector((state) => state.blogs);
  const { isEdit: isAdmin } = useSelector((st) => st.bloger);
  const dispatch= useDispatch()
  const onDoubleClickHandler = () => {
    dispatch({
      type: types.editImageBlog,
      payload: {
        header:'open',
        open: true,
      },
    });
  };
  return (
    <Section className={`${isAdmin?'active':''}`}>
      <div className="items">
        <div className="image">
          <div className="elem">Image:</div>
          <div className="value">
            <Image
              src={header.imgUrl}
              title={header.imgTitle}
              width={50}
              height={40}
              layout="responsive"
              objectFit="cover"
              onDoubleClick={onDoubleClickHandler}
            />
          </div>
        </div>
        <div className="texts">
          <div className="item">
            <div className="elem">Title:</div>
            <div className="value">
              <p>{blog.blogName}</p>
            </div>
          </div>
          <div className="item">
            <div className="elem">Small Text: </div>
            <div className="value">
              <TextBlog headContent={header.smallText} />
            </div>
          </div>
          <div className="item">
            <div className="elem">Discription:</div>
            <div className="value">
              <TextBlog headContent={header.discription} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  max-width: 1200px;
  padding: 50px 0;
  margin: auto;
  border-bottom: 3px black dotted;
  display: none;
  &.active{
    display: block;
  }
  .items {
    display: flex;
    flex-flow: row;
    .image {
      width: 50%;
      display: flex;
      .elem {
        font-size: 20px;
        font-weight: 700;
        margin-right: 20px;
      }
      .value {
        width: 400px;
        height: 300px;
      }
    }
    .texts {
        width: 50%;
      .item {
        width: 100%;
        display: flex;
        margin: 10px 0;
        border-bottom: 1px solid black;
        padding: 5px 0;
        .elem {
          font-size: 20px;
          font-weight: 700;
          margin-right: 20px;
          width: 80px ;
        }
        .value {
          max-width: 500px;
        }
      }
    }
  }
`;

export default Header