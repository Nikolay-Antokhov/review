import * as types from './../constants/ActionTypesMasters';
import axiosDispatch from './../axios/dispatch';

export function mastersGetList() {
  return (dispatch, getState) => {
    const params = { salonId: getState().salon.current };

    dispatch(mastersListLoading());

    return axiosDispatch(dispatch, '/masters', params)
      .then(data => dispatch(mastersListFetch(data)));
  };
}

export function mastersCreateItem(params) {
  return (dispatch, getState) => {
    params.salonId = getState().salon.current;

    return axiosDispatch(dispatch, '/masters/create', params)
      .then(data => {
        dispatch(mastersGetList());
        return data;
      });
  };
}

export function mastersListFetch(data) {
  return {
    type: types.MASTERS_LIST_FETCH,
    payload: data
  };
}

export function mastersListLoading() {
  return {
    type: types.MASTERS_LIST_LOADING
  };
}

export function mastersCreateModalToggle(params)
{
  return {
    type: types.MASTERS_CREATE_MODAL_TOGGLE,
    payload: params
  };
}
