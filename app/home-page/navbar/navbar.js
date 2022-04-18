import Image from "next/image";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";

const Section = styled.div`
  * {
    font-family: "Mulish";
    font-weight: 600;
    font-size: 13px;
    color: #515151;
    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    max-width: 1250px;
    margin: 0 auto;
    padding: 30px;
    align-items: center;
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }

    .logo {
      display: flex;
      align-items: center;
      p {
        color: #000;
      }
    }
    .menus {
      ul {
        display: flex;
        li {
          list-style: none;
          margin-left: 35px;
        }
        .active {
          color: #f3692e;
        }
      }
    }
    .search-auth {
      display: flex;
      align-items: center;
      button {
        background-color: inherit;
        border: none;
        margin: 0 15px;
      }
      .search {
        font-size: 25px;
        padding-top: 10px;
      }
      .login {
        padding: 10px 25px;
        background-color: #f58634;
        border-radius: 8px;
        color: #fff;
      }
    }
  }
  .navbar-mobi {
    padding: 20px;
    background-color: #fff;
    @media (min-width: 768px) {
      display: none;
    }
    .logo {
      display: flex;
      align-items: center;
      display: flex;
      justify-content: space-between;
      & > div {
        display: flex;
        align-items: center;
        p {
          color: #000;
          font-size: 10px;
          line-height: 13px;
          margin-left: 6px;
          font-weight: 700;
        }
      }
    }
    .menu {
      background-color: #fff;
      position: absolute;
      top: 0;
      left: -100%;
      transition-duration: 0.5s;
      width: 100%;
      padding: 20px;
      z-index: 999;
      height: 100vh;
      .logo {
        display: flex;
        align-items: center;
        display: flex;
        justify-content: space-between;
        & > div {
          display: flex;
          align-items: center;
          p {
            color: #000;
            font-size: 10px;
            line-height: 13px;
            margin-left: 6px;
            font-weight: 700;
          }
        }
      }
      .menus {
        ul {
          margin-top: 20px;
          margin-bottom: 30px;
          li {
            list-style: none;
            padding: 10px 0;
            text-align: center;
            border-bottom: 1px solid #515151;
          }
          .active {
            color: #f3692e;
          }
        }
      }
      .search-auth {
        display: flex;
        justify-content: space-around;
        button {
          background-color: inherit;
          margin: 0 15px;
          padding: 10px 25px;
          border-radius: 8px;
          border: 1px solid #f58634;
        }
        .search {
          font-size: 25px;
        }
        .login {
          padding: 10px 25px;
          background-color: #f58634;
          border-radius: 8px;
          color: #fff;
        }
      }
    }
    .active {
      top: 0;
      left: 0;
    }
  }
`;

const Navbar = () => {
  const [active, setActive] = useState(false);

  const Handler = () => {
    console.log("salom");
    if (active) {
      setActive(false);
    }
    if (!active) {
      setActive(true);
    }
  };
  return (
    <Section>
      <div className="navbar">
        <div className="logo">
          <Image src="/images/Navbar.png" width={30} height={30} />
          <p>Handmade.travel</p>
        </div>
        <div className="menus">
          <ul>
            <li className="active">HOME</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Tours</li>
          </ul>
        </div>
        <div className="search-auth">
          <button className="search">
            <BiSearchAlt2 size={28} />
          </button>
          <button className="signUp">Sign Up</button>
          <button className="login">Login</button>
        </div>
      </div>
      <div className="navbar-mobi">
        <div className="logo">
          <div>
            <Image src="/images/Navbar.png" width={30} height={30} />
            <p>HANDMADE.TRAVEL</p>
          </div>
          <div onClick={Handler}>
            <Image src="/images/nav-menu.webp" width={23} height={20} />
          </div>
        </div>
        <div className={`${active ? "active" : ""} menu`}>
          <div className="logo">
            <div>
              <Image src="/images/Navbar.png" width={30} height={30} />
              <p>HANDMADE.TRAVEL</p>
            </div>
            <div onClick={Handler}>
              <Image src="/images/nav-menu.webp" width={23} height={20} />
            </div>
          </div>
          <div className="menus">
            <ul>
              <li className="active">HOME</li>
              <li>About</li>
              <li>Blogs</li>
              <li>Tours</li>
            </ul>
          </div>
          <div className="search-auth">
            <button className="signUp">Sign Up</button>
            <button className="login">Login</button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Navbar;
