import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/ {title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.9rem;
  padding-left: 7.3rem;
  a {
    font-size: 1.9rem;
    color: #6254f3;
  }
`;

export default PageNavigation;
