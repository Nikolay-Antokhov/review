import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Loader from './../Atoms/Loader';
import Table from './../Atoms/Table';
import Card from './../Atoms/Card';

const Masters = ({ data, history, createHandler }) => {
  const cardActions = [{
    icon: 'plus',
    title: 'Create',
    onClick: createHandler
  }];

  return (
    <Card
      title="Masters"
      actions={cardActions}
      body={(
        <Table
          head={(
            <tr>
              <th>#</th>
              <th>User ID</th>
              <th>Email</th>
              <th>Phone</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birthdate</th>
            </tr>
          )}
          body={data.map((el, i) => (
            <tr className="pointer" key={el.userId} onClick={() => history.push('/masters/'+ el.userId)}>
              <td>{i + 1}</td>
              <td>{el.userId}</td>
              <td>{el.email}</td>
              <td>{el.phone}</td>
              <td>{el.firstName}</td>
              <td>{el.lastName}</td>
              <td>{el.birthdate}</td>
            </tr>
          ))}
        />
      )}
    />
  );
};

Masters.propTypes = {
  loading: PropTypes.bool.isRequired,
  createHandler: PropTypes.func.isRequired,
  data: PropTypes.array
};

export default withRouter(Masters);
