import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn } from 'mdbreact';
import PropTypes from 'prop-types';
import Card from './../Atoms/Card';
import Form from './Form';

const Settings = ({ data, salonsUpdateItem }) => {
  const formId = 'salon-update-form';

  const cardActions = [{
    type: 'submit',
    form: formId,
    title: 'Update'
  }];

  return (
    <Card
      title={'Salon '+ data.title}
      actions={cardActions}
      body={(
        <Form
          formId={formId}
          submitHandler={salonsUpdateItem}
          initialValues={data}
        />
      )}
    />
  );
};

Settings.propTypes = {
  data: PropTypes.object.isRequired,
  salonsUpdateItem: PropTypes.func.isRequired
};

export default Settings;
