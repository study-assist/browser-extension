import React, { Component } from "react";
import propTypes from "prop-types";

import BookmarkHead from "./BookmarkHead";
import BookmarkTag from "./BookmarkTag";
import BookmarkNewTag from "./BookmarkNewTag";
import BookmarkSentiment from "./BookmarkSentiment";

import "../scss/BookmarkView.scss";

class BookmarkView extends Component {
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
        <BookmarkHead
          pageTitle={pageTitle}
          pageDate={pageDate}
          pageAuthors={pageAuthors}
          pageImg={pageImg}
          setPageTitle={setPageTitle}
        />
        <ul className="tags-list list-inline mb-0">
          {tags.map((tagname, i) => (
            <li className={`tag-${i} list-inline-item`} key={`tag-${i + 1}`}>
              <BookmarkTag tagname={tagname} deleteTag={deleteTag} />
            </li>
          ))}
          <li className="list-inline-item">
            <BookmarkNewTag addTag={addTag} />
          </li>
        </ul>
        <BookmarkSentiment emotion={emotion} sentiment={sentiment} />
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
