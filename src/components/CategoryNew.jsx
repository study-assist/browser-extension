import React, { Component } from "react";
import propTypes from "prop-types";

class CategoryNew extends Component {
  render() {
    return (
      <form
        className="category"
        //  onSubmit={e => {
        //   e.preventDefault();
        //    addCategory(this.state.categoryName);
        //  }}
      >
        <button
          type="button"
          onClick={() => {
            this.expandTag();
          }}
          dangerouslySetInnerHTML={{ __html: "&plus;" }}
        />
        <input
          type="text"
          // onChange={e => this.updateCategoryName(e.target.value)}
        />
      </form>
    );
  }
}

export default CategoryNew;
