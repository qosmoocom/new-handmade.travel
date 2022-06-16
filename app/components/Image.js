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
  sectionName,
}) {
  const { isEdit: isAdmin } = useSelector((st) => st.admin);
  const dispatch = useDispatch();
  const [src, setSrc] = useState("");
  const [img, setImg] = useState(false);

  useEffect(() => {
    setSrc(imgSrc);
  }, [imgSrc]);
  const doubleClickHandler = (e) => {
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
          sectionName,
        },
      });
    }
  };

  setTimeout(() => {
    setImg(true);
  }, [1000]);

  const myLoader = ({ src, width, quality }) => {
    return `https://handmade.travel${src}?w=${width}&q=${quality || 75}`;
  };

  if (img) {
    if (layout === "fill" && src) {
      return (
        <>
          {isAdmin ? (
            <img
              src={src}
              alt={alt || ""}
              title={title || ""}
              onDoubleClick={(e) => doubleClickHandler(e)}
              style={{ width: "100%", height: "100%", objectFit: objectFit }}
            />
          ) : (
            <Image
              loader={myLoader}
              src={src}
              alt={alt || ""}
              title={title || ""}
              priority={priority === "important"}
              objectFit={objectFit}
              layout={layout}
              onDoubleClick={doubleClickHandler}
              loading="eager"
              // quality={10}
            />
          )}
        </>
      );
    }

    return (
      <Wrapper>
        {src && (
          <>
            {isAdmin ? (
              <img
                onDoubleClick={(e) => doubleClickHandler(e)}
                style={{ width: "100%", height: "100%", objectFit: objectFit }}
                src={src}
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
                // quality={10}
              />
            )}
          </>
        )}
      </Wrapper>
    );
  } else return <div></div>;
}
