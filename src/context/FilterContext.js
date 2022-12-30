import { createContext, useContext, useEffect, useReducer } from "react";
import { useProviderContext } from "./ProductContext";
import reducer from "../reducer/Filter_Reducer";

const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_prodducts: [],
  grid_view: true,
  sorting_value: "lowest",
};

//global provider
export const FilterContextProvider = ({ children }) => {
  const { products } = useProviderContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  //sorting funtion
  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setListView, setGridView, sorting }}
    >
      {children}
    </FilterContext.Provider>
  );
};

//custom hook
export const useFilterContext = () => {
  return useContext(FilterContext);
};
