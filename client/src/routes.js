import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';
import Landing from './components/Landing';
import CreateEventContainer from './containers/CreateEventContainer';
import VolunteerViewEvents from './containers/VolunteerViewEventsContainer';
import EventContainer from './containers/EventContainer';
import Terms from './components/Terms';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/login" component={LoginContainer} />

    <Route path="/createEvent" component={CreateEventContainer} />
    <Route path="/events" component={VolunteerViewEvents} />
    <Route path="/event/:id" component={EventContainer} />

    <Route path="/terms" component={Terms} />
  </Route>
);

export default routes;
