import { connect } from 'react-redux';
import Select from './../../components/Atoms/Select/Select';
import selectOptions from './../../components/Atoms/Select/servicesOptions';

const mapState = state => ({ options: selectOptions(state.services.data) });

export default connect(mapState)(Select);
