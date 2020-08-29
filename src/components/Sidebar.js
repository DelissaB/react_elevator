import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const StyledSideNav = styled.div`
  position: fixed; /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 150px; /* Set the width of the sidebar */
  z-index: 1; /* Stay on top of everything */
  top: 0; /* Stay at the top */
  background-color: black;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 25px;
`;

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: "/",
      items: [
        {
          path: "/",
          name: "section1",
          key: 1,
        },
        {
          path: "/section2",
          name: "section2",
          key: 2,
        },
        {
          path: "/section3",
          name: "section3",
          key: 3,
        },
        {
          path: "/section4",
          name: "section4",
          key: 4,
        },
        {
          path: "/section5",
          name: "section5",
          key: 4,
        },
        {
          path: "/section6",
          name: "section6",
          key: 5,
        },
      ],
    };
  }

  onItemClick = (path) => {
    this.state({ active: path });
  };

  render() {
    const { items, activePath } = this.state;
    return <StyledSideNav>{}</StyledSideNav>;
  }
}

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px;
  text-align: center;
  margin-bottom: 0;
  a {
    font-size: 2.7em;
    color: ${(props) => (props.active ? "white" : "#9FFFCB")};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }
  }
`;

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onClick } = this.props;
    onClick(path);
  };

  render() {
    const { active } = this.props;
    return (
      <StyledNavItem active={active}>
        <Link
          to={this.props.path}
          className={this.props.css}
          onClick={this.handleClick}
        >
          <Button></Button>
        </Link>
      </StyledNavItem>
    );
  }
}

const Button = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default class Sidebar extends React.Component {
  render() {
    return <SideNav></SideNav>;
  }
}
