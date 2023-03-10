import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCart = ({ product }) => {
  const notify = () => {
    toast.success("Item added to the cart.");
  };
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);

  const { addToCartData } = useCartContext();
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors :{" "}
          {colors.map((curColor, index) => {
            return (
              <button
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                key={index}
                style={{ backgroundColor: curColor }}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>
      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />
      <NavLink
        onClick={() => {
          addToCartData(id, color, amount, product);
        }}
      >
        <Button onClick={notify} className="btn">
          Add To Cart
        </Button>
      </NavLink>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        className="toast-container"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .toast-container {
    font-size: 14px;
  }
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
