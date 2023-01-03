import React from "react";
import { FaTrash } from "react-icons/fa";
import FormatPrice from "../Helper/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const setDecrease = () => {};
  const setIncrease = () => {};
  return (
    <div className="cart-heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id}></img>
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* //price */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price}></FormatPrice>
        </p>
      </div>
      {/* //quantity */}
      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" />
      </div>
    </div>
  );
};

export default CartItem;
