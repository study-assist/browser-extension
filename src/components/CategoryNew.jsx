import React, { Component } from "react";
import propTypes from "prop-types";

class CategoryNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: null
    };
  }

  updateCategoryName = name => {
    this.setState({ category: name });
  };

  render() {
    const { addCategory } = this.props;
    return (
      <form
        className="category"
        onSubmit={e => {
          e.preventDefault();
          addCategory(this.state.category);
        }}
      >
        <input
          className=""
          type="text"
          onChange={e => this.updateCategoryName(e.target.value)}
        />
        <button
          className="btn btn-new-tag"
          type="button"
          onClick={() => {
            this.expandTag();
          }}
        />
        <i className="fas fa-plus" />
      </form>
    );
  }
}

CategoryNew.propTypes = {
  addCategory: propTypes.func
};

export default CategoryNew;
