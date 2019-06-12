/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { Component } from "react";

import Header from "./Header";
import Main from "./Main";
// import ProjectDescription from "./ProjectDescription";
import BookmarkView from "./BookmarkView";
import CollectionView from "./CollectionView";
import ResearchView from "./ResearchView";
import FolderView from "./FolderView";

import links from "../data/links.json";
import dummy from "../data/dummyData.json";
import {
  pickRandom,
  sortByRelevance,
  mapFeaturesNames,
  removeRedundantEntries,
  removeRedundantItems,
  removeEmpty,
  parseCategoryTree,
  mergeByIndex
} from "../helper";

import "../scss/App.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      url: null,
      pageTitle: "",
      pageAuthors: [],
      pageDate: "",
      pageImg: "",
      categories: [],
      concepts: [],
      entities: [],
      keywords: [],
      tags: [],
      collections: [],
      research: [],
      emotion: {},
      sentiment: {}
    };

    this.init();
  }

  init = () => {
    document.addEventListener("study_assist:new_url", e => {
      console.log(e.currentUrl);
      this.setUrl(e.currentUrl.trim());
    });
  };

  // using this to not trigger watson analysis at every component mount, only on body click :)
  simulateMount = async () => {
    this.setDefaultTags(["research", "important"]);
    this.setDefaultCollections([]);
    this.setDefaultResearch([]);
    console.log("kick off search...");

    try {
      const results = await this.analyse(this.state.url);
      this.setResults(results);
    } catch (err) {
      console.error(err);
    }

    this.setTags();
    this.setCollections();
    this.setResearch();
  };

  analyse = url => {
    console.log("analyse url", url);
    return fetch(
      "https://study-assist-server-vincentreynaud.study-assist-webext.now.sh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
      }
    )
      .then(res => res.json())
      .then(res => res)
      .catch(err => console.error(err));
  };

  setUrl = url => {
    this.setState({
      url: url
    });
  };

  setResults = res => {
    const {
      categories,
      concepts,
      keywords,
      entities,
      emotion,
      sentiment,
      metadata
    } = res;

    this.setState({
      categories,
      concepts,
      keywords,
      entities,
      emotion: emotion.document.emotion,
      sentiment: sentiment.document,
      pageTitle: metadata.title,
      pageAuthors: metadata.authors,
      pageDate: metadata.publication_date,
      pageImg: metadata.image
    });
  };

  setDefaultTags = defaults => {
    this.setState({ tags: [...defaults] });
  };

  setDefaultCollections = defaults => {
    this.setState({ collections: [...defaults] });
  };

  setDefaultResearch = defaults => {
    this.setState({ research: [...defaults] });
  };

  createTags = () => {
    let tags = [...this.state.concepts, ...this.state.entities];
    tags = removeRedundantEntries(tags);
    tags = sortByRelevance(tags);
    tags = mapFeaturesNames(tags);
    tags = removeEmpty(tags);
    return tags;
  };

  setTags = () => {
    const tags = this.createTags();
    this.setState(state => {
      state.tags = [...state.tags, ...tags];
      return state;
    });
  };

  createCollections = () => {
    // add concepts??
    // here the processing of the results goes differently than for tags, would be great to have the same functions that are flexible enough to use for both...
    let collections = this.state.categories.map(item => {
      return parseCategoryTree(item.label);
    });
    collections = mergeByIndex(collections);
    collections = removeRedundantItems(collections);
    collections = collections.splice(6, 3);
    return collections;
  };

  setCollections = () => {
    const collections = this.createCollections();
    this.setState(state => {
      state.collections = [...state.collections, ...collections];
      return state;
    });
  };

  createResearch = () => {
    let research = [...this.state.concepts, ...this.state.entities];
    research = removeRedundantEntries(research);
    research = sortByRelevance(research);
    research = mapFeaturesNames(research);
    research = removeEmpty(research);
    return research;
  };

  setResearch = () => {
    const research = this.createResearch();
    this.setState(state => {
      state.research = [...state.research, ...research];
      return state;
    });
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

  addCollection = name => {
    this.setState(state => {
      state.collections = [...state.collections, name];
      return state;
    });
  };

  deleteCollection = name => {
    this.setState(state => {
      const pos = state.collections.indexOf(name);
      return state.collections.splice(pos, 1);
    });
  };

  render() {
    return (
      <div className="body">
        <Header title="Study Assist" simulateMount={this.simulateMount} />
        <Main
          tabOne={
            <>
              <BookmarkView
                pageTitle={this.state.pageTitle}
                pageDate={this.state.pageDate}
                pageAuthors={this.state.pageAuthors}
                pageImg={this.state.pageImg}
                tags={this.state.tags}
                emotion={this.state.emotion}
                sentiment={this.state.sentiment}
                setPageTitle={this.setPageTitle}
                addTag={this.addTag}
                deleteTag={this.deleteTag}
              />
              <CollectionView
                collections={this.state.collections}
                addCollection={this.addCollection}
                deleteCollection={this.deleteCollection}
              />
            </>
          }
          tabTwo={<FolderView />}
          tabThree={<ResearchView research={this.state.research} />}
        />
        {/* {window.location.protocol.includes("http") && <ProjectDescription />} */}
      </div>
    );
  }
}

export default App;
