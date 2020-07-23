import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Pagination from './../Pagination';
import Table from './../Atoms/Table';
import Card from './../Atoms/Card';
import Filters from './Filters';
import Loader from './../Atoms/Loader';
import useFilters from './../../hooks/useFilters';

const initialFilters = {
  orderBy: '-userId',
  email: ''
};

const Clients = props => {
  const { data, filters, filtersHandler, orderHandler, fetchData } = useFilters({ initialFilters, fetchData: props.clientsSearch });

  const cardActions = [{
    icon: 'plus',
    title: 'Create',
    onClick: () => {
      props.clientsCreateModalToggle({
        open: true,
        onSuccess: () => {
          props.clientsCreateModalToggle({ open: false });
          fetchData();
        }
      });
    }
  }];

  return (
    <Card
      title="Clients"
      actions={cardActions}
      body={(
        <Fragment>
          <Filters values={filters} filtersHandler={filtersHandler} />

          <Table
            head={(
              <tr>
                <th>#</th>
                <th onClick={() => orderHandler('userId')} className="th">User ID</th>
                <th onClick={() => orderHandler('email')} className="th">Email</th>
                <th onClick={() => orderHandler('phone')} className="th">Phone</th>
                <th onClick={() => orderHandler('firstName')} className="th">First Name</th>
                <th onClick={() => orderHandler('lastName')} className="th">Last Name</th>
                <th onClick={() => orderHandler('birthdate')} className="th">Birthdate</th>
                <th onClick={() => orderHandler('dateCreated')} className="th">Date Created</th>
              </tr>
            )}
            body={data.loading ? (<tr><td colSpan="8"><Loader /></td></tr>) : data.list.map(el => (
              <tr className="pointer" key={el.userId} onClick={() => props.history.push('/clients/'+ el.userId)}>
                <td>{el.rowIndex}</td>
                <td>{el.userId}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.birthdate}</td>
                <td>{el.dateCreated}</td>
              </tr>
            ))}
          />

          <Pagination current={filters.page} pagesCount={data.pagesTotal} setPage={page => filtersHandler({ page })} />
        </Fragment>
      )}
    />
  );
}

export default withRouter(Clients);
