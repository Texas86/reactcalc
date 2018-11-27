import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBRow, MDBBadge, MDBContainer } from "mdbreact";
import DocsLink from "./DocsLink";

const ListGroupPage = props => {
  return (
    <MDBContainer>
        <DocsLink title="Jumbotron" href="https://mdbootstrap.com/docs/react/" />

        <MDBRow className="justify-content-center">

          <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>
            <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
            <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
            <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
            <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
            <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
          </MDBListGroup>

          <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>
            <MDBListGroupItem primary>Cras justo odio</MDBListGroupItem>
            <MDBListGroupItem secondary>Dapibus ac facilisis in</MDBListGroupItem>
            <MDBListGroupItem danger>Morbi leo risus</MDBListGroupItem>
            <MDBListGroupItem warning>Porta ac consectetur ac</MDBListGroupItem>
            <MDBListGroupItem info>Vestibulum at eros</MDBListGroupItem>
            <MDBListGroupItem light>Vestibulum at eros</MDBListGroupItem>
            <MDBListGroupItem dark>Vestibulum at eros</MDBListGroupItem>
          </MDBListGroup>

          <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>
            <MDBListGroupItem active href="#">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small>Donec id elit non mi porta.</small>
            </MDBListGroupItem>
            <MDBListGroupItem hover href="#">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small className="text-muted">Donec id elit non mi porta.</small>
            </MDBListGroupItem>
            <MDBListGroupItem hover href="#">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small className="text-muted">Donec id elit non mi porta.</small>
            </MDBListGroupItem>
          </MDBListGroup>

          <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>
            <MDBListGroupItem href="#" active>Cras justo odio</MDBListGroupItem>
            <MDBListGroupItem href="#">Dapibus ac facilisis in</MDBListGroupItem>
            <MDBListGroupItem href="#">Morbi leo risus</MDBListGroupItem>
            <MDBListGroupItem href="#">Porta ac consectetur ac</MDBListGroupItem>
            <MDBListGroupItem href="#">Vestibulum at eros</MDBListGroupItem>
          </MDBListGroup>

          <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>
            <MDBListGroupItem href="#" active>Cras justo odio</MDBListGroupItem>
            <MDBListGroupItem href="#" hover>Dapibus ac facilisis in</MDBListGroupItem>
            <MDBListGroupItem href="#" hover>Morbi leo risus</MDBListGroupItem>
            <MDBListGroupItem href="#" hover>Porta ac consectetur ac</MDBListGroupItem>
            <MDBListGroupItem href="#" disabled>Vestibulum at eros</MDBListGroupItem>
          </MDBListGroup>

          <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">Cras justo odio<MDBBadge color="primary" pill>14</MDBBadge></MDBListGroupItem>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">Dapibus ac facilisis in<MDBBadge color="primary" pill>2</MDBBadge></MDBListGroupItem>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">Morbi leo risus<MDBBadge color="primary" pill>1</MDBBadge></MDBListGroupItem>
          </MDBListGroup>
        </MDBRow>

    </MDBContainer>
  );
};

export default ListGroupPage;



