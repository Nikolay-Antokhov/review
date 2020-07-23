import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from 'mdbreact';

class NavbarTop extends PureComponent
{
  goTo = to => () => {
    this.props.history.push(to);
  }

  render() {
    const { salon, salonsSelectModalToggle } = this.props;

    const navStyle = {
      paddingLeft:
        this.props.windowWidth > this.props.breakWidth ? '210px' : '16px'
    };

    const specialCaseNavbarStyles = {
      WebkitBoxOrient: 'horizontal',
      flexDirection: 'row'
    };

    return (
      <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
        <MDBNavbarNav left>
          <MDBNavItem>
            <div
              onClick={this.props.navbarLeftToggle}
              key="sideNavToggleA"
              style={{
                lineHeight: "32px",
                marginRight: "1em",
                verticalAlign: "middle"
              }}
            >
              <MDBIcon icon="bars" color="white" size="2x" />
            </div>
          </MDBNavItem>
          <MDBNavItem className="d-none d-md-inline pointer" style={{ paddingTop: 5 }} onClick={() => salonsSelectModalToggle({ open: true })}>
            {salon.loading ? 'Downloading...' : salon.data.title}
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right style={specialCaseNavbarStyles}>
          <MDBNavItem active>
            <MDBNavLink to="/contacts">
              <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
              <div className="d-none d-md-inline">Contacts</div>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/support">
              <MDBIcon far icon="comments" className="d-inline-inline" />{" "}
              <div className="d-none d-md-inline">Support</div>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/accounts">
              <MDBIcon icon="user" className="d-inline-inline" />{" "}
              <div className="d-none d-md-inline">Accounts</div>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline">Admin</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu right>
                <MDBDropdownItem onClick={this.goTo('/profile')}>Profile</MDBDropdownItem>
                <MDBDropdownItem onClick={this.goTo('/settings')}>Settings</MDBDropdownItem>
                <hr />
                <MDBDropdownItem onClick={this.props.signOut}>SignOut</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}

export default withRouter(NavbarTop);
