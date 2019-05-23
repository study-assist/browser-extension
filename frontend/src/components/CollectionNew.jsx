import React, { Component } from "react";
import propTypes from "prop-types";

class CollectionNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: null
    };

    this.inputNewCollection = React.createRef();
  }

  updateCollectionName = name => {
    this.setState({ collection: name });
  };

  render() {
    const { addCollection } = this.props;

    return (
      <form
        className="form-row border border-folder-color rounded shadow mx-0 mb-3 pt-1 pb-1"
        onSubmit={e => {
          e.preventDefault();
          addCollection(this.state.collection);
          e.target.reset();
        }}
      >
        <div className="col-10">
          <input
            placeholder="Type folder name"
            className="form-control border-top-0 border-left-0 border-right-0 rounded-0 border-folder-color"
            type="text"
            ref={this.inputNewCollection}
            onChange={e => this.updateCollectionName(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-folder-color rounded-circle"
            type="button"
            onClick={event => {
              event.preventDefault();
              addCollection(this.state.collection);
            }}
          >
            <i className="fas fa-plus" />
          </button>
        </div>
      </form>
    );
  }
}

CollectionNew.propTypes = {
  addCollection: propTypes.func
};

export default CollectionNew;
