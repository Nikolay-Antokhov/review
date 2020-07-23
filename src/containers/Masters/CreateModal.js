import { connect } from 'react-redux';
import { mastersCreateItem, mastersCreateModalToggle } from './../../actions/Masters';
import ModalCreateItem from './../../components/Atoms/Modal/ModalCreateItem';
import Form from './../../components/Masters/Form';

const mapState = state => ({
  open: state.modals.masterCreate.open,
  formId: 'master-create-form',
  title: 'Create new Master',
  Form
});

const mapDispatch = dispatch => {
  const closeHandler = () => dispatch(mastersCreateModalToggle({ open: false }));

  const submitHandler = data => dispatch(mastersCreateItem(data))
    .then(data => {
      dispatch(mastersCreateModalToggle({ open: false }));

      return data;
    });

  return { closeHandler, submitHandler };
};

export default connect(mapState, mapDispatch)(ModalCreateItem);
