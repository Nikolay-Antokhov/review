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
      <InputText label="Price" name="price" value={values.price} onChange={inputHandler} error={errors.price} />
      <InputText label="Duration" name="duration" value={values.duration} onChange={inputHandler} error={errors.duration} />
    </form>
  );
}

Form.defaultProps = {
  formId: 'service-create-form'
};

Form.propTypes = {
  formId: PropTypes.string,
  submitHandler: PropTypes.func.isRequired
};

export default Form;
