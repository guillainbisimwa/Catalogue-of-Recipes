import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import filterReducer from './filter';
import burgerReducer from './burger';
import pizzaReducer from './pizza';
import steakReducer from './steak';

const mainReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
  steak: steakReducer,
  filter: filterReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
