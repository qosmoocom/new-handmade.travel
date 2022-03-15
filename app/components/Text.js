import { useRouter } from 'next/router';
import { AiFillEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../store/types';
import styled from 'styled-components';
import parse from 'html-react-parser';
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
  children = '',
  group = '',
  name = '',
  itIsClassName = '',
  id = '',
  parentId = '',
  list = '',
  childId = '',
  type = '',
  style = {},
}) => {
  const dispatch = useDispatch();
  const { isEdit: isAdmin } = useSelector((st) => st.admin);
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

  if (type === 'important') {
    return (
      <Wrapper>
        {isAdmin && (
          <AiFillEdit
            className="edit__icon"
            style={style}
            onClick={openModal}
          />
        )}
        <span>{children}</span>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {isAdmin && (
        <AiFillEdit className="edit__icon" style={style} onClick={openModal} />
      )}
      <span>{parse(children.toString())}</span>
    </Wrapper>
  );
};
export default Typography;
