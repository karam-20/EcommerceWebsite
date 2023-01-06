import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
    background-color: #fff;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  .product-add-to-cart {
    background-color: #6861ef;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    font-weight: 500;
    font-size: 12px;
  }
  .card {
    background-color: #fff;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 15px -6px #777;

    .card-data {
      padding: 0 1rem;
    }
    .card-data-flex {
      margin: 1rem 0;
      padding: 0 0.7rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      align-items: center;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 14px;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: uppercase;
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 8px;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default GridView;
