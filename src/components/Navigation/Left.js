import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { MDBSideNavNav, MDBSideNav } from 'mdbreact';

class NavbarLeft extends PureComponent
{
  render() {
    return (
      <MDBSideNav
        logo="https://pngimage.net/wp-content/uploads/2018/06/review-png-5-300x200.png"
        triggerOpening={this.props.navbarLeftOpen}
        breakWidth={this.props.breakWidth}
        bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
        mask="strong"
        fixed
      >
        <MDBSideNavNav>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link to="/masters">Masters</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </MDBSideNavNav>
      </MDBSideNav>
    )
  }
}

export default NavbarLeft;
