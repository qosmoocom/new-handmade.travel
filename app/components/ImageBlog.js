import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { types } from "../../store/types";

const Wrapper = styled.div``;

function ImageBlog({ src, width, height, alt, layout, objectFit, item, title }) {
  const {isEdit:isAdmin}=useSelector(st=>st.bloger)
    const dispatch = useDispatch();

  const onDoubleClickHandler = () => {
    if (isAdmin) {
      dispatch({
        type: types.editImageBlog,
        payload: {
            open: true,
            name: item.name,
            isCreated: true,
        },
      });
      
    }
  };
  return (
    <Image
      src={src}
      width={width}
      height={height}
      layout={layout}
      objectFit={objectFit}
      alt={alt}
      title={title||''}
      onDoubleClick={onDoubleClickHandler}
    />
  );
}

export default ImageBlog;
