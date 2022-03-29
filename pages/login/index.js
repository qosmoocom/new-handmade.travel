import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';

// import redux actions
import { userLogin } from '../../store/reducer/usersReducer';

// import componets
import LogIn from '../../app/components/admin/LogIn';

export default function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  // defaultState
  const defaultState = {
    values: {
      username: '',
      password: '',
    },
  };
  const [loginState, setLoginState] = useState(defaultState);

  // submit handle
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { values } = loginState;
    dispatch(userLogin(values));

    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem('isLoginMe'));
      // if (data && data.role === 'admin') {
      //   router.push('/admin');
      // } else if (data && data.role === 'moderator') {
      //   router.push('/admin');
      // } else {
      // }
      router.push("/admin");
    }, 500);
  };

  const getUser = async () => {
    const token = localStorage.getItem('token');
    const api = `/api/user/me`;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    try {
      const res = await Axios.get(api, config);
      const data = await res.data;
      // username and role on save in the localStorage
      localStorage.setItem('isLoginMe', JSON.stringify(data));
    } catch (error) {}
  };

  // change handle form
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setLoginState((oldState) => ({
      ...oldState,
      values: { ...oldState.values, [name]: value },
    }));
  };

  return (
    <div className="log-in">
      <LogIn
        state={loginState}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
}
