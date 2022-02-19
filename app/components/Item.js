import { useState } from "react";
import styled from "styled-components";
import { GrFormAdd } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { types } from "./../../store/types";
import Text from "./Text";

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
      flex-direction: ${({ href }) => (href ? "column" : "row")};
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
  href = "",
  target = "",
}) {
  const dispatch = useDispatch();
  const [isItEdit, setIsItEdit] = useState(false);
  const handleDel = () =>
    dispatch({ type: types.deleteItem, payload: { group, itemId } });

  const handleAdd = () =>
    dispatch({ type: types.addedItem, payload: { group, itemId } });

  if (href && target) {
    if (isItEdit) {
      return (
        <Wrapper className={className} href={href}>
          <span className="child_item">
            <div>
              <GrFormAdd className="child_icon" onClick={handleAdd} />
              <AiFillDelete className="child_icon" onClick={handleDel} />
              <label style={{ paddingLeft: "5px", minWidth: "80px" }}>
                <input
                  type="checkbox"
                  checked={isItEdit}
                  onChange={(e) => setIsItEdit(e.target.checked)}
                />
              </label>
            </div>
            <span style={{ margin: "2px" }}>
              <Text name="link" group={group} id={itemId}>
                link
              </Text>
            </span>
          </span>
          {className === "li" ? <li>{children}</li> : children}
        </Wrapper>
      );
    }
    return (
      <Wrapper className={className} href={href}>
        <a
          style={{ display: "flex", alignItems: "center" }}
          href={href}
          target={target}
        >
          <span className="child_item">
            <div>
              <GrFormAdd className="child_icon" onClick={handleAdd} />
              <AiFillDelete className="child_icon" onClick={handleDel} />
              <label style={{ paddingLeft: "5px", minWidth: "80px" }}>
                <input
                  type="checkbox"
                  checked={isItEdit}
                  onChange={(e) => setIsItEdit(e.target.checked)}
                />
              </label>
            </div>
            <span style={{ margin: "2px" }}>
              <Text name="link" group={group} id={itemId}>
                link
              </Text>
            </span>
          </span>
          {className === "li" ? <li>{children}</li> : children}
        </a>
      </Wrapper>
    );
  }
  return (
    <Wrapper className={className}>
      <span className="child_item">
        <GrFormAdd className="child_icon" onClick={handleAdd} />
        <AiFillDelete className="child_icon" onClick={handleDel} />
      </span>
      {className === "li" ? <li>{children}</li> : children}
    </Wrapper>
  );
}
