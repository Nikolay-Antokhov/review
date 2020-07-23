import { connect } from 'react-redux';
import { salonsSelectItem, salonsSelectModalToggle, salonsCreateModalToggle } from './../../actions/Salons';
import Modal from './../../components/Salons/SelectModal';

const mapState = state => {
  let open = false;

  if ( state.modals.salonSelect.open || 
    ( ! state.salon.current && state.modals.salonCreate.open === false
      && ( state.salons.loading || state.salons.data.length !== 0 )
    )
  ) {
    open = true;
  }

  return {
    salonCurrent: state.salon.current,
    salonsLoading: state.salons.loading,
    salons: state.salons.data,
    open
  };
};

const mapDispatch = dispatch => {
  const selectHandler = salonId => {
    dispatch(salonsSelectItem({ salonId }));
    dispatch(salonsSelectModalToggle({ open: false }));
  };

  const createHandler = () => {
    dispatch(salonsCreateModalToggle({ open: true }));
    dispatch(salonsSelectModalToggle({ open: false }));
  };

  const closeHandler = () => dispatch(salonsSelectModalToggle({ open: false }));

  return { selectHandler, createHandler, closeHandler };
};

export default connect(mapState, mapDispatch)(Modal);
