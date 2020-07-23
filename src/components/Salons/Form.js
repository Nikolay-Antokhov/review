import React from 'react';
import InputText from './../Atoms/InputText';
import validation from './validation';
import PropTypes from 'prop-types';
import useForm from './../../hooks/useForm';

const Form = ({ formId, submitHandler, initialValues }) => {
  const inputHandler = event => setValue(event.target.name, event.target.value);

  const { values, errors, setValue, onSubmit } = useForm({ validation, submitHandler, initialValues })

  return (
    <form className="grey-text" id={formId} onSubmit={onSubmit}>
      <InputText label="Title" name="title" value={values.title} onChange={inputHandler} error={errors.title} />
      <InputText label="Address" name="address" value={values.address} onChange={inputHandler} error={errors.address} />
    </form>
  );
}

Form.defaultProps = {
  formId: 'salon-create-form'
};

Form.propTypes = {
  formId: PropTypes.string,
  submitHandler: PropTypes.func.isRequired
};

export default Form;
