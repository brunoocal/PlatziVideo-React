import React from "react";

//Styles
import "../assets/styles/components/Categories.scss";

const Categories = ({ title, children }) => {
  return (
    <div className="categories">
      <h3 className="categories__title">{title}</h3>
      {children}
    </div>
  );
};

export default Categories;
