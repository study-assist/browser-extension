import React, { Component } from "react";
import propTypes from "prop-types";

import Collection from "./Collection";
import CollectionNew from "./CollectionNew";

import "../scss/CollectionView.scss";

class CollectionView extends Component {
  expandSection = () => {
    //eslint-disable-next-line no-console
    console.log("section expanded");
  };
  render() {
    const { collections, addCollection, deleteCollection } = this.props;
    return (
      <section className="collection-main">
        <h2 className="collection-title">Folder categories</h2>

        <CollectionNew addCollection={addCollection} />

        <div className="card-columns collection-container">
          {collections.map((collection, i) => (
            <div
              className="card border-folder-color text-center shadow rounded p-1 mx-auto"
              key={`collection-${i + 1}`}
            >
              <Collection
                collection={collection}
                deleteCollection={deleteCollection}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

CollectionView.propTypes = {
  collections: propTypes.array,
  addCollection: propTypes.func,
  deleteCollection: propTypes.func
};

export default CollectionView;
