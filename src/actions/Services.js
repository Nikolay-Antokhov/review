import * as types from './../constants/ActionTypesServices';
import axiosDispatch from './../axios/dispatch';

export function servicesGetList() {
  return (dispatch, getState) => {
    const params = { salonId: getState().salon.current };

    dispatch(servicesListLoading());

    return axiosDispatch(dispatch, '/services', params)
      .then(data => dispatch(servicesListFetch(data)));
  };
}

export function servicesCreateItem(params) {
  return (dispatch, getState) => {
    params.salonId = getState().salon.current;

    return axiosDispatch(dispatch, '/services/create', params)
      .then(data => {
        dispatch(servicesGetList());
        return data;
      });
  };
}

export function servicesListFetch(data) {
  return {
    type: types.SERVICES_LIST_FETCH,
    payload: data
  };
}

export function servicesListLoading() {
  return {
    type: types.SERVICES_LIST_LOADING
  };
}

export function servicesCreateModalToggle(params)
{
  return {
    type: types.SERVICES_CREATE_MODAL_TOGGLE,
    payload: params
  };
}
