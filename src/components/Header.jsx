import React from "react";
import propTypes from "prop-types";

import logo from "../data/open-book.svg";

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="row justify-content-between align-items-end no-gutters">
        <div className="head row flex-nowrap no-gutters align-items-end">
          <img className="logo mr-2" src={logo} alt="Study Assist logo" />
          <h1 className="mb-0">{title}</h1>
        </div>
        <div className="options row justify-content-end">
          <i className="fas fa-share-alt" />
          <a
            className="options-button"
            href="https://github.com/vincentreynaud/study-assist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-alt" />
          </a>
          <i className="fas fa-cog" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: propTypes.string
};

export default Header;
