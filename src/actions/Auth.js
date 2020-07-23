import * as types from './../constants/ActionTypesAuth';
import axiosDispatch from './../axios/dispatch';

export function signIn(params) {
  return dispatch => {
    axiosDispatch(dispatch, '/auth/signIn', params)
      .then(data => dispatch(authSuccess(data.token)))
      .catch(error => dispatch(authError(error)));
  }
}

export function authSuccess(jwt) {
  localStorage.setItem('jwt', jwt);

  return {
    type: types.AUTH_SUCCESS,
    payload: { jwt }
  }
}

export function authError(error) {
  return {
    type: types.AUTH_ERROR,
    payload: { error }
  }
}

export function signOut() {
  localStorage.removeItem('jwt');

  return { type: types.SIGN_OUT };
}
