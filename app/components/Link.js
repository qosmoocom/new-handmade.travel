import { useDispatch } from "react-redux";
import Link from "next/link";
import { types } from "../../store/types";
import { AiTwotoneEdit } from "react-icons/ai";
const MyLink = ({ children = "", href = "" }) => {
  const mouseMoveHandler = () => {};
  return (
    <span onMouseMove={mouseMoveHandler}>
      <Link href={href}>{children}</Link>
    </span>
  );
};
export default MyLink;
