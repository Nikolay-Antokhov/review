import * as types from './../constants/ActionTypesServices';

const initialState = {
  loading: true,
  data: []
};

export default (state = initialState, action) => {

  switch ( action.type ) {

    case types.SERVICES_LIST_FETCH:
      return { loading: false, data: action.payload };

    case types.SERVICES_LIST_LOADING:
      return { loading: true, data: [] };

    default:
      return state;
  }
};
