import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pizzaReducer from './pizza';

const mainReducer = combineReducers({
  pizza: pizzaReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
