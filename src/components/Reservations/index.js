import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Pagination from './../Pagination';
import Table from './../Atoms/Table';
import Card from './../Atoms/Card';
import Filters from './Filters';
import Loader from './../Atoms/Loader';
import useFilters from './../../hooks/useFilters';

const initialFilters = {
  orderBy: '-reservationId',
  date: new Date().toISOString().substring(0, 10)
};

const Reservations = ({ reservationsSearch, reservationsCreateModalToggle, history }) => {
  const { data, filters, filtersHandler, orderHandler, fetchData } = useFilters({ initialFilters, fetchData: reservationsSearch });

  const cardActions = [{
    icon: 'plus',
    title: 'Create',
    onClick: () => {
      reservationsCreateModalToggle({
        open: true,
        values: {
          date: filters.date
        },
        onSuccess: () => {
          reservationsCreateModalToggle({ open: false });
          fetchData();
        }
      });
    }
  }];

  return (
    <Card
      title="Reservations"
      actions={cardActions}
      body={(
        <Fragment>
          <Filters values={filters} filtersHandler={filtersHandler} />

          <Table
            head={(
              <tr>
                <th>#</th>
                <th onClick={() => orderHandler('reservationId')} className="th">ID</th>
                <th onClick={() => orderHandler('masterName')} className="th">Master</th>
                <th onClick={() => orderHandler('clientName')} className="th">Client</th>
                <th onClick={() => orderHandler('title')} className="th">Title</th>
                <th onClick={() => orderHandler('time')} className="th">Time</th>
                <th onClick={() => orderHandler('price')} className="th">Price</th>
              </tr>
            )}
            body={data.loading ? (<tr><td colSpan="8"><Loader /></td></tr>) : data.list.map(el => (
              <tr className="pointer" key={el.reservationId} onClick={() => history.push('/reservations/'+ el.reservationId)}>
                <td>{el.rowIndex}</td>
                <td>{el.reservationId}</td>
                <td>{el.masterName}</td>
                <td>{el.clientName}</td>
                <td>{el.title}</td>
                <td>{el.price}</td>
                <td>{el.date}</td>
              </tr>
            ))}
          />

          <Pagination current={filters.page} pagesCount={data.pagesTotal} setPage={page => filtersHandler({ page })} />
        </Fragment>
      )}
    />
  );
};

export default withRouter(Reservations);
