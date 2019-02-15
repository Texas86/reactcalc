import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

<<<<<<< HEAD
class AdvancedPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="8" className="mt-3 mx-auto">
            <Jumbotron>
              <h1>
                <Fa icon="code" className="grey-text" /> Advanced
              </h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">FREE </h6>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/advanced/alerts"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Alerts
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/advanced/carousel"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Carousel
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/advanced/charts"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Charts
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/advanced/collapse"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Collapse
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/advanced/popover"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Popover
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/advanced/tooltips"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Tooltips
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/advanced/videocarousel"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Video Carousel
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
const AdvancedNavPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="code" className="grey-text" /> Advanced
            </h1>
            <ul className="list-unstyled example-components-list">
              <h6 className="mt-3 grey-text">FREE </h6>
              <MenuLink to="/advanced/alerts" title="Alerts" />
              <MenuLink to="/advanced/carousel" title="Carousel" />
              <MenuLink to="/advanced/charts" title="Charts" />
              <MenuLink to="/advanced/collapse" title="Collapse" />
              <MenuLink to="/advanced/popover" title="Popover" />
              <MenuLink to="/advanced/scrollbar" title="ScrollBar" />
              <MenuLink to="/advanced/tooltips" title="Tooltips" />
              <MenuLink to="/advanced/videocarousel" title="Video Carousel" />
              {/* PRO-START */}
              <h6 className="mt-3 grey-text">PRO </h6>
              <MenuLink to="/advanced/pro/collapse" title="Accordion" />
              <MenuLink to="/advanced/pro/charts" title="Charts" />
              <MenuLink to="/advanced/pro/lightbox" title="Lightbox" />
              <MenuLink to="/advanced/pro/multicarousel" title="Multi-item Carousel" />
              <MenuLink to="/advanced/pro/scrollbar" title="ScrollBar" />
              <MenuLink to="/advanced/pro/smoothscroll" title="SmoothScroll" />
              <MenuLink to="/advanced/pro/sticky" title="Sticky Content" />
              <MenuLink to="/advanced/pro/thumbnailscarousel" title="Thumbnails Carousel" />
              {/* PRO-END */}
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
>>>>>>> 7a8870cf767f6fcff6c2d8ef34d86c1076727397
}

export default AdvancedNavPage;
