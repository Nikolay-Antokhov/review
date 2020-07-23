import * as types from './../constants/ActionTypesClients';
import axiosDispatch from './../axios/dispatch';

export function clientsSearch(params) {
  return dispatch => {
    return axiosDispatch(dispatch, '/clients/search', params);
  }
}

export function clientsCreateItem(params) {
  return dispatch => axiosDispatch(dispatch, '/clients/create', params);
}

export function clientsCreateModalToggle(params)
{
  return {
    type: types.CLIENTS_CREATE_MODAL_TOGGLE,
    payload: params
  }
}
