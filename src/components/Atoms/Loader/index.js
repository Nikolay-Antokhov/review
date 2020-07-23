import React from 'react';
import { MDBProgress } from 'mdbreact';

export default props => (
  <div className="loader-wrap">
    <MDBProgress className="mt-3" material preloader />
  </div>
);
