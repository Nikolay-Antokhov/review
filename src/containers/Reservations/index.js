import { connect } from 'react-redux';
import { reservationsSearch, reservationsCreateModalToggle } from './../../actions/Reservations';
import Reservations from './../../components/Reservations';

export default connect(null, { reservationsSearch, reservationsCreateModalToggle })(Reservations);
