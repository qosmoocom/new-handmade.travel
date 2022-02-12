import styled from "styled-components";
import { GrFormAdd } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { types } from "./../../store/types";

const Wrapper = styled.div`
  position: relative;
  &:hover {
    @media (min-width: 1200px) {
      transition: border 0.3s;
      border: 2px solid blue;
    }
  }
  .child_item {
    position: absolute;
    display: none;
    left: -70px;
    top: 0px;
    transform: translateY(-50%);
    background: #fff;
    padding: 10px;
    z-index: 3;
    border: 1px solid #000;
  }
  &:hover .child_item {
    @media (min-width: 1200px) {
      display: flex;
    }
  }
  .child_icon {
    font-size: 25px;
    cursor: pointer;
    color: red;
  }
`;
export default function Item({
  children = "",
  className = "",
  group = "",
  itemId = "",
}) {
  const dispatch = useDispatch();

  const handleDel = () =>
    dispatch({ type: types.deleteItem, payload: { group, itemId } });

  const handleAdd = () =>
    dispatch({ type: types.addedItem, payload: { group, itemId } });

  return (
    <Wrapper className={className}>
      <span className="child_item">
        <GrFormAdd className="child_icon" onClick={handleAdd} />
        <AiFillDelete className="child_icon" onClick={handleDel} />
      </span>
      {children}
    </Wrapper>
  );
}
