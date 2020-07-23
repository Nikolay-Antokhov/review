import React from 'react';
import { connect } from 'react-redux';
import { salonsGetItem, loadingItem } from './../../actions/Salons';
import { servicesGetList } from './../../actions/Services';
import { mastersGetList } from './../../actions/Masters';
import SalonWrapper from './../../components/Salons/Wrapper';

const mapState = state => ({
  salonCurrent: state.salon.current,
  salonLoading: state.salon.loading
});

const mapDispatch = {
  salonsGetItem,
  servicesGetList,
  mastersGetList
};

export default connect(mapState, mapDispatch)(SalonWrapper);
