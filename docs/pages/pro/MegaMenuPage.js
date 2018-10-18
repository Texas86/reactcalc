import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  MegaMenu,
  Fa
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";

class MegaMenuPage extends Component {
  state = {
    collapse: false,
    isWideEnough: false
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  render() {
    return (
      <Router>
        <Navbar
          style={{ marginTop: "10rem" }}
          color="special-color-dark"
          dark
          expand="md"
          scrolling
        >
          <NavbarBrand href="#!">
            <strong>Navbar</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.onClick} />
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active mega className="active show">
                <NavLink to="#">Home</NavLink>
                <MegaMenu className="special-color">
                  <div className="row">
                    <div className="col-md-12 col-xl-4 sub-menu mb-xl-0 mb-4">
                      <h6 className="sub-title text-uppercase font-weight-bold white-text">
                        Featured
                      </h6>
                      <a href="#!" className="view overlay z-depth-1 p-0 mb-2">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Work/8-col/img%20(37).jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="mask rgba-white-slight" />
                      </a>
                      <a className="news-title font-weight-bold pl-0" href="#!">
                        Lorem ipsum dolor sit
                      </a>
                      <p className="font-small text-uppercase white-text">
                        <Fa icon="clock-o" />
                        July 17, 2017 /<Fa icon="comments-o" className="px-1" />
                        20
                      </p>
                    </div>
                    <div className="col-md-6 col-xl-4 sub-menu mb-md-0 mb-4">
                      <h6 className="sub-title text-uppercase font-weight-bold white-text">
                        Related
                      </h6>
                      <ul className="list-unstyled">
                        <li>
                          <Link to="/">
                            <Fa icon="caret-right" className="pl-1 pr-3" />
                            Quis nostrud exercitation
                          </Link>
                        </li>
                        <li>
                          <Fa icon="caret-right" className="pl-1 pr-3" />
                          Duis aute irure dolor in
                        </li>
                        <li>
                          <a className="menu-item pl-0" href="#!">
                            <i className="fa fa-caret-right pl-1 pr-3" />
                            Laboris nisi ut aliquip ex ea commodo consequat
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0" href="#!">
                            <i className="fa fa-caret-right pl-1 pr-3" />
                            Reprehenderit in voluptate
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0" href="#!">
                            <i className="fa fa-caret-right pl-1 pr-3" />
                            Esse cillum dolore eu fugiat nulla pariatur
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-4 sub-menu mb-0">
                      <h6 className="sub-title text-uppercase font-weight-bold white-text">
                        Design
                      </h6>
                      <ul className="list-unstyled">
                        <li>
                          <a className="menu-item pl-0" href="#!">
                            <i className="fa fa-caret-right pl-1 pr-3" />
                            Excepteur sint occaecat
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0" href="#!">
                            <i className="fa fa-caret-right pl-1 pr-3" />
                            Sunt in culpa qui officia
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0" href="#!">
                            <i className="fa fa-caret-right pl-1 pr-3" />
                            Sed ut perspiciatis unde omnis iste natus error
                          </a>
                        </li>
                        <li>
                          <Link to="/">
                            <Fa icon="caret-right" className="pl-1 pr-3" />
                            Mollit anim id est laborum
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Fa icon="caret-right" className="pl-1 pr-3" />
                            Quis nostrud exercitation
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </MegaMenu>
              </NavItem>
              <NavItem>
                <NavLink to="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="#!">Action</DropdownItem>
                    <DropdownItem href="#!">Another Action</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <form className="form-inline md-form mt-0">
                  <input
                    className="form-control mr-sm-2 mb-0 text-white"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}

export default MegaMenuPage;
