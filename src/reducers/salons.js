import * as types from './../constants/ActionTypesSalons';

const initialState = {
  loading: true,
  data: []
};

export default (state = initialState, action) => {

  switch ( action.type ) {

    case types.SALONS_LIST_LOADING:
      return { loading: true, data: [] };

    case types.SALONS_FETCH_LIST:
      return { loading: false, data: action.payload };

    default:
      return state;
  }
};
