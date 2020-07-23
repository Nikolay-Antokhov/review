import { connect } from 'react-redux';
import { salonsGetList } from './../actions/Salons';
import Content from './../components/Content';

const mapState = state => ({
  salonsLoading: state.salons.loading,
  salonCurrent: state.salon.current
});

export default connect(mapState, { salonsGetList })(Content);
