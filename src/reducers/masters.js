import * as types from './../constants/ActionTypesMasters';

const initialState = {
  loading: true,
  data: []
};

export default (state = initialState, action) => {

  switch ( action.type ) {

    case types.MASTERS_LIST_FETCH:
      return { loading: false, data: action.payload };

    case types.MASTERS_LIST_LOADING:
      return { loading: true, data: [] };

    default:
      return state;
  }
};
