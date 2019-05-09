import React from "react";
import propTypes from "prop-types";

import "../css/Header.css";

const Header = ({ title }) => {
  return (
    <header>
      <div className="row justify-content-between no-gutters">
        <h1>{title}</h1>
        <div className="options">
          <i className="fas fa-share-alt" />
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
