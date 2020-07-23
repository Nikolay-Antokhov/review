import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { salonsCreateItem, salonsSelectItem, salonsCreateModalToggle } from './../../actions/Salons';
import ModalCreateItem from './../../components/Atoms/Modal/ModalCreateItem';
import Form from './../../components/Salons/Form';

const mapState = state => ({
  open: state.modals.salonCreate.open || state.salons.length === 0,
  formId: 'salon-create-form',
  title: 'Create new Salon',
  Form
});

const mapDispatch = (dispatch, ownProps) => {
  const closeHandler = () => dispatch(salonsCreateModalToggle({ open: false }));

  const submitHandler = data => dispatch(salonsCreateItem(data))
    .then(data => {
      dispatch(salonsSelectItem(data));
      dispatch(salonsCreateModalToggle({ open: false }));
      ownProps.history.push('/services');
    });

  return { closeHandler, submitHandler };
};

export default withRouter(connect(mapState, mapDispatch)(ModalCreateItem));
