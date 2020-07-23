import * as types from './../constants/ActionTypesSalons';
import axiosDispatch from './../axios/dispatch';
import { filtersSet as reservationsFilterSet } from './Reservations';
import { filtersSet as clientsFilterSet } from './Clients';

export function salonsGetList() {
  return dispatch => {
    dispatch({ type: types.SALONS_LIST_LOADING });

    axiosDispatch(dispatch, '/salons')
      .then(data => dispatch(salonsFetchList(data)));
  }
}

export function salonsGetItem() {
  return (dispatch, getState) => {
    const params = { salonId: getState().salon.current };

    return axiosDispatch(dispatch, '/salons/getItem', params)
      .then(data => dispatch(salonsFetchItem(data)));
  }
}

export function salonsCreateItem(params) {
  return dispatch => {
    return axiosDispatch(dispatch, '/salons/create', params)
      .then(data => {
        dispatch(salonsGetList());

        return data;
      });
  }
}

export function salonsUpdateItem(params) {
  return dispatch => {
    return axiosDispatch(dispatch, '/salons/update', params)
      .then(data => {
        dispatch(salonsGetItem());
        dispatch(salonsGetList());

        return data;
      });
  }
}

export function salonsSelectItem(params) {
  localStorage.setItem('salonId', params.salonId);

  return {
    type: types.SALONS_ITEM_SELECT,
    payload: {
      salonId: params.salonId
    }
  };
}

export function salonsFetchList(data) {
  return {
    type: types.SALONS_FETCH_LIST,
    payload: data
  };
}

export function salonsFetchItem(data) {
  return {
    type: types.SALONS_FETCH_ITEM,
    payload: data
  };
}

export function salonsLoadingItem() {
  return {
    type: types.SALONS_ITEM_LOADING
  }
}

export function salonsCreateModalToggle(params) {
  return {
    type: types.SALONS_CREATE_MODAL_TOGGLE,
    payload: params
  }
}

export function salonsSelectModalToggle(params) {
  return {
    type: types.SALONS_SELECT_MODAL_TOGGLE,
    payload: params
  }
}
