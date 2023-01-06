import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="./images/logo.png" alt="logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 6rem;
  height: 8.5rem;
  background-color: #fefeff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 3.9rem;
  }
`;

export default Header;
