//sabse pehle ek context banana hota h
//then provider
//then consumer

//Not a custom hook
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState = {
  isLoading: false,
  isError: false,
  featureProducts: [],
  products: [],
  isSingleLoading: false,
  singleProduct: {},
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  //abhishek api
  // const lund = () => {
  //   var config = {
  //     method: "get",
  //     url: "https://backend-netmall.onrender.com/api/product/get-product",
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FiZTI0NWIxMzI0YmZhNjFiMDZmNzAiLCJlbWFpbCI6IndpY2ttZzlAZ21haWwuY29tIiwiaWF0IjoxNjcyMjA4OTY1fQ.BdsrnJY3PsvbcFg9i3_TWQQI6pSh11lIUDD0Ev8hHg4`,
  //     },
  //   };

  //   return axios(config)

  //     .then(function (response) {
  //       return response.data;
  //     })
  //     .catch(function (error) {
  //       console.log(error, "DSFHJDSFJSFS");
  //     });
  // };

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const useProviderContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProviderContext };
