import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer } from "mdbreact";
import DocsLink from "../../components/docsLink";

const DropdownPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="Material Dropdowns"
        href="https://mdbootstrap.com/docs/react/components/dropdowns/"
      />
      <div className="container">
      <h2>Material animated example</h2>
        <MDBDropdown>
          <MDBDropdownToggle caret color="primary">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu animated>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="default">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="default" animated>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="secondary">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="secondary" animated>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="success">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="success" animated>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="dark">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="dark" animated>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="danger">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="danger" animated>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="info">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="info" animated>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="warning">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="warning" animated>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="ins">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="ins" animated>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <br />
        <h2>Sizing</h2>
        <MDBDropdown size="lg">
          <MDBDropdownToggle caret>Large Button</MDBDropdownToggle>
          <MDBDropdownMenu animated>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown size="sm">
          <MDBDropdownToggle caret color="primary">
            Small Button
          </MDBDropdownToggle>
          <MDBDropdownMenu animated>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <br />
        <h2>Dropup variation</h2>
        <MDBDropdown dropup>
          <MDBDropdownToggle caret color="primary">
            Dropup
          </MDBDropdownToggle>
          <MDBDropdownMenu animated>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <br />
        <h2>Alignment</h2>
        <MDBDropdown>
          <MDBDropdownToggle caret color="primary">
            This dropdown&apos;s menu is right-aligned
          </MDBDropdownToggle>
          <MDBDropdownMenu animated right>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <br />
        <h2>Menu headers</h2>
        <MDBDropdown>
          <MDBDropdownToggle caret color="primary">
            MDBDropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu animated>
            <MDBDropdownItem header>MDBDropdown header</MDBDropdownItem>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <br />
        <h2>Menu dividers</h2>
        <MDBDropdown>
          <MDBDropdownToggle caret color="primary">
            MDBDropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu animated>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <br />
        <h2>Disabled menu items</h2>
        <MDBDropdown>
          <MDBDropdownToggle caret color="primary">
            MDBDropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu animated>
            <MDBDropdownItem>Regular link</MDBDropdownItem>
            <MDBDropdownItem disabled href="#">
              Disabled link
            </MDBDropdownItem>
            <MDBDropdownItem href="#">Another link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </div>
    </MDBContainer>
  );
}

export default DropdownPage;
