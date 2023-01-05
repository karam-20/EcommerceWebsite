const Cart_Reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    //we need to check whether the product already in the cart
    let existingProduct = state.cart.find(
      (curElem) => curElem.id === id + color
    );
    if (existingProduct) {
      let updateExistingProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updateExistingProduct,
      };
    } else {
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
  }

  if (action.type === "CART_ITEM_DELETE") {
    let updatedCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "SET_INCREMENT_CART") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let newQuantity = curElem.amount + 1;
        if (newQuantity >= curElem.max) {
          newQuantity = curElem.max;
        }

        return {
          ...curElem,
          amount: newQuantity,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }
  if (action.type === "SET_DECREMENT_CART") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let newQuantity = curElem.amount - 1;
        if (newQuantity <= 1) newQuantity = 1;

        return {
          ...curElem,
          amount: newQuantity,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }
  if (action.type === "CLEAR_CART")
    return {
      ...state,
      cart: [],
    };

  // if (action.type === "CART_ICON_VALUE") {
  //   let updatedCartItem = state.cart.reduce((initialValue, curElem) => {
  //     let { amount } = curElem;
  //     initialValue = initialValue + amount;
  //     return initialValue;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_items: updatedCartItem,
  //   };
  // }

  // if (action.type === "CART_TOTAL_PRICE") {
  //   let updatedTotalPrice = state.cart.reduce((initialValue, curElem) => {
  //     let { amount, price } = curElem;
  //     initialValue = initialValue + amount * price;
  //     return initialValue;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_price: updatedTotalPrice,
  //   };
  // }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_items, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;

        accum.total_items += amount;
        accum.total_price += price * amount;

        return accum;
      },
      {
        total_items: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_items,
      total_price,
    };
  }

  return state;
};

export default Cart_Reducer;
