const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_prodducts: [...action.payload], //USING THE COPY OF ORIGINAL PRODUCT LIST THATS WHY USING SPREAD OPERATOR
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
      let userSortValue = document.getElementById("sort");
      let sortValue = userSortValue.options[userSortValue.selectedIndex].value;

      return {
        ...state,
        sorting_value: sortValue,
      };
    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortData = [...action.payload];

      if (state.sorting_value === "lowest") {
        const sortingLowestProducts = (a, b) => {
          return a.price - b.price;
        };
        newSortData = tempSortData.sort(sortingLowestProducts);
      }

      if (state.sorting_value === "highest") {
        const sortingLowestProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortData = tempSortData.sort(sortingLowestProducts);
      }
      if (state.sorting_value === "a-z") {
        newSortData = tempSortData.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }

      if (state.sorting_value === "z-a") {
        newSortData = tempSortData.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      return {
        ...state,
        filter_products: newSortData,
      };

    default:
      return state;
  }
};
export default filterReducer;
