import React, { Component } from "react";
import propTypes from "prop-types";

import BookmarkTitle from "./BookmarkTitle";
import BookmarkTag from "./BookmarkTag";
import BookmarkNewTag from "./BookmarkNewTag";

class BookmarkView extends Component {
  expandSection = () => {
    // eslint-disable-next-line no-console
    console.log("section expanded");
  };

  render() {
    const { pageTitle, setPageTitle, tags, addTag, deleteTag } = this.props;

    return (
      <section className="bookmark">
        <BookmarkTitle title={pageTitle} setPageTitle={setPageTitle} />
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
        <button type="button" onClick={() => this.expandSection()}>
          More details...
        </button>
      </section>
    );
  }
}

BookmarkView.propTypes = {
  pageTitle: propTypes.string,
  setPageTitle: propTypes.func,
  tags: propTypes.array,
  addTag: propTypes.func,
  deleteTag: propTypes.func
};

export default BookmarkView;
