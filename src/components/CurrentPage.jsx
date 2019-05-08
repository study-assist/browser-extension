import React, { Component } from "react";
import BookmarkTitle from "./BookmarkTitle";
import BookmarkTag from "./BookmarkTag";
import BookmarkNewTag from "./BookmarkNewTag";

class CurrentPage extends Component {
  constructor(props) {
    super(props);
  }
  expandSection = () => {
    // eslint-disable-next-line no-console
    console.log("section expanded");
  };

  render() {
    const { pageTitle, setPageTitle, tags, addTag } = this.props;

    return (
      <section className="bookmark">
        <BookmarkTitle title={pageTitle} setPageTitle={setPageTitle} />
        <ul className="tags-list">
          {tags.map((tagname, i) => (
            <li className={`tag-${i}`} key={`tag-${i}`}>
              <BookmarkTag tagname={tagname} />
            </li>
          ))}
          <li className="new-tag">
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

export default CurrentPage;
