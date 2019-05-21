import React, { Component } from "react";
import propTypes from "prop-types";

import BookmarkTitle from "./BookmarkTitle";
import BookmarkTag from "./BookmarkTag";
import BookmarkNewTag from "./BookmarkNewTag";
import BookmarkSentiment from "./BookmarkSentiment";
import BookmarkViewBtn from "./BookmarkViewBtn";

import "../css/BookmarkView.css";

class BookmarkView extends Component {
  constructor() {
    super();

    this.state = { sentimentSectionVisible: false };
  }

  toggleSection = () => {
    this.setState(state => {
      state.sentimentSectionVisible = !state.sentimentSectionVisible;
      return state;
    });
  };

  render() {
    const {
      pageTitle,
      pageDate,
      pageAuthors,
      pageImg,
      setPageTitle,
      tags,
      addTag,
      deleteTag,
      emotion,
      sentiment
    } = this.props;

    return (
      <section className="bookmark">
        <BookmarkTitle pageTitle={pageTitle} setPageTitle={setPageTitle} />
        <ul className="tags-list list-inline">
          {tags.map((tagname, i) => (
            <li className={`tag-${i} list-inline-item`} key={`tag-${i + 1}`}>
              <BookmarkTag tagname={tagname} deleteTag={deleteTag} />
            </li>
          ))}
          <li className="list-inline-item">
            <BookmarkNewTag addTag={addTag} />
          </li>
        </ul>
        <BookmarkSentiment
          emotion={emotion}
          sentiment={sentiment}
          isVisible={this.state.sentimentSectionVisible}
        />
        <BookmarkViewBtn
          toggleSection={this.toggleSection}
          isVisible={this.state.sentimentSectionVisible}
        />
      </section>
    );
  }
}

BookmarkView.propTypes = {
  pageTitle: propTypes.string,
  pageDate: propTypes.string,
  pageAuthors: propTypes.object,
  pageImg: propTypes.string,
  setPageTitle: propTypes.func,
  tags: propTypes.array,
  addTag: propTypes.func,
  deleteTag: propTypes.func,
  emotion: propTypes.object,
  sentiment: propTypes.object
};

export default BookmarkView;
