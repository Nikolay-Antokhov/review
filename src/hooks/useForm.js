import { useState } from 'react';

const useForm = ({ initialValues, validation, submitHandler }) => {
  const [ values, setValues ] = useState(initialValues || {});
  const [ submitting, setSubmitting ] = useState(false);
  const [ errors, setErrors ] = useState({});

  const setValue = (key, value) => {
    delete errors[key];

    setValues({ ...values, [key]: value });
    setErrors(errors);
  }

  const onSubmit = event => {
    event.preventDefault();

    if ( validate() ) {
      setSubmitting(true);
      submitHandler(values);
    }
  }

  const validate = () => {
    let isValid = true;

    if ( validation ) {
      const errors = validation(values);

      if ( Object.keys(errors).length ) {
        setErrors(errors);
        isValid = false;
      }
    }

    return isValid;
  }

  return {
    values,
    setValue,
    errors,
    onSubmit,
    submitting,
    setSubmitting
  };
}

export default useForm;
