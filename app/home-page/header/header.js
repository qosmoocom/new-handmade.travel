import Image from "next/image";
import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";
// import "./header.css";

const Header = () => {
  return (
    <Section>
      <div className="logo">
        <Image src="/images/landing/Navbar.png" width={30} height={30} />
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
    </Section>
  );
};

const Section = styled.div`
  * {
    font-family: "Mulish";
    font-weight: 600;
    font-size: 16px;
    color: #515151;
  }
  display: flex;
  justify-content: space-between;
  max-width: 1250px;
  margin: 30px auto;
  align-items: center;

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
`;

export default Header;
