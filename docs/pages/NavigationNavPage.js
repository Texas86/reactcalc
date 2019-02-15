import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

<<<<<<< HEAD
class ComponentsPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="8" className="mt-3 mx-auto">
            <Jumbotron>
              <h1>
                <Fa icon="bars" className="grey-text mr-2" />
                Navigation
              </h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">FREE </h6>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/navbar"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Navbar
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/breadcrumb"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Breadcrumb
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/footer"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Footer
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
              </ul>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
=======
const NavigationNavPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="bars" className="grey-text mr-2" />
              Navigation
            </h1>
            <ul className="list-unstyled example-components-list">
              <h6 className="mt-3 grey-text">FREE </h6>
              <MenuLink to="/navigation/navbar" title="Navbar" />
              <MenuLink to="/navigation/breadcrumb" title="Breadcrumb" />
              <MenuLink to="/navigation/footer" title="Footer" />
              <MenuLink to="/navigation/navs" title="Navs" />
              {/* PRO-START */}
              <h6 className="mt-3 grey-text">PRO </h6>
              <MenuLink to="/navigation/pro/double" title="Double Navigation" />
              <MenuLink to="/navigation/pro/footer" title="Footer" />
              <MenuLink to="/navigation/pro/hamburger-menu" title="Hamburger Menu" />
              <MenuLink to="/navigation/pro/navs" title="Navs" />
              <MenuLink to="/navigation/pro/scrollspy" title="ScrollSpy" />
              <MenuLink to="/navigation/pro/sidenav" title="SideNav" />
              {/* PRO-END */}
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
>>>>>>> 7a8870cf767f6fcff6c2d8ef34d86c1076727397
}

export default NavigationNavPage;
