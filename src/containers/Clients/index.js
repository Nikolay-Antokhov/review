import { connect } from 'react-redux';
import { clientsSearch, clientsCreateModalToggle } from './../../actions/Clients';
import Clients from './../../components/Clients';

export default connect(null, { clientsSearch, clientsCreateModalToggle })(Clients);
