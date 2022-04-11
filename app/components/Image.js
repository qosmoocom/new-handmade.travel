import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../store/types";
import styled from "styled-components";
import { useEffect, useState } from "react";
const Wrapper = styled.span`
  position: relative;
  .edit__icon {
    cursor: default;
    display: none;
    position: absolute;
    left: -15px;
    top: 45%;
    color: #cc5a1a;
    font-size: 20px;
  }
  /* &:hover .edit__icon {
    @media (min-width: 1200px) {
      display: block;
    }
  } */
`;
export default function Index({
  src: imgSrc,
  width,
  height,
  alt = "",
  title = "",
  objectFit = "",
  layout = "",
  itIsClassName = "",
  srcDataName = "",
  altDataName = "",
  titleDataName = "",
  id = "",
  group = "",
  list = "",
  name = "",
  parentId = "",
  childId = "",
  priority,
}) {
  const { isEdit: isAdmin } = useSelector((st) => st.admin);
  const dispatch = useDispatch();
  const [src, setSrc] = useState("");
  useEffect(() => {
    setSrc(imgSrc);
  }, [imgSrc]);
  const doubleClickHandler = () => {
    if (isAdmin) {
      dispatch({
        type: types.editImage,
        payload: {
          open: true,
          alt,
          title,
          href: src,
          itIsClassName,
          srcDataName,
          altDataName,
          titleDataName,
          group,
          id,
          parentId,
          childId,
          list,
          name,
        },
      });
    }
  };


  
  if (layout === "fill" && src) {
    return (
      <>
        {isAdmin ? (
          <img
            src={src}
            alt={alt || ""}
            title={title || ""}
            onDoubleClick={doubleClickHandler}
            style={{ width: "100%", height: "100%", objectFit: objectFit }}
          />
        ) : (
          <Image
            src={src}
            alt={alt || ""}
            title={title || ""}
            priority={priority === "important"}
            objectFit={objectFit}
            layout={layout}
            onDoubleClick={doubleClickHandler}
            loading="eager"
          />
        )}
      </>
    );
  }

  const myLoader = ({ src, width, quality }) => {
    return `https://okeey.uz/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <Wrapper>
      {src && (
        <>
          {isAdmin ? (
            <img
              onDoubleClick={doubleClickHandler}
              style={{ width: "100%", height: "100%", objectFit: objectFit }}
              src={src}
              // style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <Image
              loader={myLoader}
              src={src}
              key={src}
              width={width}
              height={height}
              onDoubleClick={doubleClickHandler}
              alt={alt}
              title={title}
              priority={priority === "important"}
              objectFit={objectFit}
              layout={layout}
              loading="eager"
              unoptimized="false"
            />
          )}
        </>
      )}
    </Wrapper>
  );
}
