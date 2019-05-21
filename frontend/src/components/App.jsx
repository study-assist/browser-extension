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
import dummy from "../data/dummyData.json";
import {
  pickRandom,
  sortByRelevance,
  mapFeaturesNames,
  removeRedundantEntries,
  removeRedundantItems,
  parseCategoryTree,
  mergeByIndex
} from "../helper";
import "../css/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // currentTab
      pageTitle: "Active Tab Title",
      tags: dummy.tags,
      collections: dummy.collections,
      emotion: dummy.emotion,
      research: ["Deep Learning", "Python", "Tensorflow", "SkyNet"]
    };
  }

  // using this to not trigger watson analysis at every component mount, only on body click :)
  simulateMount = async () => {
    this.setDefaultTags(["research"]);
    this.setDefaultCollections(["important", "work"]);

    console.log("quick off search...");
    const res = await this.analyse(pickRandom(links.links.guardian));
    this.setResults(res);
    this.setTags();
    this.setCollections();
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

  setResults = res => {
    const { categories, concepts, keywords, entities, emotion } = res;
    this.setState({
      categories,
      concepts,
      keywords,
      entities,
      emotion: emotion.document.emotion
    });
  };

  // resets tags to default
  setDefaultTags = defaults => {
    this.setState({ tags: [...defaults] });
  };

  setDefaultCollections = defaults => {
    this.setState({ collections: [...defaults] });
  };

  setTags = () => {
    const tags = this.createTags();
    this.setState(state => {
      state.tags = [...state.tags, ...tags];
      return state;
    });
  };

  setCollections = () => {
    const collections = this.createCollections();
    this.setState(state => {
      state.collections = [...state.collections, ...collections];
      return state;
    });
  };

  createTags = () => {
    let tags = [...this.state.concepts, ...this.state.entities];
    tags = removeRedundantEntries(tags);
    tags = sortByRelevance(tags);
    tags = mapFeaturesNames(tags);
    return tags;
  };

  createCollections = () => {
    // add concepts??
    // here the processing of the results goes differently than for tags, would be great to have the same functions that are flexible enough to use for both...
    let collections = this.state.categories.map(item => {
      return parseCategoryTree(item.label);
    });
    collections = mergeByIndex(collections);
    collections = removeRedundantItems(collections);
    return collections;
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
      <div className="body">
        <Header title="Study Assist" />
        <Main
          tabOne={
            <>
              <BookmarkView
                pageTitle={this.state.pageTitle}
                tags={this.state.tags}
                emotion={this.state.emotion}
                setPageTitle={this.setPageTitle}
                addTag={this.addTag}
                deleteTag={this.deleteTag}
              />
              <CategoryView
                categories={this.state.collections}
                addCategory={this.addCategory}
                deleteCategory={this.deleteCategory}
              />
              <Research research={this.state.research} />
            </>
          }
          tabTwo={<FolderView />}
        />
        <button
          className="btn btn-primary mt-5"
          onClick={() => this.simulateMount()}
        >
          Search!
        </button>
      </div>
    );
  }
}

export default App;
