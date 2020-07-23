import { connect } from 'react-redux';
import { salonsUpdateItem } from './../../actions/Salons';
import Settings from './../../components/Salons/Settings';

const mapState = state => state.salon;

export default connect(mapState, { salonsUpdateItem })(Settings);
