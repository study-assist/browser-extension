import React, { Component } from "react";
import propTypes from "prop-types";

import "../css/Category.css";

class CategoryNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null
    };

    this.inputNewCategory = React.createRef();
  }

  updateCategoryName = name => {
    this.setState({ category: name });
  };

  expandCategory = () => {
    this.inputNewCategory.current.style.display = "inline";
    this.inputNewCategory.current.focus();
  };

  render() {
    const { addCategory } = this.props;

    return (
      <form
        className="category new-category badge"
        onSubmit={e => {
          e.preventDefault();
          addCategory(this.state.category);
          e.target.reset();
        }}
      >
        <input
          className="input-new-category"
          type="text"
          ref={this.inputNewCategory}
          onChange={e => this.updateCategoryName(e.target.value)}
        />
        <button
          className="btn btn-new-category"
          type="button"
          onClick={() => this.expandCategory()}
        >
          <i className="fas fa-plus" />
        </button>
      </form>
    );
  }
}

CategoryNew.propTypes = {
  addCategory: propTypes.func
};

export default CategoryNew;
