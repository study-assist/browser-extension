import React, { Component } from "react";
import propTypes from "prop-types";

import CategoryNew from "./CategoryNew";

class CategoryView extends Component {
  render() {
    return (
      <div className="border border-primary p-1 m-1">
        <div className="h3">Folder categories</div>
        <CategoryNew />
      </div>
    );
  }
}

export default CategoryView;
