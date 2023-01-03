const Cart_Reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    let cartProduct;
    cartProduct = {
      id: id + color,
      name: product.name,
      color,
      amount,
      image: product.image[0].url,
      max: product.stock,
      price: product.price,
    };
    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  return state;
};

export default Cart_Reducer;
