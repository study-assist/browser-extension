import React, { Component } from "react";
import propTypes from "prop-types";

import Category from "./Category";
import CategoryNew from "./CategoryNew";

import "../css/Category.css";

class CategoryView extends Component {
  expandSection = () => {
    //eslint-disable-next-line no-console
    console.log("section expanded");
  };
  render() {
    const { categories, addCategory, deleteCategory } = this.props;
    return (
      <section className="category-main">
        <div className="h3  category-title">Folder categories</div>
        <CategoryNew addCategory={addCategory} />
        <div className="container" />
        <div className="row">
          {categories.map((cat, i) => (
            <div className="col-4" key={`cat-${i + 1}`}>
              <Category category={cat} deleteCategory={deleteCategory} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

CategoryView.propTypes = {
  categories: propTypes.array,
  addCategory: propTypes.func,
  deleteCategory: propTypes.func
};

export default CategoryView;

/* 
        <ul className="">
          {categories.map((cat, i) => (
            <li className="" key={`cat-${i + 1}`}>
              <Category category={cat} deleteCategory={deleteCategory} />
            </li>
          ))}
        </ul> */
