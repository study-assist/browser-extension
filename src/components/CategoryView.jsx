import React, { Component } from "react";
import propTypes from "prop-types";

import Category from "./Category";
import CategoryNew from "./CategoryNew";

class CategoryView extends Component {
  expandSection = () => {
    //eslint-disable-next-line no-console
    console.log("section expanded");
  };
  render() {
    const { categories } = this.props;
    return (
      <section className="border border-primary p-1">
        <div className="h3">Folder categories</div>
        <ul className="list-inline">
          {categories.map((cat, i) => (
            <li className="list-inline-item" key={`cat-${i + 1}`}>
              <Category category={cat} />
            </li>
          ))}
        </ul>
        <CategoryNew />
      </section>
    );
  }
}

CategoryView.propTypes = {
  categories: propTypes.array
};

export default CategoryView;
