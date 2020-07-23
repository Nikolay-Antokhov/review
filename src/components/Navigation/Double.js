// Navigation taken from https://mdbootstrap.com/
// it can be rewritten to function component

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavigationTop from './../../containers/Navigation/Top';
import NavigationLeft from './Left';
import './index.scss';

class DoubleNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarLeftOpen: false,
      breakWidth: 1300,
      windowWidth: 0
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth
    });

  navbarLeftToggle = () => {
    this.setState({
      navbarLeftOpen: !this.state.navbarLeftOpen
    });
  };

  render() {
    const mainStyle = {
      margin: '0 2%',
      paddingTop: '5.5rem',
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? '240px' : '0'
    };

    return (
      <BrowserRouter>
        <div className="fixed-sn white-skin">
          <NavigationLeft navbarLeftOpen={this.state.navbarLeftOpen} breakWidth={this.state.breakWidth} />
          <NavigationTop windowWidth={this.state.windowWidth} breakWidth={this.state.breakWidth} navbarLeftToggle={this.navbarLeftToggle} />
          <main style={mainStyle}>
            {this.props.children}
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default DoubleNavigation;
