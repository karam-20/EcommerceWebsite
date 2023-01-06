import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to,</p>
            <h1>
              <span className="hero-heading-start">the </span>
              {name}
            </h1>
            <p>
              Hamare yha pe sabhi branch ke shivani ke vaani Notes available h
              wo bhi ekdum kifaayati daam me, kharidne keliye niche diye gye
              shop now button pe click kre and get your vaani notes now!
            </p>
            <NavLink to="/products">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          {/* hero section image */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="heroimage"
                className="img-style"
              ></img>
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 11rem 0rem;
  margin-bottom: 7rem;
  .grid {
    margin: 0 30px;
  }
  .hero-heading-start {
    color: #6861ef;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
      padding-right: 10px;
      font-weight: 400;
      font-size: 15px;
      text-transform: capitalize;
    }
    h1 {
      text-transform: capitalize;
      font-weight: 600;
      font-size: 60px;
    }
    .intro-data {
      margin-bottom: 0;
      font-weight: 500;
      font-size: 22px;
    }
  }
  .hero-section-image {
    width: 75%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 60%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 70%;
      top: -3rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
    margin-left: 70px;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 5rem;
    }
    .container {
      margin-top: -10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
