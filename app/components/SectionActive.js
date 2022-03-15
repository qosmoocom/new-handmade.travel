import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { types } from '../../store/types';
export default function SectionActive({ name }) {
  const dispatch = useDispatch();
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === name
  );
  const { isEdit: thisIsNotClient } = useSelector((st) => st.admin);

  const onChangeHandler = (event) => {
    const { checked } = event.target;
    const payload = {
      checkbox_value: checked,
      name,
    };
    dispatch({ type: types.componentIsActive, payload });
  };

  if (!thisIsNotClient) return null;
  return (
    <Wrapper>
      <div className="container py-3">
        <label htmlFor={name}>
          {name} is {val?.isActive ? '' : 'not '}active!{' '}
        </label>
        <input
          id={name}
          onChange={onChangeHandler}
          checked={val?.isActive}
          type={'checkbox'}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  z-index: 2221212;
  label {
    cursor: pointer;
    min-width: 150px;
    display: inline-block;
  }
`;
