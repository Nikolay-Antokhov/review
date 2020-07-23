import { useState, useEffect } from 'react';

const initialValues = {
  filters: {
    limit: 20,
    page: 1
  },
  data: {
    list: [],
    pagesTotal: 0,
    loading: true
  }
};

const useFilters = props => {
  const [ filters, setFilters ] = useState({ ...initialValues.filters, ...props.initialFilters });

  const [ data, setData ] = useState(initialValues.data);

  const filtersHandler = params => {
    setFilters({ ...filters, ...params });
  };

  const orderHandler = key => {
    const value = filters.orderBy === key ? '-'+ key : key;

    filtersHandler({ orderBy: value });
  }

  const fetchData = () => {
    setData({
      pagesTotal: data.pagesTotal,
      list: [],
      loading: true
    })

    props.fetchData({ ...filters })
      .then(data => setData({
        pagesTotal: data.pagesTotal,
        list: data.list,
        loading: false
      }))
      .catch(error => setData({
        pagesTotal: 0,
        list: [],
        loading: false
      }));
  }

  useEffect(fetchData, Object.values(filters));

  return {
    fetchData,
    orderHandler,
    filtersHandler,
    filters,
    data
  };
}

export default useFilters;
