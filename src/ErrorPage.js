import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <img className="errorimg" src="./images/error.png"></img>
        </div>
        <div>
          <NavLink to="/">
            <Button>GO BACK TO HOME</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .errorimg {
    width: 50rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
  }
`;

export default ErrorPage;
