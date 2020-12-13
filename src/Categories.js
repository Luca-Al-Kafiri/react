import React from "react";

const Categories = ({ categories, filterMenu }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => {
        return (
          <button
            className="filter-btn"
            onClick={() => filterMenu(item)}
            key={index}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
