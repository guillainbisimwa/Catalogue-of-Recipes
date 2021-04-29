import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/reducers';
import Routes from './Routes';

ReactDOM.render(
  <Provider store={store}>
   <Routes />
  </Provider>,
  document.getElementById('root'),
);
