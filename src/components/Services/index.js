import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Loader from './../Atoms/Loader';
import Table from './../Atoms/Table';
import Card from './../Atoms/Card';

const Services = ({ loading, data, createHandler }) => {
  const cardActions = [{
    icon: 'plus',
    title: 'Create',
    onClick: createHandler
  }];

  return (
    <Card
      title="Services"
      actions={cardActions}
      body={loading ? <Loader /> : (
        <Table
          head={(
            <tr>
              <th>#</th>
              <th>Service ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Time</th>
              <th>Blocked</th>
            </tr>
          )}
          body={data.map((el, i) => (
            <tr key={el.serviceId}>
              <td>{i + 1}</td>
              <td>{el.serviceId}</td>
              <td>{el.title}</td>
              <td>{el.price}</td>
              <td>{el.time}</td>
              <td>{el.blocked ? 'Disable' : 'Enable'}</td>
            </tr>
          ))}
        />
      )}
    />
  );
};

Services.propTypes = {
  loading: PropTypes.bool.isRequired,
  createHandler: PropTypes.func.isRequired,
  data: PropTypes.array
};

export default Services;
