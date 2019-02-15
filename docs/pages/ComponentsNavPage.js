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
                <Fa icon="cubes" className="grey-text" /> Components
              </h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">FREE </h6>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/components/badge"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Badge
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/components/buttons"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Buttons
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/components/cards"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Cards
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/components/dropdown"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Dropdown
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/components/list-group"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    List group
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/components/media"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Media
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/components/panels"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Panels
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/components/pagination"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Pagination
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/components/progress"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Progress
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/components/search"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Search
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
const ComponentsNavPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="cubes" className="grey-text" /> Components
            </h1>
            <ul className="list-unstyled example-components-list">
              <h6 className="mt-3 grey-text">FREE </h6>
              <MenuLink to="/components/badge" title="Badge" />
              <MenuLink to="/components/buttons" title="Buttons" />
              <MenuLink to="/components/cards" title="Cards" />
              <MenuLink to="/components/dropdown" title="Dropdown" />
              <MenuLink to="/components/list-group" title="List group" />
              <MenuLink to="/components/media" title="Media" />
              <MenuLink to="/components/panels" title="Panels" />
              <MenuLink to="/components/pagination" title="Pagination" />
              <MenuLink to="/components/progress" title="Progress" />
              <MenuLink to="/components/search" title="Search" />
              <MenuLink to="/components/spinner" title="Loader/Spinner" />
              {/* PRO-START */}
              <h6 className="mt-3 grey-text">PRO</h6>
              <MenuLink to="/components/pro/buttons" title="Buttons" />
              <MenuLink to="/components/pro/cards" title="Cards" />
              <MenuLink to="/components/pro/chips" title="Chips" />
              <MenuLink to="/components/pro/dropdown" title="Material Dropdown" />
              <MenuLink to="/components/pro/spinner" title="Loader/Spinner" />
              <MenuLink to="/components/pro/search" title="Search" />
              <MenuLink to="/components/pro/socialbuttons" title="Social Buttons" />
              <MenuLink to="/components/pro/stepper" title="Stepper" />
              <MenuLink to="/components/pro/tabs" title="Tabs" />
              {/* PRO-END */}
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
>>>>>>> 7a8870cf767f6fcff6c2d8ef34d86c1076727397
}

export default ComponentsNavPage;
