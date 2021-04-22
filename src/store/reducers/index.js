import { createStore, combineReducers } from 'redux';
import pizzaReducer from './pizza';

const mainReducer = combineReducers({
  pizzaReducer,
});

const store = createStore(mainReducer);

export default store;
