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
        className="new-category form-row"
        onSubmit={e => {
          e.preventDefault();
          addCategory(this.state.category);
          e.target.reset();
        }}
      >
        <div className="col-9">
          <input
            placeholder="Type folder name"
            className="form-control border-top-0 border-left-0 border-right-0
            rounded-0"
            type="text"
            ref={this.inputNewCategory}
            onChange={e => this.updateCategoryName(e.target.value)}
          />
        </div>
        <div className="col-2 offset-md-1 ">
          <button
            className="btn btn-primary rounded-circle"
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
