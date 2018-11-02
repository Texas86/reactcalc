import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem, Container } from "mdbreact";
import DocsLink from "./DocsLink";

const BreadcrumbPage = props => {
  return (
    <Container>
      <DocsLink
        title="Breadcrumb"
        href="https://mdbootstrap.com/react/components/breadcrumb/"
      />
      <div className="container-fluid text-center">

        <MDBBreadcrumb light color="default">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb light color="primary">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem  active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>

         <MDBBreadcrumb light color="secondary">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem>Library</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="cyan lighten-4">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem>Library</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb  color="pink lighten-4">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="purple lighten-4">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem  active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb uppercase color="cyan lighten-4">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem  active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb bold uppercase color="cyan lighten-4">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem  active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb light color="pink lighten-4">
          <MDBBreadcrumbItem icon="star-o">Home</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb light color="pink lighten-3">
          <MDBBreadcrumbItem icon="star-o">Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem icon="star-o" active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb light color="pink lighten-2">
          <MDBBreadcrumbItem icon="star-o">Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem icon="star-o">Library</MDBBreadcrumbItem>
          <MDBBreadcrumbItem icon="star-o" active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="indigo lighten-4">
          <MDBBreadcrumbItem appendIcon icon="caret-right">Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon icon="caret-right">Library</MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="blue-grey lighten-4">
          <MDBBreadcrumbItem appendIcon icon="angle-double-right">Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon icon="angle-double-right">Library</MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="purple lighten-4">
          <MDBBreadcrumbItem appendIcon icon="angle-right">Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon icon="angle-right">Library</MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="red lighten-4">
          <MDBBreadcrumbItem appendIcon icon="angle-double-left">Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon icon="angle-double-left">Library</MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="cyan lighten-4">
          <MDBBreadcrumbItem appendIcon icon="angle-left">Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon icon="angle-left">Library</MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="amber lighten-4">
          <MDBBreadcrumbItem appendIcon icon="caret-left">Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon icon="caret-left">Library</MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </div>
    </Container>
  );
};

export default BreadcrumbPage;
