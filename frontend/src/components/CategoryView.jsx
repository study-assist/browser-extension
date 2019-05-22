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
    const { collections, addCategory, deleteCategory } = this.props;
    return (
      <section className="category-main ">
        <h2 className="category-title">Folder categories</h2>

        <CategoryNew addCategory={addCategory} />

        <div className="card-columns category-container">
          {collections.map((collection, i) => (
            <div
              className="card border-folder-color text-center shadow rounded p-1 mx-auto"
              key={`collection-${i + 1}`}
            >
              <Category category={collection} deleteCategory={deleteCategory} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

CategoryView.propTypes = {
  collections: propTypes.array,
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
