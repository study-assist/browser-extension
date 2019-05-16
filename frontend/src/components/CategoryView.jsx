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
        <div className="h3">Folder categories</div>
        <ul className="list-inline">
          {categories.map((cat, i) => (
            <li className="list-inline-item" key={`cat-${i + 1}`}>
              <Category category={cat} deleteCategory={deleteCategory} />
            </li>
          ))}
        </ul>
        <CategoryNew addCategory={addCategory} />
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
