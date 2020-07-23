import { connect } from 'react-redux';
import { signOut } from './../../actions/Auth';
import { salonsSelectModalToggle } from './../../actions/Salons';
import NavigationTop from './../../components/Navigation/Top';

const mapState = state => ({
  salon: state.salon
});

export default connect(mapState, { signOut, salonsSelectModalToggle })(NavigationTop);
