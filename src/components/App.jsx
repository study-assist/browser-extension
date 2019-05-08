import React, { Component } from "react";
import "./../css/App.css";
import Header from "./Header";
import Main from "./Main";
import BookmarkView from "./BookmarkView";
import FolderView from "./FolderView";

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
      <div className="body">
        <Header title="Study Assist" />
        <Main
          tabOne={
            <BookmarkView
              pageTitle={this.state.pageTitle}
              setPageTitle={this.setPageTitle}
              tags={this.state.tags}
              addTag={this.addTag}
            />
          }
          tabTwo={<FolderView />}
        />
        <iframe
          id="bookmarks"
          title="bookmarks"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.5354032226264!2d13.483447915331547!3d52.523746543704696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e9ab1163a17%3A0x700b4ec74a47a34d!2sDCI+Digital+Career+Institute+GmbH+(Devugees)!5e0!3m2!1sen!2sus!4v1557316676198!5m2!1sen!2sus"
          width="300"
          height="300"
        />
      </div>
    );
  }
}

export default App;
