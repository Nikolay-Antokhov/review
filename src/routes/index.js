import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Clients from './../containers/Clients';
import Reservations from './../containers/Reservations';
import Masters from './../containers/Masters';
import Services from './../containers/Services';
import SalonSettings from './../containers/Salons/Settings';

export default () => (
  <Switch>
    <Route exact path="/" component={Reservations} />
    <Route exact path="/clients" component={Clients} />
    <Route exact path="/reservations" component={Reservations} />
    <Route exact path="/masters" component={Masters} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/settings" component={SalonSettings} />
  </Switch>
);
