import React, { Component } from "react";

class CurrentPageTitle extends Component {
  render() {
    const { title, setPageTitle } = this.props;

    return (
      <form action="">
        <div className="from-group">
          <input
            className="from-control w-100"
            type="text"
            defaultValue={title}
            onChange={e => setPageTitle(e.target.value)}
          />
        </div>
      </form>
    );
  }
}

export default CurrentPageTitle();
