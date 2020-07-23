import React from 'react';
import { MDBDatePicker } from 'mdbreact';
import InputText from './../Atoms/InputText';
import validation from './validation';
import PropTypes from 'prop-types';
import useForm from './../../hooks/useForm';

const Form = ({ formId, submitHandler }) => {
  const inputHandler = event => setValue(event.target.name, event.target.value);

  const dateHandler = date => setValue('birthdate', date.toISOString().substring(0, 10));

  const { values, errors, setValue, onSubmit } = useForm({ validation, submitHandler })

  return (
    <form className="grey-text" id={formId} onSubmit={onSubmit}>
      <InputText label="Email" name="email" value={values.email} onChange={inputHandler} error={errors.email} />
      <InputText label="Phone" name="phone" value={values.phone} onChange={inputHandler} error={errors.phone} />
      <InputText label="First Name" name="firstName" value={values.firstName} onChange={inputHandler} error={errors.firstName} />
      <InputText label="Last Name" name="lastName" value={values.lastName} onChange={inputHandler} error={errors.lastName} />
      <MDBDatePicker
        autoOk={true}
        disableFuture={true}
        openToYearSelection={true}
        getValue={dateHandler}
        initialFocusedDate="2000-01-01"
        placeholder="Birthdate"
        valueDefault={null}
      />
    </form>
  );
}

Form.defaultProps = {
  formId: 'master-create-form'
};

Form.propTypes = {
  formId: PropTypes.string,
  submitHandler: PropTypes.func.isRequired
};

export default Form;
