import { createContext, useContext, useEffect, useReducer } from "react";
import { useProviderContext } from "./ProductContext";
import reducer from "../reducer/Filter_Reducer";

const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_prodducts: [],
  grid_view: true,
  sorting_value: "lowest",
  filter_search: {
    text: "",
    category: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
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
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterSearchValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    dispatch({ type: "SEARCH_FILTER_PRODUCT" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filter_search]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setListView,
        setGridView,
        sorting,
        updateFilterSearchValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

//custom hook
export const useFilterContext = () => {
  return useContext(FilterContext);
};
