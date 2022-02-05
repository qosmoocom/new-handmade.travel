import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
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
const Typography = ({
  children = "",
  group = "",
  name = "",
  itIsClassName = "",
}) => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({
      type: types.editText,
      payload: { group, name, open: true, itIsClassName },
    });
  };

  return (
    <Wrapper>
      <AiFillEdit className="edit__icon" onClick={openModal} />
      <span>{children}</span>
    </Wrapper>
  );
};
export default Typography;
