import React, { Component, Fragment } from "react";

import Header from "./Header";
import Main from "./Main";
import BookmarkView from "./BookmarkView";
import CategoryView from "./CategoryView";
import FolderView from "./FolderView";
import Iframe from "./Iframe";

import "../css/App.css";
import Watson from "../modules/Watson";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "I'm currently visiting this page",
      tags: ["fun", "not fun", "cats"],
      categories: ["Important", "NLP", "AI", "React", "Recipes"]
    };
  }

  componentDidMount() {
    const watson = new Watson(
      process.env.REACT_APP_API_URL,
      process.env.REACT_APP_API_KEY
    );
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

  addCategory = name => {
    this.setState(state => {
      state.categories = [...state.categories, name];
      return state;
    });
  };

  deleteCategory = name => {
    this.setState(state => {
      const pos = state.categories.indexOf(name);
      return state.categories.splice(pos, 1);
    });
  };

  render() {
    return (
      <div className="body">
        <Header title="Study Assist" />
        <Main
          tabOne={
            <>
              <BookmarkView
                pageTitle={this.state.pageTitle}
                setPageTitle={this.setPageTitle}
                tags={this.state.tags}
                addTag={this.addTag}
                deleteTag={this.deleteTag}
              />
              <CategoryView
                categories={this.state.categories}
                addCategory={this.addCategory}
                deleteCategory={this.deleteCategory}
              />
            </>
          }
          tabTwo={<FolderView />}
        />
        <Iframe />
      </div>
    );
  }
}

export default App;
