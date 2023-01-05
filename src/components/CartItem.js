import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";
import FormatPrice from "../Helper/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { cartItemDelete, setIncrement, setDecrement } = useCartContext();

  // const setDecrease = () => {};
  // const setIncrease = () => {};
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
        setIncrease={() => setIncrement(id)}
        setDecrease={() => setDecrement(id)}
      />
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash
          className="remove_icon"
          onClick={() => {
            cartItemDelete(id);
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
