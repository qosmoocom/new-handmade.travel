import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { types } from "../../store/types";

export default function Img(props) {
  const dispatch = useDispatch();
  const doubleClickHandler = () => {
    const { src, alt, title } = props;
    // console.log(src);
    dispatch({
      type: types.updateImage,
      payload: { open: true, src, alt, title },
    });
  };
  return (
    <span onDoubleClick={doubleClickHandler}>
      <Image {...props} />
    </span>
  );
}
