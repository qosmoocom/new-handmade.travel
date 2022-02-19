import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { types } from "../../store/types";
import styled from "styled-components";
import parse from "html-react-parser";
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
    @media (min-width: 1200px) {
      display: block;
    }
  }
`;
const Typography = ({
  children = "",
  group = "",
  name = "",
  itIsClassName = "",
  id = "",
  parentId = "",
  list = "",
  childId = "",
}) => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({
      type: types.editText,
      payload: {
        group,
        name,
        open: true,
        itIsClassName,
        id,
        parentId,
        list,
        childId,
      },
    });
  };

  return (
    <Wrapper>
      <AiFillEdit className="edit__icon" onClick={openModal} />
      <span>{parse(children.toString())}</span>
    </Wrapper>
  );
};
export default Typography;
