import * as types from './../constants/ActionTypesSalons';

const initialState = {
  current: Number.parseInt(localStorage.getItem('salonId')),
  loading: true,
  data: {}
};

export default (state = initialState, action) => {

  switch ( action.type ) {

    case types.SALONS_ITEM_LOADING:
      return { ...state, loading: true };

    case types.SALONS_ITEM_SELECT:
      return { ...state, data: {}, current: action.payload.salonId };

    case types.SALONS_FETCH_ITEM:
      return { ...state, loading: false, data: action.payload };

    default:
      return state;
  }
};
