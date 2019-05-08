import React, { Component } from "react";
import "./../css/App.css";
import BookmarkTitle from "./BookmarkTitle";
import BookmarkTag from "./BookmarkTag";
import BookmarkNewTag from "./BoomkarkNewTag";
class App extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "I'm currently visiting this page",
      tags: ["fun", "notfun", "cats"]
    };
  }

  setPageTitle = title => {
    this.setState({ pageTitle: title });
  };

  addTag = name => {
    this.setState(state => {
      state.tags = [...state.tags, name];
      return state;
    });
  };

  render() {
    return (
      <div className="">
        <header className="" />
        {/* make header a component */}
        <main>
          <section className="bookmark">
            <BookmarkTitle
              title={this.state.pageTitle}
              setPageTitle={this.setPageTitle}
            />
            <ul className="tags-list">
              {this.state.tags.map((tagname, i) => (
                <li className={`tag-${i}`} key={`tag-${i}`}>
                  <BookmarkTag tagname={tagname} />
                </li>
              ))}
              <li className="new-tag">
                <BookmarkNewTag addTag={this.addTag} />
              </li>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
