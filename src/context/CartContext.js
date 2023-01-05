import { useContext, useReducer, createContext, useEffect } from "react";
import reducer from "../reducer/Cart_Reducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localData = localStorage.getItem("kp");
  if (localData === []) {
    return [];
  } else {
    return JSON.parse(localData);
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_items: "",
  total_price: "",
  shipping_fees: 50000,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const cartItemDelete = (id) => {
    dispatch({ type: "CART_ITEM_DELETE", payload: id });
  };
  const addToCartData = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT_CART", payload: id });
  };
  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT_CART", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("kp", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCartData,
        cartItemDelete,
        clearCart,
        setIncrement,
        setDecrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
