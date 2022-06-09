import styled from "styled-components";
import { BsFillLockFill, BsUnlockFill } from "react-icons/bs";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useEffect, useState } from "react";
const Wrapper = styled.div`
  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
  min-height: 100vh;
  * {
    font-family: "Comfortaa", "cursive", sans-serif;
  }
  .login {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  }
  .form {
    position: relative;
    z-index: 1;
    background: #ffffff;
    border-radius: 10px;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
  }
  .form input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form input:focus {
    background: #dbdbdb;
  }
  .form button {
    text-transform: uppercase;
    outline: 0;
    background: #4b6cb7;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    &.disabled {
      transition: 0.5s;
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
  .form button:active {
    background: #395591;
  }
  .form span {
    font-size: 75px;
    color: #4b6cb7;
  }
`;

export default function LogIn(props) {
  const { state, onChange, onSubmit } = props;
  const [verified,setVerified] = useState(false)
  const {
    values: { username, password },
  } = state;
  const recaptchaRef = React.createRef();
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(recaptchaRef);
      
  //   },[1000])
  // }, [recaptchaRef]);
  const handlerCaptcha = (e) => {
    setVerified(e)
  }

  return (
    <Wrapper>
      <div className="login">
        <div className="form">
          <form className="login-form" onSubmit={onSubmit}>
            <span className="material-icons">
              <BsFillLockFill />
            </span>
            <input
              type="text"
              placeholder="User"
              name="username"
              value={username}
              onChange={onChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LevNhEgAAAAACyA52uneo32Nue0vrwZ3YFEIpYn"
              onChange={handlerCaptcha}
            />
            <button disabled={!(username && password && verified)}>
              login
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
