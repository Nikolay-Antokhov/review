import { connect } from 'react-redux';
import { servicesCreateItem, servicesCreateModalToggle } from './../../actions/Services';
import ModalCreateItem from './../../components/Atoms/Modal/ModalCreateItem';
import Form from './../../components/Services/Form';

const mapState = state => ({
  open: state.modals.serviceCreate.open,
  formId: 'service-create-form',
  title: 'Create new Service',
  Form
});

const mapDispatch = dispatch => {
  const closeHandler = () => dispatch(servicesCreateModalToggle({ open: false }));

  const submitHandler = data => dispatch(servicesCreateItem(data))
    .then(data => {
      dispatch(servicesCreateModalToggle({ open: false }));

      return data;
    });

  return { closeHandler, submitHandler };
};

export default connect(mapState, mapDispatch)(ModalCreateItem);
