import React, { Component } from "react";
import "./../css/App.css";
import BookmarkTitle from "./BookmarkTitle";
import BookmarkTag from "./BookmarkTag";
class App extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "I'm currently visiting this page",
      tags: ["fun", "notfun"]
    };
  }

  setPageTitle = title => {
    this.setState({ pageTitle: title });
  };

  render() {
    return (
      <div className="">
        <header className="">
          <BookmarkTitle
            title={this.state.pageTitle}
            setPageTitle={this.setPageTitle}
          />
          <div className="tags">
            {this.state.tags.map(tagname => (
              <BookmarkTag tagname={tagname} />
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
