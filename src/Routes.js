import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Home from './screens/Home';
import Details from './screens/Details';

const Routes = () => (
  <BrowserRouter>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default Routes;
