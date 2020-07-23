import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import SalonWrapper from './../../containers/Salons/Wrapper';
import { ToastContainer } from 'mdbreact';
import Modals from './../Modals';

const Content = ({ salonCurrent, salonsLoading, salonsGetList }) => {
  useEffect(salonsGetList, []);

  return (
    <Fragment>
      {salonCurrent ? <SalonWrapper /> : null}
      <ToastContainer closeButton={false} />
      <Modals />
    </Fragment>
  );
};

Content.propTypes = {
  salonsGetList: PropTypes.func.isRequired,
  salonsLoading: PropTypes.bool.isRequired,
  salonCurrent: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export default Content;
