import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../store/types";
import styled from "styled-components";
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
  src = "",
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

  if (layout === "fill") {
    return (
      <Image
        src={src}
        key = {src}
        alt={alt || ""}
        title={title || ""}
        priority={priority === "important"}
        objectFit={objectFit}
        layout={layout}
        onDoubleClick={doubleClickHandler}
      />
    );
  }
  return (
    <Wrapper onDoubleClick={doubleClickHandler}>
      {/* <AiFillEdit className="edit__icon" /> */}
      <Image
        src={src}
        key = {src}
        width={width}
        height={height}
        alt={alt}
        title={title}
        priority={priority === "important"}
        objectFit={objectFit}
        layout={layout}
      />
    </Wrapper>
  );
}
