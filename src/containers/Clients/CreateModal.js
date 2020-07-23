import { connect } from 'react-redux';
import { clientsCreateItem, clientsCreateModalToggle } from './../../actions/Clients';
import ModalCreateItem from './../../components/Atoms/Modal/ModalCreateItem';
import Form from './../../components/Clients/Form';

const mapState = state => ({
  onSuccess: state.modals.clientCreate.onSuccess,
  open: state.modals.clientCreate.open,
  formId: 'client-create-form',
  title: 'Create new Client',
  Form
});

const mapDispatch = dispatch => ({
  closeHandler: () => dispatch(clientsCreateModalToggle({ open: false })),
  submitHandler: data => dispatch(clientsCreateItem(data))
});

export default connect(mapState, mapDispatch)(ModalCreateItem);
