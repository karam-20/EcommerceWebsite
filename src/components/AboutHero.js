import React from "react";
import styled from "styled-components";

const AboutHero = () => {
  return (
    <Wrapper>
      <div class="context">
        <h1>About us</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .context {
    position: relative;
    width: 100%;
    height: 45vh;
    background: #4e54c8;
    background-color: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  }
  .context h1 {
    position: absolute;
    top: 35%;
    left: 40%;
    color: white;
    font-weight: 600;
  }
`;

export default AboutHero;
