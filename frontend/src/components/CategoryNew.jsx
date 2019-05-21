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

  render() {
    const { addCategory } = this.props;

    return (
      <form
        className="form-row border border-folder-color rounded shadow mx-0 mb-3 pt-1 pb-1"
        onSubmit={e => {
          e.preventDefault();
          addCategory(this.state.category);
          e.target.reset();
        }}
      >
        <div className="col-10">
          <input
            placeholder="Type folder name"
            className="form-control border-top-0 border-left-0 border-right-0
            rounded-0 border-folder-color"
            type="text"
            ref={this.inputNewCategory}
            onChange={e => this.updateCategoryName(e.target.value)}
          />
        </div>
        <div className="col-2  ">
          <button
            className="btn btn-folder-color rounded-circle"
            type="button"
            onClick={event => {
              event.preventDefault();
              addCategory(this.state.category);
            }}
          >
            <i className="fas fa-plus" />
          </button>
        </div>
      </form>
    );
  }
}

CategoryNew.propTypes = {
  addCategory: propTypes.func
};

export default CategoryNew;
