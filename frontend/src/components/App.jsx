/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { Component } from "react";

import Header from "./Header";
import Main from "./Main";
import BookmarkView from "./BookmarkView";
import CategoryView from "./CategoryView";
import Research from "./Research";
import FolderView from "./FolderView";

import links from "../data/links.json";
import { pickRandom } from "../helper";
import "../css/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // currentTab: ,
      pageTitle: "I'm currently visiting this page",
      tags: ["fun", "not fun", "cats"],
      categories: ["Important", "NLP", "AI", "React", "Recipes"],
      research: ["Deep Learning", "Python", "Tensorflow", "SkyNet"]
    };
  }

  // using this to not trigger watson analysis at every component mount, only on body click :)
  simulateMount = async () => {
    console.log("quick off search...");
    const res = await this.analyse(pickRandom(links.links.guardian));
    this.setResults(res);
  };

  analyse = url => {
    return fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    })
      .then(res => res.json())
      .then(res => res);
  };

  // adjust
  setResults = res => {
    const { categories, concepts, keywords } = res;
    this.setState({ category: categories, concepts, keywords });
  };

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
      <div className="body" onClick={() => this.simulateMount()}>
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
              <Research research={this.state.research} />
            </>
          }
          tabTwo={<FolderView />}
        />
      </div>
    );
  }
}

export default App;
