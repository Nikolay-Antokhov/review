import * as types from './../constants/ActionTypesReservations';
import axiosDispatch from './../axios/dispatch';

export function reservationsSearch(params = {}) {
  return (dispatch, getState) => {
    params.salonId = getState().salon.current;

    return axiosDispatch(dispatch, '/reservations/search', params);
  }
}

export function reservationsCreateItem(params = {}) {
  return (dispatch, getState) => {
    params.salonId = getState().salon.current;

    return axiosDispatch(dispatch, '/reservations/create', params);
  }
}

export function reservationsCreateModalToggle(params)
{
  return {
    type: types.RESERVATIONS_CREATE_MODAL_TOGGLE,
    payload: params
  };
}
