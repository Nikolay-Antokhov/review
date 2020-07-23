import { connect } from 'react-redux';
import { mastersCreateModalToggle } from './../../actions/Masters';
import Masters from './../../components/Masters';

const mapState = state => state.masters;

const mapDispatch = dispatch => ({
  createHandler: () => dispatch(mastersCreateModalToggle({ open: true }))
});

export default connect(mapState, mapDispatch)(Masters);
