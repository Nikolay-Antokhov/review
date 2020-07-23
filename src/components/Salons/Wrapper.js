import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Navigation from './../Navigation/Double';
import { MDBContainer } from 'mdbreact';
import Loader from './../Atoms/Loader';
import Routes from './../../routes';

const Wrapper = props => {
  useEffect(() => {
    props.salonsGetItem();
    props.servicesGetList();
    props.mastersGetList();
  }, [ props.salonCurrent ]);

  return (
    <Navigation>
      <MDBContainer fluid className="mt-3 pb-5">
        {props.salonLoading ? <Loader /> : <Routes />}
      </MDBContainer>
    </Navigation>
  );
}

Wrapper.propTypes = {
  salonCurrent: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  salonLoading: PropTypes.bool.isRequired,
  salonsGetItem: PropTypes.func.isRequired
};

export default Wrapper;
