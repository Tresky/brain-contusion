import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import Logo from './assets/logo.png'

class TopNav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><span><img className="logo" src={Logo} /></span>BrainCopulate</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown onSelect={(key) => { this.props.sampleClicked(key); }} title="Samples" id="basic-nav-dropdown">
            <MenuItem eventKey={'hello'}>Hello World!</MenuItem>
            <MenuItem eventKey={'adding'}>Adding</MenuItem>
            <MenuItem eventKey={'squares'}>Squares</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>


    )
  }
};

export default TopNav;
