import { connect } from 'react-redux';
import Select from './../../components/Atoms/Select/Select';
import selectOptions from './../../components/Atoms/Select/usersOptions';

const mapState = state => ({ options: selectOptions(state.masters.data) });

export default connect(mapState)(Select);
