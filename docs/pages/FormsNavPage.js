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
                <Fa icon="edit" className="grey-text mr-2" />
                Forms
              </h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">FREE </h6>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/forms/forms"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Forms
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/forms/input"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Input
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/forms/validation"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Validation
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
const FormsNavPage = () =>  {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="edit" className="grey-text mr-2" />
              Forms
            </h1>
            <ul className="list-unstyled example-components-list">
              <h6 className="mt-3 grey-text">FREE </h6>
              <MenuLink to="/forms/forms" title="Forms" />
              <MenuLink to="/forms/input" title="Input" />
              <MenuLink to="/forms/validation" title="Validation" />
              {/* PRO-START */}
              <h6 className="mt-3 grey-text">PRO </h6>
              <MenuLink to="/forms/pro/autocomplete" title="Autocomplete" />
              <MenuLink to="/forms/pro/datepicker" title="Date picker" />
              <MenuLink to="/forms/pro/forms" title="Forms" />
              <MenuLink to="/forms/pro/input" title="Input" />
              <MenuLink to="/forms/pro/select" title="Material Select" />
              <MenuLink to="/forms/pro/slider" title="Slider" />
              <MenuLink to="/forms/pro/timepicker" title="Time picker" />
              <MenuLink to="/forms/pro/validation" title="Validation" />
              {/* PRO-END */}
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
>>>>>>> 7a8870cf767f6fcff6c2d8ef34d86c1076727397
}

export default FormsNavPage;
