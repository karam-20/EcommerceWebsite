import React from "react";
import styled from "styled-components";
import { useProviderContext } from "../context/ProductContext";
import Product from "./Product";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProviderContext();

  if (isLoading) {
    return <div>.....loading</div>;
  }
  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check now!</div>
        <div className="common-heading">Our feature Product</div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 8rem 0rem;
  margin: 2rem 0 12rem 0;
  background-color: #f6f8fa;

  .product-add-to-cart {
    background-color: #6861ef;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    font-weight: 500;
    font-size: 12px;
  }
  .container {
    max-width: 110rem;
  }
  .intro-data {
    font-size: 15px;
    font-weight: 500;
  }
  .common-heading {
    font-size: 25px;
    font-weight: 600;
    margin: 2px 0 40px 0;
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
      background-color: rgba(0, 0, 0, 0.3);
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
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 1.2rem;
      font-size: 0.9rem;
      border-radius: 2rem;
    }
  }
  .card {
    background-color: #fff;

    .card-data {
      padding: 0 2rem;
      padding-bottom: 1px;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: uppercase;
      font-weight: 600;
      font-size: 15px;
    }
    .card-data--price {
      color: #6861ef;
      font-weight: 500;
      font-size: 14px;
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

export default FeatureProducts;
