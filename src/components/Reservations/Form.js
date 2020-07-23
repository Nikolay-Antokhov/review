import React from 'react';
import { MDBDatePicker, MDBTimePicker } from 'mdbreact';
import MastersSelect from './../../containers/Masters/Select';
import ServicesSelect from './../../containers/Services/Select';
import ClientsSelectSearch from './../../containers/Clients/SelectSearch';
import InputText from './../Atoms/InputText';
import validation from './validation';
import PropTypes from 'prop-types';
import useForm from './../../hooks/useForm';

const Form = ({ formId, initialValues, submitHandler }) => {
  const inputHandler = event => setValue(event.target.name, event.target.value);

  const dateHandler = date => setValue('date', date.toISOString().substring(0, 10));

  const serviceHandler = key => userId => {
    setValue(key, userId);
    console.log(key, userId)
  }

  const masterHandler = key => userId => {
    setValue(key, userId);
    console.log(key, userId)
  }

  const clientHandler = key => userId => {
    setValue(key, userId);
    console.log(key, userId)
  }

  const timeHandler = time => {
    setValue(time);
    console.log(time)
  }

  const { values, errors, setValue, onSubmit } = useForm({ initialValues, validation, submitHandler })

  return (
    <form className="grey-text" id={formId} onSubmit={onSubmit}>
      <MastersSelect onSelect={masterHandler('masterId')} label="Select Master" search required />
      <ServicesSelect onSelect={serviceHandler('serviceId')} label="Select Service" search required />
      <ClientsSelectSearch onSelect={clientHandler('clientId')} label="Select Client" />
      <InputText name="price" label="Price" value={values.price} onChange={inputHandler} error={errors.price} />
      <InputText
        name="duration"
        label="Duration in minutes"
        value={values.duration}
        onChange={inputHandler}
        error={errors.duration}
      />
      <MDBTimePicker
        id="reservation-time"
        label="Time"
        cancelable
        closeOnCancel
        hoursFormat={24}
        getValue={timeHandler}
      />
      <MDBDatePicker
        autoOk={true}
        disablePast={true}
        getValue={dateHandler}
        placeholder="Date"
        valueDefault={values.date ? new Date(values.date) : null}
      />
    </form>
  );
}

Form.defaultProps = {
  formId: 'reservation-create-form'
};

Form.propTypes = {
  formId: PropTypes.string,
  submitHandler: PropTypes.func.isRequired
};

export default Form;
