import React, { Component } from "react";

class BookmarkTitle extends Component {
  render() {
    const { title, setPageTitle } = this.props;

    return (
      <form action="">
        <div className="form-group">
          <input
            className="form-control w-100"
            type="text"
            defaultValue={title}
            onChange={e => setPageTitle(e.target.value)}
          />
        </div>
      </form>
    );
  }
}

export default BookmarkTitle;
