import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";
import FormatPrice from "../Helper/FormatPrice";
import { Button } from "../styles/Button";

const FilterSection = () => {
  const {
    filter_search: { text, category, price, maxPrice, minPrice },
    updateFilterSearchValue,
    all_prodducts,
    clearFilters,
  } = useFilterContext();

  const uniqueData = (data, property) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });

    return (newValue = ["all", ...new Set(newValue)]);
  };

  const categoryData = uniqueData(all_prodducts, "category");
  const companyData = uniqueData(all_prodducts, "company");
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterSearchValue}
            placeholder="search"
          ></input>
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                className={curElem === category ? "active" : ""}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterSearchValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>

        <div className="filter_price">
          <h3 className="filter-price-heading">Price</h3>
          <p>
            <FormatPrice price={price} />
          </p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterSearchValue}
          />
        </div>
        <div className="filter-clear">
          <Button className="btn" onClick={clearFilters}>
            CLEAR FILTERS
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-price-heading {
    margin-bottom: -15px;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid ${({ theme }) => theme.colors.btn};
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    margin-top: 10px;
    input {
      margin: 0.5rem 0 4rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
    font-weight: 500;
  }
`;

export default FilterSection;
