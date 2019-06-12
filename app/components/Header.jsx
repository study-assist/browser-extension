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
          <span>
            <img src="../icons/share-alt.svg" alt="add" />
          </span>
          <a
            className="options-button"
            href="https://github.com/vincentreynaud/study-assist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <img src="../icons/github-alt.svg" alt="Contribute" />
            </span>
          </a>
          <span>
            <img src="../icons/cog.svg" alt="Settings" />
          </span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: propTypes.string
};

export default Header;
