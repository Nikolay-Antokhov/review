import { connect } from 'react-redux';
import { servicesCreateModalToggle } from './../../actions/Services';
import Services from './../../components/Services';

const mapState = state => state.services;

const mapDispatch = dispatch => ({
  createHandler: () => dispatch(servicesCreateModalToggle({ open: true }))
});

export default connect(mapState, mapDispatch)(Services);
