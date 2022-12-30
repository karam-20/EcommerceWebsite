import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column short-content">
          <div>
            <h3 className="short-footer-heading">Ready to get started ?</h3>
            <h3 className="short-footer-heading">Talk to us today</h3>
          </div>
          <Button>
            <NavLink to="/contact">Get started</NavLink>
          </Button>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="column-1">
            <h3>Karampal Jangir</h3>
            <h3>A new type of storefront.</h3>
          </div>
          <div className="column-1">
            <h3>Subscribe to get important updates</h3>
            <input
              className="footer-input"
              type="email"
              placeholder="Your Email"
            ></input>
            <Button className="footer-btn">Subscribe</Button>
          </div>
          <div className="column-1">
            <h3>Follow us</h3>
            <div className="grid-two-column footer-social-icon">
              <FaGithubSquare size={"2.5rem"} color={"#B9AFF8"} />
              <FaLinkedin size={"2.5rem"} color={"#B9AFF8"} />
              <FaInstagramSquare size={"2.5rem"} color={"#B9AFF8"} />
            </div>
          </div>
          <div className="column-1">
            <h3>Call us</h3>
            <h3>+919672441704</h3>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <hr className="footer-line" />

        <div className="footer-bottom">
          <h3 className="footer-bottom-text">
            @2022 KarampalJangir. All Rights Reserved
          </h3>
          <div>
            <div className="footer-bottom-text privacy">PRIVACY POLICY</div>
            <div className="footer-bottom-text privacy">TERMS & CONDITIONS</div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 8rem;
  .short-content {
    display: flex;
    gap: 30rem;
  }
  .privacy {
    color: white;
  }
  .footer-bottom-text {
    font-size: 14px;
  }
  .footer-bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px 20rem;
  }
  .contact-short {
    max-width: 90vh;
    padding: 20px 25px;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    margin-bottom: -40px;
    position: relative;
    z-index: 999;
  }
  .footer-line {
    border: none;
    border-top: 1px solid white;
  }
  footer {
    padding: 10rem 0 3rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
  }
  .footer-input {
    margin: 5px 0 20px 0;
  }
  h3 {
    color: white;
    padding: 12px 0;
    font-size: 16px;
  }
  .short-footer-heading {
    color: black;
    padding: 3px 0;
  }
  .footer-social-icon {
    display: flex;
    gap: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 45vh;
      padding: 20px 25px;
      margin: auto;
      background-color: ${({ theme }) => theme.colors.bg};
      border-radius: 1rem;
      margin-bottom: -40px;
      position: relative;
      z-index: 999;
    }
    .footer-bottom {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin: 20px 4rem;
    }
    .short-content {
      display: flex;
      gap: 35px;
    }
  }
`;

export default Footer;
