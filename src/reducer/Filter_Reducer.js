const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      const priceArray = action.payload.map((curElem) => {
        return curElem.price;
      });
      //1st method to get max value
      // console.log(Math.max.apply(null, priceArray));
      //2nd method
      let maxPrice = priceArray.reduce(
        (initialValue, curValue) => Math.max(initialValue, curValue),
        0
      );

      return {
        ...state,
        filter_products: [...action.payload],
        all_prodducts: [...action.payload], //USING THE COPY OF ORIGINAL PRODUCT LIST THATS WHY USING SPREAD OPERATOR
        filter_search: {
          ...state.filter_search,
          maxPrice,
          price: maxPrice,
        },
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sortValue = userSortValue.options[userSortValue.selectedIndex].value;

      return {
        ...state,
        sorting_value: action.payload,
      };
    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products } = state;
      let tempSortData = [...filter_products];

      const sortingLowestProducts = (a, b) => {
        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }

        if (state.sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (state.sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortData.sort(sortingLowestProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filter_search: {
          ...state.filter_search,
          [name]: value,
        },
      };

    case "SEARCH_FILTER_PRODUCT":
      let { all_prodducts } = state;
      let tempProductData = [...all_prodducts];
      const { text, category, price } = state.filter_search;

      if (text) {
        tempProductData = tempProductData.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempProductData = tempProductData.filter(
          (curElem) => curElem.category === category.toLowerCase()
        );
      }
      if (price) {
        tempProductData = tempProductData.filter(
          (curElem) => curElem.price <= price
        );
      }

      return {
        ...state,
        filter_products: tempProductData,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filter_search: {
          ...state.filter_search,
          text: "",
          category: "all",
          maxPrice: 0,
          price: state.filter_search.maxPrice,
          minPrice: state.filter_search.maxPrice,
        },
      };

    default:
      return state;
  }
};
export default filterReducer;
