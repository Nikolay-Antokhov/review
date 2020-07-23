import * as types from './../constants/ActionTypesAuth';

const initialState = {
  jwt: localStorage.getItem('jwt'),
  error: ''
};

export default (state = initialState, action) => {

  switch ( action.type ) {

    case types.AUTH_SUCCESS:
      return { jwt: action.payload.jwt, error: '' };

    case types.AUTH_ERROR:
      return { jwt: null, error: action.payload.error };

    case types.SIGN_OUT:
      return { jwt: null, error: '' };

    default:
      return state;
  }
};
