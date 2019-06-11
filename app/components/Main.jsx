import React, { Component } from "react";
import propTypes from "prop-types";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

class Main extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { tabOne, tabTwo, tabThree } = this.props;

    return (
      <main className="main">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Page Overview
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Manage Bookmarks
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Further Research
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">{tabOne}</TabPane>
          <TabPane tabId="2">{tabTwo}</TabPane>
          <TabPane tabId="3">{tabThree}</TabPane>
        </TabContent>
      </main>
    );
  }
}

Main.propTypes = {
  tabOne: propTypes.element,
  tabTwo: propTypes.element,
  tabThree: propTypes.element
};

export default Main;
