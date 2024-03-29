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
    @media (min-width: 1200px) {
      display: block;
    }
  }
`;
const ThisIsLink = ({
  children = "",
  href,
  className,
  group = "",
  name = "",
  index,
  hrefName,
  itIsClassName,
}) => {
  const dispatch = useDispatch();
  const { isEdit: isAdmin } = useSelector((st) => st.admin);
  const clickHandler = () => {
    dispatch({
      type: types.editLink,
      payload: {
        open: true,
        group,
        name,
        href,
        index,
        hrefName,
        itIsClassName,
      },
    });
  };

  return (
    <Wrapper>
      {isAdmin && <AiFillEdit className="edit__icon" onClick={clickHandler} />}
      <a href={href} className={className}>
        {children}
      </a>
    </Wrapper>
  );
};
export default ThisIsLink;
