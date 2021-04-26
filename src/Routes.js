import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Details from './screens/Details';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
