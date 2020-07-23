import React, { Fragment } from 'react';
import ReservationCreateModal from './../containers/Reservations/CreateModal';
import ServiceCreateModal from './../containers/Services/CreateModal';
import MasterCreateModal from './../containers/Masters/CreateModal';
import ClientCreateModal from './../containers/Clients/CreateModal';
import SalonCreateModal from './../containers/Salons/CreateModal';
import SalonSelectModal from './../containers/Salons/SelectModal';

export default () => (
  <Fragment>
    <ReservationCreateModal />
    <ServiceCreateModal />
    <MasterCreateModal />
    <ClientCreateModal />
    <SalonCreateModal />
    <SalonSelectModal />
  </Fragment>
);
