import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import FormatPrice from "../Helper/FormatPrice";

const Product = (curElem) => {
  const { id, image, color, category, name, price } = curElem;

  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3 className="product-name">{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
        <div className="product-add-to-cart">VIEW</div>
      </div>
    </NavLink>
  );
};

export default Product;
