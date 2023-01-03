import { useContext, useReducer, createContext } from "react";
import reducer from "../reducer/Cart_Reducer";

const CartContext = createContext();
const initialState = {
  cart: [],
  total_items: "",
  total_amount: "",
  shipping_fees: 50000,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCartData = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
