import * as servicesTypes from './../constants/ActionTypesServices';
import * as mastersTypes from './../constants/ActionTypesMasters';
import * as clientsTypes from './../constants/ActionTypesClients';
import * as salonsTypes from './../constants/ActionTypesSalons';
import * as reservationsTypes from './../constants/ActionTypesReservations';

const initialState = {
  masterCreate: {
    open: false
  },
  clientCreate: {
    open: false,
    onSuccess: () => {}
  },
  serviceCreate: {
    open: false,
  },
  salonCreate: {
    open: false
  },
  salonSelect: {
    open: false
  },
  reservationCreate: {
    open: false,
    values: {},
    onSuccess: () => {}
  }
};

export default (state = initialState, action) => {

  switch ( action.type ) {

    case servicesTypes.SERVICES_CREATE_MODAL_TOGGLE:
      const serviceCreate = { ...action.payload }
      return { ...state, serviceCreate };

    case mastersTypes.MASTERS_CREATE_MODAL_TOGGLE:
      const masterCreate = { ...action.payload }
      return { ...state, masterCreate };

    case clientsTypes.CLIENTS_CREATE_MODAL_TOGGLE:
      const clientCreate = { ...initialState.clientCreate, ...action.payload };
      return { ...state, clientCreate };

    case salonsTypes.SALONS_CREATE_MODAL_TOGGLE:
      const salonCreate = { ...action.payload }
      return { ...state, salonCreate };

    case reservationsTypes.RESERVATIONS_CREATE_MODAL_TOGGLE:
      const reservationCreate = { ...initialState.reservationCreate, ...action.payload };
      return { ...state, reservationCreate };

    case salonsTypes.SALONS_SELECT_MODAL_TOGGLE:
      const salonSelect = { ...action.payload }
      return { ...state, salonSelect };

    default:
      return state;
  }
};
