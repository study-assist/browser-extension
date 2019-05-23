import React, { Component } from "react";
import propTypes from "prop-types";

import BookmarkTitle from "./BookmarkHead";
import BookmarkTag from "./BookmarkTag";
import BookmarkNewTag from "./BookmarkNewTag";
import BookmarkSentiment from "./BookmarkSentiment";
import BookmarkSentimentBtn from "./BookmarkSentimentBtn";

import "../scss/BookmarkView.scss";

class BookmarkView extends Component {
  constructor() {
    super();

    this.state = { sentimentSectionVisible: true };
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
        <BookmarkTitle
          pageTitle={pageTitle}
          pageDate={pageDate}
          pageAuthors={pageAuthors}
          pageImg={pageImg}
          setPageTitle={setPageTitle}
        />
        <ul className="tags-list list-inline px-2 mb-0">
          {tags.map((tagname, i) => (
            <li className={`tag-${i} list-inline-item`} key={`tag-${i + 1}`}>
              <BookmarkTag tagname={tagname} deleteTag={deleteTag} />
            </li>
          ))}
          <li className="list-inline-item">
            <BookmarkNewTag addTag={addTag} />
          </li>
        </ul>
        <BookmarkSentimentBtn
          toggleSection={this.toggleSection}
          isVisible={this.state.sentimentSectionVisible}
        />
        <BookmarkSentiment
          emotion={emotion}
          sentiment={sentiment}
          isVisible={this.state.sentimentSectionVisible}
        />
      </section>
    );
  }
}

BookmarkView.propTypes = {
  pageTitle: propTypes.string,
  pageDate: propTypes.string,
  pageAuthors: propTypes.array,
  pageImg: propTypes.string,
  setPageTitle: propTypes.func,
  tags: propTypes.array,
  addTag: propTypes.func,
  deleteTag: propTypes.func,
  emotion: propTypes.object,
  sentiment: propTypes.object
};

export default BookmarkView;
