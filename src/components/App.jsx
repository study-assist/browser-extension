import React, { Component } from "react";

import Header from "./Header";
import Main from "./Main";
import BookmarkView from "./BookmarkView";
import FolderView from "./FolderView";
import Iframe from "./Iframe";

import "./../css/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "I'm currently visiting this page",
      tags: ["fun", "not fun", "cats"]
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

  deleteTag = name => {
    this.setState(state => {
      const pos = state.tags.indexOf(name);
      return state.tags.splice(pos, 1);
    });
  };

  render() {
    return (
      <div className="body">
        <Header title="Study Assist" />
        <Main
          tabOne={
            <BookmarkView
              pageTitle={this.state.pageTitle}
              setPageTitle={this.setPageTitle}
              tags={this.state.tags}
              addTag={this.addTag}
              deleteTag={this.deleteTag}
            />
          }
          tabTwo={<FolderView />}
        />
        <Iframe />
      </div>
    );
  }
}

export default App;
