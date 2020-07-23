import { connect } from 'react-redux';
import { reservationsCreateItem, reservationsCreateModalToggle } from './../../actions/Reservations';
import ModalCreateItem from './../../components/Atoms/Modal/ModalCreateItem';
import Form from './../../components/Reservations/Form';

const mapState = state => ({
  onSuccess: state.modals.reservationCreate.onSuccess,
  values: state.modals.reservationCreate.values,
  open: state.modals.reservationCreate.open,
  formId: 'reservation-create-form',
  title: 'Create new Reservation',
  Form
});

const mapDispatch = dispatch => ({
  closeHandler: () => dispatch(reservationsCreateModalToggle({ open: false })),
  submitHandler: data => dispatch(reservationsCreateItem(data))
});

export default connect(mapState, mapDispatch)(ModalCreateItem);
