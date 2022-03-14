/* eslint-disable react-hooks/exhaustive-deps */
import Axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loader from '../../../app/components/Loader';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loaderOff, loaderOn } from '../../../store/reducer/loaderReducer';
export default function Index() {
  const id = useRouter().query.id;
  const [cssCode, setCssCode] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (id) {
        try {
          const res = await Axios.get(`/api/style/${id}`);
          const data = await res.data;
          setCssCode(data.styles);
          console.log('css code set global style:', data);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [id]);

  const onSave = async () => {
    dispatch(loaderOn());
    try {
      const res = await Axios.put(`/api/style/${id}`, {
        tourID: id,
        styles: cssCode,
      });
      const data = await res.data;
      console.log('update tour style:data:', data);
      dispatch(loaderOff());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <textarea
        value={cssCode}
        onChange={(e) => setCssCode(e.target.value)}
        className="textarea"
      />
      <div className="left-btns">
        <button onClick={onSave}>save</button>
      </div>
      <Loader />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  .textarea {
    width: 100%;
    height: 100vh;
    font-size: 18px;
    outline: none;
    border: none;
    padding: 0 0 10px 10px;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .left-btns {
    position: fixed;
    right: 10px;
    bottom: 50px;
    z-index: 22;
    button {
      color: #fff;
      background: rgb(0, 0, 0);
      padding: 10px 20px;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      border-radius: 6px;
      transition: 0.4s;
      margin-right: 10px;
      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.2);
      }
    }
  }

  overflow: hidden;
  height: 100vh;
`;
