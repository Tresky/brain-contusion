import React from 'react'
import { IndexLink, Link } from 'react-router'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import Logo from './assets/logo.png'

class Navbar extends React.Component {
  constructor() {
    super();
  }

  handleSampleClick(name) {
    this.props.sampleClicked(name);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand" activeClassName="route--active"><span><img className="logo" src={Logo} /></span>BrainCopulate</IndexLink>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="#" className="" activeClassName="route--active" onClick={() => {this.props.sampleClicked('hello')}}>Hello World!</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

Navbar.handleSampleClick = (name) => {
  // this.props.sampleClicked(name);
};

export default Navbar

// <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">Dropdown <span className="caret"></span></a>
// <ul className="dropdown-menu">
//   <li><a href="#">Action</a></li>
//   <li><a href="#">Another action</a></li>
//   <li><a href="#">Something else here</a></li>
//   <li role="separator" className="divider"></li>
//   <li><a href="#">Separated link</a></li>
//   <li role="separator" className="divider"></li>
//   <li><a href="#">One more separated link</a></li>
// </ul>
