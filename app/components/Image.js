import Image from "next/image";
import { AiFillEdit } from "react-icons/ai";
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
  &:hover .edit__icon {
    display: block;
    &:hover {
      /* color: #333; */
    }
  }
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
}) {
  const dispatch = useDispatch();
  const doubleClickHandler = () => {
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
      },
    });
  };
  return (
    <Wrapper onDoubleClick={doubleClickHandler}>
      {/* <AiFillEdit className="edit__icon" /> */}
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        title={title}
        priority
        objectFit={objectFit}
        layout={layout}
      />
    </Wrapper>
  );
}
