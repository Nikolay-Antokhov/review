import { connect } from 'react-redux';
import { clientsSearch } from './../../actions/Clients';
import SelectSearch from './../../components/Atoms/Select/SelectSearch';

const mapState = () => ({
  label: 'Clients Search',
  className: 'clients-select-search'
});

const mapDispatch = dispatch => ({
  getData: val => dispatch(clientsSearch({ email: val }))
});

export default connect(mapState, mapDispatch)(SelectSearch);
